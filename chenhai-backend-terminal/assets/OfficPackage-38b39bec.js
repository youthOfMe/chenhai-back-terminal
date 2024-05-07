import {
  N as le,
  O as te,
  d as ae,
  b as oe,
  c as s,
  G as ne,
  e as u,
  I as se,
  o as V,
  f as b,
  g as e,
  w as l,
  i as _,
  A as ue,
  q as de,
  m as o,
  h as v,
  v as z,
  J as L,
  K as M,
  L as O,
  M as T,
} from './index-94ead3f8.js'
function ie(R) {
  return le.get({ headers: new te(), url: '/admin/setmeal/page', params: R })
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
    __name: 'OfficPackage',
    setup(R) {
      oe()
      const G = s(!1),
        y = s(!1),
        w = s(!1),
        H = () => {
          y.value = !0
        },
        J = () => {
          w.value = !0
        },
        D = s(),
        I = s(0),
        N = s()
      N.value = []
      const C = s({ page: 1, pageSize: 10, keyword: '' }),
        U = s(!1),
        d = s({ name: '', description: '', size: '', price: '' }),
        i = s({ name: '', description: '', size: '', price: '' })
      ne(() => {
        $()
      })
      async function $() {
        U.value = !0
        const n = await ie({ page: 1, pageSize: 10, status: 1 })
        ;(D.value = n.data.records), (I.value = n.data.total), (U.value = !1)
      }
      function K(n) {
        ;(C.value.pageSize = n), $()
      }
      function Q(n) {
        ;(C.value.page = n), $()
      }
      function W(n) {
        N.value = n
      }
      const S = s(''),
        k = s(!1),
        h = s(!1),
        B = (n) => {
          console.log(n)
        },
        F = (n) => {
          ;(S.value = n.url), (G.value = !0)
        },
        j = (n) => {
          console.log(n)
        }
      return (n, a) => {
        const c = u('el-input'),
          p = u('el-form-item'),
          r = u('el-button'),
          P = u('el-form'),
          q = u('el-card'),
          m = u('el-table-column'),
          X = u('el-switch'),
          Y = u('el-table'),
          Z = u('el-pagination'),
          f = u('el-icon'),
          A = u('el-upload'),
          x = u('el-dialog'),
          E = u('el-col'),
          ee = se('loading')
        return (
          V(),
          b('div', null, [
            e(q, null, {
              default: l(() => [
                e(
                  P,
                  { style: { display: 'flex', 'justify-content': 'space-between', height: '2vw' } },
                  {
                    default: l(() => [
                      e(
                        p,
                        { label: '套餐名' },
                        { default: l(() => [e(c, { placeholder: '请输入套餐名进行搜索' })]), _: 1 },
                      ),
                      e(p, null, {
                        default: l(() => [
                          e(
                            r,
                            { slot: 'append', style: { 'margin-left': '5px' } },
                            { default: l(() => [_('搜索套餐')]), _: 1 },
                          ),
                          e(
                            r,
                            { slot: 'append', style: { 'margin-left': '5px' }, onClick: H },
                            { default: l(() => [_('添加套餐')]), _: 1 },
                          ),
                          e(
                            r,
                            { slot: 'append', style: { 'margin-left': '5px' } },
                            { default: l(() => [_('重置套餐')]), _: 1 },
                          ),
                          e(
                            r,
                            { slot: 'append', style: { 'margin-left': '5px' } },
                            { default: l(() => [_('删除套餐')]), _: 1 },
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
              q,
              { style: { 'margin-top': '5px' } },
              {
                default: l(() => [
                  ue(
                    (V(),
                    de(
                      Y,
                      {
                        data: D.value,
                        'element-loading-text': '拼命加载中',
                        style: { width: '100%' },
                      },
                      {
                        default: l(() => [
                          e(m, { type: 'selection', fixed: '' }),
                          e(m, { type: 'index', label: '序号', fixed: '' }),
                          e(m, { prop: 'id', label: 'ID' }),
                          e(m, { prop: 'name', label: '名称' }),
                          e(m, { prop: 'price', label: '价格' }),
                          e(m, { prop: 'categoryId', label: '类别id' }),
                          e(
                            m,
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
                          e(
                            m,
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
                          e(m, { prop: 'updateTime', label: '更新时间' }),
                          e(
                            m,
                            { label: '操作', fixed: 'right', width: '150' },
                            {
                              default: l(({ row: t }) => [
                                o('div', re, [
                                  e(
                                    r,
                                    {
                                      icon: 'Edit',
                                      style: { width: '3vw' },
                                      size: 'small',
                                      onClick: J,
                                    },
                                    { default: l(() => [_(' 编辑 ')]), _: 1 },
                                  ),
                                  e(
                                    r,
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
                    [[ee, U.value]],
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
              x,
              {
                modelValue: y.value,
                'onUpdate:modelValue': a[7] || (a[7] = (t) => (y.value = t)),
                title: '  新增套餐',
                style: { 'margin-top': '10vw' },
              },
              {
                footer: l(() => [
                  o('div', we, [
                    e(
                      r,
                      { onClick: a[5] || (a[5] = (t) => (y.value = !1)) },
                      { default: l(() => [_('取消')]), _: 1 },
                    ),
                    e(
                      r,
                      { type: 'primary', onClick: a[6] || (a[6] = (t) => (y.value = !1)) },
                      { default: l(() => [_('确定')]), _: 1 },
                    ),
                  ]),
                ]),
                default: l(() => [
                  o('div', null, [
                    e(
                      P,
                      {
                        model: d.value,
                        'label-width': '80px',
                        style: { 'margin-top': '2vw' },
                        ref_key: 'addRuleForm',
                        ref: d,
                      },
                      {
                        default: l(() => [
                          e(
                            E,
                            { span: 12 },
                            {
                              default: l(() => [
                                e(
                                  p,
                                  { label: '套餐标题', prop: 'name' },
                                  {
                                    default: l(() => [
                                      e(
                                        c,
                                        {
                                          modelValue: d.value.name,
                                          'onUpdate:modelValue':
                                            a[0] || (a[0] = (t) => (d.value.name = t)),
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
                                  p,
                                  { label: '套餐描述' },
                                  {
                                    default: l(() => [
                                      e(
                                        c,
                                        {
                                          modelValue: d.value.description,
                                          'onUpdate:modelValue':
                                            a[1] || (a[1] = (t) => (d.value.description = t)),
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
                                  p,
                                  { label: '套餐规格' },
                                  {
                                    default: l(() => [
                                      e(
                                        c,
                                        {
                                          modelValue: d.value.size,
                                          'onUpdate:modelValue':
                                            a[2] || (a[2] = (t) => (d.value.size = t)),
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
                                  p,
                                  { label: '套餐价格' },
                                  {
                                    default: l(() => [
                                      e(
                                        c,
                                        {
                                          modelValue: d.value.price,
                                          'onUpdate:modelValue':
                                            a[3] || (a[3] = (t) => (d.value.price = t)),
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
                                  A,
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
                                              onClick: (g) => F(t),
                                            },
                                            [e(f, null, { default: l(() => [e(v(L))]), _: 1 })],
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
                                                  onClick: (g) => j(t),
                                                },
                                                [e(f, null, { default: l(() => [e(v(M))]), _: 1 })],
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
                                                  onClick: (g) => B(t),
                                                },
                                                [e(f, null, { default: l(() => [e(v(O))]), _: 1 })],
                                                8,
                                                Ve,
                                              )),
                                        ]),
                                      ]),
                                    ]),
                                    default: l(() => [
                                      e(f, null, { default: l(() => [e(v(T))]), _: 1 }),
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
                                        { 'w-full': '', src: S.value, alt: 'Preview Image' },
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
                title: '  编辑套餐',
                style: { 'margin-top': '10vw' },
              },
              {
                footer: l(() => [
                  o('div', Ue, [
                    e(
                      r,
                      { onClick: a[13] || (a[13] = (t) => (w.value = !1)) },
                      { default: l(() => [_('取消')]), _: 1 },
                    ),
                    e(
                      r,
                      { type: 'primary', onClick: a[14] || (a[14] = (t) => (w.value = !1)) },
                      { default: l(() => [_('确定')]), _: 1 },
                    ),
                  ]),
                ]),
                default: l(() => [
                  o('div', null, [
                    e(
                      P,
                      {
                        model: i.value,
                        style: { 'margin-top': '2vw', width: '100%' },
                        ref_key: 'editRuleForm',
                        ref: i,
                      },
                      {
                        default: l(() => [
                          e(
                            E,
                            { span: 12, style: { width: '100%' } },
                            {
                              default: l(() => [
                                e(
                                  p,
                                  { label: '套餐名称', prop: 'name' },
                                  {
                                    default: l(() => [
                                      e(
                                        c,
                                        {
                                          modelValue: i.value.name,
                                          'onUpdate:modelValue':
                                            a[8] || (a[8] = (t) => (i.value.name = t)),
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
                                  p,
                                  { label: '套餐描述' },
                                  {
                                    default: l(() => [
                                      e(
                                        c,
                                        {
                                          modelValue: i.value.description,
                                          'onUpdate:modelValue':
                                            a[9] || (a[9] = (t) => (i.value.description = t)),
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
                                  p,
                                  { label: '套餐规格' },
                                  {
                                    default: l(() => [
                                      e(
                                        c,
                                        {
                                          modelValue: i.value.size,
                                          'onUpdate:modelValue':
                                            a[10] || (a[10] = (t) => (i.value.size = t)),
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
                                  p,
                                  { label: '套餐价格' },
                                  {
                                    default: l(() => [
                                      e(
                                        c,
                                        {
                                          modelValue: i.value.price,
                                          'onUpdate:modelValue':
                                            a[11] || (a[11] = (t) => (i.value.price = t)),
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
                                  A,
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
                                              onClick: (g) => F(t),
                                            },
                                            [e(f, null, { default: l(() => [e(v(L))]), _: 1 })],
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
                                                  onClick: (g) => j(t),
                                                },
                                                [e(f, null, { default: l(() => [e(v(M))]), _: 1 })],
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
                                                  onClick: (g) => B(t),
                                                },
                                                [e(f, null, { default: l(() => [e(v(O))]), _: 1 })],
                                                8,
                                                xe,
                                              )),
                                        ]),
                                      ]),
                                    ]),
                                    default: l(() => [
                                      e(f, null, { default: l(() => [e(v(T))]), _: 1 }),
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
                                        { 'w-full': '', src: S.value, alt: 'Preview Image' },
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
