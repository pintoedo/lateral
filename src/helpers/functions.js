const percentFunc = (data) => {
  return (data.similarity * 100).toFixed();
};

const shortString = (data) => {
  const MAX_LENGTH = 100;
  return data.title.substring(0, MAX_LENGTH) + '...';
};

export { percentFunc, shortString };
