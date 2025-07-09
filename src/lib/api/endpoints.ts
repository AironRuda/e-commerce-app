export const API_ENDPOINTS = {
  PRODUCTS: {
    GET_ALL: "/products",
    GET_BY_COLLECTION: (collection: string) =>
      `/products/category/${collection}`,
    GET_BY_ID: (id: string) => `/products/${id}`,
  },
} as const;
