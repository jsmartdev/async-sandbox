// async javascript course by Net-Ninja

const getTodos = (resource) => {
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
  console.log('promise resolved:', data)
}).catch (err => {
  console.log('promise rejected!', err);
})

/*getTodos( 'todos/luigi.json', (err, data) => {
  console.log(data);
  getTodos('todos/mario.json', (err, data) => {
    console.log(data);
    getTodos('todos/yoshi.json', (err, data) => {
      console.log(data);
    })
  })
});*/

//Promise example

/*const getSomething = () => {
  return new Promise((resolve, reject) => {
    //fetch something
    //resolve('some data');
    reject('some error')
  });
}

getSomething().then(data => {
  console.log(data);
}).catch(err => {
  console.log(err)
})*/
