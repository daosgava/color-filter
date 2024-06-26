const getDataset1 = async () => {
  const res = await fetch('https://gabriel2761.github.io/data/circles.json');
  const jsonData = await res.json();
  return jsonData;
};

const getDataset2 = async () => {
  const res = await fetch('https://gabriel2761.github.io/data/circles2.json');
  const jsonData = await res.json();
  return jsonData;
};

export {
  getDataset1,
  getDataset2
}