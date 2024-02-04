import Slider from 'react-slick'

const settings = {
  dots: false,
  infinite: true,
  autoplay: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
}
function Slide() {
  return (
    <div className="slide">
      <div className="slide-top">
        <Slider {...settings}>
          <div className="hide-focus">
            <img
              src="https://topzone.maugiaodien.com/wp-content/uploads/2023/08/webmau16.com-1688961619056-808x340_Main-Banner.webp"
              alt=""
            />
          </div>
          <div className="hide-focus">
            <img
              src="https://topzone.maugiaodien.com/wp-content/uploads/2023/08/webmau16.com-1686188522620-808x340_Main-Banner.webp"
              alt=""
            />
          </div>
          <div className="hide-focus">
            <img
              src="https://topzone.maugiaodien.com/wp-content/uploads/2023/08/webmau16.com-1686212271970-808x340_Main-Banner-iPhone-12-Pro-_-Pro-Max.webp"
              alt=""
            />
          </div>
          <div className="hide-focus">
            <img
              src="https://topzone.maugiaodien.com/wp-content/uploads/2023/08/webmau16.com-1686212268206-808x340_Main-Banner-iPad-Gen-9.webp"
              alt=""
            />
          </div>
          <div className="hide-focus">
            <img
              src="https://topzone.maugiaodien.com/wp-content/uploads/2023/08/webmau16.com-1686212262551-808x340_Main-Banner-Apple-Watch-Series-8.webp"
              alt=""
            />
          </div>
        </Slider>
      </div>
      <div className="slide-content">
        <ul className="slide-list">
          <li className="slide-item">Sale tưng bừng - Mừng khai trương</li>
          <li className="slide-item">Giảm giá sốc - Sale tận gốc</li>
          <li className="slide-item">Iphone 12 Pro Chỉ từ 10.9 triệu</li>
          <li className="slide-item">Ipad Air giá rẻ- Sale sập sàn</li>
          <li className="slide-item">Đồng hồ giá rẻ- Giảm khô máu</li>
        </ul>
      </div>
    </div>
  )
}

export default Slide
