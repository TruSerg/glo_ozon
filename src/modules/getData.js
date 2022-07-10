const getData = (str) => {
  return fetch(
    `https://ozone-glo-bd9e4-default-rtdb.firebaseio.com/goods.json?${
      str ? `search=${str}` : ""
    }`
  ).then((res) => res.json());
};

export default getData;
