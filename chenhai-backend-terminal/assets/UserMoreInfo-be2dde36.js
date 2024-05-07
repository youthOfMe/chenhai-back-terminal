import {
  d as ne,
  b as de,
  c as m,
  u as ue,
  H as re,
  G as ie,
  e as r,
  I as pe,
  o as z,
  f as j,
  g as e,
  w as l,
  m as d,
  h as f,
  t as v,
  i as a,
  F as G,
  n as M,
  A as _e,
  q as me,
  p as fe,
  k as ce,
  _ as ve,
} from './index-94ead3f8.js'
import { p as be } from './http-0644779a.js'
const b = (C) => (fe('data-v-8c0026ff'), (C = C()), ce(), C),
  ge = { class: 'user-profile' },
  we = { class: 'head' },
  he = { class: 'left' },
  Ve = ['src'],
  ye = b(() => d('div', { class: 'last' }, 'LV.5', -1)),
  Ce = { class: 'name' },
  ke = { class: 'signature' },
  ze = { class: 'right' },
  Se = { class: 'center-content' },
  Ue = b(() =>
    d(
      'img',
      {
        style: { width: '8vw', height: '5vw' },
        src: 'https://ts3.cn.mm.bing.net/th?id=OIP-C.h9mjwCJcnjlnT8rmwgi16wHaEo&w=316&h=197&c=8&rs=1&qlt=90&o=6&dpr=1.3&pid=3.1&rm=2',
      },
      null,
      -1,
    ),
  ),
  Ie = b(() =>
    d(
      'img',
      {
        style: { width: '8vw', height: '5vw' },
        src: 'https://ts3.cn.mm.bing.net/th?id=OIP-C.h9mjwCJcnjlnT8rmwgi16wHaEo&w=316&h=197&c=8&rs=1&qlt=90&o=6&dpr=1.3&pid=3.1&rm=2',
      },
      null,
      -1,
    ),
  ),
  xe = b(() => d('span', null, '男', -1)),
  Fe = { class: 'content' },
  je = { class: 'dialog-footer' },
  Re = { class: 'demo-pagination-block' },
  De = b(() => d('div', { class: 'demonstration' }, null, -1)),
  Be = b(() => d('i', { class: 'el-icon-plus' }, null, -1)),
  Pe = { class: 'dialog-footer' },
  $e = b(() => d('i', { class: 'el-icon-plus' }, null, -1)),
  Ee = { class: 'dialog-footer' },
  He = { class: 'post-list' },
  qe = b(() =>
    d(
      'img',
      {
        src: 'https://ts1.cn.mm.bing.net/th?id=OIP-C.bRg_6DV5feS2moGHuB4RSQHaEG&w=335&h=186&c=8&rs=1&qlt=90&o=6&dpr=1.3&pid=3.1&rm=2',
        style: { width: '100%' },
      },
      null,
      -1,
    ),
  ),
  Ge = ne({
    __name: 'UserMoreInfo',
    setup(C) {
      const T = de(),
        R = m(['Shanghai', 'Beijing']),
        L = ['Shanghai', 'Beijing', 'Guangzhou', 'Shenzhen'],
        N = ue(),
        { userInfo: c } = re(N)
      m(!1)
      const w = m(!1),
        h = m(!1),
        O = () => {
          w.value = !0
        },
        A = () => {
          h.value = !0
        }
      let D = m()
      const B = m(0),
        P = m()
      P.value = []
      const V = m({ page: 1, pageSize: 10, keyword: '' }),
        S = m(!1),
        s = m({ name: '', sort: '' })
      m({ name: '', sort: '' }),
        ie(() => {
          U()
        })
      async function U() {
        S.value = !0
        const i = await be('/user', V.value)
        ;(D.value = i.data.list), (B.value = i.data.total), (S.value = !1)
      }
      function J(i) {
        ;(V.value.pageSize = i), U()
      }
      function Q(i) {
        ;(V.value.page = i), U()
      }
      function K(i) {
        P.value = i
      }
      const W = () => {
        T.push({ path: '/user/morePostInfo' })
      }
      return (i, o) => {
        const X = r('el-progress'),
          I = r('el-radio'),
          Y = r('el-radio-group'),
          n = r('el-descriptions-item'),
          $ = r('el-tag'),
          E = r('el-descriptions'),
          p = r('el-input'),
          u = r('el-form-item'),
          Z = r('el-checkbox'),
          ee = r('el-checkbox-group'),
          _ = r('el-button'),
          k = r('el-form'),
          y = r('el-tab-pane'),
          x = r('el-card'),
          g = r('el-table-column'),
          le = r('el-table'),
          te = r('el-pagination'),
          H = r('el-upload'),
          F = r('el-col'),
          q = r('el-dialog'),
          ae = r('el-row'),
          oe = r('el-tabs'),
          se = pe('loading')
        return (
          z(),
          j('div', ge, [
            e(
              oe,
              { type: 'border-card' },
              {
                default: l(() => [
                  e(
                    y,
                    { label: '基本信息', class: 'base-info' },
                    {
                      default: l(() => [
                        d('div', we, [
                          d('div', he, [
                            e(
                              X,
                              { class: 'process', type: 'dashboard', percentage: 80 },
                              {
                                default: l(({ percentage: t }) => [
                                  d('img', { src: f(c).avatar, alt: '' }, null, 8, Ve),
                                ]),
                                _: 1,
                              },
                            ),
                            ye,
                            d('div', Ce, v(f(c).name), 1),
                            d('div', ke, v(f(c).signature), 1),
                          ]),
                          d('div', ze, [
                            e(
                              Y,
                              {
                                modelValue: i.size,
                                'onUpdate:modelValue': o[0] || (o[0] = (t) => (i.size = t)),
                              },
                              {
                                default: l(() => [
                                  e(
                                    I,
                                    { value: 'large' },
                                    { default: l(() => [a('Large')]), _: 1 },
                                  ),
                                  e(
                                    I,
                                    { value: 'default' },
                                    { default: l(() => [a('Default')]), _: 1 },
                                  ),
                                  e(
                                    I,
                                    { value: 'small' },
                                    { default: l(() => [a('Small')]), _: 1 },
                                  ),
                                ]),
                                _: 1,
                              },
                              8,
                              ['modelValue'],
                            ),
                            e(
                              E,
                              {
                                title: '基本信息',
                                direction: 'vertical',
                                column: 4,
                                size: i.size,
                                border: '',
                              },
                              {
                                default: l(() => [
                                  e(
                                    n,
                                    { label: '用户名' },
                                    { default: l(() => [a(v(f(c).name), 1)]), _: 1 },
                                  ),
                                  e(
                                    n,
                                    { label: '账号' },
                                    { default: l(() => [a(v(f(c).account), 1)]), _: 1 },
                                  ),
                                  e(
                                    n,
                                    { label: '手机号', span: 2 },
                                    { default: l(() => [a(v(f(c).phone), 1)]), _: 1 },
                                  ),
                                  e(
                                    n,
                                    { label: '用户状态' },
                                    {
                                      default: l(() => [
                                        e(
                                          $,
                                          { size: 'small' },
                                          {
                                            default: l(() => [
                                              a(v(f(c).status ? '管理员' : '普通用户'), 1),
                                            ]),
                                            _: 1,
                                          },
                                        ),
                                      ]),
                                      _: 1,
                                    },
                                  ),
                                  e(
                                    n,
                                    { label: '用户标签' },
                                    {
                                      default: l(() => [
                                        e(
                                          $,
                                          { size: 'small' },
                                          {
                                            default: l(() => [
                                              a(v(f(c).status ? '管理员' : '普通用户'), 1),
                                            ]),
                                            _: 1,
                                          },
                                        ),
                                      ]),
                                      _: 1,
                                    },
                                  ),
                                  e(
                                    n,
                                    { label: '用户签名' },
                                    { default: l(() => [a(v(f(c).signature), 1)]), _: 1 },
                                  ),
                                ]),
                                _: 1,
                              },
                              8,
                              ['size'],
                            ),
                          ]),
                        ]),
                        d('div', Se, [
                          e(
                            E,
                            {
                              title: '更多信息',
                              direction: 'vertical',
                              column: 4,
                              size: i.size,
                              border: '',
                            },
                            {
                              default: l(() => [
                                e(n, { label: '头像' }, { default: l(() => [Ue]), _: 1 }),
                                e(n, { label: '背景图片' }, { default: l(() => [Ie]), _: 1 }),
                                e(
                                  n,
                                  {
                                    label: '性别',
                                    style: {
                                      display: 'flex',
                                      'justify-content': 'center',
                                      'align-items': 'center',
                                    },
                                  },
                                  { default: l(() => [xe]), _: 1 },
                                ),
                                e(
                                  n,
                                  { label: '账号密码' },
                                  { default: l(() => [a('456987Adds')]), _: 1 },
                                ),
                                e(
                                  n,
                                  { label: '创建时间' },
                                  { default: l(() => [a('12：11')]), _: 1 },
                                ),
                                e(
                                  n,
                                  { label: '更新时间' },
                                  { default: l(() => [a('12：11')]), _: 1 },
                                ),
                                e(n, { label: '星海币' }, { default: l(() => [a('8888')]), _: 1 }),
                                e(n, { label: '人民币' }, { default: l(() => [a('8888')]), _: 1 }),
                                e(n, { label: '专栏' }, { default: l(() => [a('四季')]), _: 1 }),
                                e(n, { label: '点赞数' }, { default: l(() => [a('8888')]), _: 1 }),
                                e(n, { label: 'IP地址' }, { default: l(() => [a('济宁')]), _: 1 }),
                                e(n, { label: '状态' }, { default: l(() => [a('在线')]), _: 1 }),
                                e(n, { label: '勋章' }, { default: l(() => [a('在线')]), _: 1 }),
                                e(n, { label: '等级' }, { default: l(() => [a('18级')]), _: 1 }),
                                e(
                                  n,
                                  { label: '最后上线时间' },
                                  { default: l(() => [a('12：11')]), _: 1 },
                                ),
                                e(
                                  n,
                                  { label: '注册日期' },
                                  { default: l(() => [a('12：11')]), _: 1 },
                                ),
                                e(n, { label: '经验值' }, { default: l(() => [a('8888')]), _: 1 }),
                                e(
                                  n,
                                  { label: '已经加入' },
                                  { default: l(() => [a('8888天')]), _: 1 },
                                ),
                                e(
                                  n,
                                  { label: '活跃状态' },
                                  { default: l(() => [a('活跃')]), _: 1 },
                                ),
                                e(n, { label: '标签' }, { default: l(() => [a('高手')]), _: 1 }),
                                e(
                                  n,
                                  { label: '签名' },
                                  { default: l(() => [a('不以物喜，不以己悲')]), _: 1 },
                                ),
                              ]),
                              _: 1,
                            },
                            8,
                            ['size'],
                          ),
                        ]),
                        d('div', Fe, [
                          e(
                            k,
                            {
                              ref: 'ruleFormRef',
                              model: i.ruleForm,
                              'status-icon': '',
                              rules: i.rules,
                              'label-width': 'auto',
                              class: 'demo-ruleForm',
                            },
                            {
                              default: l(() => [
                                e(
                                  u,
                                  { label: '用户名', prop: 'pass' },
                                  {
                                    default: l(() => [
                                      e(p, { type: 'password', autocomplete: 'off' }),
                                    ]),
                                    _: 1,
                                  },
                                ),
                                e(
                                  u,
                                  { label: '账号', prop: 'checkPass' },
                                  {
                                    default: l(() => [
                                      e(p, { type: 'password', autocomplete: 'off' }),
                                    ]),
                                    _: 1,
                                  },
                                ),
                                e(
                                  u,
                                  { label: '密码', prop: 'age' },
                                  { default: l(() => [e(p)]), _: 1 },
                                ),
                                e(
                                  u,
                                  { label: '手机号', prop: 'age' },
                                  { default: l(() => [e(p)]), _: 1 },
                                ),
                                e(
                                  u,
                                  { label: '签名', prop: 'age' },
                                  { default: l(() => [e(p)]), _: 1 },
                                ),
                                e(
                                  u,
                                  { label: '标签', prop: 'age' },
                                  {
                                    default: l(() => [
                                      e(
                                        ee,
                                        {
                                          modelValue: R.value,
                                          'onUpdate:modelValue':
                                            o[1] || (o[1] = (t) => (R.value = t)),
                                          min: 1,
                                          max: 2,
                                        },
                                        {
                                          default: l(() => [
                                            (z(),
                                            j(
                                              G,
                                              null,
                                              M(L, (t) =>
                                                e(
                                                  Z,
                                                  { key: t, label: t, value: t },
                                                  { default: l(() => [a(v(t), 1)]), _: 2 },
                                                  1032,
                                                  ['label', 'value'],
                                                ),
                                              ),
                                              64,
                                            )),
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
                                e(u, null, {
                                  default: l(() => [
                                    e(
                                      _,
                                      {
                                        type: 'primary',
                                        onClick:
                                          o[2] || (o[2] = (t) => i.submitForm(i.ruleFormRef)),
                                      },
                                      { default: l(() => [a('Submit')]), _: 1 },
                                    ),
                                    e(
                                      _,
                                      {
                                        onClick: o[3] || (o[3] = (t) => i.resetForm(i.ruleFormRef)),
                                      },
                                      { default: l(() => [a('Reset')]), _: 1 },
                                    ),
                                  ]),
                                  _: 1,
                                }),
                              ]),
                              _: 1,
                            },
                            8,
                            ['model', 'rules'],
                          ),
                        ]),
                      ]),
                      _: 1,
                    },
                  ),
                  e(
                    y,
                    { label: '社区信息' },
                    {
                      default: l(() => [
                        d('div', null, [
                          e(x, null, {
                            default: l(() => [
                              e(
                                k,
                                {
                                  style: {
                                    display: 'flex',
                                    'justify-content': 'space-between',
                                    height: '2vw',
                                  },
                                },
                                {
                                  default: l(() => [
                                    e(
                                      u,
                                      { label: '帖子名' },
                                      {
                                        default: l(() => [
                                          e(p, { placeholder: '请输入帖子关键信息搜索' }),
                                        ]),
                                        _: 1,
                                      },
                                    ),
                                    e(u, null, {
                                      default: l(() => [
                                        e(
                                          _,
                                          { slot: 'append', style: { 'margin-left': '5px' } },
                                          { default: l(() => [a('搜索帖子')]), _: 1 },
                                        ),
                                        e(
                                          _,
                                          {
                                            slot: 'append',
                                            style: { 'margin-left': '5px' },
                                            onClick: O,
                                          },
                                          { default: l(() => [a(' 添加帖子 ')]), _: 1 },
                                        ),
                                        e(
                                          _,
                                          { slot: 'append', style: { 'margin-left': '5px' } },
                                          { default: l(() => [a('重置帖子')]), _: 1 },
                                        ),
                                        e(
                                          _,
                                          { slot: 'append', style: { 'margin-left': '5px' } },
                                          { default: l(() => [a('删除帖子')]), _: 1 },
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
                                _e(
                                  (z(),
                                  me(
                                    le,
                                    {
                                      data: f(D),
                                      'element-loading-text': '拼命加载中',
                                      style: { width: '100%' },
                                    },
                                    {
                                      default: l(() => [
                                        e(g, { type: 'selection', fixed: '' }),
                                        e(g, {
                                          type: 'index',
                                          label: '序号',
                                          width: '100',
                                          fixed: '',
                                        }),
                                        e(g, { prop: 'id', label: '发帖数', width: '150' }),
                                        e(g, { prop: 'id', label: '点赞数', width: '150' }),
                                        e(g, { prop: 'id', label: '收藏数', width: '150' }),
                                        e(g, { prop: 'id', label: '转发数', width: '150' }),
                                        e(
                                          g,
                                          { fixed: 'right', label: '操作', width: '260' },
                                          {
                                            default: l(({ row: t }) => [
                                              d('div', je, [
                                                e(
                                                  _,
                                                  {
                                                    icon: 'Edit',
                                                    style: { width: '4vw' },
                                                    size: 'small',
                                                    onClick: A,
                                                  },
                                                  { default: l(() => [a(' 编辑 ')]), _: 1 },
                                                ),
                                                e(
                                                  _,
                                                  {
                                                    icon: 'Delete',
                                                    style: { width: '4vw', 'margin-right': '1vw' },
                                                    size: 'small',
                                                  },
                                                  { default: l(() => [a(' 删除 ')]), _: 1 },
                                                ),
                                                e(
                                                  _,
                                                  {
                                                    type: 'primary',
                                                    style: { width: '4vw', 'margin-right': '1vw' },
                                                    size: 'small',
                                                    onClick: W,
                                                  },
                                                  { default: l(() => [a(' 更多 ')]), _: 1 },
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
                                  [[se, S.value]],
                                ),
                                d('div', Re, [
                                  De,
                                  e(
                                    te,
                                    {
                                      onSizeChange: J,
                                      onCurrentChange: Q,
                                      onSelectionChange: K,
                                      'current-page': V.value.page,
                                      'page-sizes': [10, 20, 30, 40],
                                      'page-size': V.value.pageSize,
                                      background: !0,
                                      layout: 'total, sizes, prev, pager, next, jumper',
                                      total: B.value,
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
                            q,
                            {
                              modelValue: w.value,
                              'onUpdate:modelValue': o[12] || (o[12] = (t) => (w.value = t)),
                              title: '  新增用户',
                              width: '500',
                            },
                            {
                              footer: l(() => [
                                d('div', Pe, [
                                  e(
                                    _,
                                    { onClick: o[10] || (o[10] = (t) => (w.value = !1)) },
                                    { default: l(() => [a('取消')]), _: 1 },
                                  ),
                                  e(
                                    _,
                                    {
                                      type: 'primary',
                                      onClick: o[11] || (o[11] = (t) => (w.value = !1)),
                                    },
                                    { default: l(() => [a('确定')]), _: 1 },
                                  ),
                                ]),
                              ]),
                              default: l(() => [
                                d('div', null, [
                                  e(
                                    k,
                                    {
                                      model: s.value,
                                      'label-width': '70px',
                                      style: {
                                        'margin-top': '2vw',
                                        'margin-left': '3vw',
                                        width: '45vw',
                                      },
                                      ref_key: 'addRuleForm',
                                      ref: s,
                                    },
                                    {
                                      default: l(() => [
                                        e(
                                          F,
                                          { span: 12 },
                                          {
                                            default: l(() => [
                                              e(
                                                u,
                                                { label: 'ID', prop: 'name' },
                                                {
                                                  default: l(() => [
                                                    e(
                                                      p,
                                                      {
                                                        modelValue: s.value.name,
                                                        'onUpdate:modelValue':
                                                          o[4] ||
                                                          (o[4] = (t) => (s.value.name = t)),
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
                                                u,
                                                { label: '用户名', prop: 'start' },
                                                {
                                                  default: l(() => [
                                                    e(
                                                      p,
                                                      {
                                                        modelValue: s.value.sort,
                                                        'onUpdate:modelValue':
                                                          o[5] ||
                                                          (o[5] = (t) => (s.value.sort = t)),
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
                                                u,
                                                { label: '账号', prop: 'start' },
                                                {
                                                  default: l(() => [
                                                    e(
                                                      p,
                                                      {
                                                        modelValue: s.value.sort,
                                                        'onUpdate:modelValue':
                                                          o[6] ||
                                                          (o[6] = (t) => (s.value.sort = t)),
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
                                                u,
                                                { label: '手机号', prop: 'start' },
                                                {
                                                  default: l(() => [
                                                    e(
                                                      p,
                                                      {
                                                        modelValue: s.value.sort,
                                                        'onUpdate:modelValue':
                                                          o[7] ||
                                                          (o[7] = (t) => (s.value.sort = t)),
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
                                                u,
                                                { label: '用户状态', prop: 'start' },
                                                {
                                                  default: l(() => [
                                                    e(
                                                      p,
                                                      {
                                                        modelValue: s.value.sort,
                                                        'onUpdate:modelValue':
                                                          o[8] ||
                                                          (o[8] = (t) => (s.value.sort = t)),
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
                                                u,
                                                { label: '用户签名', prop: 'start' },
                                                {
                                                  default: l(() => [
                                                    e(
                                                      p,
                                                      {
                                                        modelValue: s.value.sort,
                                                        'onUpdate:modelValue':
                                                          o[9] ||
                                                          (o[9] = (t) => (s.value.sort = t)),
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
                                                u,
                                                { label: '头像', prop: 'start' },
                                                {
                                                  default: l(() => [
                                                    e(
                                                      H,
                                                      {
                                                        action:
                                                          'https://jsonplaceholder.typicode.com/posts/',
                                                        'list-type': 'picture-card',
                                                      },
                                                      { default: l(() => [Be]), _: 1 },
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
                            q,
                            {
                              modelValue: h.value,
                              'onUpdate:modelValue': o[21] || (o[21] = (t) => (h.value = t)),
                              title: '  编辑用户',
                              width: '500',
                            },
                            {
                              footer: l(() => [
                                d('div', Ee, [
                                  e(
                                    _,
                                    { onClick: o[19] || (o[19] = (t) => (h.value = !1)) },
                                    { default: l(() => [a('取消')]), _: 1 },
                                  ),
                                  e(
                                    _,
                                    {
                                      type: 'primary',
                                      onClick: o[20] || (o[20] = (t) => (h.value = !1)),
                                    },
                                    { default: l(() => [a('确定')]), _: 1 },
                                  ),
                                ]),
                              ]),
                              default: l(() => [
                                d('div', null, [
                                  e(
                                    k,
                                    {
                                      model: s.value,
                                      'label-width': '70px',
                                      style: {
                                        'margin-top': '2vw',
                                        'margin-left': '3vw',
                                        width: '45vw',
                                      },
                                      ref_key: 'addRuleForm',
                                      ref: s,
                                    },
                                    {
                                      default: l(() => [
                                        e(
                                          F,
                                          { span: 12 },
                                          {
                                            default: l(() => [
                                              e(
                                                u,
                                                { label: 'ID', prop: 'name' },
                                                {
                                                  default: l(() => [
                                                    e(
                                                      p,
                                                      {
                                                        modelValue: s.value.name,
                                                        'onUpdate:modelValue':
                                                          o[13] ||
                                                          (o[13] = (t) => (s.value.name = t)),
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
                                                u,
                                                { label: '用户名', prop: 'start' },
                                                {
                                                  default: l(() => [
                                                    e(
                                                      p,
                                                      {
                                                        modelValue: s.value.sort,
                                                        'onUpdate:modelValue':
                                                          o[14] ||
                                                          (o[14] = (t) => (s.value.sort = t)),
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
                                                u,
                                                { label: '账号', prop: 'start' },
                                                {
                                                  default: l(() => [
                                                    e(
                                                      p,
                                                      {
                                                        modelValue: s.value.sort,
                                                        'onUpdate:modelValue':
                                                          o[15] ||
                                                          (o[15] = (t) => (s.value.sort = t)),
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
                                                u,
                                                { label: '手机号', prop: 'start' },
                                                {
                                                  default: l(() => [
                                                    e(
                                                      p,
                                                      {
                                                        modelValue: s.value.sort,
                                                        'onUpdate:modelValue':
                                                          o[16] ||
                                                          (o[16] = (t) => (s.value.sort = t)),
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
                                                u,
                                                { label: '用户状态', prop: 'start' },
                                                {
                                                  default: l(() => [
                                                    e(
                                                      p,
                                                      {
                                                        modelValue: s.value.sort,
                                                        'onUpdate:modelValue':
                                                          o[17] ||
                                                          (o[17] = (t) => (s.value.sort = t)),
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
                                                u,
                                                { label: '用户签名', prop: 'start' },
                                                {
                                                  default: l(() => [
                                                    e(
                                                      p,
                                                      {
                                                        modelValue: s.value.sort,
                                                        'onUpdate:modelValue':
                                                          o[18] ||
                                                          (o[18] = (t) => (s.value.sort = t)),
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
                                                u,
                                                { label: '头像', prop: 'start' },
                                                {
                                                  default: l(() => [
                                                    e(
                                                      H,
                                                      {
                                                        action:
                                                          'https://jsonplaceholder.typicode.com/posts/',
                                                        'list-type': 'picture-card',
                                                      },
                                                      { default: l(() => [$e]), _: 1 },
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
                        ]),
                        d('div', He, [
                          e(
                            ae,
                            { gutter: 20, class: 'web-list' },
                            {
                              default: l(() => [
                                (z(),
                                j(
                                  G,
                                  null,
                                  M(6, (t) =>
                                    e(
                                      F,
                                      { span: 4, class: 'web-item', key: t },
                                      {
                                        default: l(() => [
                                          e(x, null, {
                                            header: l(() => [a('怎样学习前端？')]),
                                            default: l(() => [qe]),
                                            _: 1,
                                          }),
                                        ]),
                                        _: 2,
                                      },
                                      1024,
                                    ),
                                  ),
                                  64,
                                )),
                              ]),
                              _: 1,
                            },
                          ),
                        ]),
                      ]),
                      _: 1,
                    },
                  ),
                  e(y, { label: '订单信息' }, { default: l(() => [a('订单信息')]), _: 1 }),
                  e(y, { label: '程序接单信息' }, { default: l(() => [a('程序接单信息')]), _: 1 }),
                  e(y, { label: '学习信息' }, { default: l(() => [a('学习信息')]), _: 1 }),
                ]),
                _: 1,
              },
            ),
          ])
        )
      }
    },
  })
const Le = ve(Ge, [['__scopeId', 'data-v-8c0026ff']])
export { Le as default }
