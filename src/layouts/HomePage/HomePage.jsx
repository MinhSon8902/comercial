import React from 'react'
import MenuCategories from 'src/features/Menu'
import Slide from 'src/features/Slide'
import Support from '../Support'
import OfferFeatures from 'src/features/Offer'
import ListPages from 'src/features/Product/Pages/ListPages'
import footerBanner from 'src/assets/images/footer-banner.webp'
import Slider from 'react-slick'

export const HomePage = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  }
  return (
    <main>
      <section className="intro">
        <div className="container slide-responsive">
          <Slider {...settings}>
            <img
              src="https://topzone.maugiaodien.com/wp-content/uploads/2021/11/eries-7-.webp"
              alt=""
            />

            <img
              alt=""
              src="https://topzone.maugiaodien.com/wp-content/uploads/2021/11/Untitled-6.webp"
            />
          </Slider>
        </div>
        <div className="container navigation-container">
          <MenuCategories />
          <Slide />
          <Support />
        </div>
      </section>
      <section className="category">
        <div className="container">
          <h3 className="category-title">Danh Mục</h3>
          <div className="category-list">
            <div className="category-item">
              <img
                alt=""
                src="https://topzone.maugiaodien.com/wp-content/uploads/2021/11/icon-menu-3.svg"
                className="category-img"
              />
              <span className="category-text">Điện Thoại</span>
            </div>
            <div className="category-item">
              <img
                className="category-img"
                alt=""
                src="https://topzone.maugiaodien.com/wp-content/uploads/2021/11/icon-menu-380.svg"
              />
              <span className="category-text">Apple</span>
            </div>
            <div className="category-item">
              <img
                className="category-img"
                alt=""
                src="https://topzone.maugiaodien.com/wp-content/uploads/2021/11/icon-menu-4.svg"
              />
              <span className="category-text">Table</span>
            </div>
            <div className="category-item">
              <img
                className="category-img"
                alt=""
                src="https://topzone.maugiaodien.com/wp-content/uploads/2021/11/icon-menu-220.svg"
              />
              <span className="category-text">Âm Thanh</span>
            </div>
            <div className="category-item">
              <img
                className="category-img"
                alt=""
                src="https://topzone.maugiaodien.com/wp-content/uploads/2021/11/icon-menu-610.svg"
              />
              <span className="category-text">Đồng Hồ</span>
            </div>
            <div className="category-item">
              <img
                className="category-img"
                alt=""
                src="https://topzone.maugiaodien.com/wp-content/uploads/2021/11/icon-menu-845.svg"
              />
              <span className="category-text">Nhà Thông Minh</span>
            </div>
            <div className="category-item">
              <img
                className="category-img"
                alt=""
                src="https://topzone.maugiaodien.com/wp-content/uploads/2021/11/icon-menu-30.svg"
              />
              <span className="category-text">Phụ Kiện</span>
            </div>
            <div className="category-item">
              <img
                className="category-img"
                alt=""
                src="https://topzone.maugiaodien.com/wp-content/uploads/2021/11/icon-menu-tcdm.svg"
              />
              <span className="category-text">Thu Cũ</span>
            </div>
            <div className="category-item">
              <img
                className="category-img"
                alt=""
                src="https://topzone.maugiaodien.com/wp-content/uploads/2021/11/icon-menu-29.svg"
              />
              <span className="category-text">Hàng Cũ</span>
            </div>
            <div className="category-item">
              <img
                className="category-img"
                alt=""
                src="https://topzone.maugiaodien.com/wp-content/uploads/2021/11/icon-menu-123.svg"
              />
              <span className="category-text">Sim Thẻ</span>
            </div>
            <div className="category-item">
              <img
                className="category-img"
                alt=""
                src="https://topzone.maugiaodien.com/wp-content/uploads/2021/11/icon-menu-tech-3.svg"
              />
              <span className="category-text">Tin Công Nghệ</span>
            </div>
            <div className="category-item">
              <img
                className="category-img"
                alt=""
                src="https://topzone.maugiaodien.com/wp-content/uploads/2021/11/icon-menu-promotion.svg"
              />
              <span className="category-text">Sim Thẻ</span>
            </div>
          </div>
        </div>
      </section>
      <section className="topsale">
        <div className="container">
          <ListPages typeCss="product-yellow" heading="TOP DEAL BÁN CHẠY" />
        </div>
      </section>
      <section className="offer">
        <div className="container">
          <OfferFeatures />
        </div>
      </section>
      <section className="topsale">
        <div className="container">
          <ListPages typeCss="product-blue" heading="APPLE CHÍNH HÃNG VINA" />
        </div>
      </section>
      <section className="offer">
        <div className="container">
          <OfferFeatures />
        </div>
      </section>
      <section className="topsale">
        <div className="container">
          <ListPages typeCss="product-gray" heading="APPLE CHÍNH HÃNG VINA" />
        </div>
      </section>
      <section className="offer">
        <div className="container">
          <OfferFeatures />
        </div>
      </section>
      <section className="topsale">
        <div className="container">
          <ListPages typeCss="product-graydark" heading="APPLE CHÍNH HÃNG VINA" />
        </div>
      </section>
      <div
        className="container"
        style={{
          borderRadius: '10px',
          overflow: 'hidden',
          marginBottom: '10px',
        }}
      >
        <div className="footer-banner">
          <img src={footerBanner} alt="footer" />
        </div>
      </div>
    </main>
  )
}
