import React, {useState} from 'react'
import {useParams} from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/navigation';
import 'swiper/css/thumbs';
import './projectdetail.scss'
import project from '../../data/project.json'
import Breadcrumbs from '../Breadcrumbs/Breadcrumbs';
import { FreeMode, Navigation, Thumbs } from 'swiper/modules';



const ProjectDetail = () => {
  const {name} = useParams()
  const thisProject = project.find(project => project.name === name)
  // const { images } = thisProject;

  let images = []; 

  if (thisProject && thisProject.images) {
    images = thisProject.images; 
  }

  const [thumbsSwiper, setThumbsSwiper] = useState(null);

  const [activeIndex, setActiveIndex] = useState(0);
  const handleSlideChange = (swiper) => {
    setActiveIndex(swiper.activeIndex);
  };
  
  if (!thisProject) {
  // Xử lý khi không tìm thấy dự án
    return <div>Dự án không tồn tại</div>;
  }

  return (
    <div className='projectDetail-section'>
      <Breadcrumbs></Breadcrumbs>

      <div className="projectDetail-container">
        <div className="projectSwiper">
          <div className="main-swiper">
            <Swiper
              loop={false}
              navigation={true}
              thumbs={{ swiper: thumbsSwiper && !thumbsSwiper.destroyed ? thumbsSwiper : null }}
              modules={[FreeMode, Navigation, Thumbs]}
              onSlideChange={handleSlideChange}
              className="mySwiper"
            >
              {images.map((img, index) => (
                <SwiperSlide key={index}>
                  <img src={img} alt={`Image ${index + 1}`} />
                </SwiperSlide>
              ))}
            </Swiper>
          </div>

          <div className="thumb-swiper">
            <Swiper
              onSwiper={setThumbsSwiper}
              navigation={false}
              slidesPerView={4}
              freeMode={true}
              watchSlidesVisibility={true}
              watchSlidesProgress={true}
              className='mySwiper2'
              >
              {images.map((image, index) => (
                <SwiperSlide key={index} className="slide">
                  <div className={`img-container ${index === activeIndex ? 'active' : ''}`}>
                    <img src={image} alt={`Thumb ${index + 1}`} />
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>

        <div className="projectInfo">

          <div className="info-wraper">
            <p className='project-title'>{thisProject.name}</p>
            <div className='info-item'>
              <span>Mã sản phẩm: </span>
              <p>{thisProject.masp}</p>
            </div>
            <div className='info-item'>
              <span>Thương hiệu: </span>
              <p>{thisProject.brand}</p>
            </div>
          </div>

          <div className="contact-wraper">
            <p className='contact-title'>Liên hệ</p>
            <div className='contact-item'>
              <span>Hỗ trợ trực tuyến tốt nhất: <a href="tel:19006750">1900 6750</a></span>
            </div>
            <div className='contact-item'> 
              <span>Cần tư vấn: <a className='link-contact' href="/contact">Tại đây</a></span>
            </div>
            <div className='contact-item'>
              <span>Giờ làm việc:</span>
              <p>9h00 - 21h00 các ngày trong tuần.</p>
            </div>
          </div>
        </div>
      </div>

      <div className="desc-section">

        <div className="desc-wraper">

          <div className='desc-title'>
            <p>Thông tin về căn hộ</p>
          </div>

          <div className="desc-text">
            <p>{thisProject.desc}</p>
          </div>
        </div>

      </div>

    </div>
  );
};

export default ProjectDetail;