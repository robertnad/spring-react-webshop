import React, { useEffect, useState } from 'react';
import { Carousel } from 'antd';

const HomePage = () => {

    const [products, setProducts] = useState([]);

    const getProducts = () => {
        fetch("http://localhost:8080/products/findAll")
            .then(response => response.json())
            .then(data => {
                console.log(data);
                setProducts(data);                
            })
    }

    useEffect(() => {
        getProducts();
    }, []);
    
    // console.log('hi ',products);
    // console.log(JSON.stringify(products));

    return (
        <div>
            
            <h3 style={{color: 'white', background: '#000'}}>
                Product info: <br /> {JSON.stringify(products)}
            </h3>

            <h3 style={{color: 'white', background: '#db79ed'}}>
                Product names: 
                {products.map(product => {
                    return <li key={product.id}>{product.name} - {product.price}</li>
                })}
            </h3>

            <Carousel autoplay style={{textAlign: 'center', height: '600px', lineHeight: '600px', overflow: 'hidden'}}>
                <div>
                <h3 style={{color: 'white', background: '#8bbdd9'}}>Products array length: {products.length}</h3>
                </div>
                <div>
                <h3 style={{color: 'white', background: '#8bbaaa'}}>Product name </h3>
                </div>
                <div>
                <h3 style={{color: 'white', background: '#e2844b'}}>Products: </h3>
                </div>
            </Carousel>
        </div>
    );
}

export default HomePage;