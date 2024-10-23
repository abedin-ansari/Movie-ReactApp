import React from 'react';
import './footer.css';
import FooterNavItem from '../components/FooterNavItem';

function Footer() {
    const usefulLinks = [
        'Home',
        'Movies',
        'My List',
        'terms of service',
        'Privacy Policy',
    ];
    const locations =[
        'jksc kjcf',
        'dfjkn fdcn',
        'jsk fcn',
        'jskc fsj',
        'djf fv',
    ];
  return (
    <footer id='footer' className='footer'>
        <div className='footer-top'>
            <div className='container'>
                <div className='row gy-4'>
                    <div className='col-lg-5 col-md-12 footer-info'>
                        <a href='/' className='logo d-flex align-items-center'>
                            <span>CINEMA</span>
                        </a>
                        <p>
                            whjds wfrbjksc wjrkfncf wfurbfckhs wrofhjn oritgrnvg rtigrtnj dffvoijovet vvtviod
                            nebrfvhjdfvb vernvfn veroifhnvc vrevernvjk veevioerjoiftnv veoivndfv vekvn
                            evnjervnrkjv bevjkerjknvev.
                        </p>
                        <div className='social-links mt-3'>
                            <a href='#' className='twitter'>
                                <ion-icon name="logo-twitter"></ion-icon>
                            </a>
                            <a href='' className='facebook'>
                                <ion-icon name="logo-facebook"></ion-icon>
                            </a>
                            <a href='#' className='instagram'>
                                <ion-icon name="logo-instagram"></ion-icon>
                            </a>
                            <a href='#' className='Linkedin'>
                                <ion-icon name="logo-linkedin"></ion-icon>
                            </a>
                        </div>
                    </div>

                    <div className='col-lg-2 col-6 footer-links'>
                        <h4>Useful Links</h4>
                        <ul>
                            {usefulLinks.map(link=> (
                                <FooterNavItem key={link} name={link} />
                            ))}
                        </ul>
                    </div>

                    <div className='col-lg-2 col-6 footer-links'>
                        <h4>Our CINEMAS</h4>
                        <ul>
                            {locations.map(link=> (
                                <FooterNavItem key={link} name={link} />
                            ))}
                        </ul>
                    </div>

                    <div className='col-lg-3 col-md-12 footer-contact text-center text-md-start'>
                        <h4>Contact Us</h4>
                        <p>
                            Street <br />
                            city nm State 462000 
                            <br />
                            India <br />
                            <br />
                            <strong>Phone:</strong> +91 498348589
                            <br />
                            <strong>Email:</strong> xyz@gmail.com
                            <br />
                        </p>
                    </div>
                </div>
            </div>
        </div>

        <div className='container'>
            <div className='copyright'>
                &copy: Copyright{' '}
                <strong>
                    <span>Dstudio Technology</span>
                </strong>
                .All Rights Reserved
            </div>
            <div className='credits'>
                Designed By <a href='#'>Abedin❤️</a>
            </div>
        </div>
    </footer>
  )
}

export default Footer;

