import React, { useContext } from 'react';
import ProductsContext from '../context/products-context';
import { Modal, Button } from 'antd';

const { confirm } = Modal;

const ProductDeleteForm = ({product}) => {

    const { dispatchProducts } = useContext(ProductsContext);

    const deleteProduct = () => {
        fetch(`http://localhost:8080/products/${product.id}`, {method: 'DELETE'})
            .then(response => response.json())
            .then(response => {
                console.log('Deleted: ', response.message);
                console.log(`http://localhost:8080/products/${product.id}`);                
                return response;
            })
    }

    const confirmDelete = () => {
        confirm({
            title: 'Do you want to delete this item?',
            onOk() {
                deleteProduct();

                dispatchProducts({ type:'REMOVE_PRODUCT', id: product.id });
                console.log(`${product.name} deleted!`)
            },
            onCancel() {}
        });
    }

    return (
        <div>
            <Button onClick={confirmDelete}>Remove (admin)</Button>
        </div>
    );
}

export default ProductDeleteForm;