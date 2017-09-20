const getRandomValue = (input, modifier, precision, negs=true) => {
  const minValue = input - modifier;
  const maxValue = input + modifier;
  const randomValue = (Math.random() * (maxValue - minValue) + minValue).toFixed(precision)
  return negs ? randomValue : Math.abs(randomValue);
}

export default getRandomValue;
