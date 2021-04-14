function fetchData() {
  fetch('/api/basic-api')
  .then(response => response.json())
  .then(data => console.log(data));
}

fetchData();