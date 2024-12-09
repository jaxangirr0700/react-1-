
import React from 'react'
import './style.scss'
import navImg from '../../assets/navLogo.png'
import heroImg from '../../assets/girl.png'
function Hero(){
    return(
       <section className='header'>
        <div className="container">
            <nav>
                <img src={navImg} alt="navImg" />
                <ul className='nav-ul'> 
                    <li><a href="#">Log In</a></li>
                    <li><a href="#">844-332-6440</a></li>
                    <button className='navBtn'>Get started</button>
                </ul>
            </nav>
            <div className="hero">
                <div className="hero-about">
                    <h1>Running the show has never been so easy.</h1>
                    <p>Ready to put the human back in HR? Clerksy helps you set the stage with an inclusive and compliant workplace.</p>
                </div>
                <img src={heroImg} alt="" />
            </div>
        </div>
       </section>
    )
}

export default Hero

