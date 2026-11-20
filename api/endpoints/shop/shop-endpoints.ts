export const SHOP_ENDPOINTS = {
    GET_LIST_PRODUCTS: '/api/products',
    GET_PRODUCTS_WITH_ID: (id: number) => `/api/products/${id}`,
    POST_ORDER: '/api/orders',
    GET_ORDER_WITH_ID: (id: number) => `/api/orders/${id}`,
};
