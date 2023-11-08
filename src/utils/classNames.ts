export function cn(...rest: unknown[]): string {
  const classes = [];

  for (const el of rest) {
    if (typeof el === 'string') classes.push(el);
    if (Array.isArray(el)) classes.push(cn(...el));
    if (typeof el === 'object' && el !== null && !Array.isArray(el)) {
      for (const [key, val] of Object.entries(el)) {
        if (val) classes.push(key);
      }
    }
  }

  return classes.join(' ');
}
