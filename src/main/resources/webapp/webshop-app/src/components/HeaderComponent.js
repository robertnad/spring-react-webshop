import React from 'react';
import { NavLink } from 'react-router-dom';
import LoginButton from './LoginButton';
import { Layout, Row, Col } from 'antd';
// import '../styles/styles.scss'

const { Header, Content } = Layout;



const HeaderComponent = () => {
    return (
        <header>
            <Layout>
                <Header style={{background: '#298fca'}}>
                    <h1 style={{color: 'white'}}>App</h1>
                </Header>
                <Content style={{ /*position: 'fixed',*/ background: '#bcd9ea', padding: '8px'}}>
                    <Row type="flex" justify="space-around" align="middle">
                        <Col xs={{ span: 2, offset: 0 }} lg={{span: 2, offset: 0 }}>
                            <NavLink exact to='/' activeClassName='is-active'>Home</NavLink>  
                        </Col>
                        <Col xs={{ span: 2, offset: 0 }} lg={{span: 2, offset: 0 }}>
                            <NavLink to='/shop' activeClassName='is-active'>Shop</NavLink>
                        </Col>
                        <Col xs={{ span: 2, offset: 0 }} lg={{span: 2, offset: 0 }}>
                            <NavLink to='/contact' activeClassName='is-active'>Contact</NavLink>
                        </Col>
                        <Col xs={{ span: 2, offset: 2 }} lg={{span: 2, offset: 13 }}>
                            <NavLink to='/mycart' activeClassName='is-active'>My cart</NavLink>
                        </Col>
                        <Col xs={{ span: 2, offset: 0 }} lg={{span: 2, offset: 0 }}>
                            <LoginButton />
                        </Col>
                    </Row>
                </Content>                
            </Layout>
        </header>
    );
}

export default HeaderComponent;