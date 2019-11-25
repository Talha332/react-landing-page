import React from 'react';
import boxImg from '../../images/img-1.png';
import '../topbox/topbox.css';
function TopBoxes()
{
    return(
        
    <div className="top-boxs">
    <img src={boxImg} alt="" />
    <div className="top-boxs-inner">
      <h1>UX Design</h1>
      <p>Creating unique experiences between the customer and the product.</p>
    </div>
  </div>
    )

}export default TopBoxes;