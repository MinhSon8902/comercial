import { Select } from 'antd'
import { useTranslation } from 'react-i18next'

function LanguageSelector() {
  const { i18n } = useTranslation()

  const handleChange = (value) => {
    i18n.changeLanguage(value)
  }

  return (
    <Select
      defaultValue="VI"
      style={{
        width: 60,
      }}
      onChange={handleChange}
      options={[
        { value: 'vi', label: 'VI' },
        { value: 'en', label: 'EN' },
      ]}
    />
  )
}

export default LanguageSelector
