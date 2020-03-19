import React, { useContext, useState } from 'react';
import ProductsContext from '../../context/products-context';
import { Input } from 'antd';

const { Search } = Input;

const SearchProduct = () => {
    
    const { dispatchFilters } = useContext(ProductsContext);

    const [searchText, setSearchText] = useState('');

    const searchProduct = () => {
        // e.preventDefault();
        // let text = setSearchText(e.target.value);
        dispatchFilters({
            type: 'SEARCH_PRODUCT',
            searchText
        });
        
        console.log(searchText);
        // setSearchText('');
    }

    return (
        <div>
            <Search
                style={{ width: 500, height: '48px', margin:'5px' }}
                type="text"
                value={searchText}
                placeholder="Search products"
                onSearch={searchProduct}
                onChange={(e) => setSearchText(e.target.value)}
            />
        </div>
    );
}

export default SearchProduct;