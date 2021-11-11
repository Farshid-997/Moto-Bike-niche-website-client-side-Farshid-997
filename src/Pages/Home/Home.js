import React from 'react';
import Navigation from '../Navigation/Navigation';
import Products from '../Home/Products/Products'
import Banner from './Banner/Banner';
import Reviews from '../Reviews/Reviews';
import Slider  from '../Slider/Slider'
import Footer from '../Footer/Footer';
const Home = () => {
    return (
        <div>
            <Navigation></Navigation>
            <Banner></Banner>
            <Products></Products>
            <Reviews></Reviews>
            <Slider></Slider>
            <Footer></Footer>
        </div>
    );
};

export default Home;