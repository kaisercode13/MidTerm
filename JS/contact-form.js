//PreventDefault para evitar que la página recargue
function sendData(event) {
    event.preventDefault();
  
    //Definición de variables de acceso a DOM
    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let phone = document.getElementById("phone").value;
    let message = document.getElementById("message").value;
  
    //API Fetch
    fetch("https://jsonplaceholder.typicode.com/posts", {
      method: "POST",
      headers: {
        Accept: "text/plain, application/json, */*",
        "Content-type": "application/json",
      },
      body: JSON.stringify({
        name: name,
        email: email,
        phone: phone,
        message: message,
      }),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
      });
  
    //Reset valores iniciales
    document.querySelector("#form-done").style.display = "block";
    document.getElementById("name").value = "";
    document.getElementById("email").value = "";
    document.getElementById("phone").value = "";
    document.getElementById("message").value = "";
  }
  
  //Evetn Listener para el botón submit
  document.querySelector("#form-5").addEventListener("submit", sendData);