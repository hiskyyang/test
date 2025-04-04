export function flipCoin() {
  const randomNumber = Math.random();
  return randomNumber < 0.5 ? "Heads" : "Tails";
}