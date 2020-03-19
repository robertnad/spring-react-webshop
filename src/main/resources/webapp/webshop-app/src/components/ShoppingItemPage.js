import React from 'react';

const ShoppingItemPage = (props) => {
    return (
        <div>
            <p>The item you are looking at is {props.match.params.id}</p>
        </div>
    );
};

export default ShoppingItemPage;