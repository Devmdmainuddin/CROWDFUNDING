import React from 'react';
import Newsletter from '../../components/Home/Newsletter';
import Company from '../../components/Home/Company';
import LatestNews from '../../components/Home/LatestNews';
import Blog from '../../components/Home/Blog';
import Hero from '../../components/Home/Hero';
import Pcard from '../../components/Home/Pcard';
import Scard from '../../components/Home/Scard';


const Home = () => {
    return (
        <div>

            <Hero></Hero>
            <Scard></Scard>
            <Blog></Blog>
            <Pcard></Pcard>
            <LatestNews></LatestNews>
            <Newsletter></Newsletter>
            <Company></Company>
        </div>
    );
};

export default Home;