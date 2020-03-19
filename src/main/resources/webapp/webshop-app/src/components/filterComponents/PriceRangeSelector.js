import React, { useContext, useState } from 'react';
import ProductsContext from '../../context/products-context';
import { Slider } from 'antd';

const PriceRangeSelector = () => {

  const { products, dispatchFilters } = useContext(ProductsContext);

  const highestPrice = Math.max.apply(
    Math, products.map((highest) => {
      return Math.floor(highest.price)+1;
    })
  );

  const [value/*, setValue*/] = useState([0, highestPrice]);  

  // const onChange = (value) => {
  //   console.log(`onChange: ${value}`);
  // }
  
  const onAfterChange = (value) => {
    dispatchFilters({
      type: 'FILTER_BY_PRICE_RANGE',
      priceRangeLow: value[0],
      priceRangeHigh: value[1]
    });
    console.log(`onAfterChange: ${value}`);
  }

  return (
    <div>
        <p>Select price range</p>
        <Slider
            range
            step={1}
            min={0}
            max={highestPrice}
            defaultValue={value}
            // onChange={onChange}
            onAfterChange={onAfterChange}
        />
    </div>
  );
}

export default PriceRangeSelector;