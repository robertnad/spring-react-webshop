import React from 'react';
import SearchProduct from './SearchProduct';
import FilterBy from './FilterBy';
import PriceRangeSelector from './PriceRangeSelector';
import CurrencySelection from '../CurrencySelection';
import { Collapse } from 'antd';
const { Panel } = Collapse;

const FilterComponent = () => {
    
    return (
        <div style={{padding: '10px', display: 'flex', justifyContent: 'stretch', alignItems: 'center'}}>
            <Collapse accordion style={{width: '500px', margin:'5px'}} >
                <Panel header="Filter products">
                    <PriceRangeSelector />
                    <FilterBy />
                </Panel>
            </Collapse>
            <SearchProduct />
            <CurrencySelection />
        </div>
    );
};

export default FilterComponent;


// <div>
// <Row type="flex" justify="space-between" align="middle">
//     <Col xs={{ span: 2, offset: 0 }} lg={{span: 2, offset: 0 }} style={{padding: '10px'}}>
//         <SearchProduct />
//         <Collapse accordion style={{width: '500px'}} >
//             <Panel header="Filter products" key="1">
//                 <PriceRangeSelector />
//                 <FilterBy />
//             </Panel>
//         </Collapse>  
//     </Col>
//     <Col xs={{ span: 2, offset: 0 }} lg={{span: 2, offset: 0 }}>
//         <CurrencySelection />
//     </Col>
// </Row>
// </div>