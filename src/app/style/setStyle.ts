export const setBgColor = (num: number) => {
  if (num % 4 === 1) return "bg-purple-200 hover:bg-purple-300";
  else if (num % 4 === 2) return "bg-yellow-200 hover:bg-yellow-300";
  else if (num % 4 === 3) return "bg-blue-200 hover:bg-blue-300";
  else return "bg-pink-200 hover:bg-pink-300";
};