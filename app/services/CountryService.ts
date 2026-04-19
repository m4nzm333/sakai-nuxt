export const CountryService = {
  getCountries(): Promise<any[]> {
    return fetch('/demo/data/countries.json')
      .then((res) => res.json())
      .then((d) => d.data)
  }
}
