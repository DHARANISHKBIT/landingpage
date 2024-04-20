import React from 'react'
import './Land.css'
import  Image1 from '../assets/img1.jpg'
import  Image2 from '../assets/img2.jpg'
import  Image3 from '../assets/img3.jpg'
import  Image4 from '../assets/img4.jpg'
import  Image5 from '../assets/img5.jpg'
import  Image6 from '../assets/img6.jpg'
// import Right from './Right'

function LandingPage() {
  return (
    <div className='page'>
    <div className='header'>
     <div className='logo'>
       
        <h1>MovieCity</h1>
     </div>
     <nav className='navigation'>
        <ul>
            <li><a href="/">MOVIES</a></li>
            <li><a href="/">CATEGORY</a></li>
            <li><a href="/">ABOUT</a></li>
            <li><a href="/">CONTACT</a></li>
        </ul>
     </nav>
     <div className='btn'>
        <button type='button'>Login</button>
     </div>
     
    </div>
     

    <div className='main'>
        <div className='col col1'> 
        <h2>Your Movies</h2>
        <p>In here,you can select whatever movie you want to watch. <br /> If you want to select more,just click the button.</p>
        <button type='password'>More</button>
        </div>
        <div className='col'>
            <div className='card card1'> <img src={Image1}></img></div>
            <div className='card card2'> <img src={Image2}></img></div>
            <div className='card card3'> <img src={Image3}></img></div>
            <div className='card card4'> <img src={Image4}></img></div>
            <div className='card card5'> <img src={Image5}></img> </div>
            <div className='card card6'> <img src={Image6}></img> </div>

        </div>

    </div>
    </div>
  
  )
}

export default LandingPage
