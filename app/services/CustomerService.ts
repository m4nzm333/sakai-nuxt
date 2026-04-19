export const CustomerService = {
  getCustomersSmall(): Promise<any[]> {
    return fetch('/demo/data/customers-small.json')
      .then((res) => res.json())
      .then((d) => d.data)
  },
  getCustomersMedium(): Promise<any[]> {
    return fetch('/demo/data/customers-medium.json')
      .then((res) => res.json())
      .then((d) => d.data)
  },
  getCustomersLarge(): Promise<any[]> {
    return fetch('/demo/data/customers-large.json')
      .then((res) => res.json())
      .then((d) => d.data)
  },
  getCustomersXLarge(): Promise<any[]> {
    return fetch('/demo/data/customers-xlarge.json')
      .then((res) => res.json())
      .then((d) => d.data)
  }
}
