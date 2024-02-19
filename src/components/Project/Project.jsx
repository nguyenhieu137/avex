import React, { useState, useEffect } from "react"
import { Link } from "react-router-dom";
import Breadcrumbs from "../Breadcrumbs/Breadcrumbs"
import './project.scss'
import project from '../../data/project.json'
import { CiSearch } from "react-icons/ci";
import { FaFilter } from "react-icons/fa";
import { IoCloseOutline } from "react-icons/io5";

const Project = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [isSmallScreen, setIsSmallScreen] = useState(window.innerWidth < 1000);
    const [brands, setBrands] = useState([]);
    const [filteredProjects, setFilteredProjects] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');
    const [selectedBrands, setSelectedBrands] = useState([]);

    useEffect(() => {
        // Tạo danh sách các thương hiệu duy nhất
        const brandsSet = new Set();
        project.forEach(project => {
            brandsSet.add(project.brand);
        });
        const uniqueBrands = Array.from(brandsSet);
        setBrands(uniqueBrands);
    }, []);

    useEffect(() => {
        const handleResize = () => {
        const smallScreen = window.innerWidth < 1000;
        setIsSmallScreen(smallScreen);

        if (!smallScreen) {
            // Đóng modal nếu màn hình trở lên lớn hơn 1000px
            closeModal();
        }
    };

    window.addEventListener("resize", handleResize);

    return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, [isModalOpen]);

    const openModal = () => {
        setIsModalOpen(true);
    };

    const closeModal = () => {
        const modal = document.querySelector('.sidebar-modal');
        if (modal) {
            modal.classList.add('closing');
            setIsModalOpen(true);
        
            setTimeout(() => {
                setIsModalOpen(false);
                modal.classList.remove('open', 'closing');
            }, 450);
        } else {
            setIsModalOpen(false);
        }
    };
    useEffect(() => {
        // Đóng modal khi màn hình trở lên lớn hơn 1000px
        if (!isSmallScreen) {
        closeModal();
    }
    }, [isSmallScreen]);

    // Lọc dự án dựa trên từ khóa tìm kiếm và thương hiệu được chọn
    useEffect(() => {
        const filtered = project.filter((item) => {
            // Kiểm tra từ khóa tìm kiếm
            const isSearched = item.name.toLowerCase().includes(searchTerm.toLowerCase());

            // Kiểm tra thương hiệu được chọn
            const isBrandSelected = selectedBrands.length === 0 || selectedBrands.includes(item.brand);

            return isSearched && isBrandSelected;
        });
        setFilteredProjects(filtered);
    }, [searchTerm, selectedBrands]);

    useEffect(() => {
        // Lấy danh sách thương hiệu duy nhất từ dữ liệu dự án
        const uniqueBrands = Array.from(new Set(project.map(item => item.brand)));
        setBrands(uniqueBrands);
    }, []);

    // Hàm xử lý sự kiện khi thay đổi từ khóa tìm kiếm
    const handleSearchChange = (e) => {
        setSearchTerm(e.target.value);
    };

    // Hàm xử lý sự kiện khi chọn thương hiệu
    const handleBrandChange = (brand) => {
        const index = selectedBrands.indexOf(brand);
        if (index === -1) {
            setSelectedBrands([...selectedBrands, brand]);
        } else {
            const updatedBrands = [...selectedBrands];
            updatedBrands.splice(index, 1);
            setSelectedBrands(updatedBrands);
        }
    };

    return(
        <div className="project-section">
            <Breadcrumbs></Breadcrumbs>

            <div className="project-container">
                <div className=" filter-section">
                    <div className="filter-brand">
                        <div className="filter-title">
                            <h2>THƯƠNG HIỆU</h2>
                        </div>
                        <div className="searchbox">
                            <input type="text" placeholder="Tìm kiếm..."/>
                            <CiSearch className="icon"></CiSearch>
                        </div>

                        <div className="filter-check">
                            {brands.map((brand, index) => (
                                <div className="check-item" key={index}>
                                    <input
                                        type="checkbox"
                                        id={`checkbox-${index}`}
                                        checked={selectedBrands.includes(brand)}
                                        onChange={() => handleBrandChange(brand)}
                                    />
                                    <label htmlFor={`checkbox-${index}`}>{brand}</label>
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className="sidebar-banner">
                        <img src="https://bizweb.dktcdn.net/100/458/161/themes/894921/assets/banner_sidebar.jpg?1701684207191" alt="" />
                    </div>
                </div>

                <div className="product-container">
                    <div className="product-title">
                        <h2>Dự án</h2>
                    </div>
                    <div className="product-grid">
                        <div className="grid-wrapper">
                            {filteredProjects.map((project, index) => {
                                return(
                                    <Link to= {`/${encodeURIComponent(project.name)}`} className="product-card-link">
                                        <div className="product-card">
                                            <img src={project.thumb} className="product-img" alt="img" />
                                            <div className="card-text">
                                                <span>{project.name}</span>
                                                <p>Xem chi tiết <span>&#8594;</span></p>
                                            </div>
                                        </div>
                                    </Link>    
                                )
                            })}
                        </div>
                    </div>
                </div>
            </div>
            

            {/* Nút mở modal (hiển thị khi màn hình nhỏ hơn 1000px) */}
            {isSmallScreen && (
                <button className="open-modal-button" onClick={openModal}>
                    <FaFilter className="icon"></FaFilter>
                </button>
            )}

            {/* Modal */}
            {isModalOpen && (
                <div className={`sidebar-modal ${isModalOpen ? 'open' : ''}`}>
                    <div className="modal-content">
                        <div className=" filter-section">
                            <div className="filter-brand">
                                <div className="filter-title">
                                    <h2>THƯƠNG HIỆU</h2>
                                </div>
                                <div className="searchbox">
                                    <input type="text" placeholder="Tìm kiếm..."/>
                                    <CiSearch className="icon"></CiSearch>
                                </div>

                                <div className="filter-check">
                                    {brands.map((brand, index) => (
                                        <div className="check-item" key={index}>
                                            <input
                                                type="checkbox"
                                                id={`checkbox-${index}`}
                                                checked={selectedBrands.includes(brand)}
                                                onChange={() => handleBrandChange(brand)}
                                            />
                                            <label htmlFor={`checkbox-${index}`}>{brand}</label>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                        <button className={`close-modal-button ${isModalOpen ? 'closing' : ''}`} onClick={closeModal}>
                            <IoCloseOutline className="icon"></IoCloseOutline>
                        </button>
                    </div>
                </div>
            )}
        </div>
    )   
}

export default Project