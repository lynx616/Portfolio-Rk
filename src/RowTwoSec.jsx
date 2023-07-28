import React from 'react'

function RowTwoSec(){
  return (
    <>
      <div className='title-box work-hidden'>
    <a href='https://github.com/lynx616/Portfolio-Rk' target='_blank'>
    <div className='project-card'>
      <div className='project-img-two'>
        <img src='this-site1.png' alt='proj-img-one'/>
      </div>
      <div className='project-title-one'>
        <h4>PORTFOLIO DESIGN</h4>
        <h3>Rudra's Portfolio</h3>
        <span><svg width="20px" height="20px" class="cf-icon-svg" xmlns="http://www.w3.org/2000/svg" viewBox="-2.5 0 19 19"><path d="M9.464 17.178a4.506 4.506 0 0 1-2.013.317 4.29 4.29 0 0 1-2.007-.317.746.746 0 0 1-.277-.587c0-.22-.008-.798-.012-1.567-2.564.557-3.105-1.236-3.105-1.236a2.44 2.44 0 0 0-1.024-1.348c-.836-.572.063-.56.063-.56a1.937 1.937 0 0 1 1.412.95 1.962 1.962 0 0 0 2.682.765 1.971 1.971 0 0 1 .586-1.233c-2.046-.232-4.198-1.023-4.198-4.554a3.566 3.566 0 0 1 .948-2.474 3.313 3.313 0 0 1 .091-2.438s.773-.248 2.534.945a8.727 8.727 0 0 1 4.615 0c1.76-1.193 2.532-.945 2.532-.945a3.31 3.31 0 0 1 .092 2.438 3.562 3.562 0 0 1 .947 2.474c0 3.54-2.155 4.32-4.208 4.548a2.195 2.195 0 0 1 .625 1.706c0 1.232-.011 2.227-.011 2.529a.694.694 0 0 1-.272.587z"></path></svg></span>
      </div>
    </div>
    </a>
   
    <div className='cta starss'>
    <p>-rate my projects-</p>
    <div className="rating">
  <input value="5" name="rating" id="star5" type="radio"/>
  <label for="star5"></label>
  <input value="4" name="rating" id="star4" type="radio"/>
  <label for="star4"></label>
  <input value="3" name="rating" id="star3" type="radio"/>
  <label for="star3"></label>
  <input value="2" name="rating" id="star2" type="radio"/>
  <label for="star2"></label>
  <input value="1" name="rating" id="star1" type="radio"/>
  <label for="star1"></label>
</div>
</div>
   
    </div>
    </>
  );
}
export default RowTwoSec;