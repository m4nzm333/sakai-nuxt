export const NodeService = {
  getTreeNodes(): Promise<any[]> {
    return fetch('/demo/data/treenodes.json')
      .then((res) => res.json())
      .then((d) => d.root)
  },
  getTreeTableNodes(): Promise<any[]> {
    return fetch('/demo/data/treetablenodes.json')
      .then((res) => res.json())
      .then((d) => d.root)
  }
}
