import React from 'react';
import ProductEditForm from '../components/ProductEditForm';
import ProductDeleteForm from '../components/ProductDeleteForm';
// import ProductsContext from '../context/products-context'
import { Button, Icon } from 'antd';
import { PageHeader, Descriptions, Statistic } from 'antd';

const Product = ({ product }) => {

  // const { rate, symbol } = useContext(ProductsContext)

  const originalPrice = product.price;
  const finalPrice = (originalPrice*(1-product.discount/100)).toFixed(2);
  const savings = (originalPrice-(originalPrice*(1-product.discount/100))).toFixed(2)
  const arrowDown = <Icon type="arrow-down" style={{color:'green'}} />;  

  const renderContent = (column = 2) => (
    <Descriptions size="small" column={column}>
      <Descriptions.Item label="Manufacturer">{product.manufacturer}</Descriptions.Item>
      <Descriptions.Item label="Date added">{product.dateAdded}</Descriptions.Item>
      <Descriptions.Item label="Description">{product.description}</Descriptions.Item>
      <Descriptions.Item label="Id">{product.id}</Descriptions.Item>
    </Descriptions>
  );

  
  const extraContent = (
    <div
      style={{
        display: 'flex',
        width: 'max-content',
        justifyContent: 'flex-end'
      }}
    >
      <Statistic 
        title="Price"
        prefix="€"
        suffix={!product.discount ? '' : `(was ${product.price})`}
        value={finalPrice}
        style={{
          marginRight: 32
        }}
      />
      {!product.discount ? '' :
        <Statistic
          title="Discount"
          suffix="%"
          prefix={arrowDown}
          value={product.discount}
          style={{
            marginRight: 32
          }}
        />
      }
      {!product.discount ? '' :
        <Statistic
          title="Save"
          suffix="€"
          value={`-${savings}`}
        />
      }
      {/*<Statistic
        title="Amount"
        value="1"
      />*/}
    </div>
  );
  
  const Content = ({ children, extra }) => {
    return (
      <div className="content">
        <div className="main">{children}</div>
        <div className="extra">{extra}</div>
      </div>
    );
  };

return (
    <div>
        <PageHeader
            style={{
            border: '1px solid #a9a9a9',
            borderRadius: '10px',
            margin: '50px'
            }}
            title={product.name}
            extra={[
                <div style={{display:'flex', flexDirection:'row', alignItems:'flex-start'}}>
                    <ProductDeleteForm product={product} />
                    <ProductEditForm product={product} />
                    <Button style={{width:'130px', marginLeft:'5px'}}>Add to cart</Button>
                </div>
            ]}
        >
            <Content extra={extraContent}>{renderContent()}</Content>
        </PageHeader>
    </div>
);
}

export default Product;

// name={product.name}
// price={product.price}
// discount={product.discount}
// manufacturer={product.manufacturer}
// description={product.description}


// <h3>{product.name}</h3>
// <p>{product.price}</p>
// <p>{product.description}</p>
// <Button onClick={confirmDelete}>Remove</Button>