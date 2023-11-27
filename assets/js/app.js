const baseEndpoint = 'https://api.github.com/'; // El nombre de la variable no es muy entendible a simple vista, se sugeriría usar nombres que den más contexto de lo que se está haciendo, ejemplo: url, siito web, enlace o link.

const usersEndpoint = `${baseEndpoint}/users`; // Esta línea parece innecesaria ya que puede unir el directorio users directo en la varible: baseEndpoint

const $n = document.querySelector('.name'); //Nombres de varibales poco informativas acerca de su función dentro del código. Para acceder al alemento de clase es mediante el selector "."
const $b = document.querySelector('.blog');//Nombres de varibales poco informativas acerca de su función dentro del código. Para acceder al alemento de clase es mediante el selector "."
const $l = document.querySelector('.location');//Nombres de varibales poco informativas acerca de su función dentro del código.

function displayUser(username) { 
  $n.textContent = 'cargando...';
  //await is only valid in async functions and the top level bodies of modules
  const response = await fetch(`${usersEndpoint}/${username}`);
  //Para hcer uso de await, es necesario complementar con un try and catch
  console.log(data);
  $n.textContent = '${data.name}';
  $b.textContent = '${data.blog}';
  $l.textContent = '${data.location}';
}

function handleError(err) {
  console.log('OH NO!');
  console.log(err);
  n.textContent = `Algo salió mal: ${err}`
}

displayUser('stolinski').catch(handleError);