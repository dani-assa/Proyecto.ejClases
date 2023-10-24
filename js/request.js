// const promesa = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     console.log('Se ha resuelto la promesa');
//   }, 2000);
// });

// promesa
//   .then((response) => console.log(response))
//   .catch((error) => console.error(error))
//   .finally(() => console.log('termino la promesa'));

const motos = [
  {
    id: 1,
    marca: 'Acme'
  },
  {
    id: 2,
    marca: 'KTM'
  },
  {
    id: 3,
    marca: 'Yamaha'
  },
  {
    id: 4,
    marca: 'Honda'
  },
];



const searchById = (id) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const resultado = motos.find((moto) => moto.id === id);
      if (resultado) return resolve(resultado); 
      reject('No se ha encontrado el vehiculo');
    }, 3000)
  })
};

// let moto;
// searchById(3)
//   .then((result) => {
//     moto = result.marca;
//     document.body.innerHTML = `<h1>${moto}</h1>`
//   })
//   .catch((error) => console.error(error));


// Funciones asincronas 

// const miFuncion = async () => {
//   let moto;
//   await searchById(8)
//     .then((result) => moto = result.marca)
//     .catch(error => moto = error)
//     .finally(() => console.log('se ha resuelto la promesa'))
//   document.body.innerHTML = `<h1>${moto}</h1>`
  
// };

// miFuncion()


// promesaRick
//   .then((result) => result.json())
//   .then((results) => console.log(results))
//   .catch((error) => console.log(error));

const listarPersonajas = (lista) => {
  const list = document.getElementById('personajes')
  lista.map((personaje) => {
    const li = document.createElement('li');
    li.innerHTML = personaje.name;
    list.appendChild(li)
  })
}

const promesaApi = async () => {
  try {
    const promesaRick = await fetch(
      'https://rickandmortyapi.com/api/character');
    const {results} = await promesaRick.json()
    listarPersonajas(results);
    
    
  } catch (error) {
    console.log(error);
  }
};

promesaApi();