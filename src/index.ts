type ClassToMapped<T> = { [K in keyof T]: T[K] } & {};

export function build<T, M extends T>(c: new () => M): ClassToMapped<M>;
export function build<T>(c: new () => T): T;
export function build<T>(c: new () => T): T {
  return Object.assign({}, new c());
}
