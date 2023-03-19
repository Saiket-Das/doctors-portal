import React from 'react';
import { Link } from 'react-router-dom';
import footerBG from '../../../assets/images/footer.png'


const Footer = () => {
    const currentYear = new Date().getFullYear()
    return (
        <footer style={{
            backgroundImage: `url('${footerBG}')`,
            backgroundSize: 'cover'
        }}
            className="p-10">
            <div className='footer'>
                <div>
                    <span className="footer-title">Services</span>
                    <Link to={'/'} className="link link-hover">Branding</Link>
                    <Link to={'/'} className="link link-hover">Design</Link>
                    <Link to={'/'} className="link link-hover">Marketing</Link>
                    <Link to={'/'} className="link link-hover">Advertisement</Link>
                </div>
                <div>
                    <span className="footer-title">Company</span>
                    <Link to={'/'} className="link link-hover">About us</Link>
                    <Link to={'/'} className="link link-hover">Contact</Link>
                    <Link to={'/'} className="link link-hover">Jobs</Link>
                    <Link to={'/'} className="link link-hover">Press kit</Link>
                </div>
                <div>
                    <span className="footer-title">Legal</span>
                    <Link to={'/'} className="link link-hover">Terms of use</Link>
                    <Link to={'/'} className="link link-hover">Privacy policy</Link>
                    <Link to={'/'} className="link link-hover">Cookie policy</Link>
                </div>
            </div>

            <div className='mt-10 text-center'>
                <p>Copyright &copy; {currentYear} All Rights Reserveds</p>
            </div>
        </footer>
    );
};

export default Footer;