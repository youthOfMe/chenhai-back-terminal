import { p as k } from './http-0644779a.js'
import {
  d as D,
  c as o,
  G as B,
  e as l,
  I as N,
  o as v,
  f as V,
  g as e,
  w as t,
  i as c,
  A as j,
  q as E,
  m as u,
  h as F,
  F as I,
} from './index-94ead3f8.js'
const q = { class: 'dialog-footer' },
  A = { class: 'demo-pagination-block' },
  G = u('div', { class: 'demonstration' }, null, -1),
  K = D({
    __name: 'EmployeeLimit',
    setup(L) {
      o(!1)
      let d = o()
      const _ = o(0),
        m = o()
      m.value = []
      const n = o({ page: 1, pageSize: 10, keyword: '' }),
        r = o(!1)
      o({ name: '', date: '', password: '' }),
        B(() => {
          p()
        })
      async function p() {
        r.value = !0
        const a = await k('/employeerole', n.value)
        ;(d.value = a.data.list), (_.value = a.data.total), (r.value = !1)
      }
      function h(a) {
        ;(n.value.pageSize = a), p()
      }
      function b(a) {
        ;(n.value.page = a), p()
      }
      function y(a) {
        m.value = a
      }
      return (a, M) => {
        const w = l('el-input'),
          f = l('el-form-item'),
          i = l('el-button'),
          x = l('el-form'),
          g = l('el-card'),
          s = l('el-table-column'),
          z = l('el-table'),
          C = l('el-pagination'),
          S = N('loading')
        return (
          v(),
          V(
            I,
            null,
            [
              e(g, null, {
                default: t(() => [
                  e(
                    x,
                    {
                      label: '角色',
                      style: { display: 'flex', 'justify-content': 'space-between' },
                    },
                    {
                      default: t(() => [
                        e(
                          f,
                          { label: '用户名' },
                          {
                            default: t(() => [e(w, { placeholder: '请输入用户名进行搜索' })]),
                            _: 1,
                          },
                        ),
                        e(f, null, {
                          default: t(() => [
                            e(
                              i,
                              { slot: 'append', style: { 'margin-left': '5px' } },
                              { default: t(() => [c('搜索')]), _: 1 },
                            ),
                            e(
                              i,
                              { type: 'primary', slot: 'append', style: { 'margin-left': '5px' } },
                              { default: t(() => [c('重置')]), _: 1 },
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
                g,
                { style: { 'margin-top': '5px' } },
                {
                  default: t(() => [
                    j(
                      (v(),
                      E(
                        z,
                        {
                          data: F(d),
                          'element-loading-text': '拼命加载中',
                          style: { width: '100%' },
                        },
                        {
                          default: t(() => [
                            e(s, { type: 'index', label: '序号', align: 'center' }),
                            e(s, {
                              prop: 'id',
                              label: '用户ID',
                              'show-overflow-tooltip': '',
                              align: 'center',
                            }),
                            e(s, {
                              prop: 'name',
                              label: '用户名称',
                              'show-overflow-tooltip': '',
                              align: 'center',
                            }),
                            e(s, {
                              prop: 'role',
                              label: '用户角色',
                              'show-overflow-tooltip': '',
                              align: 'center',
                            }),
                            e(
                              s,
                              { label: '操作' },
                              {
                                default: t(({ row: T }) => [
                                  u('div', q, [
                                    e(
                                      i,
                                      { icon: 'user', size: 'small' },
                                      { default: t(() => [c('权限分配')]), _: 1 },
                                    ),
                                    e(
                                      i,
                                      { icon: 'Delete', size: 'small', type: 'danger' },
                                      { default: t(() => [c('删除')]), _: 1 },
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
                      [[S, r.value]],
                    ),
                    u('div', A, [
                      G,
                      e(
                        C,
                        {
                          onSizeChange: h,
                          onCurrentChange: b,
                          onSelectionChange: y,
                          'current-page': n.value.page,
                          'page-sizes': [10, 20, 30, 40],
                          'page-size': n.value.pageSize,
                          background: !0,
                          layout: 'total, sizes, prev, pager, next, jumper',
                          total: _.value,
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
            ],
            64,
          )
        )
      }
    },
  })
export { K as default }
