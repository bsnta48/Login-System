import axios from "axios"
import React, { useEffect, useState } from 'react';
import { Link } from "react-router-dom";
import { Container, ProductListSkeleton } from "../components";

const PRODUCTS_URL = "/products";

const Home = () => {

    const [products, setProducts] = useState([]);
    const [isFetching, setIsFetching] = useState(true);

    const gettingProducts = async () => {
        const response = await axios({
            method: 'get',
            url: `https://fakestoreapi.com${PRODUCTS_URL}`
        })
        setProducts(response?.data)
        setIsFetching(false)
    }

    useEffect(() => {
        gettingProducts()
    }, [])

    return (
        <Container>
            <h2 className="text-3xl mb-4">Products</h2>
            <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-3">
                {
                    isFetching && <ProductListSkeleton count={6} /> || products?.map(({ id, title, price, rating, image, description, category }) => {
                        return <div key={id} className="space-y-4">
                            <figure className="relative pt-[100%]">
                                <Link to={`/product/${id}`} className="group flex items-center justify-center absolute w-full h-full left-0 top-0 p-8 overflow-hidden border rounded">
                                    <img loading="lazy" src={image} className="max-w-full max-h-full transition duration-500 ease-in-out group-hover:scale-125" alt={title} />
                                </Link>
                            </figure>
                            <h3 className=" text-2xl font-semibold"><Link to={`/product/${id}`}>{title}</Link></h3>
                            <strong className=" inline-block">${price}</strong>
                        </div>
                    })
                }
            </div>
        </Container>
    )
}

export default Home