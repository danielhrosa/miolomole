export default function arrayToStringFormatter(array) {
  if(array.length === 1){
    return `${array[0]}`
  } else {
    return ` ${array.slice(0, array.length - 1).join(', ')} e ${array[array.length-1]}`
  }

}