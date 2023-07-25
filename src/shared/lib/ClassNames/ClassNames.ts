
type Mods = Record<string, boolean | string>

export function classNames (cls: string, mods: Mods = {}, additioonal: string[] = []): string {
  return [
    cls,
    ...Object.entries(mods)
      .filter(([, value]) => Boolean(value))
      .map(([className, value]) => className),
    ...additioonal.filter(Boolean)
  ].join(' ');
}
