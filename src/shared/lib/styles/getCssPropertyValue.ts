export const getCssPropertyValue = (cssVar: string): string =>
  getComputedStyle(document.documentElement).getPropertyValue(cssVar);
