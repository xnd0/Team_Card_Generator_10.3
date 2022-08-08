// -- Manager Card -- //
const generateManagerCard = (manager) => {
    return `
        <div class="card">
          <h3>${manager.getId()}</h3>
          <p><i class="fa-solid fa-mug-hot"></i>${manager.getRole()}</p>
          <div class="card-body">
            <ul class="list-group list-group-flush">
              <li class="list-group-item">ID: ${manager.getName()}</li>
              <li class="list-group-item">Email: <a href="mailto:${manager.getEmail()}">${manager.getEmail()}</a>
              </li>
              <li class="list-group-item">Office Number: ${manager.getOfficeNumber()}</li>
            </ul>
          </div>
        </div>
    `
  }

   
  // -- Engineer Card -- //
  const generateEngineerCard = (engineer) => {
    return `
        <div class="card">
          <h3>${engineer.getId()}</h3>
          <p><i class="fa-solid fa-glasses"></i>${engineer.getRole()}</p>
          <div class="card-body">
            <ul class="list-group list-group-flush">
              <li class="list-group-item">ID: ${engineer.getName()}</li>
              <li class="list-group-item">Email: <a href="mailto:${engineer.getEmail()}">${engineer.getEmail()}</a>
              </li>
              <li class="list-group-item">Github: <a href="http://www.github.com/${engineer.getGithub()}" target="_blank"
                  rel="noopener noreferrer">${engineer.getGithub()}</a> </li>
            </ul>
          </div>
        </div>
    `
  }
  
  // -- Intern Card -- // 
  const generateInternCard = (intern) => {
    return `
        <div class="card">
          <h3>${intern.getId()}</h3>
          <p><i class="fa-solid fa-user-graduate"></i>${intern.getRole()}</p>
          <div class="card-body">
            <ul class="list-group list-group-flush">
              <li class="list-group-item">ID: ${intern.getName()}</li>
              <li class="list-group-item">Email: <a href="mailto:${intern.getEmail()}">${intern.getEmail()}</a>
              </li>
              <li class="list-group-item">School: ${intern.getSchool()}</li>
            </ul>
          </div>
        </div>
    `
  }
  
  // html to display the info on the page                 
  const baseHtml = (htmlArr) => `
  <!DOCTYPE html>
  <html lang="en">
  <head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet"
      integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous">
    <script src="https://kit.fontawesome.com/f5f4ff2f36.js" crossorigin="anonymous"></script>
    <title>Team Card Generator</title>
    <style>
  *{
    box-sizing: border-box;
    padding: 0;
    margin: 0;
  }
  body a{
    outline: none;
    text-decoration: none;
    list-style: none;
  }
  header{
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: rgb(32, 70, 107);
    color: #fff;
    height: 20vh;
  }
  .heading{
    font-size: 2rem;
    font-weight: 700;
  }
  #container{
    display: flex;
  }
  .card-deck {
    display: flex;
    flex-direction: row;
    justify-content: center;
    margin: 5rem;
    flex-wrap: wrap;  
  }
  .card{
    height: 24rem;
    width: 18rem;
    margin: 2rem;
  }
  h3{
    background-color: rgb(50, 150, 100);
    padding: 0 1.4rem;
    margin: 0;
    font-size: 35px;
  }
  p {
    background-color: rgb(50, 150, 100);
    font-size: 28px;
    padding: .4rem 1rem;
  }
  p i {
    padding-right: .9rem;
    font-size: 2rem;
  }
  </style>
  </head>
  <body>
    <header>
      <div class="jumbotron jumbotron-fluid">
          <h1 class="display-4 heading">Team Cards:</h1>
      </div>
    </header>
    <div id="container">
      <div class="card-deck">
          ${htmlArr.join(' ')}
      </div>
    </div>
  </body>
  </html>`
  
  
  module.exports = {
    generateEngineerCard,
    generateManagerCard,
    generateInternCard,
    baseHtml
  }