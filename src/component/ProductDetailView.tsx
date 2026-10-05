import { Link, useParams, useSearchParams } from "react-router"

const productList = [
    { id: 0, name: "t-shirt", price: 100, discription: "This is the best T shirt" },
    { id: 1, name: "shirt", price: 1000, discription: "This is the best shirt" }
]

export const ProductListView = () => {

    const [searchParams, setSearchParams] = useSearchParams()

    return (
        <>
            <ul>
                {
                    productList.map((element) =>
                        <Link to={`/product-detail-view/${element.id}`}>
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

export const ProductDetail = () => {
    const { id } = useParams()
    const product = productList.find((element) => element.id === Number(id))
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