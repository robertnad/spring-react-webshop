import React, { useState, useContext } from 'react';
import ProductsContext from '../context/products-context';
import uuid from 'uuid';
import moment from 'moment';
import { Modal, Button, Input } from 'antd';

const { TextArea } = Input;


const ProductAddForm = () => {

    const { dispatchProducts } = useContext(ProductsContext);

    const [name, setName] = useState('');
    const [price, setPrice] = useState();
    const [discount, setDiscount] = useState(0);
    const [manufacturer, setManufacturer] = useState('');
    const [description, setDescription] = useState('');

    // const [id, setId] = useState();
    // const [dateAdded, setDateAdded] = useState();

    const [showModal, setShowModal] = useState(false);
    
    const handleClose = () => {
        setShowModal(false);
    }
    
    const postOptions = {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json;charset=UTF-8'
        },
        body: JSON.stringify ({ name, price, discount, manufacturer, description })
    }

    const postProduct = () => {
        fetch('http://localhost:8080/products', postOptions)
            .then(response => {
                console.log(`${response.status} SUCCESS`);
            });
    }

    const addProduct = (e) => {
        e.preventDefault();

        let prodId = uuid();
        let prodDate = moment().format('HH:mm DD.MM.YYYY.')

        dispatchProducts({
            type: 'ADD_PRODUCT',
            id: prodId,
            name,
            price,
            discount,
            manufacturer,
            description,
            dateAdded: prodDate
        });

        postProduct();

        setName('');
        setPrice();
        setDiscount(0);
        setManufacturer('');
        setDescription('');

        // setId('');
        // setDateAdded('');

        setShowModal(false);
    }

    const priceHandler = (e) => {
        const price = e.target.value;
        if (price.match(/^\d{1,}(\.\d{0,2})?$/)) {
            setPrice(price);
        }
    }

    

    return (
        <div>
            <Button 
                style={{ marginLeft: '50px' }}
                onClick={() => setShowModal(true)}>
                    Add product (admin)
                </Button>
            <Modal
                title="Add a product" 
                visible={showModal}
                onCancel={handleClose}
                footer={[
                    <Button key="submit" type="primary" onClick={addProduct}>
                        Save product
                    </Button>
                  ]}
            >
                <form onSubmit={addProduct}>
                    <Input
                        autoFocus
                        value={name}
                        style={{ paddingTop: '10px' }}
                        placeholder="name"
                        allowClear
                        onChange={(e) => setName(e.target.value)} />
                    <Input
                        value={price}
                        style={{ paddingTop: '10px' }}
                        placeholder="price (EUR)"
                        allowClear
                        onChange={priceHandler} />
                    <Input
                        value={discount}
                        style={{ paddingTop: '10px' }}
                        placeholder="add discount"
                        allowClear
                        type="number"
                        onChange={(e) => setDiscount(e.target.value)} />
                    <Input
                        value={manufacturer}
                        style={{ paddingTop: '10px' }}
                        placeholder="manufacturer"
                        allowClear
                        onChange={(e) => setManufacturer(e.target.value)} />
                    <TextArea
                        value={description}
                        style={{ paddingTop: '10px' }}
                        placeholder="description"
                        allowClear
                        onChange={(e) => setDescription(e.target.value)} >
                    </TextArea>
                </form>

            </Modal>
        </div>
    );
}

export default ProductAddForm;