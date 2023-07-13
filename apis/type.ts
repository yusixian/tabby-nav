type DateToString<T> = T extends Date ? string : T;

type TransformDateFields<T> = {
  [P in keyof T]: DateToString<T[P]>;
};

export type Serialize<T extends Object> = TransformDateFields<T>;
