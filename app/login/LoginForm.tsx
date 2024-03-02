'use client'

import { useEffect, useState } from "react";
import Input from "../components/inputs/input";
import Heading from "../components/products/Heading";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import Link from "next/link";
import { AiOutlineGoogle } from "react-icons/ai";
import Button from "../components/products/Button";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";
import { safeUser } from "@/types";

interface LoginFormProps {
    currentUser: safeUser | null;
}
const LoginForm:React.FC<LoginFormProps> = ({currentUser}) => {
    const [isLoading, setIsLoading] = useState(false);
    const { register, handleSubmit, formState: { errors } } = useForm<FieldValues>({
        defaultValues: {
            email: '',
            password: '',
        }
    });
    const router = useRouter();

    useEffect(()=> {
        if(currentUser){
            router.push('/cart')
            router.refresh();
            localStorage.setItem('currentUser' , JSON.stringify(currentUser));
        }
    },[])
    const OnSubmit: SubmitHandler<FieldValues> = (data) => {
        setIsLoading(true);
        signIn('credentials', {
            ...data,
            redirect: false
        }).then((callback) => {
            setIsLoading(false)
            if (callback?.ok) {
                router.push('/cart')
                router.refresh()
                toast.success('Logged in');
            }
            if (callback?.error) {
                toast.error(callback?.error);
            }
        })
    };
    
    if(currentUser){
        return <p className="text-center">Logged in, Redirecting...</p>
    }
    return (
        <>
            <Heading title="Sign in to E-shop" />
            <Button
                label="Continue with Google"
                icon={<AiOutlineGoogle />}
                onClick={() =>{signIn('google')}}
            />
            <hr className="bg-slate-300 w-full h-px" />
            <Input
                id="email"
                label="Email"
                disabled={isLoading}
                register={register}
                errors={errors}
                required
            />
            <Input
                id="password"
                label="Password"
                disabled={isLoading}
                register={register}
                errors={errors}
                required
                type="password"
            />
            <button className="bg-slate-500 hover:bg-slate-700 text-white font-bold py-2 px-4 rounded" onClick={handleSubmit(OnSubmit)}> {isLoading ? 'Loading' : 'Log In'} </button>
            <p className="text-sm">
                Dont have an account? <Link className="underline" href='/register'>Sign Up</Link>
            </p>
        </>
    );
}

export default LoginForm;