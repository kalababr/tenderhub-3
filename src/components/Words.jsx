import { Fragment } from 'react'

export default function Words({ text, className, highlightLast = 0 }) {
  const words = text.trim().split(/\s+/)
  return words.map((w, i) => (
    <Fragment key={i}>
      <span
        className={i >= words.length - highlightLast ? `${className} hl` : className}
        style={{ '--i': i }}
      >
        {w}
      </span>{' '}
    </Fragment>
  ))
}