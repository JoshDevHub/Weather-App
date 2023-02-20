export const selectProps = (...props) => {
  return (obj) => {
    return props.reduce((newObj, name) => {
      newObj[name] = obj[name]
      return newObj;
    }, {});
  }
}

export const transformValues = (obj, mappingFn) => {
  const newObject = {};
  for (const [prop, value] of Object.entries(obj)) {
    newObject[prop] = mappingFn(value);
  }
  return newObject;
}
