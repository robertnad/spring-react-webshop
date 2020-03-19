import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import HeaderComponent from '../components/HeaderComponent';
import HomePage from '../components/HomePage';
import ShoppingPage from '../components/ShoppingPage';
import ShoppingItemPage from '../components/ShoppingItemPage';
import ContactPage from '../components/ContactPage';
import MyCartPage from '../components/MyCartPage';
import NotFoundPage from '../components/NotFoundPage';

const AppRouter = () => {
    return (
        <BrowserRouter>
            <div>
                <HeaderComponent/>
                <Switch>
                    <Route exact path='/' component={HomePage} />
                    <Route path='/shop' component={ShoppingPage} />
                    <Route path='/item/:id' component={ShoppingItemPage} />
                    <Route path='/contact' component={ContactPage} />
                    <Route path='/mycart' component={MyCartPage} />
                    <Route component={NotFoundPage} />
                </Switch>
            </div>
        </BrowserRouter>
    );
}

export default AppRouter;