import React, { Component } from 'react';

export default class Header extends Component{
   
     render(){
        return(
        <div className='header'>
             <div className='brand'>
               <h3><a href='/'>Home</a></h3>
            </div>
            <div className='items'>
               <ul>
                 <div className='list'> 
                    <li><a href='/about'>About us</a></li>
                    <li><a href='/services'>Services</a></li>
                    <li><a href='/contact'>Contact us</a></li>
                    <li><a href='/user/:id/projects/new'>New Projects</a></li>
                </div>        
               </ul>
            </div>
         </div>
            );
        
    }
}
