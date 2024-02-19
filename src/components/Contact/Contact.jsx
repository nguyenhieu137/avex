import React from "react"
import Breadcrumbs from "../Breadcrumbs/Breadcrumbs"
import { FaMapLocationDot } from "react-icons/fa6";
import { MdPermPhoneMsg } from "react-icons/md";
import { IoIosMailUnread } from "react-icons/io";
import './contact.scss'


const Contact = () => {
    return(
        <div className="contact-section">
            <Breadcrumbs></Breadcrumbs>

            <div className="contact-info">
                <div className="info-item">
                    <span><FaMapLocationDot className="icon"></FaMapLocationDot></span>
                    <h1>Địa chỉ</h1>
                    <p>Tầng 8 Ladeco, 266 Đội Cấn, Hà Nội</p>
                </div>

                <div className="info-item">
                    <span><MdPermPhoneMsg className="icon"></MdPermPhoneMsg></span>
                    <h1>Tổng đài hỗ trợ</h1>
                    <p><a href="tel:19006750">1900 6750</a></p>
                </div>

                <div className="info-item">
                    <span><IoIosMailUnread className="icon"></IoIosMailUnread></span>
                    <h1>Email</h1>
                    <p><a href="mailto:awesome@gmail.com">awesome@gmail.com</a></p>
                </div>
            </div>

            {/* Map */}
            <div className="map-container">
                <iframe className="map" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d5267.148443440466!2d105.7931847014805!3d21.015218356167342!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3135ab584cac4985%3A0x5321935ff9848b29!2zTmcuIDY4IFAuIFRydW5nIEvDrW5oLCBZw6puIEhvw6AsIEPhuqd1IEdp4bqleSwgSMOgIE7hu5lpLCBWaeG7h3QgTmFt!5e0!3m2!1svi!2s!4v1704691550605!5m2!1svi!2s"></iframe>
            </div>
            
            {/* Contact Form */}
            <div className="contact-form">
                <div className="form-text">
                    <h1>Gửi thông tin liên hệ cho chúng tôi</h1>
                    <p>Bạn hãy điền nội dung form dưới đây. Chúng tôi sẽ trả lời bạn ngay khi nhận được tin nhắn.</p>
                </div>

                <div className="form-input">
                    <div className="personal-info">
                        <div className="person-input">
                            <input type="text" placeholder="Họ và tên" />
                        </div>
                        <div className="person-input">
                            <input type="tel" name="" id="" placeholder="Số điện thoại"/>
                        </div>
                    </div>

                    <div className="email-input">
                        <input type="email" placeholder="Email:"/>
                    </div>

                    <div className="msg-input">
                        <textarea type="text" placeholder="Nội dung tin nhắn:"/>
                    </div>
                </div>
            </div>

            {/* Button-submit */}
            
            <button type="sumbmit" className="btn-submit">
                Gửi tin nhắn
            </button>
        </div>
    )   
}

export default Contact