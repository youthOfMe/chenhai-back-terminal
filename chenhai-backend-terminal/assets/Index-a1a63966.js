import {
  d as x,
  o as s,
  f,
  p as E,
  k as V,
  m as a,
  _ as w,
  b as R,
  e as c,
  n as z,
  F as S,
  q as u,
  w as n,
  t as y,
  g as t,
  s as g,
  v as I,
  x as q,
  c as D,
  y as A,
  T as U,
  z as W,
  a as C,
  h as d,
  A as j,
  B as G,
  u as B,
  i as L,
  C as $,
} from './index-94ead3f8.js'
const H = (_) => (E('data-v-f78624b4'), (_ = _()), V(), _),
  J = {
    class: 'logo',
    style: {
      'font-size': '20px',
      'font-family': "'Times New Roman'",
      'text-align': 'center',
      color: '#ffffff',
      'background-color': 'rgb(16 142 233)',
      'font-style': 'italic',
      'line-height': '50px',
    },
  },
  K = H(() => a('span', null, 'Wind', -1)),
  P = [K],
  Q = x({
    __name: 'Index',
    setup(_) {
      return (l, o) => (s(), f('div', J, P))
    },
  })
const X = w(Q, [['__scopeId', 'data-v-f78624b4']]),
  Y = { name: 'Menu' },
  Z = x({
    ...Y,
    props: ['menuList'],
    setup(_) {
      const l = R(),
        o = (i) => {
          l.push(i.index)
        }
      return (i, v) => {
        const p = c('el-icon'),
          r = c('el-menu-item'),
          m = c('Menu'),
          h = c('el-sub-menu')
        return (
          s(!0),
          f(
            S,
            null,
            z(
              _.menuList,
              (e) => (
                s(),
                f(
                  S,
                  { key: e.path },
                  [
                    !e.children && !e.meta.hidden
                      ? (s(),
                        u(
                          r,
                          { key: 0, index: e.path, onClick: o },
                          {
                            title: n(() => [a('span', null, y(e.meta.title), 1)]),
                            default: n(() => [
                              t(
                                p,
                                null,
                                { default: n(() => [(s(), u(g(e.meta.icon)))]), _: 2 },
                                1024,
                              ),
                            ]),
                            _: 2,
                          },
                          1032,
                          ['index'],
                        ))
                      : I('', !0),
                    e.children && e.children.length === 1 && !e.meta.hidden && !e.children[0].hidden
                      ? (s(),
                        u(
                          r,
                          { key: 1, index: e.children[0].path, onClick: o },
                          {
                            title: n(() => [a('span', null, y(e.children[0].meta.title), 1)]),
                            default: n(() => [
                              t(
                                p,
                                null,
                                { default: n(() => [(s(), u(g(e.children[0].meta.icon)))]), _: 2 },
                                1024,
                              ),
                            ]),
                            _: 2,
                          },
                          1032,
                          ['index'],
                        ))
                      : I('', !0),
                    e.children && e.children.length > 1 && !e.meta.hidden
                      ? (s(),
                        u(
                          h,
                          { key: 2, index: e.path },
                          {
                            title: n(() => [
                              t(
                                p,
                                null,
                                { default: n(() => [(s(), u(g(e.meta.icon)))]), _: 2 },
                                1024,
                              ),
                              a('span', null, y(e.meta.title), 1),
                            ]),
                            default: n(() => [
                              t(m, { 'menu-list': e.children }, null, 8, ['menu-list']),
                            ]),
                            _: 2,
                          },
                          1032,
                          ['index'],
                        ))
                      : I('', !0),
                  ],
                  64,
                )
              ),
            ),
            128,
          )
        )
      }
    },
  })
const ee = w(Z, [['__scopeId', 'data-v-4bcc1d97']]),
  k = q('SettingStore', { state: () => ({ fold: !1, refresh: !1 }) }),
  te = x({
    __name: 'Index',
    setup(_) {
      const l = k(),
        o = D(!0)
      return (
        A(
          () => l.refresh,
          () => {
            ;(o.value = !1),
              W(() => {
                o.value = !0
              })
          },
        ),
        (i, v) => {
          const p = c('router-view')
          return (
            s(),
            u(p, null, {
              default: n(({ Component: r }) => [
                t(
                  U,
                  { name: 'fade' },
                  { default: n(() => [o.value ? (s(), u(g(r), { key: 0 })) : I('', !0)]), _: 2 },
                  1024,
                ),
              ]),
              _: 1,
            })
          )
        }
      )
    },
  })
