import React, { Component } from "react";
import logo from "./../logo.svg";

class Header extends Component {
    render(){
        return  <div className="bg-gray-800 grid grid-cols-3">
                 <div className="flex items-center">
                <img src={logo} className="w-20" />
                <div className="bg-gray-700 py-3 px-4 rounded-full">
                    <i class="fas fa-search text-gray-500 mr-2" ></i>
                    <input type="text" 
                    className="bg-gray-700 outline-none text-white"
                    placeholder="Search Facebook" />
                </div>
              </div>

            <div className="">
                <div className="grid grid-cols-4 gap-2 h-full w-4/5 mx-auto">
                    <a href="#" className="menu-btn" >
                        <i class="fas fa-home text-2xl py-3"></i>
                    </a>
                    <a href="#" className="menu-btn" >
                        <i class="fas fa-video text-2xl py-3"></i>
                    </a>
                    <a href="#" className="menu-btn" >
                        <i class="fas fa-users text-2xl py-3"></i>
                    </a>
                    <a href="#" className="menu-btn" >
                        <i class="fas fa-gamepad text-2xl py-3"></i>
                    </a>
                </div>
            </div>
                <div className="flex items-center justify-end h-full ">
                    <a href="#" className="action-btn" >
                        <i class="fas fa-plus text-xl"></i>
                    </a>
                    <a href="#" className=" action-btn" >
                        <i class="fab fa-facebook-messenger text-xl "></i>
                    </a>
                    <a href="#" className=" action-btn" >
                        <i class="fas fa-bell text-xl "></i>
                    </a>
                    <a href="#" className=" action-btn" >
                        <i class="fas fa-caret-down text-xl "></i>
                    </a>
                    
                </div>
            </div>
    }
}
export default Header;