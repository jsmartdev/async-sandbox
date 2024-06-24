// async javascript course by Net-Ninja

/*const getTodos = (resource) => {
  return new Promise((resolve, reject) => {
    const request = new XMLHttpRequest();
    request.addEventListener('readystatechange', () => {
      if (request.readyState === 4 && request.status === 200) {
        const data = JSON.parse(request.responseText);
        resolve(data)
      } else if (request.readyState === 4) {
        reject('error getting resource')
      }
    })
    request.open('GET', resource );
    request.send();
  })
}

getTodos('todos/mario.json').then(data => {
  console.log('promise 1 resolved:', data)
  return getTodos('todos/luigi.json');
}).then (data => {
  console.log('promise 2 resolved:', data);
  return getTodos('todos/yoshis.json');
}).then (data => {
  console.log('promise 3 resolved:', data)
}).catch (err => {
  console.log('promise rejected:', err)
})*/

//Fetch api and async await

const getTodos = async () => {
  const response = await fetch('todos/mario.json');
  if (response.status !== 200) {
    throw new Error('Cannot fetch data!')
  }
  const data = await response.json();
  return data;
}

getTodos()
  .then(data => console.log('resolved:', data))
  .catch(err => console.log('rejected:', err.message));