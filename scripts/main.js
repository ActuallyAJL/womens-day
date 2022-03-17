// ## Step Three
// Based on the data console log the total number of items (both results added together)

const dataSourceURL = [
  "https://gist.githubusercontent.com/brendalong/ab2424b0069ed0dd56b01951462a109d/raw/716c0776c45adea089644cffa7eadab139f9f47c/womensday.json",
  "https://type.fit/api/quotes",
];
const getData = (source) => {
  return fetch(source)
    .then((response) => response.json())
    .then((data) => {
      return data;
    });
};

Promise.all([getData(dataSourceURL[0]), getData(dataSourceURL[1])]).then(
  (arrayArray) => {
    console.log(arrayArray[0]);
    console.log(arrayArray[1]);
    console.log(arrayArray[0].length + arrayArray[1].length);
  }
);
