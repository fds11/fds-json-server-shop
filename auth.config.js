require('dotenv/config')
module.exports = {
  products: {
    write: 'ownerOnly'
  },
  options: {
    write: 'ownerOnly'
  },
  cartItems: {
    write: 'ownerOnly',
    read: 'ownerOnly'
  },
  orders: {
    write: 'ownerOnly',
    read: 'ownerOnly'
  }
};
