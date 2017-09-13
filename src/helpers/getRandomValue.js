const getRandomValue = (input, modifier, precision) => {
  const minValue = input - modifier;
  const maxValue = input + modifier;
  return (Math.random() * (maxValue - minValue) + minValue).toFixed(precision);
}

export default getRandomValue;
