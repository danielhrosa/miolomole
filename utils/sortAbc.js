export default function sortAbc(array, param) {
  if(param) {
    return array.sort((a, b) => {
    if(a.param < b.param) { return -1; }
    if(a.param > b.param) { return 1; }
    return 0;
  })} else {
    return array.sort((a, b) => {
      if(a < b) { return -1; }
      if(a > b) { return 1; }
      return 0;
  })}
}