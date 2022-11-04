/**
 * Helper function that group array of objects by value of object property
 * @param array - array
 * @param predicate - property value
 * @returns - grouped object
 */
const groupBy = <T>(array: T[], predicate: (value: T, index: number, array: T[]) => string) =>
  array.reduce((acc, value, index, arr) => {
    (acc[predicate(value, index, arr)] ||= []).push(value);
    return acc;
  }, {} as { [key: string]: T[] });

export { groupBy };
