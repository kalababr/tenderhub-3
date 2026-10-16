import { useLang } from '../i18n/LanguageContext'

export default function LangToggle() {
  const { lang, setLang, t } = useLang()
  return (
    <div className="lang" role="group" aria-label={t('nav.language')}>
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <circle cx="12" cy="12" r="9" />
        <path d="M3 12h18M12 3c3 3 3 15 0 18M12 3c-3 3-3 15 0 18" />
      </svg>
      <button type="button" lang="en" aria-pressed={lang === 'en'} onClick={() => setLang('en')}>
        <span className="full">English</span><span className="short">EN</span>
      </button>
      <button type="button" lang="am" aria-pressed={lang === 'am'} onClick={() => setLang('am')}>
        <span className="full">አማርኛ</span><span className="short">አማ</span>
      </button>
    </div>
  )
}