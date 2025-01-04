import React from 'react';
import SubHeading from '../../components/SubHeading/SubHeading';
import { images } from '../../constants';
import "./Chef.css";

const Chef = () => {
  return (
    <div className='app__bg app__wrapper section__padding'>
      <div className='app__wrapper_img app__wrapper_img-reverse'>
        <img src={images.chefimage} alt="chef" />
      </div>
      <div className='app__wrapper_info'>
        <SubHeading title="Chef's Word" />
        <h1 className='headtext__cormorant'>What We Believe In</h1>
        <div className='app__chef-content'>
          <div className='app__chef-content_quote'>
            <img src={images.quotes} alt="quote" />
            <p className='p__opensans'>
            "At GustVibo, we believe in the transformative power of food to create lasting memories. We are committed to crafting dishes that blend tradition with innovation, using locally sourced ingredients to ensure freshness and flavor in every bite. Our goal is to provide not just a meal, but an experience that resonates with warmth, authenticity, and a celebration of culinary artistry."
            </p>
          </div>
          <p className='p__opensans'></p>
        </div>
        <div className='app__chef-sign'>
          <p>Mr. James</p>
          <p className='p__opensans'>Chef & Founder</p>
          <img src={images.sign} alt="sign" />
        </div>
      </div>
    </div>
  );
};

export default Chef;
