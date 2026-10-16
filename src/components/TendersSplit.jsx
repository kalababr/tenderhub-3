import Words from './Words'
import { useLang } from '../i18n/LanguageContext'
import tenders from '../data/tenders'

export default function TendersSplit() {
  const { t, tr } = useLang()
  return (
    <section className="split" id="tenders">
      <div className="l">
        <h2><Words className="hw" text={t('tenders.heading')} /></h2>
        <div>
          <p style={{ marginBottom: 28 }}>
            <strong>{t('tenders.lead')}</strong> {t('tenders.body')}
          </p>
          <a className="btn light" href="#">{t('tenders.browse')}</a>
        </div>
      </div>
      <div className="feed" aria-label={t('tenders.latest')}>
        <h3>{t('tenders.latest')}</h3>
        {tenders.map((x) => (
          <a className="tender" href="#" key={x.id}>
            <b>{tr(x.title)}</b>
            <small>{tr(x.buyer)} · {tr(x.category)}</small>
            <div className="due"><em>{x.daysLeft} {t('tenders.days')}</em>{t('tenders.left')}</div>
          </a>
        ))}
      </div>
    </section>
  )
}