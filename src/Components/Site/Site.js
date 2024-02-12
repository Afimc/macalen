import React from "react";
import Element1 from './Elements/Element1/Element1';
import Element2 from './Elements/Element2/Element2';
import Element3 from './Elements/Element3/Element3';
import Element4 from './Elements/Element4/Element4';
import Element5 from './Elements/Element5/Element5';
import Element6 from './Elements/Element6/Element6';
import Element7 from './Elements/Element7/Element7';
import Element8 from './Elements/Element8/Element8';
import Element9 from './Elements/Element9/Element9';
import './Site.css';


const Site=() => {
    return(
        <div className='SiteWraper'>
         <div className='TopSiteWraper '>
          <Element1/>
          <Element2/>
          <Element3/>
          <Element4/>
          <Element5/>
          <Element6/>
         </div>
         <div className='BottomSiteWraper'>
         <Element7/>
         <Element8/>
         <Element9/>

         </div>
        </div>
    )
}


export default Site;