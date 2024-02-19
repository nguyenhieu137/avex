import React ,{useState, useEffect, useRef} from 'react';
import { Link, useLocation } from 'react-router-dom'
import './navbar.scss'
import { SlBag } from "react-icons/sl";
import { FiUser, FiMenu } from "react-icons/fi";
import { IoCloseOutline } from "react-icons/io5";



const Navbar = () => {
    const [showModal, setShowModal] = useState(false);
    const [activeLink, setActiveLink] = useState('/');
    const [isMobile, setIsMobile] = useState(window.innerWidth < 1000);
    const location = useLocation();

    const toggleModal = () => {
        setShowModal(!showModal);
        document.body.style.overflow = showModal ? 'auto' : 'hidden'; // Ngăn cuộn trang khi modal mở
    };

    const closeNav = () => {
        const modal = document.querySelector('.modal');
        
        if (modal) {
            modal.classList.add('closing');
            setShowModal(true);
        
            setTimeout(() => {
                setShowModal(false);
                const modalOverlay = document.querySelector('.modal-overlay');
                if (modalOverlay) {
                    modalOverlay.classList.remove('show');
                }
                document.body.style.overflow = 'auto'; // Thiết lập lại overflow của body
            }, 450);
        } else {
            setShowModal(false);
            const modalOverlay = document.querySelector('.modal-overlay');
            if (modalOverlay) {
                modalOverlay.classList.remove('show');
            }
            document.body.style.overflow = 'auto'; // Thiết lập lại overflow của body
        }
    };

    const handleLinkClick = () => {
        closeNav(); // Đóng modal khi người dùng chọn một liên kết
    };

    
    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth < 1000);
            if (window.innerWidth > 1000) {
                closeNav();
            }
        };

        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    useEffect(() => {
        setActiveLink(location.pathname);
    }, [location.pathname]);


    useEffect(() => {
        const modalOverlay = document.querySelector('.modal-overlay');
        if (modalOverlay) {
            modalOverlay.classList.toggle('show');
        }
    }, [showModal]);
    
    return (
        <div className="navbarSection">
            <div className="navbarContainer">
                <div className="leftNav">
                    <div className="navMenu">
                        <button className="subNavBtn" onClick={closeNav}>
                            <Link to="/" className={activeLink === '/' ? 'active' : ''}>TRANG CHỦ</Link>
                        </button>
                    </div>
                    <div className="navMenu">
                        <button className="subNavBtn" onClick={closeNav}>
                            <Link to="/about" className={activeLink === '/about' ? 'active' : ''}>VỀ CHÚNG TÔI</Link>
                        </button>
                    </div>
                    <div className="navMenu ">
                        <button className="subNavBtn" onClick={closeNav}>
                            <Link to="/product" className={activeLink === '/product' ? 'active' : ''}>SẢN PHẨM</Link>
                        </button>
                        <div className="subnav-content">
                            <a href="/new-products" onClick={closeNav}>Sản phẩm mới</a>
                            <a href="/featured-products" onClick={closeNav}>Sản phẩm nổi bật</a>
                            <a href="/hot-products" onClick={closeNav}>Sản phẩm hot</a>
                        </div>
                    </div>
                    <div className="navMenu">
                        <button className="subNavBtn" onClick={closeNav}>
                            <Link to="/project" className={activeLink === '/project' ? 'active' : ''}>DỰ ÁN</Link>
                        </button>
                    </div>
                    <div className="navMenu">
                        <button className="subNavBtn" onClick={closeNav}>
                            <Link to="/contact" className={activeLink === '/contact' ? 'active' : ''}>LIÊN HỆ</Link>
                        </button>
                    </div>
                </div>
                <div className="rightNav">
                    <a className='cart-icon' href="/"><SlBag></SlBag></a>
                    <div className='user'>
                        <a className='user-icon' href="/"><FiUser></FiUser></a>
                        <div className='account'>
                            <a href="/" onClick="">Login / Sign Up</a>
                        </div>
                    </div> 
                    {isMobile ? (
                        <div className="menu-icon" onClick={toggleModal}>
                            {showModal ? <FiMenu /> : <FiMenu />}
                        </div>
                    ) : null}
                </div>
            </div>
            {showModal && (
                <>
                    <div className="modal-overlay" onClick={closeNav}></div>
                    <div className={`modal ${showModal ? 'show' : ''}`}>
                        <div className="modal-content">
                            <button className="close-modal-btn" onClick={closeNav}>
                                <IoCloseOutline className='ic-close'></IoCloseOutline>
                            </button>
                            <div className='avex'>
                                <p>AVEX</p>
                            </div>
                            <div className="modal-links">
                                <Link to="/" onClick={handleLinkClick} className={activeLink === '/' ? 'active' : ''}>
                                    TRANG CHỦ
                                </Link>
                                <Link to="/about" onClick={handleLinkClick} className={activeLink === '/about' ? 'active' : ''}>
                                    VỀ CHÚNG TÔI
                                </Link>
                                <Link to="/product" onClick={handleLinkClick} className={activeLink === '/product' ? 'active' : ''}>
                                    SẢN PHẨM
                                </Link>
                                <Link to="/project" onClick={handleLinkClick} className={activeLink === '/project' ? 'active' : ''}>
                                    DỰ ÁN
                                </Link>
                                <Link to="/contact" onClick={handleLinkClick} className={activeLink === '/contact' ? 'active' : ''}>
                                    LIÊN HỆ
                                </Link>
                            </div>
                        </div>
                    </div>
                </>
            )}
        </div> 
    )
}

export default Navbar