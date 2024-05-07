import {
  N as le,
  O as te,
  d as ae,
  b as oe,
  c as s,
  G as ne,
  e as d,
  I as se,
  o as V,
  f as b,
  g as e,
  w as l,
  i as _,
  A as de,
  q as ue,
  m as o,
  h as v,
  v as z,
  J as A,
  K as E,
  L,
  M,
} from './index-94ead3f8.js'
function ie(P) {
  return le.get({ headers: new te(), url: '/admin/dish/page', params: P })
}
const pe = ['src'],
  re = {
    class: 'dialog-footer',
    style: { display: 'flex', 'justify-content': 'center', 'align-items': 'center' },
  },
  me = { class: 'demo-pagination-block' },
  _e = o('div', { class: 'demonstration' }, null, -1),
  ce = ['src'],
  fe = { class: 'el-upload-list__item-actions' },
  ve = ['onClick'],
  ge = ['onClick'],
  Ve = ['onClick'],
  ye = ['src'],
  we = { class: 'dialog-footer' },
  be = ['src'],
  Ce = { class: 'el-upload-list__item-actions' },
  ke = ['onClick'],
  he = ['onClick'],
  xe = ['onClick'],
  ze = ['src'],
  Ue = { class: 'dialog-footer' },
  Se = ae({
    __name: 'OfficProduct',
    setup(P) {
      oe()
      const R = s([]),
        O = s(!1),
        y = s(!1),
        w = s(!1),
        T = () => {
          y.value = !0
        },
        G = () => {
          w.value = !0
        },
        H = s(0),
        D = s()
      D.value = []
      const C = s({ page: 1, pageSize: 10, keyword: '' }),
        J = s(!1),
        i = s({ name: '', description: '', size: '', price: '' }),
        p = s({ name: '', description: '', size: '', price: '' }),
        U = async () => {
          const n = await ie({ page: 1, pageSize: 10, status: 1 })
          R.value = n.data.records
        }
      ne(() => {
        U()
      })
      function K(n) {
        ;(C.value.pageSize = n), U()
      }
      function Q(n) {
        ;(C.value.page = n), U()
      }
      function W(n) {
        D.value = n
      }
      const $ = s(''),
        k = s(!1),
        h = s(!1),
        N = (n) => {
          console.log(n)
        },
        I = (n) => {
          ;($.value = n.url), (O.value = !0)
        },
        B = (n) => {
          console.log(n)
        }
      return (n, a) => {
        const c = d('el-input'),
          r = d('el-form-item'),
          m = d('el-button'),
          S = d('el-form'),
          F = d('el-card'),
          u = d('el-table-column'),
          X = d('el-switch'),
          Y = d('el-table'),
          Z = d('el-pagination'),
          f = d('el-icon'),
          j = d('el-upload'),
          x = d('el-dialog'),
          q = d('el-col'),
          ee = se('loading')
        return (
          V(),
          b('div', null, [
            e(F, null, {
              default: l(() => [
                e(
                  S,
                  { style: { display: 'flex', 'justify-content': 'space-between', height: '2vw' } },
                  {
                    default: l(() => [
                      e(
                        r,
                        { label: '商品名' },
                        { default: l(() => [e(c, { placeholder: '请输入商品名进行搜索' })]), _: 1 },
                      ),
                      e(r, null, {
                        default: l(() => [
                          e(
                            m,
                            { slot: 'append', style: { 'margin-left': '5px' } },
                            { default: l(() => [_('搜索商品')]), _: 1 },
                          ),
                          e(
                            m,
                            { slot: 'append', style: { 'margin-left': '5px' }, onClick: T },
                            { default: l(() => [_('添加商品')]), _: 1 },
                          ),
                          e(
                            m,
                            { slot: 'append', style: { 'margin-left': '5px' } },
                            { default: l(() => [_('重置商品')]), _: 1 },
                          ),
                          e(
                            m,
                            { slot: 'append', style: { 'margin-left': '5px' } },
                            { default: l(() => [_('删除商品')]), _: 1 },
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
              F,
              { style: { 'margin-top': '5px' } },
              {
                default: l(() => [
                  de(
                    (V(),
                    ue(
                      Y,
                      {
                        data: R.value,
                        'element-loading-text': '拼命加载中',
                        style: { width: '100%' },
                      },
                      {
                        default: l(() => [
                          e(u, { type: 'selection', fixed: '' }),
                          e(u, { type: 'index', label: '序号', fixed: '' }),
                          e(u, { prop: 'id', label: 'ID', width: '100' }),
                          e(u, { prop: 'name', label: '名称' }),
                          e(u, { prop: 'description', label: '描述' }),
                          e(u, { prop: 'categoryName', label: '归属分类' }),
                          e(u, { prop: 'price', label: '价格' }),
                          e(
                            u,
                            { label: '图片' },
                            {
                              default: l((t) => [
                                o(
                                  'img',
                                  { style: { width: '100px', height: '100px' }, src: t.row.image },
                                  null,
                                  8,
                                  pe,
                                ),
                              ]),
                              _: 1,
                            },
                          ),
                          e(
                            u,
                            { prop: 'status', label: '状态' },
                            {
                              default: l((t) => [
                                e(
                                  X,
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
                          e(u, { prop: 'updateTime', label: '更新时间' }),
                          e(
                            u,
                            { label: '操作', fixed: 'right' },
                            {
                              default: l(({ row: t }) => [
                                o('div', re, [
                                  e(
                                    m,
                                    {
                                      icon: 'Edit',
                                      style: { width: '3vw' },
                                      size: 'small',
                                      onClick: G,
                                    },
                                    { default: l(() => [_(' 编辑 ')]), _: 1 },
                                  ),
                                  e(
                                    m,
                                    { icon: 'Delete', style: { width: '3vw' }, size: 'small' },
                                    { default: l(() => [_('删除')]), _: 1 },
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
                    [[ee, J.value]],
                  ),
                  o('div', me, [
                    _e,
                    e(
                      Z,
                      {
                        onSizeChange: K,
                        onCurrentChange: Q,
                        onSelectionChange: W,
                        'current-page': C.value.page,
                        'page-sizes': [10, 20, 30, 40],
                        'page-size': C.value.pageSize,
                        background: !0,
                        layout: 'total, sizes, prev, pager, next, jumper',
                        total: H.value,
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
              x,
              {
                modelValue: y.value,
                'onUpdate:modelValue': a[7] || (a[7] = (t) => (y.value = t)),
                title: '  新增商品',
                width: '500',
                style: { 'margin-top': '10vw' },
              },
              {
                footer: l(() => [
                  o('div', we, [
                    e(
                      m,
                      { onClick: a[5] || (a[5] = (t) => (y.value = !1)) },
                      { default: l(() => [_('取消')]), _: 1 },
                    ),
                    e(
                      m,
                      { type: 'primary', onClick: a[6] || (a[6] = (t) => (y.value = !1)) },
                      { default: l(() => [_('确定')]), _: 1 },
                    ),
                  ]),
                ]),
                default: l(() => [
                  o('div', null, [
                    e(
                      S,
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
                            q,
                            { span: 12 },
                            {
                              default: l(() => [
                                e(
                                  r,
                                  { label: '商品标题', prop: 'name' },
                                  {
                                    default: l(() => [
                                      e(
                                        c,
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
                                        c,
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
                                        c,
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
                                        c,
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
                                  j,
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
                                          ce,
                                        ),
                                        o('span', fe, [
                                          o(
                                            'span',
                                            {
                                              class: 'el-upload-list__item-preview',
                                              onClick: (g) => I(t),
                                            },
                                            [e(f, null, { default: l(() => [e(v(A))]), _: 1 })],
                                            8,
                                            ve,
                                          ),
                                          h.value
                                            ? z('', !0)
                                            : (V(),
                                              b(
                                                'span',
                                                {
                                                  key: 0,
                                                  class: 'el-upload-list__item-delete',
                                                  onClick: (g) => B(t),
                                                },
                                                [e(f, null, { default: l(() => [e(v(E))]), _: 1 })],
                                                8,
                                                ge,
                                              )),
                                          h.value
                                            ? z('', !0)
                                            : (V(),
                                              b(
                                                'span',
                                                {
                                                  key: 1,
                                                  class: 'el-upload-list__item-delete',
                                                  onClick: (g) => N(t),
                                                },
                                                [e(f, null, { default: l(() => [e(v(L))]), _: 1 })],
                                                8,
                                                Ve,
                                              )),
                                        ]),
                                      ]),
                                    ]),
                                    default: l(() => [
                                      e(f, null, { default: l(() => [e(v(M))]), _: 1 }),
                                    ]),
                                    _: 1,
                                  },
                                ),
                                e(
                                  x,
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
                                        ye,
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
              x,
              {
                modelValue: w.value,
                'onUpdate:modelValue': a[15] || (a[15] = (t) => (w.value = t)),
                title: '  编辑商品',
                style: { 'margin-top': '10vw' },
                width: '500',
              },
              {
                footer: l(() => [
                  o('div', Ue, [
                    e(
                      m,
                      { onClick: a[13] || (a[13] = (t) => (w.value = !1)) },
                      { default: l(() => [_('取消')]), _: 1 },
                    ),
                    e(
                      m,
                      { type: 'primary', onClick: a[14] || (a[14] = (t) => (w.value = !1)) },
                      { default: l(() => [_('确定')]), _: 1 },
                    ),
                  ]),
                ]),
                default: l(() => [
                  o('div', null, [
                    e(
                      S,
                      {
                        model: p.value,
                        style: { 'margin-top': '2vw', width: '100%' },
                        ref_key: 'editRuleForm',
                        ref: p,
                      },
                      {
                        default: l(() => [
                          e(
                            q,
                            { span: 12, style: { width: '100%' } },
                            {
                              default: l(() => [
                                e(
                                  r,
                                  { label: '商品名称', prop: 'name' },
                                  {
                                    default: l(() => [
                                      e(
                                        c,
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
                                        c,
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
                                        c,
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
                                        c,
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
                                  j,
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
                                          be,
                                        ),
                                        o('span', Ce, [
                                          o(
                                            'span',
                                            {
                                              class: 'el-upload-list__item-preview',
                                              onClick: (g) => I(t),
                                            },
                                            [e(f, null, { default: l(() => [e(v(A))]), _: 1 })],
                                            8,
                                            ke,
                                          ),
                                          h.value
                                            ? z('', !0)
                                            : (V(),
                                              b(
                                                'span',
                                                {
                                                  key: 0,
                                                  class: 'el-upload-list__item-delete',
                                                  onClick: (g) => B(t),
                                                },
                                                [e(f, null, { default: l(() => [e(v(E))]), _: 1 })],
                                                8,
                                                he,
                                              )),
                                          h.value
                                            ? z('', !0)
                                            : (V(),
                                              b(
                                                'span',
                                                {
                                                  key: 1,
                                                  class: 'el-upload-list__item-delete',
                                                  onClick: (g) => N(t),
                                                },
                                                [e(f, null, { default: l(() => [e(v(L))]), _: 1 })],
                                                8,
                                                xe,
                                              )),
                                        ]),
                                      ]),
                                    ]),
                                    default: l(() => [
                                      e(f, null, { default: l(() => [e(v(M))]), _: 1 }),
                                    ]),
                                    _: 1,
                                  },
                                ),
                                e(
                                  x,
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
                                        ze,
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
export { Se as default }
