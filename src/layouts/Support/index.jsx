import { useTranslation } from 'react-i18next'
import iconBox from 'src/assets/images/icon-box.png'
import iconBox1 from 'src/assets/images/ICON.svg'
import iconBox2 from 'src/assets/images/SVG0.svg'
import iconBox3 from 'src/assets/images/SVG1.svg'
import iconBox4 from 'src/assets/images/SVG3.svg'
import iconBox5 from 'src/assets/images/a1.svg'

function Support() {
  const { t } = useTranslation()

  return (
    <div className="support">
      <div className="support-list">
        <div className="support-item">
          <span className="support-icon">
            <img alt="" src={iconBox1} />
          </span>
          <div className="support-desc">
            <span>{t('support.a')}</span>
            <span>{t('support.b')}</span>
          </div>
        </div>
        <div className="support-item">
          <span className="support-icon">
            <img alt="" src={iconBox2} />
          </span>
          <div className="support-desc">
            <span>{t('support.c')}</span>
            <span>{t('support.d')}</span>
          </div>
        </div>
        <div className="support-item">
          <span className="support-icon">
            <img alt="" src={iconBox3} />
          </span>
          <div className="support-desc">
            <span>{t('support.e')}</span>
            <span>{t('support.f')}</span>
          </div>
        </div>
        <div className="support-item">
          <span className="support-icon">
            <img alt="" src={iconBox4} />
          </span>
          <div className="support-desc">
            <span>{t('support.g')}</span>
            <span>{t('support.h')}</span>
          </div>
        </div>
        <div className="support-item">
          <span className="support-icon">
            <img alt="" src={iconBox5} />
          </span>
          <div className="support-desc">
            <span>{t('support.a')}</span>
            <span>{t('support.b')}</span>
          </div>
        </div>
      </div>
      <img className="support-img" src={iconBox} alt="" />
    </div>
  )
}

Support.propTypes = {}

export default Support
