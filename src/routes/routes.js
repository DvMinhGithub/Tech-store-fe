export const routes = {
  auth: {
    home: '/',
    homeAdmin: '/admin',
    login: '/login',
    register: '/register'
  },
  user: {
    profile: '/profile'
  },
  cart: {
    list: '/cart'
  },
  brand: {
    list: '/admin/brand'
  },
  category: {
    list: '/admin/category'
  },
  supplier: {
    list: '/admin/supplier'
  },
  product: {
    list: '/admin/product',
    add: '/admin/product/create',
    edit: '/admin/product/edit/:id'
  },
  voucher: {
    list: '/admin/voucher'
  }
}
