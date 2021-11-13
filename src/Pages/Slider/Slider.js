import React from 'react';
import SwipeableViews from 'react-swipeable-views';
import img1 from '../../Images/BS-6-TVS-Apache-RR-310-4-1024x678-1.jpg'
import img2 from '../../Images/310_2007_50.jpg'
import img3  from '../../Images/tvs-apache.jpg'
const styles = {
  slide: {
    padding: 15,
    marginBottom:10,
 
    minHeight: 500,
    color: '#fff',
  },
  slide1: {
   background: `url(${img1})`
   
  },
  slide2: {
    background:`url(${img2})`
  },
  slide3: {
    background: `url(${img3})`
  },
};

function Slider() {
  return (
    <div>
    <h2 >New Arrival</h2>
<SwipeableViews enableMouseEvents >

      <div style={Object.assign({}, styles.slide, styles.slide1)}>Watch In Our WebSite to see latest Models</div>
      <div style={Object.assign({}, styles.slide, styles.slide2)}>We Have Three new Bike Arriving Here this month</div>
      <div style={Object.assign({}, styles.slide, styles.slide3)}>You can Payment throw new Payment Method</div>
    </SwipeableViews>
</div>
   
  );
}

export default Slider;
