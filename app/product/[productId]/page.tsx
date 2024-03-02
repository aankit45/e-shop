import Container from "@/app/components/container";
import ProductDetails from "./productDetails";
import ListRating from "./ListRating";
import { products } from "@/utils/products";

interface IParams {
    productId?: string;
}
const product = ({ params }: { params: IParams }) => {
    const product = products.find((item) =>
        item.id === params.productId
    );
    console.log('params', params);
    return (
        <div className="p-8">
            <Container>
                <ProductDetails product={product} />
                <div className="flex flex-col mt-20 gap-4">
                    <div>Add Rating</div>
                    <ListRating product={product} />
                </div>
            </Container>
        </div>
    );
};

export default product;