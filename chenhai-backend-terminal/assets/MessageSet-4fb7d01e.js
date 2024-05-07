import {
  d as F,
  c as f,
  e as _,
  o,
  f as u,
  m as e,
  g as l,
  w as t,
  i as a,
  F as g,
  n as x,
  q as y,
  t as d,
  p as T,
  k as B,
  _ as I,
} from './index-94ead3f8.js'
const m = '/assets/logo-6bb0ef9b.png',
  s = (p) => (T('data-v-441dedf9'), (p = p()), B(), p),
  R = { class: 'head-message my-card' },
  C = { style: { display: 'flex', 'justify-content': 'space-between', 'margin-top': '1vw' } },
  M = s(() => e('p', null, '商品买卖区', -1)),
  N = s(() =>
    e('img', { style: { width: '10w', height: '10vw', 'margin-top': '10px' }, src: m }, null, -1),
  ),
  V = s(() => e('i', { class: 'el-icon-tickets ico' }, null, -1)),
  q = s(() => e('div', { style: { clear: 'both' } }, null, -1)),
  D = s(() => e('p', null, '2区', -1)),
  E = s(() =>
    e('img', { style: { width: '10w', height: '10vw', 'margin-top': '10px' }, src: m }, null, -1),
  ),
  L = s(() => e('i', { class: 'el-icon-tickets ico' }, null, -1)),
  z = s(() => e('div', { style: { clear: 'both' } }, null, -1)),
  A = s(() => e('p', null, '3区', -1)),
  G = s(() =>
    e('img', { style: { width: '10w', height: '10vw', 'margin-top': '10px' }, src: m }, null, -1),
  ),
  H = s(() => e('i', { class: 'el-icon-tickets ico' }, null, -1)),
  J = s(() => e('div', { style: { clear: 'both' } }, null, -1)),
  K = s(() => e('p', null, '4区', -1)),
  O = s(() =>
    e('img', { style: { width: '10w', height: '10vw', 'margin-top': '10px' }, src: m }, null, -1),
  ),
  P = s(() => e('i', { class: 'el-icon-tickets ico' }, null, -1)),
  Q = s(() => e('div', { style: { clear: 'both' } }, null, -1)),
  U = F({
    __name: 'MessageSet',
    setup(p) {
      const v = f([
          {
            title: '卡片1',
            content:
              '容器默认存在两根轴：水平的主轴（main axis）和垂直的交叉轴（cross axis）。 采用Flex布局的元素，称为Flex容器（flex container），简称”容器”。它的所有子元素自动成为容器成员，称为Flex项目（flex item）。 注：设为Flex布局以后，子元素的float、clear和vertical-align属性将失效。',
          },
          { title: '卡片2', content: '这是卡片2的内容' },
          {
            title: '卡片3',
            content: '这是卡片2的内容 jkhjfgbefjdkbsdhjbbfdofgyuewg好像记得你副本位于东部',
          },
        ]),
        w = f([
          {
            title: '卡片1',
            content:
              '弹性布局简化了网页布局的开发过程，提供了更灵活、响应式的布局方式。它适用于各种屏幕尺寸和设备类型，并能够快速适应不同的布局需求。',
          },
          {
            title: '卡片2',
            content:
              '主轴与交叉轴：弹性容器具有主轴（main axis）和交叉轴（cross axis）。默认情况下，主轴是水平方向，交叉轴是垂直方向。弹性容器：通过将父元素的display属性设置为flex或inline-flex来创建弹性容器。 子元素的弹性项目：弹性容器中的每个子元素都成为弹性项目。子元素可以指定各自在主轴和交叉轴上的大小、顺序以及对齐方式等。',
          },
        ]),
        b = f([
          {
            title: '卡片1',
            content:
              '：弹性容器具有主轴（main axis）和交叉轴（cross axis）。默认情况下，主轴是水平方向',
          },
          {
            title: '卡片2',
            content:
              '主轴与交叉轴：弹性容器具有主轴（main axis）和交叉轴（cross axis）。默认情况下，主轴是水平方向，交叉轴是垂直方向。弹性容器：通过将父元素的display属性设置为flex或inline-flex来创建弹性容器。 子元素的弹性项目：弹性容器中的每个子元素都成为弹性项目。子元素可以指定各自在主轴和交叉轴上的大小、顺序以及对齐方式等。打击啦v车身宽度和v复活节我的v从不回家v和v立刻就会v才能换个天赋v',
          },
        ]),
        k = f([
          {
            title: '卡片1',
            content:
              '弹性布局简化了网页布局的开发过程，提供了更灵活、响应式的布局方式。它适用于各种屏幕尺寸和设备类型，并能够快速适应不同的布局需求。',
          },
          { title: '卡片2', content: '这是卡片2的内容' },
        ])
      return (W, X) => {
        const S = _('el-button'),
          j = _('el-form'),
          i = _('el-divider'),
          c = _('el-card'),
          h = _('el-col')
        return (
          o(),
          u('div', null, [
            e('div', R, [
              l(
                j,
                {
                  label: '公告',
                  style: { display: 'flex', 'justify-content': 'space-between', height: '2vw' },
                },
                {
                  default: t(() => [
                    l(S, { type: 'primary' }, { default: t(() => [a('编辑公告')]), _: 1 }),
                  ]),
                  _: 1,
                },
              ),
            ]),
            e('div', C, [
              l(
                h,
                { span: 6, style: { 'margin-right': '5px', 'border-radius': '15px' } },
                {
                  default: t(() => [
                    l(
                      c,
                      { shadow: 'never', class: 'one', style: { 'border-radius': '15px' } },
                      {
                        default: t(() => [
                          M,
                          l(
                            i,
                            { 'content-position': 'left' },
                            { default: t(() => [a('Rabindranath Tagore')]), _: 1 },
                          ),
                          N,
                          (o(!0),
                          u(
                            g,
                            null,
                            x(
                              v.value,
                              (n, r) => (
                                o(),
                                y(
                                  c,
                                  { key: r, style: { 'margin-top': '10px' }, shadow: 'never' },
                                  {
                                    default: t(() => [
                                      l(
                                        i,
                                        null,
                                        { default: t(() => [a(d(n.title), 1)]), _: 2 },
                                        1024,
                                      ),
                                      e('p', null, d(n.content), 1),
                                    ]),
                                    _: 2,
                                  },
                                  1024,
                                )
                              ),
                            ),
                            128,
                          )),
                          V,
                          q,
                        ]),
                        _: 1,
                      },
                    ),
                  ]),
                  _: 1,
                },
              ),
              l(
                h,
                { span: 6, style: { 'margin-right': '5px', 'border-radius': '15px' } },
                {
                  default: t(() => [
                    l(
                      c,
                      { shadow: 'always', class: 'two', style: { 'border-radius': '15px' } },
                      {
                        default: t(() => [
                          D,
                          l(
                            i,
                            { 'content-position': 'left' },
                            { default: t(() => [a('Rabindranath Tagore')]), _: 1 },
                          ),
                          E,
                          (o(!0),
                          u(
                            g,
                            null,
                            x(
                              w.value,
                              (n, r) => (
                                o(),
                                y(
                                  c,
                                  { key: r, style: { 'margin-top': '10px' } },
                                  {
                                    default: t(() => [
                                      l(
                                        i,
                                        null,
                                        { default: t(() => [a(d(n.title), 1)]), _: 2 },
                                        1024,
                                      ),
                                      e('p', null, d(n.content), 1),
                                    ]),
                                    _: 2,
                                  },
                                  1024,
                                )
                              ),
                            ),
                            128,
                          )),
                          L,
                          z,
                        ]),
                        _: 1,
                      },
                    ),
                  ]),
                  _: 1,
                },
              ),
              l(
                h,
                { span: 6, style: { 'margin-right': '5px' } },
                {
                  default: t(() => [
                    l(
                      c,
                      { shadow: 'always', class: 'three', style: { 'border-radius': '15px' } },
                      {
                        default: t(() => [
                          A,
                          l(
                            i,
                            { 'content-position': 'left' },
                            { default: t(() => [a('Rabindranath Tagore')]), _: 1 },
                          ),
                          G,
                          (o(!0),
                          u(
                            g,
                            null,
                            x(
                              b.value,
                              (n, r) => (
                                o(),
                                y(
                                  c,
                                  { key: r, style: { 'margin-top': '10px' } },
                                  {
                                    default: t(() => [
                                      l(
                                        i,
                                        null,
                                        { default: t(() => [a(d(n.title), 1)]), _: 2 },
                                        1024,
                                      ),
                                      e('p', null, d(n.content), 1),
                                    ]),
                                    _: 2,
                                  },
                                  1024,
                                )
                              ),
                            ),
                            128,
                          )),
                          H,
                          J,
                        ]),
                        _: 1,
                      },
                    ),
                  ]),
                  _: 1,
                },
              ),
              l(
                h,
                { span: 6, style: { 'margin-right': '5px' } },
                {
                  default: t(() => [
                    l(
                      c,
                      { shadow: 'always', class: 'four', style: { 'border-radius': '15px' } },
                      {
                        default: t(() => [
                          K,
                          l(
                            i,
                            { 'content-position': 'left' },
                            { default: t(() => [a('Rabindranath Tagore')]), _: 1 },
                          ),
                          O,
                          (o(!0),
                          u(
                            g,
                            null,
                            x(
                              k.value,
                              (n, r) => (
                                o(),
                                y(
                                  c,
                                  { key: r, style: { 'margin-top': '10px' } },
                                  {
                                    default: t(() => [
                                      l(
                                        i,
                                        null,
                                        { default: t(() => [a(d(n.title), 1)]), _: 2 },
                                        1024,
                                      ),
                                      e('p', null, d(n.content), 1),
                                    ]),
                                    _: 2,
                                  },
                                  1024,
                                )
                              ),
                            ),
                            128,
                          )),
                          P,
                          Q,
                        ]),
                        _: 1,
                      },
                    ),
                  ]),
                  _: 1,
                },
              ),
            ]),
          ])
        )
      }
    },
  })
const Z = I(U, [['__scopeId', 'data-v-441dedf9']])
export { Z as default }
