export const selectProps = (...props) => {
  return (obj) => {
    return props.reduce((newObj, name) => {
      newObj[name] = obj[name]
      return newObj;
    }, {});
  }
}
