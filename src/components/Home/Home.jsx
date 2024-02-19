import React from "react"
import { Link } from 'react-router-dom'
import './home.scss'
import project from '../../data/project.json'
import img from "../../assets/hero-banner.jpg"
import logo from "../../assets/avex-logo.jpg"
import about from "../../assets/bg_about.png"
import Carousel from 'react-elastic-carousel'

const Home = () => {
    const carouselItems = [1, 2, 3];
    // Breakpoints for the carousel
    const breakPoints = [
        { width: 1, itemsToShow: 1 },
        { width: 550, itemsToShow: 1, itemsToScroll: 1, pagination: false },
        { width: 850, itemsToShow: 2 },
        { width: 1150, itemsToShow: 4, itemsToScroll: 2 },
        { width: 1450, itemsToShow: 4 },
        { width: 1750, itemsToShow: 4 },
        { width: 1920, pagination: false}
    ];

    const paginationActive = [
        {width: 1920, pagination: false},

    ];
    return(  
        <div className="home-container">
            {/* Hero Banner */}
            <div className="heroBanner">
                <div className="bannerImg">
                    <img src={img} alt="herobanner" />
                </div>
                <div className="bannerSologan">
                    <img src={logo} alt="" />
                    <br></br><span className="sg-1">Giải pháp <a>Hiệu Quả</a> & <a>Chất Lượng</a></span><br></br>
                    <span className="sg-2">Chúng tôi tự hào mang đến cho bạn những giải pháp thiết kế hiệu quả nhất.</span>
                </div>
                <div className="moreInfo">
                    <Link to='/project' className="button-87">Xem chi tiết</Link>
                    <Link to='/contact' className="button-87">Liên hệ ngay</Link>
                </div>
            </div>


            {/* Policy */}
            <div className="policy">
                {/* Carousel */}
                <Carousel className="carousel" breakPoints={breakPoints} pagination={false} showArrows={false} enableAutoPlay={true} enableTilt={false}>
                    <div className="item" carouselItems>
                        <div className="policy-img">
                            <img src="https://bizweb.dktcdn.net/100/458/161/themes/894921/assets/policy1.svg?1701684207191" alt="" />
                        </div>
                        <div className="policy-text">
                            <h4>Bền vững</h4>
                            <p>Với mong muốn xây dựng những công trình chất lượng nhất, chúng tôi luôn chọn những vật liệu tốt nhất và các thiết kế luôn được cập nhật liên tục</p>
                        </div>
                    </div>
                    <div className="item">
                        <div className="policy-img">
                            <img src="https://bizweb.dktcdn.net/100/458/161/themes/894921/assets/policy2.svg?1701684207191" alt="" />
                        </div>
                        <div className="policy-text">
                            <h4>Thẩm mỹ</h4>
                            <p>Đội ngũ Kĩ Sư, Kiến Trúc Sư trẻ, táo bạo và đầy sáng tạo của Avex Design sẽ mang dến có ngôi nhà của bạn những thiết kế hoàn hảo, tối ưu, tinh tế nhất.</p>
                        </div>
                    </div>
                    <div className="item">
                        <div className="policy-img">
                            <img src="https://bizweb.dktcdn.net/100/458/161/themes/894921/assets/policy3.svg?1701684207191" alt="" />
                        </div>
                        <div className="policy-text">
                            <h4>Tiết kiệm</h4>
                            <p>Chúng tôi lựa chọn những vật liệu bền bỉ với giá thành tốt nhất, khách hàng sẽ nhận được sự tư vấn tốt nhất để có thể lựa chọn giải pháp phù hợp với mình.</p>
                        </div>
                    </div>
                </Carousel>
            </div>


            {/* About Us */}
            <div className="about-us">
                <div className="about-container">

                    <div className="about-img">
                        <img src={about} alt="" />
                    </div>

                    <div className="about-info">
                        <div className="info-text">
                            <span>
                                Về chúng tôi
                            </span>
                            <div className="info-text_1">
                                <h2>Chúng tôi là....<br></br><p>nhà xây dựng dân dụng chuyên nghiệp</p><br></br> xây nhà trọn gói, chìa khóa trao tay.</h2>
                            </div>
                            <div className="info-text_2">
                                <p>Với +10 năm trong nghề,<br></br> Avex Construct luôn tự hào là đơn vị thiết kế thi công chuyên nghiệp,<br></br> luôn mang lại giá trị thiết thực nhất tới khách hàng.</p>
                            </div>
                        </div>

                        {/* info-count */}
                        <div className="info-count">
                            <div className="item-container"> 
                                <div className="item-count">
                                    <img src="https://bizweb.dktcdn.net/100/458/161/themes/894921/assets/i_about_1.svg?170168420719" alt="" />
                                    <span>1000+</span>
                                </div>
                                <div className="item-text">
                                    <p>1000+ dự án ấn tượng đã hoàn thiện và được khách hàng đánh giá cao về tính thẩm mỹ cũng như chất lượng <b>[...]</b> </p>
                                </div>
                            </div>
                            <div className="item-container"> 
                                <div className="item-count">
                                    <img src="https://bizweb.dktcdn.net/100/458/161/themes/894921/assets/i_about_2.svg?1701684207191" alt="" />
                                    <span>300+</span>
                                </div>
                                <div className="item-text">
                                    <p>300+ chuyên gia tư vấn, Kiến trúc sư... được đào tạo chuyên sâu cùng với kinh nghiệm nhiều năm trong ngành <b>[...]</b> </p>                            
                                </div>
                            </div>
                        </div>
                        <button className="more-details"><a href="/about">Xem chi tiết</a></button>
                    </div>
                </div>
            </div>

            {/* Statistical */}
            <div className="statis-container">
                <Carousel className="carousel" breakPoints={breakPoints} pagination={false} showArrows={false}>
                    <div className="item">
                        <div className="statis-img">
                            <img src="https://bizweb.dktcdn.net/100/458/161/themes/894921/assets/stat_img_1.svg?1701684207191" alt="" />
                        </div>
                        <div className="statis-text">
                            <span>13+</span>
                            <p>Giải thưởng</p>
                        </div>
                    </div>

                    <div className="item">
                        <div className="statis-img">
                            <img src="https://bizweb.dktcdn.net/100/458/161/themes/894921/assets/stat_img_2.svg?1701684207191" alt="" />
                        </div>
                        <div className="statis-text">
                            <span>100+</span>
                            <p>Kỹ sư xuất sắc</p>
                        </div>
                    </div>

                    <div className="item">
                        <div className="statis-img">
                            <img src="https://bizweb.dktcdn.net/100/458/161/themes/894921/assets/stat_img_3.svg?1701684207191" alt="" />
                        </div>
                        <div className="statis-text">
                            <span>1500+</span>
                            <p>Đánh giá chất lượng</p>
                        </div>
                    </div>

                    <div className="item">
                        <div className="statis-img">
                            <img src="https://bizweb.dktcdn.net/100/458/161/themes/894921/assets/stat_img_4.svg?1701684207191" alt="" />
                        </div>
                        <div className="statis-text">
                            <span>1000+</span>
                            <p>Dự án hoàn thành</p>
                        </div>
                    </div>
                    
                </Carousel>
            </div>

            {/* Dự án */}
            <div className="products-container">
                <div className="product-text">
                    <h1>Dự án của chúng tôi</h1>
                    <p>Avex Construction tự hào là đơn vị thi công các công trình nhà phố, biệt thự, căn hộ cao cấp, khách sạn - resort...<br></br>
                    Chúng tôi luôn nhận được sự hài lòng, tin tưởng hợp tác từ những khách hàng khó tính nhất</p>
                </div>

                <div className="product-menu">
                    <a href="/" className="active">Tất cả</a>
                    <a href="/">Chung cư</a>
                    <a href="/">Nhà phố</a>
                    <a href="/">Biệt thự</a>
                </div>
                
                <div className="product-grid">
                    <div className="grid-wrapper">
                        {project.map(project => (
                            <div className="product-card">
                                <img src={project.thumb} className="product-img" alt="img" />
                                <div className="card-text">
                                    <span>{project.name}</span>
                                    <p>Xem chi tiết <span>&#8594;</span></p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Quy trình làm viêc */}
            <div className="work-container">
                <div className="img-bg">
                    <img src="https://bizweb.dktcdn.net/100/458/161/themes/894921/assets/bg_procedure.jpg?1701684207191" alt="" />
                </div>
                <span className="title">Quy trình làm việc</span>
                <div className="carousel-container">
                    <Carousel className="carousel" breakPoints={breakPoints} pagination={false} showArrows={false} enableAutoPlay={true}>
                        <div className="item">
                            <img src="https://bizweb.dktcdn.net/100/458/161/themes/894921/assets/procedure1.svg?1701684207191" alt="" />
                            <span>tư vấn khách hàng</span>
                        </div>
                    
                        <div className="item">
                            <img src="https://bizweb.dktcdn.net/100/458/161/themes/894921/assets/procedure2.svg?1701684207191" alt="" />
                            <span>thiết kế 3d miễn phí</span>
                        </div>   

                        <div className="item">
                            <img src="https://bizweb.dktcdn.net/100/458/161/themes/894921/assets/procedure3.svg?1701684207191" alt="" />
                            <span>tiến hành thi công</span>                          
                        </div>
                    </Carousel>
                </div>
            </div>

            {/* Price */}
            <div className="price-section">
                <div className="price-container">
                    <div className="price-text">
                        <h1>Báo giá thi công</h1>
                        <p>Các gói thi công được chúng tôi phân tích theo từng hạng mục riêng, phù hợp với nhu cầu ngân sách của mỗi gia đình.<br></br>Để tối ưu, tiết kiệm ngân sách cho mỗi công trình, dự án.</p>
                    </div>
                    <div className="carousel-container">
                        <Carousel className="carousel" breakPoints={breakPoints} pagination={false} showArrows={false}>
                            <div className="item">
                                <div className="item-wrapper">
                                    <div className="item-title">
                                        <h1>gói thi công tiết kiệm</h1>
                                        <p>Kinh phí dự kiến: 80 - 120 triệu</p>
                                    </div>
                                    <div className="item-info">
                                        <ul>
                                            <li className="desc">Phong cách hiện đại, Colour Block, Bắc Âu</li>
                                            <li className="desc">Chất liệu MDF chống ẩm Thái Lan, An Cường phủ Melamine</li>
                                            <li className="desc">Thi công đúng tiến độ</li>
                                            <li className="desc">Giám sát hoàn thiện 24/7</li>
                                            <li className="desc">Hạng mục thi công: Đồ nội thất, đồ trang trí, thi công hạng mục cải tạo thô</li>
                                        </ul>
                                    </div>
                                    <button className="sub-btn">
                                        <a href="/">Đăng kí ngay</a>
                                    </button>
                                </div>
                            </div>

                           <div className="item">
                                <div className="item-wrapper">
                                    <div className="item-title">
                                        <h1>gói thi công tiêu chuẩn</h1>
                                        <p>Kinh phí dự kiến: 300 - 500 triệu</p>
                                    </div>
                                    <div className="item-info">
                                        <ul>
                                            <li className="desc">Phong cách Luxury, tân cổ điển, đương đại</li>
                                            <li className="desc">Chất liệu MDF chống ẩm An Cường phủ Melamine, Acrylic hoặc phun sơn cao cấp</li>
                                            <li className="desc">Thi công đúng tiến độ</li>
                                            <li className="desc">Giám sát hoàn thiện 24/7</li>
                                            <li className="desc">Hạng mục thi công: Đồ nội thất, đồ trang trí, thi công hạng mục cải tạo thô</li>
                                        </ul>
                                    </div>
                                    <button className="sub-btn">
                                        <a href="/">Đăng kí ngay</a>
                                    </button>
                                </div>
                            </div>

                            <div className="item">
                                <div className="item-wrapper">
                                    <div className="item-title">
                                        <h1>gói thi công tiết kiệm</h1>
                                        <p>Kinh phí dự kiến: 500 - 1 tỷ</p>
                                    </div>
                                    <div className="item-info">
                                        <ul>
                                            <li className="desc">Phong cách tân cổ điển, Modern Luxury, ...</li>
                                            <li className="desc">Chất liệu MDF chống ẩm An Cường phủ Melamine, gỗ tự nhiên nhập khẩu</li>
                                            <li className="desc">Thi công đúng tiến độ, hồ sơ cấp phép</li>
                                            <li className="desc">Giám sát hoàn thiện 24/7</li>
                                            <li className="desc">Hạng mục thi công: Đồ nội thất, đồ trang trí, cải tạo thô</li>
                                        </ul>
                                    </div>
                                    <button className="sub-btn">
                                        <a href="/">Đăng kí ngay</a>
                                    </button>
                                </div>
                            </div>
                        </Carousel>
                    </div>           
                </div>
            </div>
        </div>  
    )
    
}

export default Home




