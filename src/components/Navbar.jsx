import { useLang } from '../i18n/LanguageContext'
import LangToggle from './LangToggle'

const links = [
  ['tenders', '#tenders'],
  ['directory', '#directory'],
  ['advertise', '#advertise'],
  ['categories', '#directory'],
  ['news', '#news'],
]

export default function Navbar() {
  const { t } = useLang()
  return (
    <header className="nav">
      <a className="" href="#"><i></i>Tender</a>
      <nav className="links" aria-label={t('nav.aria')}>
        {links.map(([key, href]) => (
          <a href={href} key={key}>{t(`nav.${key}`)}</a>
        ))}
      </nav>
      <div className="right">
        <LangToggle />
        <a href="#">{t('nav.login')}</a>
        <a className="btn sm cta-nav" href="#">{t('nav.post')}</a>
      </div>
    </header>
  )
}