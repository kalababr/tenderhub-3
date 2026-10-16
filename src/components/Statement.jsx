import Words from './Words'
import { useLang } from '../i18n/LanguageContext'

export default function Statement() {
  const { t } = useLang()
  return (
    <div className="pin">
      <section className="statement">
        <p><Words className="sw" highlightLast={4} text={t('statement.text')} /></p>
      </section>
    </div>
  )
}