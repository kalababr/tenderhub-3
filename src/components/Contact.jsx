import { useState } from 'react'
import { useLang } from '../i18n/LanguageContext'

const EMAIL = 'example@youremail.com' 
const PHONE = '+251 9123456789' 

export default function Contact() {
  const { t } = useLang()
  const [sent, setSent] = useState(false)

  function handleSubmit(e) {
    e.preventDefault()
    setSent(true)
    e.currentTarget.reset()
  }

  return (
    <section className="s" id="contact">
      <div className="wrap contact">
        <div>
          <h2>{t('contact.title')}</h2>
          <p className="lead">{t('contact.sub')}</p>
          <ul>
            <li><span>{t('contact.emailLabel')}</span><a href={`mailto:${EMAIL}`}>{EMAIL}</a></li>
            <li><span>{t('contact.phoneLabel')}</span><a href={`tel:${PHONE.replace(/\s/g, '')}`}>{PHONE}</a></li>
            <li><span>{t('contact.addressLabel')}</span><b>{t('contact.address')}</b></li>
          </ul>
        </div>
        <form onSubmit={handleSubmit}>
          <label>{t('contact.name')}<input name="name" type="text" required autoComplete="name" /></label>
          <label>{t('contact.email')}<input name="email" type="email" required autoComplete="email" /></label>
          <label>{t('contact.message')}<textarea name="message" required /></label>
          <button className="btn" type="submit">{t('contact.send')}</button>
          {sent && <p className="ok" role="status">{t('contact.sent')}</p>}
        </form>
      </div>
    </section>
  )
}