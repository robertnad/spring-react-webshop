import React, { useState, useContext } from 'react';
import ProductsContext from '../context/products-context';
import { Modal, Button, Input } from 'antd';

const { TextArea } = Input;

const ProductEditForm = ({product}) => {

    const { dispatchProducts } = useContext(ProductsContext);

    const [name, setName] = useState(product.name);
    const [price, setPrice] = useState(product.price);
    const [discount, setDiscount] = useState(product.discount);
    const [manufacturer, setManufacturer] = useState(product.manufacturer);
    const [description, setDescription] = useState(product.description);

    const [showModal, setShowModal] = useState(false);

    const handleClose = () => {
        setShowModal(false);
    }

    // const saveChanges = () => { setShowModal(false); }

    const editProduct = (e) => {
        e.preventDefault();
        dispatchProducts({
            type: 'EDIT_PRODUCT',
            id: product.id,
            name,
            price,
            discount,
            manufacturer,
            description
        });

        setName(name);
        setPrice(price);
        setDiscount(discount);
        setManufacturer(manufacturer);
        setDescription(description);

        setShowModal(false);
    }

    return (
        <div>
            <Button style={{width:'130px'}} onClick={() => setShowModal(true)}>Edit (admin)</Button>
            <Modal
                title="Edit product" 
                visible={showModal}
                // onOk={saveChanges}
                onCancel={handleClose}
                footer={[
                    <Button key="submit" type="primary" onClick={editProduct}>
                        Save changes
                    </Button>
                  ]}
                >
                <Input
                    value={name}
                    placeholder="Name"
                    onChange={(e) => setName(e.target.value)}
                    allowClear
                />
                <Input
                    value={price}
                    style={{ paddingTop: '10px' }}
                    placeholder="Price"
                    onChange={(e) => {
                        const price = e.target.value;
                        if (price.match(/^\d{1,}(\.\d{0,2})?$/)) {
                            setPrice(price)
                        }
                    }}
                    allowClear
                />
                <Input
                    value={discount}
                    style={{ paddingTop: '10px' }}
                    placeholder="Add discount"
                    onChange={(e) => setDiscount(e.target.value)}
                    allowClear
                />
                <Input
                    value={manufacturer}
                    style={{ paddingTop: '10px' }}
                    placeholder="Manufacturer"
                    onChange={(e) => setManufacturer(e.target.value)}
                    allowClear
                />
                <TextArea
                    value={description}
                    style={{ paddingTop: '10px' }}
                    placeholder="Description"
                    onChange={(e) => setDescription(e.target.value)}
                    allowClear>
                </TextArea>
            </Modal>
        </div>
    )
}

export default ProductEditForm;