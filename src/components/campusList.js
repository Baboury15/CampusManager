import React, { Component } from 'react';


class CampusList extends Component {
  render() {
    return(
      <div><h1>  List of Schools</h1>
      
       <ul id="myUL">
   <li>Lehman college</li>
   <li className="ib">Laguardia Community College </li>
   <li>Bronx Community College</li>
   <li>City College</li>
   <li>NYU</li>
   <li>Columbia University</li>
   <li>Hostos Community College</li>
   <li>Baruch College</li>
   <li>Hunter College</li>
   <li>Cornell University</li>

 </ul>

      
 </div>
    )
    
    
  }
}

export default CampusList;
