import {
  N as te,
  O as ae,
  d as oe,
  b as ne,
  c as u,
  G as se,
  e as s,
  I as ue,
  o as V,
  f as b,
  g as e,
  w as l,
  i as d,
  A as de,
  q as ie,
  t as pe,
  m as o,
  h as v,
  v as h,
  J as E,
  K as L,
  L as M,
  M as O,
} from './index-94ead3f8.js'
function re(R) {
  return te.get({ headers: new ae(), url: '/admin/category/page', params: R })
}
const me = {
    class: 'dialog-footer',
    style: { display: 'flex', 'justify-content': 'center', 'align-items': 'center' },
  },
  _e = { class: 'demo-pagination-block' },
  ce = o('div', { class: 'demonstration' }, null, -1),
  fe = ['src'],
  ve = { class: 'el-upload-list__item-actions' },
  ge = ['onClick'],
  Ve = ['onClick'],
  ye = ['onClick'],
  we = ['src'],
  be = { class: 'dialog-footer' },
  Ce = ['src'],
  ke = { class: 'el-upload-list__item-actions' },
  xe = ['onClick'],
  ze = ['onClick'],
  he = ['onClick'],
  Ue = ['src'],
  Se = { class: 'dialog-footer' },
  De = oe({
    __name: 'OfficeSort',
    setup(R) {
      ne()
      const G = u(!1),
        y = u(!1),
        w = u(!1),
        H = () => {
          y.value = !0
        },
        J = () => {
          w.value = !0
        },
        P = u([]),
        I = u(0),
        N = u()
      N.value = []
      const C = u({ page: 1, pageSize: 10, keyword: '' }),
        U = u(!1),
        i = u({ name: '', description: '', size: '', price: '' }),
        p = u({ name: '', description: '', size: '', price: '' })
      se(() => {
        S()
      })
      async function S() {
        U.value = !0
        const n = await re({ page: 1, pageSize: 10 })
        ;(P.value = n.data.records), (I.value = n.data.total), (U.value = !1)
      }
      function K(n) {
        ;(C.value.pageSize = n), S()
      }
      function Q(n) {
        ;(C.value.page = n), S()
      }
      function W(n) {
        N.value = n
      }
      const $ = u(''),
        k = u(!1),
        x = u(!1),
        B = (n) => {
          console.log(n)
        },
        F = (n) => {
          ;($.value = n.url), (G.value = !0)
        },
        j = (n) => {
          console.log(n)
        }
      return (n, a) => {
        const _ = s('el-input'),
          r = s('el-form-item'),
          m = s('el-button'),
          D = s('el-form'),
          T = s('el-card'),
          c = s('el-table-column'),
          X = s('el-tag'),
          Y = s('el-switch'),
          Z = s('el-table'),
          ee = s('el-pagination'),
          f = s('el-icon'),
          q = s('el-upload'),
          z = s('el-dialog'),
          A = s('el-col'),
          le = ue('loading')
        return (
          V(),
          b('div', null, [
            e(T, null, {
              default: l(() => [
                e(
                  D,
                  { style: { display: 'flex', 'justify-content': 'space-between', height: '2vw' } },
                  {
                    default: l(() => [
                      e(
                        r,
                        { label: '商品名' },
                        { default: l(() => [e(_, { placeholder: '请输入商品名进行搜索' })]), _: 1 },
                      ),
                      e(r, null, {
                        default: l(() => [
                          e(
                            m,
                            { slot: 'append', style: { 'margin-left': '5px' } },
                            { default: l(() => [d('搜索商品')]), _: 1 },
                          ),
                          e(
                            m,
                            { slot: 'append', style: { 'margin-left': '5px' }, onClick: H },
                            { default: l(() => [d('添加商品')]), _: 1 },
                          ),
                          e(
                            m,
                            { slot: 'append', style: { 'margin-left': '5px' } },
                            { default: l(() => [d('重置商品')]), _: 1 },
                          ),
                          e(
                            m,
                            { slot: 'append', style: { 'margin-left': '5px' } },
                            { default: l(() => [d('删除商品')]), _: 1 },
                          ),
                        ]),
                        _: 1,
                      }),
                    ]),
                    _: 1,
                  },
                ),
              ]),
              _: 1,
            }),
            e(
              T,
              { style: { 'margin-top': '5px' } },
              {
                default: l(() => [
                  de(
                    (V(),
                    ie(
                      Z,
                      {
                        data: P.value,
                        'element-loading-text': '拼命加载中',
                        style: { width: '100%' },
                      },
                      {
                        default: l(() => [
                          e(c, { type: 'selection', fixed: '' }),
                          e(c, { type: 'index', label: '序号', fixed: '' }),
                          e(c, { prop: 'id', label: 'ID' }),
                          e(c, { prop: 'name', label: '名称' }),
                          e(
                            c,
                            { prop: 'type', label: '类型' },
                            {
                              default: l(({ row: t }) => [
                                e(
                                  X,
                                  { type: 'primary' },
                                  {
                                    default: l(() => [
                                      d(pe(t.type === 1 ? '商品分类' : '套餐分类'), 1),
                                    ]),
                                    _: 2,
                                  },
                                  1024,
                                ),
                              ]),
                              _: 1,
                            },
                          ),
                          e(
                            c,
                            { prop: 'status', label: '状态' },
                            {
                              default: l((t) => [
                                e(
                                  Y,
                                  {
                                    modelValue: t.row.status,
                                    'onUpdate:modelValue': (g) => (t.row.status = g),
                                    class: 'ml-2',
                                    'active-value': 1,
                                    'inactive-value': 0,
                                  },
                                  null,
                                  8,
                                  ['modelValue', 'onUpdate:modelValue'],
                                ),
                              ]),
                              _: 1,
                            },
                          ),
                          e(c, { prop: 'createTime', label: '创建时间' }),
                          e(c, { prop: 'updateTime', label: '更新时间' }),
                          e(
                            c,
                            { label: '操作', fixed: 'right', width: '150' },
                            {
                              default: l(({ row: t }) => [
                                o('div', me, [
                                  e(
                                    m,
                                    {
                                      icon: 'Edit',
                                      style: { width: '3vw' },
                                      size: 'small',
                                      onClick: J,
                                    },
                                    { default: l(() => [d(' 编辑 ')]), _: 1 },
                                  ),
                                  e(
                                    m,
                                    { icon: 'Delete', style: { width: '3vw' }, size: 'small' },
                                    { default: l(() => [d('删除')]), _: 1 },
                                  ),
                                ]),
                              ]),
                              _: 1,
                            },
                          ),
                        ]),
                        _: 1,
                      },
                      8,
                      ['data'],
                    )),
                    [[le, U.value]],
                  ),
                  o('div', _e, [
                    ce,
                    e(
                      ee,
                      {
                        onSizeChange: K,
                        onCurrentChange: Q,
                        onSelectionChange: W,
                        'current-page': C.value.page,
                        'page-sizes': [10, 20, 30, 40],
                        'page-size': C.value.pageSize,
                        background: !0,
                        layout: 'total, sizes, prev, pager, next, jumper',
                        total: I.value,
                        style: { 'margin-top': '2vw' },
                      },
                      null,
                      8,
                      ['current-page', 'page-size', 'total'],
                    ),
                  ]),
                ]),
                _: 1,
              },
            ),
            e(
              z,
              {
                modelValue: y.value,
                'onUpdate:modelValue': a[7] || (a[7] = (t) => (y.value = t)),
                title: '  新增商品',
                style: { 'margin-top': '10vw' },
              },
              {
                footer: l(() => [
                  o('div', be, [
                    e(
                      m,
                      { onClick: a[5] || (a[5] = (t) => (y.value = !1)) },
                      { default: l(() => [d('取消')]), _: 1 },
                    ),
                    e(
                      m,
                      { type: 'primary', onClick: a[6] || (a[6] = (t) => (y.value = !1)) },
                      { default: l(() => [d('确定')]), _: 1 },
                    ),
                  ]),
                ]),
                default: l(() => [
                  o('div', null, [
                    e(
                      D,
                      {
                        model: i.value,
                        'label-width': '80px',
                        style: { 'margin-top': '2vw' },
                        ref_key: 'addRuleForm',
                        ref: i,
                      },
                      {
                        default: l(() => [
                          e(
                            A,
                            { span: 12 },
                            {
                              default: l(() => [
                                e(
                                  r,
                                  { label: '商品标题', prop: 'name' },
                                  {
                                    default: l(() => [
                                      e(
                                        _,
                                        {
                                          modelValue: i.value.name,
                                          'onUpdate:modelValue':
                                            a[0] || (a[0] = (t) => (i.value.name = t)),
                                        },
                                        null,
                                        8,
                                        ['modelValue'],
                                      ),
                                    ]),
                                    _: 1,
                                  },
                                ),
                                e(
                                  r,
                                  { label: '商品描述' },
                                  {
                                    default: l(() => [
                                      e(
                                        _,
                                        {
                                          modelValue: i.value.description,
                                          'onUpdate:modelValue':
                                            a[1] || (a[1] = (t) => (i.value.description = t)),
                                        },
                                        null,
                                        8,
                                        ['modelValue'],
                                      ),
                                    ]),
                                    _: 1,
                                  },
                                ),
                                e(
                                  r,
                                  { label: '商品规格' },
                                  {
                                    default: l(() => [
                                      e(
                                        _,
                                        {
                                          modelValue: i.value.size,
                                          'onUpdate:modelValue':
                                            a[2] || (a[2] = (t) => (i.value.size = t)),
                                        },
                                        null,
                                        8,
                                        ['modelValue'],
                                      ),
                                    ]),
                                    _: 1,
                                  },
                                ),
                                e(
                                  r,
                                  { label: '商品价格' },
                                  {
                                    default: l(() => [
                                      e(
                                        _,
                                        {
                                          modelValue: i.value.price,
                                          'onUpdate:modelValue':
                                            a[3] || (a[3] = (t) => (i.value.price = t)),
                                        },
                                        null,
                                        8,
                                        ['modelValue'],
                                      ),
                                    ]),
                                    _: 1,
                                  },
                                ),
                                e(
                                  q,
                                  { action: '#', 'list-type': 'picture-card', 'auto-upload': !1 },
                                  {
                                    file: l(({ file: t }) => [
                                      o('div', null, [
                                        o(
                                          'img',
                                          {
                                            class: 'el-upload-list__item-thumbnail',
                                            src: t.url,
                                            alt: '',
                                          },
                                          null,
                                          8,
                                          fe,
                                        ),
                                        o('span', ve, [
                                          o(
                                            'span',
                                            {
                                              class: 'el-upload-list__item-preview',
                                              onClick: (g) => F(t),
                                            },
                                            [e(f, null, { default: l(() => [e(v(E))]), _: 1 })],
                                            8,
                                            ge,
                                          ),
                                          x.value
                                            ? h('', !0)
                                            : (V(),
                                              b(
                                                'span',
                                                {
                                                  key: 0,
                                                  class: 'el-upload-list__item-delete',
                                                  onClick: (g) => j(t),
                                                },
                                                [e(f, null, { default: l(() => [e(v(L))]), _: 1 })],
                                                8,
                                                Ve,
                                              )),
                                          x.value
                                            ? h('', !0)
                                            : (V(),
                                              b(
                                                'span',
                                                {
                                                  key: 1,
                                                  class: 'el-upload-list__item-delete',
                                                  onClick: (g) => B(t),
                                                },
                                                [e(f, null, { default: l(() => [e(v(M))]), _: 1 })],
                                                8,
                                                ye,
                                              )),
                                        ]),
                                      ]),
                                    ]),
                                    default: l(() => [
                                      e(f, null, { default: l(() => [e(v(O))]), _: 1 }),
                                    ]),
                                    _: 1,
                                  },
                                ),
                                e(
                                  z,
                                  {
                                    modelValue: k.value,
                                    'onUpdate:modelValue': a[4] || (a[4] = (t) => (k.value = t)),
                                  },
                                  {
                                    default: l(() => [
                                      o(
                                        'img',
                                        { 'w-full': '', src: $.value, alt: 'Preview Image' },
                                        null,
                                        8,
                                        we,
                                      ),
                                    ]),
                                    _: 1,
                                  },
                                  8,
                                  ['modelValue'],
                                ),
                              ]),
                              _: 1,
                            },
                          ),
                        ]),
                        _: 1,
                      },
                      8,
                      ['model'],
                    ),
                  ]),
                ]),
                _: 1,
              },
              8,
              ['modelValue'],
            ),
            e(
              z,
              {
                modelValue: w.value,
                'onUpdate:modelValue': a[15] || (a[15] = (t) => (w.value = t)),
                title: '  编辑商品',
                style: { 'margin-top': '10vw' },
              },
              {
                footer: l(() => [
                  o('div', Se, [
                    e(
                      m,
                      { onClick: a[13] || (a[13] = (t) => (w.value = !1)) },
                      { default: l(() => [d('取消')]), _: 1 },
                    ),
                    e(
                      m,
                      { type: 'primary', onClick: a[14] || (a[14] = (t) => (w.value = !1)) },
                      { default: l(() => [d('确定')]), _: 1 },
                    ),
                  ]),
                ]),
                default: l(() => [
                  o('div', null, [
                    e(
                      D,
                      {
                        model: p.value,
                        style: { 'margin-top': '2vw', width: '100%' },
                        ref_key: 'editRuleForm',
                        ref: p,
                      },
                      {
                        default: l(() => [
                          e(
                            A,
                            { span: 12, style: { width: '100%' } },
                            {
                              default: l(() => [
                                e(
                                  r,
                                  { label: '商品名称', prop: 'name' },
                                  {
                                    default: l(() => [
                                      e(
                                        _,
                                        {
                                          modelValue: p.value.name,
                                          'onUpdate:modelValue':
                                            a[8] || (a[8] = (t) => (p.value.name = t)),
                                        },
                                        null,
                                        8,
                                        ['modelValue'],
                                      ),
                                    ]),
                                    _: 1,
                                  },
                                ),
                                e(
                                  r,
                                  { label: '商品描述' },
                                  {
                                    default: l(() => [
                                      e(
                                        _,
                                        {
                                          modelValue: p.value.description,
                                          'onUpdate:modelValue':
                                            a[9] || (a[9] = (t) => (p.value.description = t)),
                                        },
                                        null,
                                        8,
                                        ['modelValue'],
                                      ),
                                    ]),
                                    _: 1,
                                  },
                                ),
                                e(
                                  r,
                                  { label: '商品规格' },
                                  {
                                    default: l(() => [
                                      e(
                                        _,
                                        {
                                          modelValue: p.value.size,
                                          'onUpdate:modelValue':
                                            a[10] || (a[10] = (t) => (p.value.size = t)),
                                        },
                                        null,
                                        8,
                                        ['modelValue'],
                                      ),
                                    ]),
                                    _: 1,
                                  },
                                ),
                                e(
                                  r,
                                  { label: '商品价格' },
                                  {
                                    default: l(() => [
                                      e(
                                        _,
                                        {
                                          modelValue: p.value.price,
                                          'onUpdate:modelValue':
                                            a[11] || (a[11] = (t) => (p.value.price = t)),
                                        },
                                        null,
                                        8,
                                        ['modelValue'],
                                      ),
                                    ]),
                                    _: 1,
                                  },
                                ),
                                e(
                                  q,
                                  { action: '#', 'list-type': 'picture-card', 'auto-upload': !1 },
                                  {
                                    file: l(({ file: t }) => [
                                      o('div', null, [
                                        o(
                                          'img',
                                          {
                                            class: 'el-upload-list__item-thumbnail',
                                            src: t.url,
                                            alt: '',
                                          },
                                          null,
                                          8,
                                          Ce,
                                        ),
                                        o('span', ke, [
                                          o(
                                            'span',
                                            {
                                              class: 'el-upload-list__item-preview',
                                              onClick: (g) => F(t),
                                            },
                                            [e(f, null, { default: l(() => [e(v(E))]), _: 1 })],
                                            8,
                                            xe,
                                          ),
                                          x.value
                                            ? h('', !0)
                                            : (V(),
                                              b(
                                                'span',
                                                {
                                                  key: 0,
                                                  class: 'el-upload-list__item-delete',
                                                  onClick: (g) => j(t),
                                                },
                                                [e(f, null, { default: l(() => [e(v(L))]), _: 1 })],
                                                8,
                                                ze,
                                              )),
                                          x.value
                                            ? h('', !0)
                                            : (V(),
                                              b(
                                                'span',
                                                {
                                                  key: 1,
                                                  class: 'el-upload-list__item-delete',
                                                  onClick: (g) => B(t),
                                                },
                                                [e(f, null, { default: l(() => [e(v(M))]), _: 1 })],
                                                8,
                                                he,
                                              )),
                                        ]),
                                      ]),
                                    ]),
                                    default: l(() => [
                                      e(f, null, { default: l(() => [e(v(O))]), _: 1 }),
                                    ]),
                                    _: 1,
                                  },
                                ),
                                e(
                                  z,
                                  {
                                    modelValue: k.value,
                                    'onUpdate:modelValue': a[12] || (a[12] = (t) => (k.value = t)),
                                  },
                                  {
                                    default: l(() => [
                                      o(
                                        'img',
                                        { 'w-full': '', src: $.value, alt: 'Preview Image' },
                                        null,
                                        8,
                                        Ue,
                                      ),
                                    ]),
                                    _: 1,
                                  },
                                  8,
                                  ['modelValue'],
                                ),
                              ]),
                              _: 1,
                            },
                          ),
                        ]),
                        _: 1,
                      },
                      8,
                      ['model'],
                    ),
                  ]),
                ]),
                _: 1,
              },
              8,
              ['modelValue'],
            ),
          ])
        )
      }
    },
  })
export { De as default }
