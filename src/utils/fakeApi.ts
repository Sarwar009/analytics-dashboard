export function fakeFetch<T>(data: T): Promise<T> {
  return new Promise((resolve) => {
    setTimeout(() => resolve(data), 1000); // always succeed
  });
}
