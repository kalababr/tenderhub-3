import { useCallback, useEffect, useState } from 'react'
import { LanguageContext } from './LanguageContext'
import en from './en'
import am from './am'

const dictionaries = { en, am }

export default function LanguageProvider({ children }) {
  const [lang, setLang] = useState(() => {
    try {
      return localStorage.getItem('lang') || 'en'
    } catch {
      return 'en'
    }
  })

  useEffect(() => {
    document.documentElement.lang = lang
    try {
      localStorage.setItem('lang', lang)
    } catch {
      /* storage unavailable */
    }
  }, [lang])

  // t('hero.sub') -> text (or array) from the active language file
  const t = useCallback(
    (path) => path.split('.').reduce((o, k) => o?.[k], dictionaries[lang]),
    [lang]
  )
  // tr({ en: '...', am: '...' }) -> the value for the active language
  const tr = useCallback((obj) => obj[lang] ?? obj.en, [lang])

  return (
    <LanguageContext.Provider value={{ lang, setLang, t, tr }}>
      {children}
    </LanguageContext.Provider>
  )
}