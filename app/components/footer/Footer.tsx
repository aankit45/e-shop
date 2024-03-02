import Link from "next/link";
import Container from "../container";
import FooterList from "./FooterList";
import {MdFacebook} from 'react-icons/md';
import {AiFillTwitterCircle , AiFillInstagram, AiFillYoutube} from 'react-icons/ai';


const Footer = () => {
    return <footer className="bg-slate-700 text-slate-200 text-sm mt-16">
        <Container>
            <div className="flex flex-col md:flex-row justify-between pt-16 pb-8">
                <FooterList>
                    <h3 className="text-base font-bold mb-2">Shop Categories</h3>
                    <Link href="#">Phones</Link>
                    <Link href="#">Laptops</Link>
                    <Link href="#">Desktops</Link>
                    <Link href="#">Watches</Link>
                    <Link href="#">TVs</Link>
                    <Link href="#">Accessories</Link>
                </FooterList>
                <FooterList>
                    <h3 className="text-base font-bold mb-2">Customer Service</h3>
                    <Link href="#">Contact us</Link>
                    <Link href="#">Shipping Policy</Link>
                    <Link href="#">Returns & Exchanges</Link>
                    <Link href="#">Watches</Link>
                    <Link href="#">FAQs</Link>
                </FooterList>
                <div className="w-full md:w-1/3 mb-6 md:mb-2">
                    <h3 className="text-base font-bold mb-2">About Us</h3>
                    <p>Lorem Ipsum is simply dummy text of the printing 
                        and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever 
                        since the 1500s, when an unknown printer took a galley of type and scrambled it 
                        to make a type specimen book. It has survived not only five centuries.</p>
                    <p>&copy; {new Date().getFullYear()} E~Shop. All rights reserved</p>
                </div>
                <FooterList>
                <h3 className="text-base font-bold mb-2">Follow Us</h3>
                <div className="flex gap-2">
                    <Link href="#">
                        <MdFacebook size={24}></MdFacebook>
                    </Link>
                    <Link href="#">
                        <AiFillTwitterCircle size={24}></AiFillTwitterCircle>
                    </Link>
                    <Link href="#">
                        <AiFillInstagram size={24}></AiFillInstagram>
                    </Link>
                    <Link href="#">
                        <AiFillYoutube size={24}></AiFillYoutube>
                    </Link>
                </div>
                </FooterList>
            </div>
        </Container>
    </footer>
}

export default Footer;