'use client';

import SetColor from "@/app/components/products/SetColor";
import SetQuantity from "@/app/components/products/SetQuantity";
import { Rating } from "@mui/material";
import { useCallback, useEffect, useState } from "react";
import ProductImage from "../ProductImage";
import { useCart } from "@/hooks/useCart";
import { MdCheckCircle } from "react-icons/md";
import { useRouter } from "next/navigation";

interface ProductDetailsProps {
    product: any
}
export type CartProductType = {
    id: string,
    name: string,
    description: string,
    category: string,
    brand: string,
    selectedImg: selectedImgType,
    quantity: number,
    price: number
}

export type selectedImgType = {
    color: string,
    colorCode: string,
    image: string,
}
const Horizontal = () => {
    return <hr className="w-[30%] my-2" />
};
const ProductDetails: React.FC<ProductDetailsProps> = ({ product }) => {
    const { handleAddProductCart, cartProducts } = useCart();
    const [isProductInCart, setProductInCart] = useState(false);
    const [cartProduct, setCartProduct] =
        useState<CartProductType>({
            id: product.id,
            name: product.name,
            description: product.description,
            category: product.category,
            brand: product.brand,
            selectedImg: { ...product.images[0] },
            quantity: 1,
            price: product.price
        });
    const router = useRouter();
    console.log(cartProducts);

    useEffect(() => {
        setProductInCart(false)
        if (cartProducts) {
            const existingIndex = cartProducts.findIndex((item) => item.id === product.id)
            if (existingIndex > -1) {
                setProductInCart(true);
            }
        }
    }, [cartProducts])

    const productRating = product.reviews.reduce((acc: number, item: any) =>
        item.rating + acc, 0) / product.reviews.length

    const handleColorSelect = useCallback((value: selectedImgType) => {
        setCartProduct((prev) => {
            return { ...prev, selectedImg: value }
        })
    }, [cartProduct.selectedImg])

    const handleQtyIncrease = useCallback(() => {
        if (cartProduct.quantity > 99) {
            return;
        }
        setCartProduct((prev) => {
            return { ...prev, quantity: prev.quantity + 1 }
        })
    }, [cartProduct])

    const handleQtyDecrease = useCallback(() => {
        if (cartProduct.quantity === 1) {
            return;
        }
        setCartProduct((prev) => {
            return { ...prev, quantity: prev.quantity - 1 }
        })
    }, [cartProduct])
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <ProductImage cartProduct={cartProduct} product={product} handleColorSelect={handleColorSelect} />
            <div className="flex flex-col gap-1 text-slate-500 text-sm">
                <h2 className="text-3xl font-medium text-slate-700">{product.name}</h2>
                <div className="flex items-center gap-2">
                    <Rating value={productRating} readOnly />
                    <div>{product.reviews.length} reviews</div>
                </div>
                <Horizontal />
                <div className="text-justify">
                    {product.description}
                </div>
                <Horizontal />
                <div>
                    <span className="font-semibold">CATEGORY:</span> {product.category}
                </div>
                <div>
                    <span className="font-semibold">BRAND:</span> {product.brand}
                </div>
                <div className={product.inStock ? "text-teal-400" : "text-rose-400"}>{product.inStock ? 'In Stock' : 'Out of Stock'}</div>
                <Horizontal />
                {isProductInCart ? 
                    <>
                        <p className="mb-2 text-slate-500 flex items-center gap-1">
                            <MdCheckCircle size={20} className="text-teal-400" />
                            <span>Product Added to Cart</span>
                        </p>
                        <div className="max-w-[300px">
                        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" onClick={() => { router.push('/cart') }}> View Cart </button>
                        </div>
                    </>
                    : <>
                        <SetColor
                            cartProduct={cartProduct}
                            images={product.images}
                            handleColorSelect={handleColorSelect}
                        />

                        <Horizontal />
                        <SetQuantity
                            cartProduct={cartProduct}
                            handleQtyIncrease={handleQtyIncrease}
                            handleQtyDecrease={handleQtyDecrease}
                        />
                        <Horizontal />
                        <div className="max-w-[300px]">
                            <button className="bg-slate-500 hover:bg-slate-700 text-white font-bold py-2 px-4 rounded" onClick={() => { handleAddProductCart(cartProduct) }}> Add To Cart </button>
                        </div>
                    </>
                }
            </div>
        </div>
    );
};

export default ProductDetails;