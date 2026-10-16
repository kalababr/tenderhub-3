import { useLang } from '../i18n/LanguageContext'
import plans from '../data/plans'

export default function Advertise() {
  const { t, tr } = useLang()
  return (
    <section className="s" id="advertise">
      <div className="wrap">
        <div className="head">
          <h2>{t('advertise.title')}</h2>
          <p>{t('advertise.sub')}</p>
        </div>
        <div className="promo">
          {plans.map((p) => (
            <div className={p.hot ? 'plan hot' : 'plan'} key={p.id}>
              <h3>{tr(p.title)}</h3>
              <p>{tr(p.blurb)}</p>
              <ul>{tr(p.features).map((f) => <li key={f}>{f}</li>)}</ul>
              <a className="btn sm" style={{ alignSelf: 'flex-start', marginTop: 'auto' }} href="#">{tr(p.cta)}</a>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}