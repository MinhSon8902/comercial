import React from 'react'
import { useTranslation } from 'react-i18next'
import payMent from 'src/assets/images/payment-2.png'
import logo from 'src/assets/images/logo-DTV_cn1.webp'

function Footer() {
  const { t } = useTranslation()
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-container">
          <div className="footer-list">
            <div className="footer-item">
              <h2 className="footer-heading">{t('footer.a')}</h2>
              <p className="footer-text">{t('footer.b')}</p>
              <p className="footer-text">{t('footer.c')}</p>
              <p className="footer-text">{t('footer.d')}</p>
              <h2 className="footer-heading">{t('footer.e')}</h2>
              <img src={payMent} className="footer-payment" alt="" />
            </div>
            <div className="footer-item">
              <h2 className="footer-heading">{t('footer.a')}</h2>
              <p className="footer-text">{t('footer.f')}</p>
              <p className="footer-text">{t('footer.g')}</p>
              <p className="footer-text">{t('footer.h')}</p>
              <h2 className="footer-heading">{t('footer.i')}</h2>
              <p className="footer-text">{t('footer.k')}</p>
              <img className="footer-img" src={logo} alt="" />
            </div>
            <div className="footer-item">
              <h2 className="footer-heading">{t('footer.a')}</h2>
              <p className="footer-text">{t('footer.l')}</p>
              <p className="footer-text">{t('footer.m')}</p>
              <p className="footer-text">{t('footer.n')}</p>
              <p className="footer-text">{t('footer.o')}</p>
              <p className="footer-text">{t('footer.p')}</p>
              <p className="footer-text">{t('footer.q')}</p>
              <p className="footer-text">{t('footer.r')}</p>
              <p className="footer-text">{t('footer.s')}</p>
              <p className="footer-text">{t('footer.v')}</p>
            </div>
            <div className="footer-item">
              <h2 className="footer-heading">{t('footer.a')}</h2>
              <p className="footer-text">{t('footer.aa')}</p>
              <p className="footer-text">{t('footer.bb')}</p>
              <p className="footer-text">{t('footer.cc')}</p>
              <p className="footer-text">{t('footer.dd')}</p>
              <p className="footer-text">{t('footer.ee')}</p>
              <p className="footer-text">{t('footer.ff')}</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

Footer.propTypes = {}

export default Footer
