// const express = require("express");
  
// const app = express();
// app.get("/", function(request, response){
      
//     response.send("<h1>Главная страница</h1>");
// });
// app.use("/about", function(request, response){
      
//     let id = request.query.id;
//     let userName = request.query.name;
//     response.send("<h1>Информация</h1><p>id=" + id +"</p><p>name=" + userName + "</p>");
// });
 
// app.listen(3000);

// http://localhost:3000/about?id=3&name=Tome&id=3&name=Tome


const express = require("express");
  
const app = express();
app.get("/", function(request, response){
      
    response.send("<h1>Главная страница</h1>");
});
app.use("/about", function(request, response){
      
    console.log(request.query);
    let names = request.query.name;
    let responseText = "<ul>";
    for(let i=0; i < names.length; i++){
        responseText += "<li>" + names[i] + "</li>";
    }
    responseText += "</ul>";
    response.send(responseText);
});
app.listen(3000);
 
// http://localhost:3000/about?id=3&name=Tome&id=3&name=Tome&id=3&name=Tome
