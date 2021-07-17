import React, {useState, useEffect} from 'react'
import Product from '../components/Product'
import axios from 'axios';
import {Row, Col} from 'react-bootstrap';
function HomeScreen() {
    const [products, setProducts] = useState([]); 

    useEffect(() => {
        const fetchProducts = async () => {
            const {data} = await axios.get('/api/products')
            setProducts(data);
        }
        fetchProducts();
    }, [])

    return (
        <>
            <h1>Latest Product</h1>
            <Row>
                {products.map(product => (
                    <Col key={product._id} sm={12} md={6} lg={4}>
                        <Product product = {product}/>
                    </Col>
                ))}
            </Row>
        </>
    )
}

export default HomeScreen
