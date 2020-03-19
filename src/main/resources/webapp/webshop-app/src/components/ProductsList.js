import React, { useContext } from 'react';
import Product from './Product';
import ProductsContext from '../context/products-context';

const ProductsList = () => {

    const { products, filters, selectProducts } = useContext(ProductsContext);

    const productsFiltered = selectProducts(products, filters);

    return (
        <div>
        {products.length === 0 ? (
            <h2 style={{display:'flex', justifyContent:'center', padding:'10px'}}>
                No products found
            </h2>
        ) : (
            productsFiltered.map((product) => (
                <Product key={product.id} product={product} />
            ))
        )}
        </div>
    )
}

export default ProductsList;

// {products.length === 0 ? (
//     <p>No products</p>
// ) : (
//     productsFiltered.map((product) => (
//         <Product key={product.id} product={product} />
//     ))
// )}


// {
//     products.map((product) => (
//     <Product key={product.id} product={product} />
//     ))
// }