import { Link } from "react-router"

const productList = [
    { id: 0, name: "t-shirt", price: 100, discription: "This is the best T shirt" },
    { id: 1, name: "shirt", price: 1000, discription: "This is the best shirt" }
]

export const ProductListView = () => {

    return (
        <>
            <ul>
                {
                    productList.map((element) =>
                        <Link to="/product-detail-view" onClick={() => <ProductDetail id={element.id} />}>
                            <li>
                                <p> {element.name}</p>
                            </li>
                        </Link>
                    )
                }
            </ul>
        </>
    )
}

export const ProductDetail = (props: { id: number }) => {
    const product = productList.find((element) => element.id === props.id)

    if (!product) {
        return <div>Product not found</div>
    }

    return (
        <div>
            <p>{product.name}</p>
            <p>{product.discription}</p>
            <p>{product.price}</p>
        </div>
    )
}