import React from 'react'
import "./Home.css"
import Product from '../Product/Product'
import {Carousel} from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";

function Home() {
return (
    <div className="home">
    <div className="home__container">
    <Carousel
    showThumbs={false}
    infiniteLoop
    showArrows={false}
    interval={3000}
    autoPlay
    transitionTime={1500}
    stopOnHover={false}
    swipeable={false}
    emulateTouch
    showIndicators={false}
    showStatus={false}
    >
        <img
            className="home__image"
            src="https://m.media-amazon.com/images/I/61DUO0NqyyL._SX3000_.jpg"
            alt=""
        />
        <img
            className="home__image"
            src="https://m.media-amazon.com/images/I/61TD5JLGhIL._SX3000_.jpg"
            alt=""
        />
        <img
            className="home__image"
            src="https://m.media-amazon.com/images/I/61jovjd+f9L._SX3000_.jpg"
            alt=""
        />
        <img
            className="home__image"
            src="https://m.media-amazon.com/images/I/71qid7QFWJL._SX3000_.jpg"
            alt=""
        />
        </Carousel>
        </div>
        <div className="home__row">
        <Product 
        id="12321341"
        title="Electronics"
        price={1200.96}
        rating={5}
        image="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2020/May/Dashboard/Fuji_Dash_Electronics_1x._SY304_CB432774322_.jpg"
        />
        <Product
        id="49538094"
        title="Shop Kindle E-readers. Ships from and sold by Amazon US."
        price={409.0}
        rating={4}
        image="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2021/September/DashboardCards/Fuji_Desktop_Dash_Kindle_1x._SY304_CB639752818_.jpg"
        />
        <Product 
        id="4903850"
        title="Shop activity trackers and smartwatches"
        price={199.99}
        rating={3}
        image="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2021/September/DashboardCards/Fuji_Dash_SmartWatch_1X._SY304_CB639922137_.jpg"
        />
        </div>
        <div className="home__row">
        <Product 
        id="23445930"
        title="Shop Laptops & Tablets"
        price={980.99}
        rating={5}
        image="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2020/May/Dashboard/Fuji_Dash_Laptops_379x304_1X_en_US._SY304_CB418608471_.jpg"
        />
        <Product 
        id="3254354345"
        title="Create with strip lights"
        price={880}
        rating={4}
        image="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2020/May/Dashboard/Fuji_Dash_StripLighting_379x304_1X_en_US._SY304_CB418597476_.jpg"
        />
        <Product 
        id="90829332"
        title="Health & Personal Care"
        price={30}
        rating={4}
        image="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2022/February/DashboardCards/GW_CONS_AUS_HPC_HPCEssentials_CatCard_Desktop1x._SY304_CB627424361_.jpg"
        />
        </div>
        <div className="home__row">
        <Product
        id="90829452"
        title="Products for every room in your home"
        price={1200}
        rating={4}
        image="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2019/July/amazonbasics_520x520._SY304_CB442725065_.jpg"
        />
        <Product
        id="90569332"
        title="New arrivals in Toys"
        price={75.98}
        image="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2021/September/DashboardCards/Fuji_Dash_Toys_1X._SY304_CB639759658_.jpg"
        />
        <Product
        id="90829338"
        title="Beauty picks"
        price={800}
        rating={4}
        image="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2020/May/Dashboard/Fuji_Dash_Beauty_1x._SY304_CB432774351_.jpg"
        />
        <Product
        id="90829875"
        title="Dresses"
        price={500}
        image="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2022/February/DashboardCards/Fuji_dash_dress_1X._SY304_CB626369146_.jpg"
        />
        </div>
    </div>

)
}

export default Home