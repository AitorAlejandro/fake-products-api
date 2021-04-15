const fetchHardcodedData = document.getElementById("fetchHardcodedData");
const fetchAirtableProducts = document.getElementById("fetchAirtableProducts");
const fetchAirtableSingleProduct = document.getElementById("fetchAirtableSingleProduct");


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

function fetchAirtableProductData(id) {
  fetch(`/api/airtable-product?id=${id}`)
  .then(response => response.json())
  .then(data => console.log(data));
}


fetchHardcodedData.addEventListener("click", () => {
  fetchData();
}, false);

fetchAirtableProducts.addEventListener("click", () => {
  fetchAirtableData();
}, false);

fetchAirtableSingleProduct.addEventListener("click", () => {
  fetchAirtableProductData("rec0J2QYdYsW9c2wE");
}, false);