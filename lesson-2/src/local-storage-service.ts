export function read(key: string): string {
  return localStorage.getItem(key)
}
