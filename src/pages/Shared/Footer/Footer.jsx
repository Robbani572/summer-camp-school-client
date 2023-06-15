import { Link } from 'react-router-dom';
import logo from '../../../assets/images/icons/navLogo.png'
import { BsFacebook, BsTwitter, BsInstagram, } from 'react-icons/bs';
import { FaRegCopyright } from 'react-icons/fa';

const Footer = () => {
    return (
        <footer className="max-w-screen-xl mx-auto">
            <div className="footer p-10 text-base-content">
                <div>
                    <img src={logo} alt="" />
                    <p>Artistry Moth School<br />The best art and crafts learning place</p>
                </div>
                <div>
                    <span className="footer-title">Courses</span>
                    <Link to="/courses/painting" className="link link-hover">Painting</Link>
                    <Link to="/courses/drawing" className="link link-hover">Drawing</Link>
                    <Link to="/courses/sculpture" className="link link-hover">Sculpture</Link>
                </div>
                <div>
                    <span className="footer-title">Social links</span>
                    <a className="link link-hover"><div className='flex gap-2 items-center justify-center'><BsFacebook></BsFacebook> Facebook</div></a>
                    <a className="link link-hover"><div className='flex gap-2 items-center justify-center'><BsTwitter></BsTwitter> Twitter</div></a>
                    <a className="link link-hover"><div className='flex gap-2 items-center justify-center'><BsInstagram></BsInstagram> Instagram</div></a>
                </div>
                <div>
                    <span className="footer-title">Location</span>
                    <a className="link link-hover">New York || USA</a>
                    <a className="link link-hover">Loss Angeles || USA</a>
                    <a className="link link-hover">Bogura || Bangladesh</a>
                </div>
            </div>
            <div className='w-full h-16 bg-base-200 text-center flex justify-center items-center'>
                <h3 className='flex justify-center items-center gap-2'>All copiright <FaRegCopyright></FaRegCopyright> reserved || artisty moth school 2023</h3>
            </div>
        </footer>
    );
};

export default Footer;