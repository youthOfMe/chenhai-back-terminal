// 对外暴露路由(常量路由)
export const constantRoute = [
  {
    path: '/login',
    component: () => import('@/views/login/Index.vue'),
    name: 'login', // 命名路由
    meta: {
      title: '登录',
      hidden: true,
      icon: 'Promotion', // 菜单文字左侧的图标, 支持element-plus的全部图标
    },
  },
  {
    // 登录成功以后展示数据的路由
    path: '/',
    component: () => import('@/layout/Index.vue'),
    name: 'layout',
    redirect: '/home',
    children: [
      {
        path: '/home',
        component: () => import('@/views/home/survey/Survey.vue'),
        meta: {
          title: '总览',
          hidden: false,
          icon: 'HomeFilled',
        },
      },
      {
        path: '/home/userProfile',
        component: () => import('@/views/home/user-profile/UserProfile.vue'),
        meta: {
          title: '用户资料',
          hidden: false,
          icon: 'HomeFilled',
        },
      },
    ],
    meta: {
      title: '主页',
      hidden: false,
      icon: 'HomeFilled',
    },
  },
  {
    path: '/community',
    component: () => import('@/layout/Index.vue'),
    redirect: '/community/plate',
    name: 'community',
    meta: {
      title: '社区功能',
      hidden: false,
      icon: 'Platform',
    },
    children: [
      {
        path: '/community/plate',
        component: () => import('@/views/community/plate/Plate.vue'),
        name: 'communityPlate',
        meta: {
          title: '关注社区',
          hidden: false,
          icon: 'User',
        },
      },
      {
        path: '/community/post',
        component: () => import('@/views/community/post/Post.vue'),
        name: 'communityPost',
        meta: {
          title: '我的帖子',
          hidden: false,
          icon: 'User',
        },
      },
    ],
  },
  {
    path: '/studyResource',
    component: () => import('@/layout/Index.vue'),
    redirect: '/studyResource/web',
    name: 'studyResource',
    meta: {
      title: '学习资源',
      hidden: false,
      icon: 'Platform',
    },
    children: [
      {
        path: '/studyResource/web',
        component: () => import('@/views/study-resource/web/Web.vue'),
        name: 'studyWeb',
        meta: {
          title: '学习网站',
          hidden: false,
          icon: 'User',
        },
      },
      {
        path: '/acl/role',
        component: () => import('@/views/acl/role/Index.vue'),
        name: 'Role',
        meta: {
          title: '角色管理',
          hidden: false,
          icon: 'UserFilled',
        },
      },
      {
        path: '/acl/permission',
        component: () => import('@/views/acl/permission/Index.vue'),
        name: 'Permission',
        meta: {
          title: '菜单管理',
          hidden: false,
          icon: 'Monitor',
        },
      },
    ],
  },
  {
    path: '/screen',
    component: () => import('@/views/screen/Index.vue'),
    name: 'Screen',
    meta: {
      title: '数据大屏',
      hidden: false,
      icon: 'Platform',
    },
  },
  {
    path: '/404',
    component: () => import('@/views/404/Index.vue'),
    name: '404',
    meta: {
      title: '404',
      hidden: true,
      icon: 'ChatDotSquare',
    },
  },
  {
    path: '/:pathMatch(.*)*',
    redirect: '/404',
    name: 'any',
    meta: {
      title: '任意路由',
      hidden: true,
      icon: 'Bill',
    },
  },
]
