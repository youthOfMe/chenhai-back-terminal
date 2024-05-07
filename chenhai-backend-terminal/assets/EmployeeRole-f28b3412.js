import { p as k } from './http-0644779a.js'
import {
  d as D,
  c as n,
  G as B,
  e as l,
  I as E,
  o as v,
  f as N,
  g as e,
  w as t,
  i as s,
  A as V,
  q as j,
  m as d,
  h as F,
  F as I,
} from './index-94ead3f8.js'
const q = { class: 'dialog-footer' },
  A = { class: 'demo-pagination-block' },
  G = d('div', { class: 'demonstration' }, null, -1),
  K = D({
    __name: 'EmployeeRole',
    setup(M) {
      n(!1)
      let u = n()
      const _ = n(0),
        m = n()
      m.value = []
      const i = n({ page: 1, pageSize: 10, keyword: '' }),
        p = n(!1)
      n({ name: '', date: '', password: '' }),
        B(() => {
          r()
        })
      async function r() {
        p.value = !0
        const a = await k('/employeerole', i.value)
        ;(u.value = a.data.list), (_.value = a.data.total), (p.value = !1)
      }
      function h(a) {
        ;(i.value.pageSize = a), r()
      }
      function y(a) {
        ;(i.value.page = a), r()
      }
      function b(a) {
        m.value = a
      }
      return (a, R) => {
        const w = l('el-input'),
          f = l('el-form-item'),
          o = l('el-button'),
          x = l('el-form'),
          g = l('el-card'),
          c = l('el-table-column'),
          z = l('el-table'),
          C = l('el-pagination'),
          S = E('loading')
        return (
          v(),
          N(
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
                              o,
                              { type: 'primary', slot: 'append', style: { 'margin-left': '5px' } },
                              { default: t(() => [s('添加角色')]), _: 1 },
                            ),
                            e(
                              o,
                              { slot: 'append', style: { 'margin-left': '5px' } },
                              { default: t(() => [s('编辑角色')]), _: 1 },
                            ),
                            e(
                              o,
                              { slot: 'append', style: { 'margin-left': '5px' } },
                              { default: t(() => [s('删除角色')]), _: 1 },
                            ),
                            e(
                              o,
                              { slot: 'append', style: { 'margin-left': '5px' } },
                              { default: t(() => [s('搜索角色')]), _: 1 },
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
                    V(
                      (v(),
                      j(
                        z,
                        {
                          data: F(u),
                          'element-loading-text': '拼命加载中',
                          style: { width: '100%' },
                        },
                        {
                          default: t(() => [
                            e(c, { type: 'index', label: '序号', align: 'center' }),
                            e(c, {
                              prop: 'id',
                              label: '用户ID',
                              'show-overflow-tooltip': '',
                              align: 'center',
                            }),
                            e(c, {
                              prop: 'name',
                              label: '用户名称',
                              'show-overflow-tooltip': '',
                              align: 'center',
                            }),
                            e(c, {
                              prop: 'role',
                              label: '用户角色',
                              'show-overflow-tooltip': '',
                              align: 'center',
                            }),
                            e(
                              c,
                              { label: '操作' },
                              {
                                default: t(({ row: T }) => [
                                  d('div', q, [
                                    e(
                                      o,
                                      { icon: 'user', size: 'small' },
                                      { default: t(() => [s('权限分配')]), _: 1 },
                                    ),
                                    e(
                                      o,
                                      { icon: 'Edit', size: 'small' },
                                      { default: t(() => [s('编辑')]), _: 1 },
                                    ),
                                    e(
                                      o,
                                      { icon: 'Delete', size: 'small' },
                                      { default: t(() => [s('删除')]), _: 1 },
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
                      [[S, p.value]],
                    ),
                    d('div', A, [
                      G,
                      e(
                        C,
                        {
                          onSizeChange: h,
                          onCurrentChange: y,
                          onSelectionChange: b,
                          'current-page': i.value.page,
                          'page-sizes': [10, 20, 30, 40],
                          'page-size': i.value.pageSize,
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
