import React from 'react';
import Navigation from '../Navigation/Navigation';
import Products from '../Home/Products/Products'
import Banner from './Banner/Banner';
import Reviews from '../Reviews/Reviews';

const Home = () => {
    return (
        <div>
            <Navigation></Navigation>
            <Banner></Banner>
            <Products></Products>
            <Reviews></Reviews>
        </div>
    );
};

export default Home;