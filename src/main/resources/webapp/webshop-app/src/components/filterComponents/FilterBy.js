import React, { useState, useContext } from 'react';
// import { filtersReducer } from '../../reducers/filtersReducer';
import ProductsContext from '../../context/products-context';
import { Radio } from 'antd';

const FilterBy = () => {

    // const [filters, dispatchFilters] = useReducer(filtersReducer, []);
    const { dispatchFilters } = useContext(ProductsContext);
    // CONTEXT ^
    
    const [value, setValue] = useState();

    // const onChange = (e) => {
    //     console.log(`${e.target.value}`);
    //     setValue(e.target.value);
    // }

    const onChange = (e) => {
        setValue(e.target.value);
        if (e.target.value === 'priceAscending') {
            dispatchFilters({
                type: 'FILTER_BY_PRICE_ASCENDING'
            });            
        } else if (e.target.value === 'priceDescending') {
            dispatchFilters({
                type: 'FILTER_BY_PRICE_DESCENDING'
            });
        } else if (e.target.value === 'newest') {
            dispatchFilters({
                type: 'FILTER_BY_DATE'
            });
        } else if (e.target.value === 'discount') {
            dispatchFilters({
                type: 'FILTER_BY_DISCOUNT'
            });
        }
        console.log(`${e.target.value}`);
        // setValue(e.target.value);
    }

    const radioStyle = {
        display: 'block',
        height: '30px',
        lineHeight: '20px',
      };

    return(
        <div>
            <p>Filter by:</p>
            <Radio.Group onChange={onChange} value={value}>
                <Radio style={radioStyle} value={'newest'} >
                    Newest
                </Radio>
                <Radio style={radioStyle} value={'priceAscending'} >
                    Price ascending
                </Radio>
                <Radio style={radioStyle} value={'priceDescending'}>
                    Price descending
                </Radio>
                <Radio style={radioStyle} value={'discount'}>
                    Discount
                </Radio>
            </Radio.Group>
        </div>
    );
}

export default FilterBy;