const ne = w(te, [['__scopeId', 'data-v-798acd3e']]),
  oe = x({
    __name: 'Index',
    setup(_) {
      const l = C(),
        o = k(),
        i = () => {
          o.fold = !o.fold
        }
      return (v, p) => {
        const r = c('el-icon'),
          m = c('el-breadcrumb-item'),
          h = c('el-breadcrumb')
        return (
          s(),
          f(
            S,
            null,
            [
              t(
                r,
                { style: { 'margin-right': '10px' }, onClick: i },
                { default: n(() => [(s(), u(g(d(o).fold ? 'Fold' : 'Expand')))]), _: 1 },
              ),
              t(
                h,
                { 'separator-icon': 'ArrowRight' },
                {
                  default: n(() => [
                    (s(!0),
                    f(
                      S,
                      null,
                      z(d(l).matched, (e, b) =>
                        j(
                          (s(),
                          u(
                            m,
                            { key: b, to: e.path },
                            {
                              default: n(() => [
                                t(
                                  r,
                                  { style: { margin: '0 5px' } },
                                  { default: n(() => [(s(), u(g(e.meta.icon)))]), _: 2 },
                                  1024,
                                ),
                                a('span', null, y(e.meta.title), 1),
                              ]),
                              _: 2,
                            },
                            1032,
                            ['to'],
                          )),
                          [[G, e.meta.title]],
                        ),
                      ),
                      128,
                    )),
                  ]),
                  _: 1,
                },
              ),
            ],
            64,
          )
        )
      }
    },
  }),
  se = ['src'],
  ce = { class: 'el-dropdown-link' },
  le = x({
    __name: 'Index',
    setup(_) {
      const l = B(),
        o = k(),
        i = () => {
          o.refresh = !o.refresh
        },
        v = () => {
          const h = document.fullscreenElement
          !h && document.documentElement.requestFullscreen(), h && document.exitFullscreen()
        },
        p = R(),
        r = C(),
        m = () => {
          l.userLogout(), p.push({ path: '/login', query: { redirect: r.path } })
        }
      return (h, e) => {
        const b = c('el-button'),
          F = c('arrow-down'),
          T = c('el-icon'),
          M = c('el-dropdown-item'),
          N = c('el-dropdown-menu'),
          O = c('el-dropdown')
        return (
          s(),
          f(
            S,
            null,
            [
              t(b, { size: 'small', icon: 'Refresh', circle: '', onClick: i }),
              t(b, { size: 'small', icon: 'FullScreen', circle: '', onClick: v }),
              t(b, { size: 'small', icon: 'Setting', circle: '' }),
              a(
                'img',
                {
                  src: d(l).userInfo.avatar,
                  alt: '',
                  style: {
                    margin: '0 10px',
                    width: '24px',
                    height: '24px',
                    'border-radius': '12px',
                  },
                },
                null,
                8,
                se,
              ),
              t(O, null, {
                dropdown: n(() => [
                  t(N, null, {
                    default: n(() => [
                      t(
                        M,
                        { onClick: e[0] || (e[0] = (fe) => m()) },
                        { default: n(() => [L('退出登录')]), _: 1 },
                      ),
                    ]),
                    _: 1,
                  }),
                ]),
                default: n(() => [
                  a('span', ce, [
                    L(y(d(l).username) + ' ', 1),
                    t(T, { class: 'el-icon--right' }, { default: n(() => [t(F)]), _: 1 }),
                  ]),
                ]),
                _: 1,
              }),
            ],
            64,
          )
        )
      }
    },
  }),
  ae = { class: 'tabbar' },
  _e = { class: 'tabbar_left' },
  re = { class: 'tabbar_right' },
  ue = x({
    __name: 'Index',
    setup(_) {
      return (l, o) => (s(), f('div', ae, [a('div', _e, [t(oe)]), a('div', re, [t(le)])]))
    },
  })
const de = w(ue, [['__scopeId', 'data-v-af9cbc25']]),
  ie = { class: 'layout_container' },
  pe = x({
    __name: 'Index',
    setup(_) {
      const l = B(),
        o = k(),
        i = C()
      return (v, p) => {
        const r = c('el-menu'),
          m = c('el-scrollbar')
        return (
          s(),
          f('div', ie, [
            a(
              'div',
              { class: $(['layout_slider', { fold: d(o).fold }]) },
              [
                t(X),
                t(
                  m,
                  { class: 'scrollbar' },
                  {
                    default: n(() => [
                      t(
                        r,
                        {
                          'background-color': '#ffffff',
                          'text-color': '#000000',
                          'active-text-color': 'rgb(16 142 233)',
                          'default-active': d(i).path,
                          collapse: d(o).fold,
                        },
                        {
                          default: n(() => [
                            t(ee, { 'menu-list': d(l).menuRoutes }, null, 8, ['menu-list']),
                          ]),
                          _: 1,
                        },
                        8,
                        ['default-active', 'collapse'],
                      ),
                    ]),
                    _: 1,
                  },
                ),
              ],
              2,
            ),
            a('div', { class: $(['layout_tabBar', { fold: d(o).fold }]) }, [t(de)], 2),
            a('div', { class: $(['layout_main', { fold: d(o).fold }]) }, [t(ne)], 2),
          ])
        )
      }
    },
  })
const he = w(pe, [['__scopeId', 'data-v-2a06c141']])
export { he as default }
