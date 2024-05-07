import {
  N as T,
  O as j,
  d as q,
  c as s,
  G as A,
  e as n,
  I as M,
  o as E,
  f as G,
  g as e,
  w as l,
  i,
  A as H,
  q as L,
  m as u,
} from './index-94ead3f8.js'
function O() {
  return T.get({ headers: new j(), url: '/admin/community/post/list', params: {} })
}
const J = ['src'],
  K = ['src'],
  Q = { class: 'dialog-footer', style: { width: '10vw' } },
  W = { class: 'demo-pagination-block' },
  X = u('div', { class: 'demonstration' }, null, -1),
  Y = { class: 'dialog-footer' },
  Z = { class: 'dialog-footer' },
  te = q({
    __name: 'PostMag',
    setup(ee) {
      s(!1)
      const c = s(!1),
        v = s(!1),
        z = () => {
          c.value = !0
        },
        U = () => {
          v.value = !0
        },
        y = s(),
        S = s(0),
        V = s()
      V.value = []
      const g = s({ page: 1, pageSize: 10, keyword: '' }),
        w = s(!1),
        p = s({ name: '', sort: '' }),
        m = s({ name: '', sort: '' })
      A(() => {
        b()
      })
      async function b() {
        w.value = !0
        const r = await O()
        ;(y.value = r.data), (w.value = !1)
      }
      function D(r) {
        ;(g.value.pageSize = r), b()
      }
      function R(r) {
        ;(g.value.page = r), b()
      }
      function B(r) {
        V.value = r
      }
      return (r, o) => {
        const _ = n('el-input'),
          f = n('el-form-item'),
          d = n('el-button'),
          h = n('el-form'),
          x = n('el-card'),
          a = n('el-table-column'),
          F = n('el-switch'),
          N = n('el-table'),
          $ = n('el-pagination'),
          C = n('el-col'),
          k = n('el-dialog'),
          I = M('loading')
        return (
          E(),
          G('div', null, [
            e(x, null, {
              default: l(() => [
                e(
                  h,
                  { style: { display: 'flex', 'justify-content': 'space-between', height: '2vw' } },
                  {
                    default: l(() => [
                      e(
                        f,
                        { label: '帖子' },
                        { default: l(() => [e(_, { placeholder: '请输入帖子名进行搜索' })]), _: 1 },
                      ),
                      e(f, null, {
                        default: l(() => [
                          e(
                            d,
                            { style: { 'margin-left': '5px' } },
                            { default: l(() => [i('搜索')]), _: 1 },
                          ),
                          e(
                            d,
                            { style: { 'margin-left': '5px' }, onClick: z },
                            { default: l(() => [i('添加')]), _: 1 },
                          ),
                          e(
                            d,
                            { style: { 'margin-left': '5px' } },
                            { default: l(() => [i('重置')]), _: 1 },
                          ),
                          e(
                            d,
                            { style: { 'margin-left': '5px' } },
                            { default: l(() => [i('删除')]), _: 1 },
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
                  H(
                    (E(),
                    L(
                      N,
                      {
                        data: y.value,
                        'element-loading-text': '拼命加载中',
                        style: { width: '100%' },
                        border: '',
                        'header-cell-style': { 'border-right': '1px solid #EEEEEE' },
                        'cell-style': { 'border-right': '1px solid #EEEEEE' },
                      },
                      {
                        default: l(() => [
                          e(a, { type: 'selection', fixed: '' }),
                          e(a, { type: 'index', width: '60', label: '序号', fixed: '' }),
                          e(a, { prop: 'postId', label: 'ID', 'show-overflow-tooltip': '' }),
                          e(a, { prop: 'title', label: '帖子名称', 'show-overflow-tooltip': '' }),
                          e(a, { prop: 'content', label: '帖子内容', 'show-overflow-tooltip': '' }),
                          e(a, { prop: 'thumb', label: '点赞量' }),
                          e(a, { prop: 'commit', label: '评论数' }),
                          e(a, { prop: 'share', label: '转发量' }),
                          e(
                            a,
                            { prop: 'name', label: '封面', 'show-overflow-tooltip': '' },
                            {
                              default: l((t) => [
                                u(
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
                          e(a, { prop: 'createdTime', width: '110', label: '创建时间' }),
                          e(a, { prop: 'updatedTime', width: '110', label: '更新时间' }),
                          e(a, { prop: 'name', label: '名称' }),
                          e(
                            a,
                            { prop: 'name', label: '头像', 'show-overflow-tooltip': '' },
                            {
                              default: l((t) => [
                                u(
                                  'img',
                                  {
                                    style: { width: '100px', height: '100px' },
                                    src: t.row.avatarUrl,
                                  },
                                  null,
                                  8,
                                  K,
                                ),
                              ]),
                              _: 1,
                            },
                          ),
                          e(
                            a,
                            { prop: 'name', label: '推荐' },
                            {
                              default: l((t) => [
                                e(
                                  F,
                                  {
                                    modelValue: t.row.recommended,
                                    'onUpdate:modelValue': (P) => (t.row.recommended = P),
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
                            { label: '操作', fixed: 'right' },
                            {
                              default: l(({ row: t }) => [
                                u('div', Q, [
                                  e(
                                    d,
                                    {
                                      icon: 'Edit',
                                      style: { width: '4vw' },
                                      size: 'small',
                                      onClick: U,
                                    },
                                    { default: l(() => [i(' 编辑 ')]), _: 1 },
                                  ),
                                  e(
                                    d,
                                    {
                                      icon: 'Delete',
                                      style: { 'margin-right': '1vw', width: '4vw' },
                                      size: 'small',
                                    },
                                    { default: l(() => [i(' 删除 ')]), _: 1 },
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
                    [[I, w.value]],
                  ),
                  u('div', W, [
                    X,
                    e(
                      $,
                      {
                        onSizeChange: D,
                        onCurrentChange: R,
                        onSelectionChange: B,
                        'current-page': g.value.page,
                        'page-sizes': [10, 20, 30, 40],
                        'page-size': g.value.pageSize,
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
                modelValue: c.value,
                'onUpdate:modelValue': o[4] || (o[4] = (t) => (c.value = t)),
                title: '  新增帖子',
                width: '500',
                style: { 'margin-top': '10vw' },
              },
              {
                footer: l(() => [
                  u('div', Y, [
                    e(
                      d,
                      { onClick: o[2] || (o[2] = (t) => (c.value = !1)) },
                      { default: l(() => [i('取消')]), _: 1 },
                    ),
                    e(
                      d,
                      { type: 'primary', onClick: o[3] || (o[3] = (t) => (c.value = !1)) },
                      { default: l(() => [i('确定')]), _: 1 },
                    ),
                  ]),
                ]),
                default: l(() => [
                  u('div', null, [
                    e(
                      h,
                      {
                        model: p.value,
                        'label-width': '80px',
                        style: { 'margin-top': '2vw' },
                        ref_key: 'addRuleForm',
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
                                  { label: '帖子名称', prop: 'name' },
                                  {
                                    default: l(() => [
                                      e(
                                        _,
                                        {
                                          modelValue: p.value.name,
                                          'onUpdate:modelValue':
                                            o[0] || (o[0] = (t) => (p.value.name = t)),
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
                                            o[1] || (o[1] = (t) => (p.value.sort = t)),
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
                modelValue: v.value,
                'onUpdate:modelValue': o[9] || (o[9] = (t) => (v.value = t)),
                title: '  编辑帖子',
                width: '500',
                style: { 'margin-top': '10vw' },
              },
              {
                footer: l(() => [
                  u('div', Z, [
                    e(
                      d,
                      { onClick: o[7] || (o[7] = (t) => (v.value = !1)) },
                      { default: l(() => [i('取消')]), _: 1 },
                    ),
                    e(
                      d,
                      { type: 'primary', onClick: o[8] || (o[8] = (t) => (v.value = !1)) },
                      { default: l(() => [i('确定')]), _: 1 },
                    ),
                  ]),
                ]),
                default: l(() => [
                  u('div', null, [
                    e(
                      h,
                      {
                        model: m.value,
                        'label-width': '80px',
                        style: { 'margin-top': '2vw' },
                        ref_key: 'editRuleForm',
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
                                  { label: '帖子名称', prop: 'name' },
                                  {
                                    default: l(() => [
                                      e(
                                        _,
                                        {
                                          modelValue: m.value.name,
                                          'onUpdate:modelValue':
                                            o[5] || (o[5] = (t) => (m.value.name = t)),
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
                                            o[6] || (o[6] = (t) => (m.value.sort = t)),
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
export { te as default }
