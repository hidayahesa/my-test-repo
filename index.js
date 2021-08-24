// We want to talk to an API:
// What is our endpoint?
let url = `https://restcountries.eu/rest/v2/name/Malaysia`; // assume it s a GET

function waitForData(res) {
  return res.json();
}

function handleData(data) {
  let pop = data[0].population;
  console.log(`The population of Malaysia is ${pop}`);
}

fetch(url, { method: "GET" }).then(waitForData).then(handleData);

// What parameters are required?
// What parameters are optional?
// What is HTTP method?
