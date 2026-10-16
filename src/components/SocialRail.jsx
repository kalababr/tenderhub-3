import { useLang } from '../i18n/LanguageContext'
import socials from '../data/socials'

export default function SocialRail() {
  const { t } = useLang()
  return (
    <aside className="rail" aria-label={t('social.aria')}>
      {socials.map(({ name, href, Icon }) => (
        <a key={name} href={href} target="_blank" rel="noopener noreferrer" aria-label={name} title={name}>
          <Icon />
        </a>
      ))}
    </aside>
  )
}