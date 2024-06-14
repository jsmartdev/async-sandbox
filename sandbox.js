// async javascript course by Net-Ninja

const getTodos = (resource, callback) => {
  const request = new XMLHttpRequest();

  request.addEventListener('readystatechange', () => {
    if (request.readyState === 4 && request.status === 200) {
      const data = JSON.parse(request.responseText);
      callback(undefined, data);
    } else if (request.readyState === 4) {
      callback('failed to fetch data!', undefined);
    }
  })

  request.open('GET', resource );
  request.send();
}

getTodos( 'todos/luigi.json', (err, data) => {
  console.log(data);
  getTodos('todos/mario.json', (err, data) => {
    console.log(data);
    getTodos('todos/yoshi.json', (err, data) => {
      console.log(data);
    })
  })
});
