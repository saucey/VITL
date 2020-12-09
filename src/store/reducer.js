
const initState = {
  config: null,
  products: [],
  productsSuccess: null,
  basketList: []
}

const Reducer = (state = initState, action) => {

  switch (action.type) {
    case 'SET_PRODUCTS':
      return {
        ...state,
        products: action.products
      }
    case 'SET_CONFIG':
      return {
        ...state,
        config: action.config
      }
    case 'PRODUCT_SUCCESS':
      return {
        ...state,
        productsSuccess: action.productsSuccess
      }
    case 'BASKET_LIST':
      return {
        ...state,
        basketList: action.basketList
      }

    // you can have as many case statements as you need
    default:
      return state
  }



}

export default Reducer
