console.log("Fetching api");

const fetchData = () => {
  const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("Timer is Done");
    }, 1000);
  });
  return promise;
};

setTimeout(() => {
  console.log("Processing");
  fetchData()
    .then((text) => {
      console.log(text);
      return fetchData();
    })
    .then((text2) => {
      console.log(text2);
    });
}, 2000);
