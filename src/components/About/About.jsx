import React from "react"
import './about.scss'
import Breadcrumbs from "../Breadcrumbs/Breadcrumbs"


const About = () => {
    return(

        <div className="about-section">
            <Breadcrumbs></Breadcrumbs>
            <div className="about-text-container">
                <div className="about-text">
                    <div className="about-title">
                        <h1>Về chúng tôi</h1>
                    </div>
                    <div className="about-p">
                        <p>Avex Construction là một nhà cung cấp chuyên nghiệp, chúng tôi xem mục đích đáp ứng nhu cầu khách hàng là nguyên tắc chính và kim chỉ nam trong hoạt động kinh doanh của mình. Vì vậy chúng tôi liên tục tìm kiếm các nhà cung cấp nổi tiếng uy tín trên toàn thế giới để cung cấp cho khách hàng các sản phẩm tốt nhất.</p>
                    </div>
                    <div className="about-p">
                        <p>Công ty chúng tôi có đầy đủ máy móc thiết bị và dây chuyền công nghệ tân tiến, đảm bảo chất lượng theo tiêu chuẩn quốc tế, quản lý chặt chẽ từ nguyên liệu đầu vào cho đến sản phẩm đầu ra trong một quy trình quy mô và khép kín. Bằng những nỗ lực đó, chúng tôi đã được tập đoàn TuvNord kiểm định và cấp chứng chỉ ISO 9001 : 2015 về hệ thống quản lý chất lượng và ISO 14000 : 2015 về môi trường.</p>
                    </div>
                    <div className="about-p">
                        <p>Avex Construction đang sản xuất các loại dụng cụ cầm tay chất lượng cao như kìm cắt, kìm điện, kìm mũi dài xuất khẩu sang thị trường châu Mỹ và Châu Âu. Với mong muốn đem đến cho người tiêu dùng sản phẩm Made in Vietnam nhưng chất lượng Đức. Chúng tôi đã đầu tư dây chuyền máy móc thiết bị sản xuất và kiểm tra hiện đại theo công nghệ của cộng hoà liên bang Đức. Sản phẩm kìm mang thương hiệu EMC có tuổi thọ cao, mẫu mã đẹp chắc chắn sẽ làm hài lòng tất cả những ai sử dụng. Là Người Việt nam hãy tin tưởng và ủng hộ hàng VIỆT NAM CHẤT LƯỢNG CAO các bạn nhé.</p>
                    </div>
                </div>
            </div>
        </div>

    )   
}

export default About