import {
  N as j,
  O as q,
  d as A,
  c as i,
  G as M,
  e as n,
  I as G,
  o as E,
  f as H,
  g as e,
  w as l,
  i as s,
  A as L,
  q as O,
  m as r,
} from './index-94ead3f8.js'
function P() {
  return j.get({ headers: new q(), url: '/admin/community/category/list' })
}
const J = ['src'],
  K = { class: 'dialog-footer', style: { width: '10vw' } },
  Q = { class: 'demo-pagination-block' },
  W = r('div', { class: 'demonstration' }, null, -1),
  X = { class: 'dialog-footer' },
  Y = { class: 'dialog-footer' },
  le = A({
    __name: 'SectorMag',
    setup(Z) {
      i(!1)
      const v = i(!1),
        c = i(!1),
        z = () => {
          v.value = !0
        },
        U = () => {
          c.value = !0
        },
        b = i(),
        S = i(0),
        V = i()
      V.value = []
      const w = i({ page: 1, pageSize: 10, keyword: '' }),
        g = i(!1),
        m = i({ name: '', sort: '' }),
        p = i({ name: '', sort: '' })
      M(() => {
        h()
      })
      async function h() {
        g.value = !0
        const u = await P()
        ;(b.value = u.data), (g.value = !1)
      }
      function B(u) {
        ;(w.value.pageSize = u), h()
      }
      function D(u) {
        ;(w.value.page = u), h()
      }
      function R(u) {
        V.value = u
      }
      return (u, o) => {
        const _ = n('el-input'),
          f = n('el-form-item'),
          d = n('el-button'),
          y = n('el-form'),
          x = n('el-card'),
          a = n('el-table-column'),
          F = n('el-switch'),
          N = n('el-table'),
          $ = n('el-pagination'),
          C = n('el-col'),
          k = n('el-dialog'),
          I = G('loading')
        return (
          E(),
          H('div', null, [
            e(x, null, {
              default: l(() => [
                e(
                  y,
                  { style: { display: 'flex', 'justify-content': 'space-between', height: '2vw' } },
                  {
                    default: l(() => [
                      e(
                        f,
                        { label: '板块' },
                        {
                          default: l(() => [e(_, { placeholder: '请输入板块名称进行搜索' })]),
                          _: 1,
                        },
                      ),
                      e(f, null, {
                        default: l(() => [
                          e(
                            d,
                            { style: { 'margin-left': '5px' } },
                            { default: l(() => [s('搜索')]), _: 1 },
                          ),
                          e(
                            d,
                            { style: { 'margin-left': '5px' }, onClick: z },
                            { default: l(() => [s('添加')]), _: 1 },
                          ),
                          e(
                            d,
                            { style: { 'margin-left': '5px' } },
                            { default: l(() => [s('重置')]), _: 1 },
                          ),
                          e(
                            d,
                            { style: { 'margin-left': '5px' } },
                            { default: l(() => [s('删除')]), _: 1 },
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
              x,
              { style: { 'margin-top': '5px' } },
              {
                default: l(() => [
                  L(
                    (E(),
                    O(
                      N,
                      {
                        data: b.value,
                        'element-loading-text': '拼命加载中',
                        style: { width: '100%' },
                        border: '',
                        'header-cell-style': { 'border-right': '1px solid #EEEEEE' },
                        'cell-style': { 'border-right': '1px solid #EEEEEE' },
                      },
                      {
                        default: l(() => [
                          e(a, { type: 'selection' }),
                          e(a, { type: 'index', 'min-width': '38%', label: '序号' }),
                          e(a, {
                            prop: 'id',
                            'min-width': '55%',
                            label: 'ID',
                            'show-overflow-tooltip': '',
                          }),
                          e(a, {
                            prop: 'name',
                            'min-width': '58%',
                            label: '板块名称',
                            'show-overflow-tooltip': '',
                          }),
                          e(a, {
                            prop: 'name',
                            'min-width': '50%',
                            label: '描述',
                            'show-overflow-tooltip': '',
                          }),
                          e(
                            a,
                            {
                              prop: 'name',
                              'min-width': '50%',
                              label: '封面',
                              'show-overflow-tooltip': '',
                            },
                            {
                              default: l((t) => [
                                r(
                                  'img',
                                  {
                                    style: { width: '100px', height: '100px' },
                                    src: t.row.coverUrl,
                                  },
                                  null,
                                  8,
                                  J,
                                ),
                              ]),
                              _: 1,
                            },
                          ),
                          e(a, {
                            prop: 'createdTime',
                            'min-width': '50%',
                            label: '创建时间',
                            'show-overflow-tooltip': '',
                          }),
                          e(a, {
                            prop: 'updatedTime',
                            'min-width': '50%',
                            label: '更新时间',
                            'show-overflow-tooltip': '',
                          }),
                          e(a, {
                            prop: 'parentId',
                            'min-width': '39%',
                            label: '归属分类',
                            'show-overflow-tooltip': '',
                          }),
                          e(
                            a,
                            {
                              prop: 'name',
                              'min-width': '39%',
                              label: '推荐',
                              'show-overflow-tooltip': '',
                            },
                            {
                              default: l((t) => [
                                e(
                                  F,
                                  {
                                    modelValue: t.row.recommended,
                                    'onUpdate:modelValue': (T) => (t.row.recommended = T),
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
                            a,
                            { 'min-width': '60%', label: '操作' },
                            {
                              default: l(({ row: t }) => [
                                r('div', K, [
                                  e(
                                    d,
                                    {
                                      icon: 'Edit',
                                      style: { width: '3vw' },
                                      size: 'small',
                                      onClick: U,
                                    },
                                    { default: l(() => [s(' 编辑 ')]), _: 1 },
                                  ),
                                  e(
                                    d,
                                    {
                                      icon: 'Delete',
                                      style: { 'margin-right': '1vw', width: '3vw' },
                                      size: 'small',
                                    },
                                    { default: l(() => [s(' 删除 ')]), _: 1 },
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
                    [[I, g.value]],
                  ),
                  r('div', Q, [
                    W,
                    e(
                      $,
                      {
                        onSizeChange: B,
                        onCurrentChange: D,
                        onSelectionChange: R,
                        'current-page': w.value.page,
                        'page-sizes': [10, 20, 30, 40],
                        'page-size': w.value.pageSize,
                        background: !0,
                        layout: 'total, sizes, prev, pager, next, jumper',
                        total: S.value,
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
              k,
              {
                modelValue: v.value,
                'onUpdate:modelValue': o[4] || (o[4] = (t) => (v.value = t)),
                title: '  新增板块',
                width: '500',
                style: { 'margin-top': '10vw' },
              },
              {
                footer: l(() => [
                  r('div', X, [
                    e(
                      d,
                      { onClick: o[2] || (o[2] = (t) => (v.value = !1)) },
                      { default: l(() => [s('取消')]), _: 1 },
                    ),
                    e(
                      d,
                      { type: 'primary', onClick: o[3] || (o[3] = (t) => (v.value = !1)) },
                      { default: l(() => [s('确定')]), _: 1 },
                    ),
                  ]),
                ]),
                default: l(() => [
                  r('div', null, [
                    e(
                      y,
                      {
                        model: m.value,
                        'label-width': '80px',
                        style: { 'margin-top': '2vw' },
                        ref_key: 'addRuleForm',
                        ref: m,
                      },
                      {
                        default: l(() => [
                          e(
                            C,
                            { span: 12 },
                            {
                              default: l(() => [
                                e(
                                  f,
                                  { label: '板块名称', prop: 'name' },
                                  {
                                    default: l(() => [
                                      e(
                                        _,
                                        {
                                          modelValue: m.value.name,
                                          'onUpdate:modelValue':
                                            o[0] || (o[0] = (t) => (m.value.name = t)),
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
                                  f,
                                  { label: '归属分类', prop: 'start' },
                                  {
                                    default: l(() => [
                                      e(
                                        _,
                                        {
                                          modelValue: m.value.sort,
                                          'onUpdate:modelValue':
                                            o[1] || (o[1] = (t) => (m.value.sort = t)),
                                        },
                                        null,
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
              k,
              {
                modelValue: c.value,
                'onUpdate:modelValue': o[9] || (o[9] = (t) => (c.value = t)),
                title: '  编辑板块',
                width: '500',
                style: { 'margin-top': '10vw' },
              },
              {
                footer: l(() => [
                  r('div', Y, [
                    e(
                      d,
                      { onClick: o[7] || (o[7] = (t) => (c.value = !1)) },
                      { default: l(() => [s('取消')]), _: 1 },
                    ),
                    e(
                      d,
                      { type: 'primary', onClick: o[8] || (o[8] = (t) => (c.value = !1)) },
                      { default: l(() => [s('确定')]), _: 1 },
                    ),
                  ]),
                ]),
                default: l(() => [
                  r('div', null, [
                    e(
                      y,
                      {
                        model: p.value,
                        'label-width': '80px',
                        style: { 'margin-top': '2vw' },
                        ref_key: 'editRuleForm',
                        ref: p,
                      },
                      {
                        default: l(() => [
                          e(
                            C,
                            { span: 12 },
                            {
                              default: l(() => [
                                e(
                                  f,
                                  { label: '板块名称', prop: 'name' },
                                  {
                                    default: l(() => [
                                      e(
                                        _,
                                        {
                                          modelValue: p.value.name,
                                          'onUpdate:modelValue':
                                            o[5] || (o[5] = (t) => (p.value.name = t)),
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
                                  f,
                                  { label: '归属分类', prop: 'start' },
                                  {
                                    default: l(() => [
                                      e(
                                        _,
                                        {
                                          modelValue: p.value.sort,
                                          'onUpdate:modelValue':
                                            o[6] || (o[6] = (t) => (p.value.sort = t)),
                                        },
                                        null,
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
export { le as default }
