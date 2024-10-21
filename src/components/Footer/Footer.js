import React from 'react'
import logo from "../../assets/images/logo/Ecoscope.png"

import "../../assets/styles/footerStyles/Footer.css"

const Footer = () => {

    const year = new Date().getFullYear();

    return (
        <>
            <footer className='footerClass'>
                <div className="footerrow">
                    <div className="footercol">
                        <img src={logo} className="footer_logo" />
                        <p className="footer_about">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Inventore harum molestias nesciunt,
                            doloremque magni aspernatur iste blanditiis, fugiat quaerat accusamus ut, vero tempore.
                            Fugiat, illum!
                        </p>
                    </div>
                    <div className="footercol">
                        <h5>Office <div className="bottom_line"><span></span></div></h5>
                        <p>2841 Romines Mill Road</p>
                        <p>Plano</p>
                        <p>Texas, ZIP 75074, United States</p>
                        <p className="footer_email">ecoscopeofficial@gmail.com</p>
                        <h6>+1 - 2145958195</h6>
                    </div>
                    <div className="footercol">
                        <h5>Links <div className="bottom_line"><span></span></div></h5>
                        <ul>
                            <li><a href="">HOME</a></li>
                            <li><a href="">ABOUT</a></li>
                            <li><a href="">SERVICE</a></li>
                            <li><a href="">CONTACT US</a></li>
                        </ul>
                    </div>
                    <div className="footercol">
                        <h5>Newsletter <div className="bottom_line"><span></span></div></h5>
                        <form>
                            <i className="fa-regular fa-envelope"></i>
                            <input type="email" placeholder="Enter your email" required />
                            <button type="submit"><i className="fa-solid fa-arrow-right" style={{ color: "#ffffff" }}></i></button>
                        </form>
                        <div className="social_icons">
                            <i className="fa-brands fa-square-facebook social_icon" style={{ color: "#ffffff" }}></i>
                            <i className="fa-brands fa-whatsapp social_icon" style={{ color: "#ffffff" }}></i>
                            <i className="fa-brands fa-twitter social_icon" style={{ color: "#ffffff" }}></i>
                            <i className="fa-brands fa-instagram social_icon" style={{ color: "#ffffff" }}></i>
                        </div>
                    </div>
                </div>
                <hr />
                <p className="copyright">EcoScope Ⓒ {year} - All Rights Reserved</p>
            </footer>
        </>
    )
}

export default Footer
