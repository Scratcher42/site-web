export function randomColor() {
  const h = Math.floor(Math.random() * 360);
  const c1 = Math.floor(Math.random() * 100);
  const c2 = Math.floor(Math.random() * 100);
  return `hsl(${h} ${c1}% ${c2}%)`;
}