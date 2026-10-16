import { useEffect, useRef, useState } from 'react'
import { useLang } from '../i18n/LanguageContext'

export default function ChatWidget() {
  const { t } = useLang()
  const [open, setOpen] = useState(false)
  const [draft, setDraft] = useState('')
  const [msgs, setMsgs] = useState([])
  const listRef = useRef(null)

  useEffect(() => {
    if (listRef.current) listRef.current.scrollTop = listRef.current.scrollHeight
  }, [msgs, open])

  function send(e) {
    e.preventDefault()
    const text = draft.trim()
    if (!text) return
    // TODO: send `text` to the backend (Socket.io on the Express server) or a live-chat service
    setMsgs((m) => [...m, { me: true, text }, { me: false, key: 'chat.reply' }])
    setDraft('')
  }

  return (
    <>
      {open && (
        <div className="chat" role="dialog" aria-label={t('chat.title')}>
          <header>
            <span>{t('chat.title')}</span>
            <button type="button" onClick={() => setOpen(false)} aria-label={t('chat.close')}>×</button>
          </header>
          <div className="msgs" ref={listRef}>
            <p className="msg">{t('chat.greeting')}</p>
            {msgs.map((m, i) => (
              <p key={i} className={m.me ? 'msg me' : 'msg'}>{m.me ? m.text : t(m.key)}</p>
            ))}
          </div>
          <form onSubmit={send}>
            <input
              value={draft}
              onChange={(e) => setDraft(e.target.value)}
              placeholder={t('chat.placeholder')}
              aria-label={t('chat.placeholder')}
            />
            <button className="btn sm" type="submit">{t('chat.send')}</button>
          </form>
        </div>
      )}
      <button type="button" className="btn chat-fab" onClick={() => setOpen((o) => !o)} aria-expanded={open}>
        <svg viewBox="0 0 24 24" aria-hidden="true">
          <path d="M21 12a8 8 0 0 1-11.6 7.1L4 20l1-4.6A8 8 0 1 1 21 12z" />
        </svg>
        {t('chat.button')}
      </button>
    </>
  )
}