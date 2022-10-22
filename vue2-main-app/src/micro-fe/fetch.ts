
export const fectResource = (url:string) => {
   return fetch(url).then(res => res.text())
}