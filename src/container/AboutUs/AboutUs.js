import React from 'react'
import { images } from '../../constants'
import "./AboutUs.css"

const AboutUs = () => {
  return (
    <div className='app__aboutus app__bg flex__center section__padding' id="about">
    <div className='app__aboutus-content flex__center'>
<div className='app__aboutus-content_about'>
  <h1 className='headtext__cormorant'>About Us </h1>
  <img src={images.spoon} alt="about_spoon" className='spoon__img'/>
  <p className='p__opensans'>Celebrating flavors that define GustVibo, each dish is a harmonious blend of taste, crafted with locally sourced, premium ingredients and a dedication to cherished recipes. From our signature dishes to hearty classics and delicate desserts, every bite at GustVibo is a tribute to our culinary ethos, offering a unique dining experience that captures the essence of our heritage.</p>
  <button type="button" className='custom__button'>Learn more</button>
</div>
<div className='app__aboutus-content_gustviblogo2 flex__center'>
<img src={images.gustviblogo2} alt="gust"/>
</div>
<div className='app__aboutus-content_history'>
  <h1 className='headtext__cormorant'>Our History</h1>
  <img src={images.spoon} alt="about_spoon" className='spoon__img'/>
  <p className='p__opensans'>Established in 2024, GustVibo has swiftly become a cherished part of the community, renowned for its dedication to genuine culinary experiences and welcoming atmosphere. We delight in guiding our guests through a culinary voyage that celebrates our distinctive flavors, honoring traditional recipes while incorporating contemporary innovations.</p>
  <button type="button" className='custom__button'>Learn more</button>
</div>
    </div>
    </div>
  )
}

export default AboutUs