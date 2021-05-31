export default function mapFieldsToData(fields) {
  // This code scream 4 help...
  const newFields = Object.values(fields).reduce((obj, item) => {
    if(!!item?.isArray && !Array.isArray(item.value)) {
      let value;
      if(item.value.indexOf(' e ') !== -1) { value = item.value.replace(' e ', ', ')?.split(', ') }
      else {
        if(item.value.indexOf(', ') !== 1) { value = item.value.split(', ') } 
        else { value = [item.value] }
      }
      return { ...obj, [item.name]: value };
    } else {
      if(item.type === 'select' || item.type === 'simpleSelect'){
        if(Array.isArray(item?.value?.value)){
          return { ...obj, [item.name]: item?.value.value.map((subItem) => subItem.value) }
        } else {
          if(item.isMulti) {
            return { ...obj, [item.name]: item?.value.map((subItem) => {
              if(Array.isArray(subItem.value)){ return subItem.value[0] }
              else { return subItem.value }
          })}} else {
            return { ...obj, [item.name]: item.value.value }
          }
        }
      } else { return { ...obj, [item.name]: item.value } }
    }
  }, {})
  return {...newFields}
}
