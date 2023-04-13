export const pathOr = (initial, str, obj) => {
    const arr = str.split('.');
    let retVal;
    try {
      retVal = arr.reduce((acc, curr) => {
        return acc[curr];
      }, obj);
    } catch (e) {
      retVal = initial;
    } finally {
      retVal = retVal || initial;
    }
    return retVal;
  };

export default pathOr;