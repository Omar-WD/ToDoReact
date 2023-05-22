import React from "react";
import "C:/Users/HP/Desktop/blog/node_modules/bootstrap/dist/css/bootstrap.min.css"
import "../../src/App.css"


export default function Navbar() {
    
  return (
    <div className="navbar" >
      <img src="https://www.pngitem.com/pimgs/m/80-802858_icon-check-list-png-transparent-png.png " alt="" className="Icon" />
      <div className="items  align-items-baseline text-light mx-3 ">
        <a href="#" >Home</a>
        <select id="filterTasks">
        <option value="" disabled selected text-center>filter Tasks</option>
          <option value="Daily">Daily</option>
          <option value="Monthly">Monthly</option>
          <option value="Yearly">Yearly</option>
        </select>
        <a href="#" >Logout</a>
        <input type="text" name="" id="SearchInput" placeholder="Search" className='text-black bg-light' />
        <a href="#">Contact</a>

      </div>
    </div>
  );
}
