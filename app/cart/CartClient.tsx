'use client';

import { useCart } from "@/hooks/useCart";
import Link from "next/link";
import { MdArrowBack } from "react-icons/md";
import Heading from "../components/products/Heading";
import ItemContent from "./ItemContent";
import { formatPrice } from "@/utils/formatPrice";

const CartClient = () => {
    const { cartProducts, handleClearCart, cartTotalAmount } = useCart();
    if (!cartProducts || cartProducts.length === 0) {
        return (
            <div>
                <div className="text-2xl">Your cart is empty</div>
                <div>
                    <Link href={'/'} className="text-slate-500 flex items-center gap-1 mt-2">
                        <MdArrowBack />
                        <span>Start Shopping</span>
                    </Link>
                </div>
            </div>
        );
    }
    return (
        <div>
            <Heading title="Shopping Cart" center />
            <div className="grid grid-cols-5 text-xs gap-4 pb-2 items-center mt-8">
                <div className="col-span-2 justify-self-start">PRODUCT</div>
                <div className="justify-self-center">PRICE</div>
                <div className="justify-self-center">QUANTITY</div>
                <div className="justify-self-end">TOTAL</div>
            </div>
            <div>
                {cartProducts && cartProducts.map((item) => {
                    return <ItemContent key={item.id} item={item} />
                })}
            </div>
            <div className="border-t[1.5px] border-slate-200 py-4 flex justify-between gap-4">
                <div className="max-w-[300px]">
                    <button onClick={() => { handleClearCart(); }} className="bg-white-800 border hover:bg-slate-400 text-black font-bold py-1 px-3 rounded mt-2">Clear Cart</button>
                </div>
                <div className="text-sm flex flex-col gap-1 items-start">
                    <div className="flex justify-between w-full text-base font-semibold">
                        <span>Subtotal</span>
                        <span>{formatPrice(cartTotalAmount)}</span>
                    </div>
                    <p className="text-slate-500">Taxes and shipping calculated at checkout</p>
                    <button type="button" onClick={() => { }} className="text-white bg-[#24292F] hover:bg-[#24292F]/90 focus:ring-2 focus:outline-none focus:ring-[#24292F]/50 font-medium 
                    rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center
                     dark:focus:ring-gray-500 dark:hover:bg-[#050708]/30 me-2 mb-1 mt-2">Checkout</button>
                    <Link href={'/'} className="text-slate-500 flex items-center gap-1 mt-2">
                        <MdArrowBack />
                        <span>Continue Shopping</span>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default CartClient;