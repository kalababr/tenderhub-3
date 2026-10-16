import { useLang } from '../i18n/LanguageContext'
import categories from '../data/categories'

export default function Directory() {
  const { t, tr } = useLang()
  return (
    <section className="s" id="directory">
      <div className="wrap">
        <div className="head">
          <h2>{t('directory.title')}</h2>
          <p>{t('directory.sub')}</p>
        </div>
        <div className="grid">
          {categories.map((c) => (
            <a className="cell" href="#" key={c.id}>
              <svg viewBox="0 0 24 24">{c.icon}</svg>
              <div><b>{tr(c.name)}</b><span>{c.count} {t('directory.businesses')}</span></div>
            </a>
          ))}
          <a className="cell" href="#" style={{ background: 'var(--surface)' }}>
            <div><b>{t('directory.seeAll')}</b><span>{t('directory.seeAllSub')}</span></div>
          </a>
        </div>
      </div>
    </section>
  )
}