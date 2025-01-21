type Condition<T> = (...args: [T, number, T[]]) => boolean;

export const combineSomeFilter =
  <T>(...conditions: Condition<T>[]) =>
  (...args: [T, number, T[]]) =>
    conditions.some((condition) => condition(...args));

export const filterByString =
  <T>(query: string, key: keyof T) =>
  (item: T) => {
    const itemValue = String(item[key])?.toLowerCase();

    return query
      .toLowerCase()
      .split(' ')
      .every((q) => itemValue.includes(q));
  };
