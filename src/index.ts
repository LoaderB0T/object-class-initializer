type ClassToMapped<T> = { [K in keyof T]: T[K] } & {};

export function createObject<T, M extends T>(c: new () => M): ClassToMapped<M>;
export function createObject<T>(c: new () => T): T;
export function createObject<T>(c: new () => T): T {
  return Object.assign({}, new c());
}
