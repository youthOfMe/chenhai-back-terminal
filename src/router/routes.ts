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
          title: '社区板块',
          hidden: false,
          icon: 'User',
        },
      },
      {
        path: '/community/post',
        component: () => import('@/views/community/post/Post.vue'),
        name: 'communityPost',
        meta: {
          title: '社区帖子',
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
    path: '/communityManage',
    component: () => import('@/layout/Index.vue'),
    name: 'communityManage',
    meta: {
      title: '社区管理',
      hidden: false,
      icon: 'Platform',
    },
    redirect: '/communityManage/sectorManage',
    children: [
      {
        path: '/communityManage/firstClassManage',
        component: () => import('@/views/community-manage/first-class-manage/FirstClassMag.vue'),
        name: 'FirstClassManage',
        meta: {
          title: '一级分类管理',
          hidden: false,
          icon: 'UserFilled',
        },
      },
      {
        path: '/communityManage/columnManage',
        component: () => import('@/views/community-manage/column-manage/ColumnMag.vue'),
        name: 'ColumnManage',
        meta: {
          title: '专栏管理',
          hidden: false,
          icon: 'Platform',
        },
      },
      {
        path: '/communityManage/columnPost',
        component: () => import('@/views/community-manage/column-manage/posts-of-columns/PostsOfColumns.vue'),
        name: 'ColumnPost',
        meta: {
          title: '专栏的帖子',
          hidden: true,
          icon: 'Platform',
        },
      },
      {
        path: '/communityManage/sectorManage',
        component: () => import('@/views/community-manage/sector-manage/SectorMag.vue'),
        name: 'SectorManage',
        meta: {
          title: '板块管理',
          hidden: false,
          icon: 'Platform',
        },
      },
      {
        path: '/communityManage/postManage',
        component: () => import('@/views/community-manage/post-manage/PostMag.vue'),
        name: 'PostManage',
        meta: {
          title: '帖子管理',
          hidden: false,
          icon: 'Monitor',
        },
      },
    ],
  },

  {
    path: '/officGood',
    component: () => import('@/layout/Index.vue'),
    name: 'officGood',
    meta: {
      title: '官方商品',
      hidden: false,
      icon: 'Goods',
    },
    redirect: '/officGood/officCom',
    children: [
      {
        path: '/officGood/officCom',
        component: () => import('@/views/official-merchandise/offic-product/OfficProduct.vue'),
        name: 'OfficCom',
        meta: {
          title: '商品管理',
          hidden: false,
          icon: 'Goods',
        },
      },
      {
        path: '/officGood/officSort',
        component: () => import('@/views/official-merchandise/offic-sort/OfficeSort.vue'),
        name: 'OfficSort',
        meta: {
          title: '分类管理',
          hidden: false,
          icon: 'UserFilled',
        },
      },
      {
        path: '/officGood/officPackage',
        component: () => import('@/views/official-merchandise/offic-package/OfficPackage.vue'),
        name: 'OfficPackage',
        meta: {
          title: '套餐管理',
          hidden: false,
          icon: 'Monitor',
        },
      },
      {
        path: '/officGood/officStore',
        component: () => import('@/views/official-merchandise/offic-store-config/OfficStore.vue'),
        name: 'OfficStore',
        meta: {
          title: '店铺配置',
          hidden: false,
          icon: 'Monitor',
        },
      },
    ],
  },

  {
    path: '/thirdGood',
    component: () => import('@/layout/Index.vue'),
    name: 'thirdGood',
    meta: {
      title: '第三方商品',
      hidden: false,
      icon: 'Goods',
    },
    redirect: '/thirdGood/thirdCom',
    children: [
      {
        path: '/thirdGood/thirdCom',
        component: () => import('@/views/third-part-product/third-product/ThirdProduct.vue'),
        name: 'ThirdCom',
        meta: {
          title: '商品管理',
          hidden: false,
          icon: 'Goods',
        },
      },
      {
        path: '/thirdGood/thirdSort',
        component: () => import('@/views/third-part-product/third-sort/ThirdSort.vue'),
        name: 'ThirdSort',
        meta: {
          title: '分类管理',
          hidden: false,
          icon: 'UserFilled',
        },
      },
      {
        path: '/thirdGood/thirdPackage',
        component: () => import('@/views/third-part-product/third-package/ThirdPackage.vue'),
        name: 'ThirdPackage',
        meta: {
          title: '套餐管理',
          hidden: false,
          icon: 'Monitor',
        },
      },
    ],
  },

  {
    path: '/programGood',
    component: () => import('@/layout/Index.vue'),
    name: 'programGood',
    meta: {
      title: '程序商品',
      hidden: false,
      icon: 'Goods',
    },
    redirect: '/programGood/comManage',
    children: [
      {
        path: '/programGood/comManage',
        component: () => import('@/views/program-good/com-manage/ComManage.vue'),
        name: 'ComManage',
        meta: {
          title: '商品管理',
          hidden: false,
          icon: 'Goods',
        },
      },
      {
        path: '/programGood/sortManage',
        component: () => import('@/views/program-good/sort-manage/SortManage.vue'),
        name: 'SortManage',
        meta: {
          title: '分类管理',
          hidden: false,
          icon: 'UserFilled',
        },
      },
      {
        path: '/programGood/packageManage',
        component: () => import('@/views/program-good/package-manage/PackageManage.vue'),
        name: 'PackageManage',
        meta: {
          title: '套餐管理',
          hidden: false,
          icon: 'Monitor',
        },
      },
    ],
  },

  {
    path: '/user',
    component: () => import('@/layout/Index.vue'),
    name: 'user',
    meta: {
      title: '用户管理',
      icon: 'Goods',
      hidden: false,
    },
    redirect: '/user/info',
    children: [
      {
        path: '/user/info',
        component: () => import('@/views/user-manage/user-message/UserMessage.vue'),
        name: 'UserMessage',
        meta: {
          title: '基础信息',
          icon: 'ShoppingCartFull',
          hidden: false,
          threeMenu: true,
        },
      },
      {
        path: '/user/manage',
        component: () => import('@/views/user-manage/user-role/UserRole.vue'),
        name: 'UserManage',
        meta: {
          title: '角色管理',
          icon: 'UserFilled',
          hidden: false,
        },
      },
      {
        path: '/user/limit',
        component: () => import('@/views/user-manage/user-limit/UserLimit.vue'),
        name: 'UserLimit',
        meta: {
          title: '权限管理',
          icon: 'Monitor',
          hidden: false,
        },
      },
      {
        path: '/user/moreInfo',
        component: () => import('@/views/user-manage/user-message/user-more-info/UserMoreInfo.vue'),
        name: 'UserMoreInfo',
        meta: {
          title: '更多信息',
          icon: 'Monitor',
          hidden: true,
        },
      },
      {
        path: '/user/morePostInfo',
        component: () =>
          import('@/views/user-manage/user-message/user-more-info/more-post-info/MorePostInfo.vue'),
        name: 'UserMorePostInfo',
        meta: {
          title: '帖子详情',
          icon: 'Monitor',
          hidden: true,
        },
      },
    ],
  },

  {
    path: '/employee',
    component: () => import('@/layout/Index.vue'),
    name: 'employee',
    meta: {
      title: '员工管理',
      icon: 'Goods',
      hidden: false,
    },
    redirect: '/employee/info',
    children: [
      {
        path: '/employee/info',
        component: () => import('@/views/employee-manage/employee-message/EmployeeMessage.vue'),
        name: 'employee-info',
        meta: {
          title: '基础信息',
          icon: 'ShoppingCartFull',
          hidden: false,
        },
      },
      {
        path: '/employee/manage',
        component: () => import('@/views/employee-manage/employee-role/EmployeeRole.vue'),
        name: 'employee-manage',
        meta: {
          title: '角色管理',
          icon: 'UserFilled',
          hidden: false,
        },
      },
      {
        path: '/employee/limit',
        component: () => import('@/views/employee-manage/employee-limit/EmployeeLimit.vue'),
        name: 'employee-limit',
        meta: {
          title: '权限管理',
          icon: 'Monitor',
          hidden: false,
        },
      },
    ],
  },

  {
    path: '/apply',
    component: () => import('@/layout/Index.vue'),
    name: 'Apply',
    meta: {
      title: '应用配置',
      icon: 'Goods',
      hidden: false,
    },
    redirect: '/apply/note/',
    children: [
      {
        path: '/apply/note',
        component: () => import('@/views/apply-set/note-set/NoteSet.vue'),
        name: 'note',
        meta: {
          title: '公告配置',
          icon: 'UserFilled',
          hidden: false,
        },
      },
      {
        path: '/apply/message',
        component: () => import('@/views/apply-set/message-set/MessageSet.vue'),
        name: 'message',
        meta: {
          title: '信息配置',
          icon: 'ShoppingCartFull',
          hidden: false,
        },
      },
      {
        path: '/apply/carousel',
        component: () => import('@/views/apply-set/carousel-set/CarouselSet.vue'),
        name: 'Carousel',
        meta: {
          title: '轮播图管理',
          icon: 'ShoppingCartFull',
          hidden: false,
        },
      },
    ],
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
