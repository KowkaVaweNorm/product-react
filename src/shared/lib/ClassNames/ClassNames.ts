
export type Mods = Record<string, boolean | string | undefined>

export function classNames (
  cls: string = '',
  mods: Mods = {},
  additioonal: Array<string | undefined> = []): string {
  return [
    cls,
    ...additioonal.filter(Boolean),
    ...Object.entries(mods)
      .filter(([, value]) => Boolean(value))
      .map(([className]) => className)
  ].join(' ');
}
