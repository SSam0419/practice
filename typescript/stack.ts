type KeyOptions = "+" | "-" | "/" | "*";

type FuncMap = {
  [key in KeyOptions]: (a: number, b: number) => number;
};

const funcMap: FuncMap = {
  "+": (a: number, b: number): number => {
    return a + b;
  },
  "-": (a: number, b: number): number => {
    return a - b;
  },
  "/": (a: number, b: number): number => {
    return a / b;
  },
  "*": (a: number, b: number): number => {
    return a * b;
  },
};
