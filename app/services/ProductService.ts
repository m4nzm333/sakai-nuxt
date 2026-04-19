export const ProductService = {
  getProductsSmall(): Promise<any[]> {
    return fetch('/demo/data/products-small.json')
      .then((res) => res.json())
      .then((d) => d.data)
  },
  getProducts(): Promise<any[]> {
    return fetch('/demo/data/products.json')
      .then((res) => res.json())
      .then((d) => d.data)
  },
  getProductsMixed(): Promise<any[]> {
    return fetch('/demo/data/products-mixed.json')
      .then((res) => res.json())
      .then((d) => d.data)
  },
  getProductsWithOrdersSmall(): Promise<any[]> {
    return fetch('/demo/data/products-orders-small.json')
      .then((res) => res.json())
      .then((d) => d.data)
  }
}
