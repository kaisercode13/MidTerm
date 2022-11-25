//PreventDefault para evitar que la página recargue
function sendData(event) {
    event.preventDefault();
  
    //Definición de variables de acceso a DOM
    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let phone = document.getElementById("phone").value;
    let message = document.getElementById("message").value;
  
    //API Fetch
    fetch("https://jsonplaceholder.typicode.com/users", {
      method: "POST",
      headers: {
        Accept: "text/plain, application/json, */*",
        "Content-type": "application/json",
      },
      body: JSON.stringify({
        name: name,
        email: email,
        phone: phone,
        catchPhrase: message,
      }),
    })
      .then((response) => response.json())
      .then((data) => { console.log(data); })
      .then(() => {
        let formDone = document.querySelector(".form-done");
        formDone.style.display = "block";
        console.log("YAY!");
      })
      
      .then(() => inputs.reset())
      .catch((error) => {
        let formFail = document.querySelector(".form-fail");
        formFail.style.display = "block";
        console.log("ERROR");
      });
  
   
  }
  
  //Evetn Listener para el botón submit
  let inputs = document.querySelector("#addPost").addEventListener("submit", sendData);