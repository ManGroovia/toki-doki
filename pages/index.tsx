import Header from '@/components/Header'
import HeaderLink from '@/components/HeaderLink';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import Slider from '@/components/Slider';
import SearchForm from '@/components/Searchform';
import React from 'react'
import UserForm from '@/components/UserForm';
const MainPage = () => {

  return (
    <>
      <Header></Header>
      
      <HeaderLink></HeaderLink>
      <div className="main">
        <div className="slider">
          <Slider></Slider>
        </div>
        <div className="searchForm">
          <SearchForm></SearchForm>
        </div>
      </div>
      <UserForm></UserForm>
    </>
  );
};

export default MainPage;
