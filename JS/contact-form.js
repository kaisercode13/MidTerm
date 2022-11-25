
const sendData = (event) => {
// console.log("hasta luego cocodrilo");
  event.preventDefault();
  
  // console.log("Hola pepsicola");

    //Definición de variables de acceso a DOM
  
    let name = document.getElementById("name");
    let email = document.getElementById("email");
    let phone = document.getElementById("phone");
    //let message = document.getElementById("message").value;
  
    //API Fetch
  
    fetch("https://jsonplaceholder.typicode.com/users", {
      method: "POST",
      headers: {
    
        Accept: "text/plain, application/json, */*",
  
        "Content-type": "application/json",
      },
      body: JSON.stringify({
        name: name.value,
        email: email.value,
        phone: phone.value,
        //catchPhrase: message,
      }),
    })
      .then((response) => response.json())
      .then((data) => console.log(data))
      .then(() => {
        let formDone = document.querySelector(".form-done");
        formDone.style.display = "block";
        console.log("YAY!");
      })
      .then(() => {
        name.value = '';
        email.value = '';
        phone.value = '';
        message.value = '';
      })
      .catch((error) => {
        let formFail = document.querySelector(".form-fail");
        formFail.style.display = "block";
        console.log("ERROR");
      });
  
   
  }
  
  //Evetn Listener para el botón submit

  //document.getElementById("form-5").addEventListener("submit", sendData);

const form = document.getElementById('form-5')
  console.log(form);
  form.addEventListener('click', (e) => sendData(e))