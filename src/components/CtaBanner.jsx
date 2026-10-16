import { useLang } from '../i18n/LanguageContext'

export default function CtaBanner() {
  const { t } = useLang()
  return (
    <section className="cta">
      <h2>{t('cta.title')}</h2>
      <a className="btn light" href="#">{t('cta.button')}</a>
    </section>
  )
}