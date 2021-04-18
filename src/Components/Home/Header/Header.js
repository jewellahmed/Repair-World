import React from 'react';
import BusinessInfo from '../BusinessInfo/BusinessInfo';
import Experience from '../Experience/Experience';
import Footer from '../Footer/Footer';
import HeaderMain from '../HeaderMain/HeaderMain';
import Navbar from '../Navbar/Navbar';
import Review from '../Review/Review';
import Services from '../Services/Services';
import Team from '../Team/Team';

const Header = () => {
    return (
       <div>

            <Navbar></Navbar>
            <HeaderMain></HeaderMain>
            <br/>
            <BusinessInfo></BusinessInfo>
            <br/>
            <Services></Services>
            <br/>
            <Experience></Experience>
            <br/>
            <Review></Review>
            <br/>
            <Team></Team>
            <br/>
            <Footer></Footer>
            
        </div>
    );
};

export default Header;