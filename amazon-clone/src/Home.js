import React from "react";
import "./Home.css";
import Product from "./Product";

function Home() {
  return (
    <div className="home">
      <div className="home__container">
        <img
          className="home__image"
          src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg"
          alt=""
        />
        <div className="home__row">
          <Product
            title="The Lean Startup: How Today's Entrepreneurs Use Continuous Innovation to Create Radically Successful Businesses"
            price={499}
            rating={5}
            image="https://images-eu.ssl-images-amazon.com/images/I/81HK1DyQEQL._AC_UL160_.jpg"
          />
        </div>
        <div className="home__row">
          <Product
            title="OnePlus 8 Pro (Onyx Black 8GB RAM+128GB Storage)"
            price={(54, 999)}
            rating={4}
            image="https://m.media-amazon.com/images/I/61YSMhOd5EL._AC_UL640_FMwebp_QL65_.jpg"
          />
          <Product
            title="Audio-Technica ATH-M50x Over-Ear Headphones ..."
            price={(11, 110)}
            rating={5}
            image="https://m.media-amazon.com/images/I/71WNWRLJCsL._AC_UY436_FMwebp_QL65_.jpg"
          />
          <Product
            title="Logitech G 304 Lightspeed Wireless Gaming Mouse - Black ..."
            price={(3, 295.0)}
            rating={5}
            image="https://m.media-amazon.com/images/I/61n5dYX+OhL._AC_UY436_FMwebp_QL65_.jpg"
          />
        </div>
        <div className="home__row">
          <Product
            title='Razer Rogue 13.3" Backpack V2- Black ...'
            price={(4, 999)}
            rating={4}
            image="https://m.media-amazon.com/images/I/51xIf7Q818L._AC_UL640_FMwebp_QL65_.jpg"
          />
          <Product
            title="Razer Doubleshot PBT Keycap Upgrade Set for Mechanical & Optical Keyboard ..."
            price={(2, 899.0)}
            rating={4}
            image="https://m.media-amazon.com/images/I/611-ah5Bh9L._AC_UY436_FMwebp_QL65_.jpg"
          />
        </div>
      </div>
    </div>
  );
}

export default Home;
