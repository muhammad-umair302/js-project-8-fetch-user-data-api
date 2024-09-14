fetch('<Your URL>', {})
  .then(response => {
    // Handle Fetch response here.
  })
  .catch(error => {
    // If there's an error, handle it here
  })
  fetch('https://jsonplaceholder.typicode.com/users/1')
  .then(response => console.log(response))
  .catch(error => console.log(error));
  fetch('https://jsonplaceholder.typicode.com/users/1')
  .then(response => response.json())
  .then(data => console.log(data))
  