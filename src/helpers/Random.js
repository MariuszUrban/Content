export function getRandom(array, number) {
  let result = new Array(number),
    length = array.length,
    taken = new Array(length);
  if (number > length)
    throw new RangeError("more elements taken than acvailable");
  while (number--) {
    let x = Math.floor(Math.random() * length);
    result[number] = array[x in taken ? taken[x] : x];
    taken[x] = --length in taken ? taken[length] : length;
  }
  return result;
}
