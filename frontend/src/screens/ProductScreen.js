import React, {useState, useEffect} from 'react'
import {Link} from 'react-router-dom';
import {Row, Col, Image, ListGroup, Card, Button} from 'react-bootstrap'
import Rating from '../components/Rating';
import axios from 'axios';

function ProductScreen({match}) {
    const [product, setProduct] = useState({});
    useEffect(() => {
        const fetchProduct = async () => {
            const {data} = await axios.get(`/api/products/${match.params.id}`)
            setProduct(data);
        }
        fetchProduct();
    }, [])
    return (
        <>
            <Link to ='/' className='btn btn-light my-3'>Go back</Link>
            <Row>
                <Col md={6}>
                    <Image src={product.image} alt={product.name} fluid/>
                </Col>
                <Col md={3}>
                    <ListGroup>
                        <ListGroup.Item>
                            <h3>{product.name}</h3>
                        </ListGroup.Item>
                        <ListGroup.Item>
                            <Rating value={product.rating} text={`${product.numReviews} reviews`}/>
                        </ListGroup.Item>
                        <ListGroup.Item>
                            <h3>${product.price}</h3>
                        </ListGroup.Item>
                        <ListGroup.Item>
                            Description {product.description}
                        </ListGroup.Item>
                    </ListGroup>
                </Col>
                <Col md={3}>
                    <Card>
                        <ListGroup>
                        <ListGroup.Item>
                            <Row>
                                <Col>
                                    Status:
                                </Col>
                                <Col>
                                {product.countInStock > 0 ? `In stock` : 'Out of stock'}
                                </Col>
                            </Row>
                        </ListGroup.Item>
                        <ListGroup.Item>
                            <Button className='btn-block' type='button' disabled={product.countInStock <= 0}>
                                add to cart
                            </Button>
                        </ListGroup.Item>
                        </ListGroup>
                    </Card>
                </Col>
            </Row>
        </>
    )
}

export default ProductScreen
