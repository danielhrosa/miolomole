export default function urlNameFormatter(string, kebabCase = true) {
  if (!kebabCase) {
    return string.toLowerCase().normalize("NFD")
      .replace(/[\u0300-\u036f`~!@#$%^&*()_|+\=?;:'",.<>\{\}\[\]\\\/]/gi, '')
      .replace(/\s/gi, "")
  }
  return string.toLowerCase().normalize("NFD")
    .replace(/[\u0300-\u036f`~!@#$%^&*()_|+\=?;:'",.<>\{\}\[\]\\\/]/gi, '')
    .replace(/(\s)(?=\1)/gi, "")
    .replace(/\s/g, "-")  

}