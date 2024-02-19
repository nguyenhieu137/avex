import React from 'react'
import img from '../../assets/bg_footer.jpg'
import './footer.scss'
import { GrLocation } from "react-icons/gr";
import { PiPhoneCall } from "react-icons/pi";
import { AiOutlineMail } from "react-icons/ai";
import { FaFacebookF } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa6";
const Footer = () => {
  return (
    <div className="footer-section">
        <div className="footer-img">
          <img src={img} alt="" />
        </div>

        <div className='footer-wrapper'>
          <div className="ft-left">
            <img src='https://bizweb.dktcdn.net/100/458/161/themes/894921/assets/logo_footer.png?1701684207191' alt="" />
            <div className="ft-info">
              <GrLocation className='icon'></GrLocation>
              <span><b>Trụ sở:</b> Tầng 8: Ladeco, 266 Đội Cấn, Hà Nội</span>
            </div>
            <div className="ft-info">
              <GrLocation className='icon'></GrLocation>
              <span><b>Showroom:</b> Tầng 8: Ladeco, 266 Đội Cấn, Hà Nội</span>
            </div>
            <div className="ft-info">
              <PiPhoneCall className='icon'></PiPhoneCall>
              <span><b>Điện thoại:</b> <a href="tel:19006750">1900 6750</a></span>
            </div>
            <div className="ft-info">
              <AiOutlineMail className='icon'></AiOutlineMail>
              <span><b>Email:</b> <a href="mailto:awesome@gmail.com">awesome@gmail.com</a></span>
            </div>
            <div className="ft-follow">
                <ul className="follow-option">
                    <li><a href="/" title="Follow us on Instagram"><FaInstagram className='icon'></FaInstagram></a></li>
                    <li><a href="/" title="Follow us on Facebook"><FaFacebookF className='icon'></FaFacebookF></a></li>
                    <li><a href="/" title="Follow us on Youtube"><FaYoutube className='icon'></FaYoutube></a></li>
                    <li><a href="/" title="Follow us on Twitter"><FaXTwitter className='icon'></FaXTwitter></a></li>
                </ul>
            </div>
          </div>
          <div className="ft-right">
            <div className="policy">
              <div className="policy-item">
                <ul>
                  <li><a href="">Trang chủ</a></li>
                  <li><a href="">Về chúng tôi</a></li>
                  <li><a href="">Sản phẩm</a></li>
                  <li><a href="">Dự án</a></li>
                  <li><a href="">Liên hệ</a></li>
                </ul>
              </div>

              <div className="policy-item">
                <ul>
                  <li><a href="">Trang chủ</a></li>
                  <li><a href="">Về chúng tôi</a></li>
                  <li><a href="">Sản phẩm</a></li>
                  <li><a href="">Dự án</a></li>
                  <li><a href="">Liên hệ</a></li>
                </ul>
              </div>

              <div className="policy-item">
                <ul>
                  <li><a href="">Trang chủ</a></li>
                  <li><a href="">Về chúng tôi</a></li>
                  <li><a href="">Sản phẩm</a></li>
                  <li><a href="">Dự án</a></li>
                  <li><a href="">Liên hệ</a></li>
                </ul>
              </div>
            </div>
            
            <div className="payment">
              <span>HÌNH THỨC THANH TOÁN</span>
              <img src="https://bizweb.dktcdn.net/100/458/161/themes/894921/assets/payment.png?1701684207191" alt="" />
            </div>
          </div>

        </div>

    </div>
  )
}

export default Footer