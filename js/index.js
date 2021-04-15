const fetchHardcodedData = document.getElementById("fetchHardcodedData");
const fetchAirtableProducts = document.getElementById("fetchAirtableProducts");


function fetchData() {
  fetch('/api/basic-api')
  .then(response => response.json())
  .then(data => console.log(data));
}

function fetchAirtableData() {
  fetch('/api/airtable')
  .then(response => response.json())
  .then(data => console.log(data));
}


fetchHardcodedData.addEventListener("click", ()=>{
  fetchData();
}, false);

fetchAirtableProducts.addEventListener("click", ()=>{
  fetchAirtableData();
}, false);