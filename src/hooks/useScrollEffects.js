import { useEffect } from 'react'

const clamp = (v) => Math.min(1, Math.max(0, v))

export default function useScrollEffects(lang) {
  useEffect(() => {
    const d = document
    const reduce = matchMedia('(prefers-reduced-motion:reduce)').matches

    const hero = d.querySelector('.hero')
    const pin = d.querySelector('.pin')
    const st = d.querySelector('.pin .statement')
    const p = d.querySelector('.pin p')
    const sp = d.querySelector('.split')
    const sw = Array.from(d.querySelectorAll('.pin .sw'))
    const hw = Array.from(d.querySelectorAll('.split h2 .hw'))

    function update() {
      d.body.classList.toggle('scrolled', scrollY > 80)
      if (reduce) {
        sw.concat(hw).forEach((s) => s.classList.add('on', 'done'))
        return
      }
      hero.style.setProperty('--p', clamp(scrollY / (hero.offsetHeight * 0.6)))
      const vh = innerHeight
      const r = pin.getBoundingClientRect()
      const start = vh * 0.4
      const prog = clamp((start - r.top) / (vh * 1.6))
      const lit = prog * sw.length * 1.05
      sw.forEach((s, i) => {
        s.classList.toggle('on', i < lit)
        s.classList.toggle('done', i < lit - 3)
      })
      st.style.setProperty('--g', clamp(prog * 3.5))
      const sr = sp.getBoundingClientRect()
      const c = clamp((vh - sr.top) / vh)
      sp.style.setProperty('--c', c)
      sp.style.setProperty('--t', clamp((c - 0.8) / 0.2))
      p.style.transform = 'translateY(' + -c * 70 + 'px)'
      const hl = clamp((c - 0.35) / 0.55) * hw.length * 1.02
      hw.forEach((s, i) => s.classList.toggle('on', i < hl))
    }

    let tick = false
    const onScroll = () => {
      if (!tick) {
        tick = true
        requestAnimationFrame(() => {
          update()
          tick = false
        })
      }
    }
    addEventListener('scroll', onScroll, { passive: true })
    addEventListener('resize', update)
    update()

    let io
    if (!reduce && 'IntersectionObserver' in window) {
      io = new IntersectionObserver(
        (entries) => {
          entries.forEach((e) => {
            if (e.isIntersecting) {
              e.target.classList.add('in')
              io.unobserve(e.target)
            }
          })
        },
        { threshold: 0.12 }
      )
      d.querySelectorAll('.tender,.cell,.plan,.head,.post').forEach((el) => {
        el.classList.add('rv')
        el.style.setProperty(
          '--d',
          (Array.prototype.indexOf.call(el.parentNode.children, el) % 4) * 90 + 'ms'
        )
        io.observe(el)
      })
    }

    return () => {
      removeEventListener('scroll', onScroll)
      removeEventListener('resize', update)
      if (io) io.disconnect()
    }
  }, [lang])
}