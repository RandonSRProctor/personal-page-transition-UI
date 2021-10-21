export const thereCanBeOnlyOne = (providedObject, loneTrueKey) => {
    let newObject = {...providedObject}
    for(let key in newObject) { newObject[key] = false }
    newObject[loneTrueKey] = true
    return newObject
  }