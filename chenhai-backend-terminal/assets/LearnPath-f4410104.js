import {
  _ as m,
  a as h,
  b as i,
  c,
  e as s,
  o as n,
  f as r,
  g as a,
  w as e,
  F as f,
  n as g,
  i as w,
  p as b,
  k as v,
  m as x,
} from './index-94ead3f8.js'
const k = (t) => (b('data-v-e98555ec'), (t = t()), v(), t),
  y = k(() =>
    x(
      'img',
      {
        src: 'https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png',
        style: { width: '100%' },
      },
      null,
      -1,
    ),
  ),
  I = {
    __name: 'LearnPath',
    setup(t) {
      h()
      const l = i()
      c([]), c({ total: 0, page: 1, size: 15 })
      const _ = () => {
        l.push({ path: '/learnResourceMag/cardContent' })
      }
      return (C, L) => {
        const o = s('el-card'),
          p = s('el-col'),
          d = s('el-row')
        return (
          n(),
          r('div', null, [
            a(o, null, {
              default: e(() => [
                a(
                  d,
                  { gutter: 20, class: 'web-list', onClick: _ },
                  {
                    default: e(() => [
                      (n(),
                      r(
                        f,
                        null,
                        g(5, (u) =>
                          a(
                            p,
                            { span: 4, class: 'web-item', key: u },
                            {
                              default: e(() => [
                                a(o, null, {
                                  header: e(() => [w('Yummy hamburger')]),
                                  default: e(() => [y]),
                                  _: 1,
                                }),
                              ]),
                              _: 2,
                            },
                            1024,
                          ),
                        ),
                        64,
                      )),
                    ]),
                    _: 1,
                  },
                ),
              ]),
              _: 1,
            }),
          ])
        )
      }
    },
  },
  N = m(I, [['__scopeId', 'data-v-e98555ec']])
export { N as default }
