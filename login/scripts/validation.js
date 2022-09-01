//1:Tomar control con JS de los elementos del DOM que vamos a manejar.

const user = document.getElementById("user");
const password = document.getElementById("password");
const message = document.getElementById("message");

//2:Escuchar los elementos que van a disparar la accion.
const btn = document
  .getElementById("btn")
  .addEventListener("click", (e) => handleClick(e));

//3:Creamos la funcion con la logica
function handleClick(event) {
  //A los botones de los formularios,para controlarlos por completo, tengo que quitarles su funcion por defecto
  event.preventDefault();

  //Verifico que pueda capturar los valores de los input
  //console.log(user.value);
  //console.log(password.value);

  //Creo usuarios para comparar si el logueo es correcto
  const USERS = [
    { user: "fernandorperez@hotmail.com", password: "fernando" },
    { user: "fernandrperez@gmail.com", password: "fernando" },
  ];
  //Vamos a simular la demora de la consulta a un backend utilizando funciones de tiempo
  message.innerHTML = "Validando....";

  setTimeout(() => {
    //creo un flag para que controle si muestro el error o redirecciono en caso de validar
    let validacionOk = false;

    for (let i = 0; i < USERS.length; i++) {
      if (
        USERS[i].user === user.value &&
        USERS[i].password === password.value
      ) {
        validacionOk = true;
        sessionStorage.setItem("login", "true");
      }
    }

    if (validacionOk) {

      location.href = "main.html";

    } else {
      message.innerHTML = `<i class="fa-solid fa-circle-exclamation"></i>Usuario o contraseña incorrectos`;
    }
  }, 2000);
  //Agrego el valor del mensaje de error con template literals, usando backticks
}

function validationSessionStorage() {
  const login = JSON.parse(sessionStorage.getItem("login"));
  if (login === true) {
    location.href = "main.html";
  }
}

validationSessionStorage();
