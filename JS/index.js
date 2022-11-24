// Projects Container - Home & Simplify

async function getData() {
    let url3 = [`http://jsonplaceholder.typicode.com/posts/?_limit=3`];
    let url = "https://jsonplaceholder.typicode.com/posts";
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
      let cardInfo = `<article class="projects">
                              <img
                                  src="../src/projects-section/${item.id}.jpg"
                                  alt="imagen"
                                  class="project-img"
                              />
                              <div class="projects-description">
                                  <h3  class="dataH3">${
                                    item.title.split(" ")[0]
                                  } ${item.title.split(" ")[1]}</h3>
                                  <div class="text data-description">${item.body}</div>
                                  <a href="../HTML/simplify.html" class="learnMore">learn more</a>
                              </div>
                          </article>`;
  
      return (dataCard += cardInfo);
    });
  
    document.querySelector(".projects-box").innerHTML = dataCard;
  }
  
renderData();
  

// Simplify Page --- Main Project Description

async function getTextData() {
    let url = "https://jsonplaceholder.typicode.com/posts/1";
    try {
      let res = await fetch(url);
      return await res.json();
    } catch (error) {
      console.log(error);
    }
  }
  
  async function renderTextData() {
    let infoText = await getTextData();
   
    let dataText = "";
    infoText.forEach((item) => {
      let cardText = `
    <div class="simplify-text">${item.body}</div>`;
  
      return (dataText += cardText);
    });
  
    document.querySelector("p").innerHTML = dataText;
  }
  
renderTextData();


