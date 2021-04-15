const fetchHardcodedData = document.getElementById("fetchHardcodedData");
const fetchAirtableProducts = document.getElementById("fetchAirtableProducts");
const fetchAirtableSingleProduct = document.getElementById(
  "fetchAirtableSingleProduct"
);
const createAirtableProduct = document.getElementById("createAirtableProduct");

function fetchData() {
  fetch("/api/basic-api")
    .then((response) => response.json())
    .then((data) => console.log(data));
}

function fetchAirtableData() {
  fetch("/api/airtable-list-records")
    .then((response) => response.json())
    .then((data) => console.log(data));
}

function fetchAirtableProductData(id) {
  fetch(`/api/airtable-retrieve-record?id=${id}`)
    .then((response) => response.json())
    .then((data) => console.log(data));
}

function createAirtableProductData(newProduct) {
  fetch("/api/airtable-create-record", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(newProduct),
  });
}

fetchHardcodedData.addEventListener(
  "click",
  () => {
    fetchData();
  },
  false
);

fetchAirtableProducts.addEventListener(
  "click",
  () => {
    fetchAirtableData();
  },
  false
);

fetchAirtableSingleProduct.addEventListener(
  "click",
  () => {
    fetchAirtableProductData("rec0J2QYdYsW9c2wE");
  },
  false
);

createAirtableProduct.addEventListener(
  "submit",
  function (event) {
    event.preventDefault();
    const form = event.target;
    const data = {
      name: form.nameField.value,
      description: form.descriptionField.value,
      imageUrl: form.imageField.value,
      price: parseInt(form.priceField.value, 10),
    };
    createAirtableProductData(data);
  },
  false
);
