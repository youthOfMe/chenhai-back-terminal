import { p as E } from './http-0644779a.js'
import {
  d as $,
  c as s,
  G as q,
  e as o,
  I as A,
  o as h,
  f as G,
  g as e,
  w as l,
  i as n,
  A as M,
  q as T,
  m as c,
  h as H,
  F as J,
} from './index-94ead3f8.js'
const K = { class: 'dialog-footer' },
  L = { class: 'demo-pagination-block' },
  O = c('div', { class: 'demonstration' }, null, -1),
  P = { class: 'dialog-footer' },
  X = $({
    __name: 'NoteSet',
    setup(Q) {
      const _ = s(!1)
      let w = s()
      const V = s(0),
        y = s(3),
        k = s()
      k.value = []
      const m = s({ page: 1, pageSize: 10, keyword: '' }),
        v = s(!1),
        u = s({ name: '', type: '', content: '', id: '' })
      q(() => {
        g()
      })
      async function g() {
        v.value = !0
        const i = await E('/note', m.value)
        ;(w.value = i.data.list), (V.value = i.data.total), (v.value = !1)
      }
      function x(i) {
        ;(m.value.pageSize = i), g()
      }
      function D(i) {
        ;(m.value.page = i), g()
      }
      const S = () => {
        _.value = !0
      }
      return (i, t) => {
        const f = o('el-input'),
          r = o('el-form-item'),
          d = o('el-button'),
          C = o('el-form'),
          z = o('el-card'),
          p = o('el-table-column'),
          U = o('el-table'),
          B = o('el-pagination'),
          b = o('el-radio'),
          F = o('el-radio-group'),
          N = o('el-col'),
          I = o('el-dialog'),
          j = A('loading')
        return (
          h(),
          G(
            J,
            null,
            [
              e(z, null, {
                default: l(() => [
                  e(
                    C,
                    {
                      label: '公告',
                      style: { display: 'flex', 'justify-content': 'space-between', height: '2vw' },
                    },
                    {
                      default: l(() => [
                        e(
                          r,
                          { label: '发布者' },
                          {
                            default: l(() => [e(f, { placeholder: '请输入发布者姓名搜索' })]),
                            _: 1,
                          },
                        ),
                        e(r, null, {
                          default: l(() => [
                            e(
                              d,
                              { type: 'primary', onClick: S },
                              { default: l(() => [n('新增公告')]), _: 1 },
                            ),
                            e(d, null, { default: l(() => [n('查询公告')]), _: 1 }),
                            e(d, null, { default: l(() => [n('编辑公告')]), _: 1 }),
                            e(d, null, { default: l(() => [n('删除公告')]), _: 1 }),
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
                z,
                { style: { 'margin-top': '5px' } },
                {
                  default: l(() => [
                    M(
                      (h(),
                      T(
                        U,
                        {
                          data: H(w),
                          'element-loading-text': '拼命加载中',
                          style: { width: '100%' },
                        },
                        {
                          default: l(() => [
                            e(p, { type: 'index', label: '序号', align: 'center' }),
                            e(p, {
                              prop: 'id',
                              label: '用户ID',
                              'show-overflow-tooltip': '',
                              align: 'center',
                            }),
                            e(p, {
                              prop: 'name',
                              label: '发布者',
                              'show-overflow-tooltip': '',
                              align: 'center',
                            }),
                            e(p, {
                              prop: 'content',
                              label: '公告内容',
                              'show-overflow-tooltip': '',
                              align: 'center',
                            }),
                            e(p, {
                              prop: 'type',
                              label: '公告类型',
                              'show-overflow-tooltip': '',
                              align: 'center',
                            }),
                            e(
                              p,
                              { label: '操作' },
                              {
                                default: l(({ row: a }) => [
                                  c('div', K, [
                                    e(
                                      d,
                                      { icon: 'Edit', size: 'small' },
                                      { default: l(() => [n('编辑')]), _: 1 },
                                    ),
                                    e(
                                      d,
                                      { icon: 'Delete', size: 'small', type: 'danger' },
                                      { default: l(() => [n('删除')]), _: 1 },
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
                      [[j, v.value]],
                    ),
                    c('div', L, [
                      O,
                      e(
                        B,
                        {
                          onSizeChange: x,
                          onCurrentChange: D,
                          'current-page': m.value.page,
                          'page-sizes': [10, 20, 30, 40],
                          'page-size': m.value.pageSize,
                          background: !0,
                          layout: 'total, sizes, prev, pager, next, jumper',
                          total: V.value,
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
                I,
                {
                  modelValue: _.value,
                  'onUpdate:modelValue': t[6] || (t[6] = (a) => (_.value = a)),
                  title: '新增公告',
                  width: '500',
                },
                {
                  footer: l(() => [
                    c('div', P, [
                      e(
                        d,
                        { onClick: t[4] || (t[4] = (a) => (_.value = !1)) },
                        { default: l(() => [n('取消')]), _: 1 },
                      ),
                      e(
                        d,
                        { type: 'primary', onClick: t[5] || (t[5] = (a) => (_.value = !1)) },
                        { default: l(() => [n('确定')]), _: 1 },
                      ),
                    ]),
                  ]),
                  default: l(() => [
                    c('div', null, [
                      e(
                        C,
                        { model: u.value, 'label-width': '80px', ref_key: 'ruleForm', ref: u },
                        {
                          default: l(() => [
                            e(N, null, {
                              default: l(() => [
                                e(
                                  r,
                                  { label: '用户ID', prop: 'id' },
                                  {
                                    default: l(() => [
                                      e(
                                        f,
                                        {
                                          modelValue: u.value.id,
                                          'onUpdate:modelValue':
                                            t[0] || (t[0] = (a) => (u.value.id = a)),
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
                                  { label: '发布者', prop: 'name' },
                                  {
                                    default: l(() => [
                                      e(
                                        f,
                                        {
                                          modelValue: u.value.name,
                                          'onUpdate:modelValue':
                                            t[1] || (t[1] = (a) => (u.value.name = a)),
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
                                  { label: '公告内容', prop: 'content' },
                                  {
                                    default: l(() => [
                                      e(
                                        f,
                                        {
                                          modelValue: u.value.content,
                                          'onUpdate:modelValue':
                                            t[2] || (t[2] = (a) => (u.value.content = a)),
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
                                  { label: '公告类型', prop: 'type' },
                                  {
                                    default: l(() => [
                                      e(
                                        F,
                                        {
                                          modelValue: y.value,
                                          'onUpdate:modelValue':
                                            t[3] || (t[3] = (a) => (y.value = a)),
                                        },
                                        {
                                          default: l(() => [
                                            e(
                                              b,
                                              { value: 3 },
                                              { default: l(() => [n('科学知识')]), _: 1 },
                                            ),
                                            e(
                                              b,
                                              { value: 6 },
                                              { default: l(() => [n('商务接单')]), _: 1 },
                                            ),
                                            e(
                                              b,
                                              { value: 9 },
                                              { default: l(() => [n('知识竞赛')]), _: 1 },
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
            ],
            64,
          )
        )
      }
    },
  })
export { X as default }
