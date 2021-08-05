export const trim = (x: string | number) =>
  Number(x.toString().replace(/[^\d.-]/g, ""));
