
type Mods = Record<string, boolean | string>

export function classNames (cls: string, mods: Mods = {}, additioonal: string[] = []): string {
  return [
    cls,
    ...additioonal.filter(Boolean),
    ...Object.entries(mods)
      .filter(([, value]) => Boolean(value))
      .map(([className, value]) => className)
  ].join(' ')
}

classNames('remove-btn', { hovered: true, selectable: true, red: false }, ['pgc'])
