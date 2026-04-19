export const PhotoService = {
  getImages(): Promise<any[]> {
    return fetch('/demo/data/photos.json')
      .then((res) => res.json())
      .then((d) => d.data)
  }
}
