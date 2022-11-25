// Projects Container - Home & Simplify

async function getData() {
    let url3 = [`http://jsonplaceholder.typicode.com/posts/?_limit=3`];
    
    try {
      let res = await fetch(url3);
      return await res.json();
    } catch (error) {
      console.log(error);
    }
  }
  
  async function renderData() {
    let info = await getData();
   
    let dataCard = "";
    info.forEach((item) => {
      let cardInfo = `<section class="projects">
                              <img
                                  src="../src/projects-section/${item.id}.jpg"
                                  alt="imagen"
                                  class="project-img"
                              />
                              <div class="projects-description">
                                  <h3  class="dataH3">${
                                    item.title.split(" ")[0]
                                  } ${item.title.split(" ")[1]}</h3>
                                  <div class="text data-description">${item.body.slice(0,20)}</div>
                                  <a href="../HTML/simplify.html" class="learnMore">learn more</a>
                              </div>
                          </section>`;
  
      return (dataCard += cardInfo);
    });
  
    document.querySelector(".projects-box").innerHTML = dataCard;
  }
  
renderData();
  

// Simplify Page --- Main Project Description

const getSimplifyText = () => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((response) => response.json())
      .then((res) => {
        document.querySelector(".simplify-title").innerText =
          res[0].title.slice(0, 20);
        document.querySelector(".simplify-text").innerText = res[0].body;
      });
  };
  getSimplifyText();

// Hamburger Manu

const burger = document.querySelector(".burger");
const navMenu = document.querySelector(".nav-menu");

burger.addEventListener("click", () => {
    burger.classList.toggle("active");
    navMenu.classList.toggle("active");
})

document.querySelectorAll(".nav-link").forEach(n => n.addEventListener("click", () => {
    burger.classList.remove("active");
    navMenu.classList.remove("active");
}))