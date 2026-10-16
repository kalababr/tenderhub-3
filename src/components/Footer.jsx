import { useLang } from '../i18n/LanguageContext'
import socials from '../data/socials'

const links = [
  ['tenders', '#tenders'],
  ['directory', '#directory'],
  ['advertise', '#advertise'],
  ['about', '#'],
  ['contact', '#contact'],
  ['terms', '#'],
]

export default function Footer() {
  const { t } = useLang()
  return (
    <footer>
      <div className="wrap">
        <span>© 2026 Tender</span>
        <nav aria-label={t('footer.aria')}>
          {links.map(([key, href]) => (
            <a href={href} key={key}>{t(`footer.${key}`)}</a>
          ))}
        </nav>
        <div className="footer-social">
          {socials.map(({ name, href, Icon }) => (
            <a key={name} href={href} target="_blank" rel="noopener noreferrer" aria-label={name}>
              <Icon />
            </a>
          ))}
        </div>
      </div>
    </footer>
  )
}