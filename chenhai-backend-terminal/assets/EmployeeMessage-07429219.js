import {
  N as M,
  O as G,
  d as H,
  c as i,
  G as I,
  e as n,
  I as L,
  o as k,
  f as O,
  g as e,
  w as l,
  m as _,
  i as d,
  A as P,
  q as R,
  t as J,
} from './index-94ead3f8.js'
import { p as K } from './http-0644779a.js'
function Q(y) {
  return M.get({ headers: new G(), url: '/admin/employee/page', params: y })
}
const W = { class: 'info' },
  X = { style: { display: 'flex', 'justify-content': 'space-between' } },
  Y = { style: { display: 'flex' } },
  Z = { class: 'operate' },
  ee = { class: 'dialog-footer' },
  ae = H({
    __name: 'EmployeeMessage',
    setup(y) {
      i(0)
      const m = i(!1),
        g = i(!1),
        V = i(),
        r = i({ page: 1, pageSize: 10, keyword: '' }),
        b = i(0),
        h = i()
      h.value = []
      const s = i({ name: '', username: '', password: '', status: '' })
      I(() => {
        f()
      })
      async function f() {
        g.value = !0
        const t = await Q({ page: 1, pageSize: 10 })
        ;(V.value = t.data.records), (b.value = t.data.total), (g.value = !1)
      }
      const x = () => {
          m.value = !0
        },
        z = (t) => {
          console.log(t)
        }
      function S(t) {
        ;(r.value.pageSize = t), f()
      }
      function U(t) {
        ;(r.value.page = t), f()
      }
      function E(t) {
        h.value = t
      }
      function D(t) {
        K('/delete', { id: t }).then(() => {
          f()
        })
      }
      return (t, a) => {
        const c = n('el-input'),
          p = n('el-button'),
          C = n('el-card'),
          u = n('el-table-column'),
          B = n('el-tag'),
          N = n('el-switch'),
          $ = n('el-table'),
          T = n('el-pagination'),
          v = n('el-form-item'),
          j = n('el-col'),
          q = n('el-form'),
          A = n('el-dialog'),
          F = L('loading')
        return (
          k(),
          O('div', W, [
            e(C, null, {
              default: l(() => [
                _('div', X, [
                  _('div', Y, [
                    e(
                      c,
                      {
                        placeholder: '请输入员工号或者员工名称',
                        modelValue: r.value.keyword,
                        'onUpdate:modelValue': a[0] || (a[0] = (o) => (r.value.keyword = o)),
                        class: 'input-with-select',
                      },
                      null,
                      8,
                      ['modelValue'],
                    ),
                    e(
                      p,
                      { slot: 'append', style: { 'margin-left': '5px' } },
                      { default: l(() => [d('查询')]), _: 1 },
                    ),
                  ]),
                  _('div', Z, [
                    e(
                      p,
                      { type: 'primary', onClick: x },
                      { default: l(() => [d('新增员工')]), _: 1 },
                    ),
                    e(p, null, { default: l(() => [d('查询')]), _: 1 }),
                    e(p, null, { default: l(() => [d('编辑')]), _: 1 }),
                    e(p, null, { default: l(() => [d('删除')]), _: 1 }),
                  ]),
                ]),
              ]),
              _: 1,
            }),
            e(C, null, {
              default: l(() => [
                P(
                  (k(),
                  R(
                    $,
                    {
                      data: V.value,
                      style: { width: '100%' },
                      'element-loading-text': '拼命加载中',
                    },
                    {
                      default: l(() => [
                        e(u, { type: 'selection' }),
                        e(u, { prop: 'id', label: '员工号', 'show-overflow-tooltip': '' }),
                        e(u, { prop: 'name', label: '员工姓名', 'show-overflow-tooltip': '' }),
                        e(u, { prop: 'username', label: '员工昵称', 'show-overflow-tooltip': '' }),
                        e(u, { prop: 'phone', label: '员工电话', 'show-overflow-tooltip': '' }),
                        e(
                          u,
                          { prop: 'sex', label: '员工性别', 'show-overflow-tooltip': '' },
                          {
                            default: l(({ row: o }) => [
                              e(
                                B,
                                { type: 'primary' },
                                { default: l(() => [d(J(o.sex === 1 ? '女' : '男'), 1)]), _: 2 },
                                1024,
                              ),
                            ]),
                            _: 1,
                          },
                        ),
                        e(
                          u,
                          { label: '员工状态' },
                          {
                            default: l((o) => [
                              e(
                                N,
                                {
                                  modelValue: o.row.status,
                                  'onUpdate:modelValue': (w) => (o.row.status = w),
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
                        e(u, {
                          prop: 'createTime',
                          label: '入职日期',
                          'show-overflow-tooltip': '',
                        }),
                        e(u, {
                          prop: 'updateTime',
                          label: '更新时间',
                          'show-overflow-tooltip': '',
                        }),
                        e(
                          u,
                          { label: '操作' },
                          {
                            default: l(({ row: o }) => [
                              e(
                                p,
                                { size: 'small', onClick: (w) => z(o), icon: 'Edit' },
                                { default: l(() => [d('编辑')]), _: 2 },
                                1032,
                                ['onClick'],
                              ),
                              e(
                                p,
                                {
                                  type: 'danger',
                                  size: 'small',
                                  icon: 'Delete',
                                  onClick: (w) => D(o.id),
                                },
                                { default: l(() => [d(' 删除 ')]), _: 2 },
                                1032,
                                ['onClick'],
                              ),
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
                  [[F, g.value]],
                ),
                e(
                  T,
                  {
                    class: 'mt fr mb',
                    onSizeChange: S,
                    onCurrentChange: U,
                    'current-page': r.value.page,
                    'page-sizes': [10, 20, 30, 40],
                    'page-size': r.value.pageSize,
                    layout: 'total, sizes, prev, pager, next, jumper',
                    onSelectionChange: E,
                    total: b.value,
                  },
                  null,
                  8,
                  ['current-page', 'page-size', 'total'],
                ),
              ]),
              _: 1,
            }),
            e(
              A,
              {
                modelValue: m.value,
                'onUpdate:modelValue': a[7] || (a[7] = (o) => (m.value = o)),
                title: '新增员工',
                width: '500',
              },
              {
                footer: l(() => [
                  _('div', ee, [
                    e(
                      p,
                      { onClick: a[5] || (a[5] = (o) => (m.value = !1)) },
                      { default: l(() => [d('取消')]), _: 1 },
                    ),
                    e(
                      p,
                      { type: 'primary', onClick: a[6] || (a[6] = (o) => (m.value = !1)) },
                      { default: l(() => [d('确定')]), _: 1 },
                    ),
                  ]),
                ]),
                default: l(() => [
                  _('div', null, [
                    e(
                      q,
                      { model: s.value, 'label-width': '80px', ref_key: 'ruleForm', ref: s },
                      {
                        default: l(() => [
                          e(j, null, {
                            default: l(() => [
                              e(
                                v,
                                { label: '员工姓名', prop: 'name' },
                                {
                                  default: l(() => [
                                    e(
                                      c,
                                      {
                                        modelValue: s.value.name,
                                        'onUpdate:modelValue':
                                          a[1] || (a[1] = (o) => (s.value.name = o)),
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
                                v,
                                { label: '入职昵称', prop: 'username' },
                                {
                                  default: l(() => [
                                    e(
                                      c,
                                      {
                                        modelValue: s.value.username,
                                        'onUpdate:modelValue':
                                          a[2] || (a[2] = (o) => (s.value.username = o)),
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
                                v,
                                { label: '员工密码', prop: 'password' },
                                {
                                  default: l(() => [
                                    e(
                                      c,
                                      {
                                        modelValue: s.value.password,
                                        'onUpdate:modelValue':
                                          a[3] || (a[3] = (o) => (s.value.password = o)),
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
                                v,
                                { label: '员工状态', prop: 'status' },
                                {
                                  default: l(() => [
                                    e(
                                      c,
                                      {
                                        modelValue: s.value.status,
                                        'onUpdate:modelValue':
                                          a[4] || (a[4] = (o) => (s.value.status = o)),
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
                          }),
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
export { ae as default }
