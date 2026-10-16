import { useLang } from '../i18n/LanguageContext'
import news from '../data/news'

export default function News() {
  const { lang, t, tr } = useLang()
  const fmt = new Intl.DateTimeFormat(lang === 'am' ? 'am-ET' : 'en-US', {
    year: 'numeric',
    month: 'short',
    day: 'numeric',
  })

  return (
    <section className="s" id="news">
      <div className="wrap">
        <div className="head">
          <h2>{t('news.title')}</h2>
          <p>{t('news.sub')}</p>
        </div>
        <div className="news">
          {news.map((n) => (
            <a className="post" href="#" key={n.id}>
              <div className="meta">
                <span className="tag">{tr(n.tag)}</span>
                <time dateTime={n.date}>{fmt.format(new Date(n.date))}</time>
              </div>
              <h3>{tr(n.title)}</h3>
              <span className="more">{t('news.read')}</span>
            </a>
          ))}
        </div>
        <div className="news-foot">
          <a className="btn" href="#">{t('news.viewAll')}</a>
        </div>
      </div>
    </section>
  )
}