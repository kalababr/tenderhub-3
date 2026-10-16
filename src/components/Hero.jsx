import Words from './Words'
import { useLang } from '../i18n/LanguageContext'
import categories from '../data/categories'
import regions from '../data/regions'

export default function Hero() {
  const { t, tr } = useLang()
  return (
    <section className="hero">
      <div className="wrap">
        <h1><Words className="w" text={t('hero.title')} /></h1>
        <p className="sub">{t('hero.sub')}</p>
        <form className="search" role="search" onSubmit={(e) => e.preventDefault()}>
          <input type="search" placeholder={t('hero.placeholder')} aria-label={t('hero.searchAria')} />
          <select aria-label={t('hero.categoryAria')}>
            <option value="">{t('hero.allCategories')}</option>
            {categories.map((c) => (
              <option key={c.id} value={c.id}>{tr(c.name)}</option>
            ))}
          </select>
          <select aria-label={t('hero.regionAria')}>
            <option value="">{t('hero.allRegions')}</option>
            {regions.map((r) => (
              <option key={r.id} value={r.id}>{tr(r.name)}</option>
            ))}
          </select>
          <button className="btn" type="submit">{t('hero.searchBtn')}</button>
        </form>
        <div className="stats">
          {t('hero.stats').map((s, i) => (
            <div key={i}><strong>{s.value}</strong><span>{s.label}</span></div>
          ))}
        </div>
      </div>
    </section>
  )
}