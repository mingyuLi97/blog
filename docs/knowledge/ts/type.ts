//#region NonNullable
type _NonNullable<T> = T extends null | undefined ? never : T;
type A = 'number' | null | undefined;
type _NonNullableA = _NonNullable<A>; // number
//#endregion NonNullable

//#region parameters
type _Parameters<T extends Function> = T extends (...args: infer K) => unknown
  ? K
  : never;
//#endregion parameters

function foo(a: string, b?: Record<string, number>) {}

type B = Parameters<typeof foo>;
type _B = _Parameters<typeof foo>;

//#region ReturnType
type _ReturnType<T extends Function> = T extends (...args: any) => infer K
  ? K
  : never;
//#endregion ReturnType

type C = ReturnType<() => Record<string, number>>;
type _C = _ReturnType<() => Record<string, number>>;

interface IMap {
  a: string;
  b: string;
  c: number;
}

//#region partial
type _Partial<T> = { [K in keyof T]?: T[K] };
//#endregion partial

type D = Partial<IMap>;
type _D = _Partial<IMap>;

interface IReadonly {
  a: number;
}
//#region readonly
type _Readonly<T> = { readonly [K in keyof T]: T[K] };
//#endregion readonly

type E = Readonly<IReadonly>;
type _E = _Readonly<IReadonly>;

interface IF {
  a: string;
  b: number;
}
//#region pick
type _Pick<T, K extends keyof T> = { [P in K]: T[P] };
//#endregion pick

type F = Pick<IF, 'a'>;
type _F = _Pick<IF, 'a' | 'b'>;

type _Record<T extends keyof any, K> = { [P in T]: K };
type G = Record<'a' | 'b', { a: 1 }>;
type _G = _Record<'a' | 'b', { a: 1 }>;

//#region exclude
type _Exclude<T, U> = T extends U ? never : T;

type H2 = _Exclude<'a' | 'b', 'c'>; // 'a' | 'b'
type H3 = _Exclude<'a' | 'b', 'b'>; // 'a'
//#endregion exclude

//#region extract
// 取交集
type _Extract<T, U> = T extends U ? T : never;

type I = _Extract<'a' | 'b', 'b' | 'c'>; // 'b'
type I1 = _Extract<'a' | 'b', 'c'>; // never
//#endregion extract

//#region omit
interface IJ {
  a: null;
  b: number;
  c: string;
}
// Omit<T, U>从类型T中剔除U中的所有属性。
type _Omit<T, U extends keyof any> = { [P in _Exclude<keyof T, U>]: T[P] };
type _Omit1<T, U extends keyof any> = Pick<T, _Exclude<keyof T, U>>;

type J = _Omit<IJ, 'a'>; // {b: number; c: string}
type J1 = _Omit1<IJ, 'ac'>; // {a: null; b: number; c: string}
//#endregion omit
