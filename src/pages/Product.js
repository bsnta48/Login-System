import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { Container, ProductSkeleton } from '../components'

const Product = () => {

    const params = useParams();
    const [product, setProduct] = useState({});
    const [isFetching, setIsFetching] = useState(true);

    const PRODUCT_URL = params.productId;

    const gettingProduct = async () => {
        const res = await axios({
            method: 'get',
            url: `https://fakestoreapi.com/products/${PRODUCT_URL}`
        })
        setProduct(res?.data)
        setIsFetching(false)
    }

    useEffect(() => {
        gettingProduct()
    }, [])

    const { id, title, price, rating, image, description, category } = product;

    return (
        <Container>
            <div className='grid grid-cols-1 gap-8 md:grid-cols-2'>
                {
                    isFetching && <ProductSkeleton /> || <>
                        <div className='w-full h-full left-0 top-0 p-8 overflow-hidden border rounded'>
                            <img src={image} className="w-full" />
                        </div>
                        <div className='space-y-4'>
                            <h1 className='text-4xl'>{title}</h1>
                            <strong className='inline-block'>${price}</strong>
                            <p>{description}</p>
                        </div>
                    </>
                }
            </div>
        </Container>
    )
}

export default Product