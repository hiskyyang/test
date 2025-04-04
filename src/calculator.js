export function sum(...numbers) {
  if (!numbers || numbers.length === 0) {
    return 0;
  }
  return numbers.reduce((total, num) => total + num, 0);
}

export function product(...numbers) {
  if (!numbers || numbers.length === 0) {
    return 1; // Return 1 for an empty input
  }

  return numbers.reduce((total, num) => total * num, 1);
}