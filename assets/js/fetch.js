var parkName = document.querySelector("#sPark")
var cityName = document.querySelector("#apiCityBox")
var stateName = document.querySelector("#apiStateBox")
var cityAddress = document.querySelector("#apiAddress")
var searchBtn = document.querySelector("#searchBtn")

searchBtn.addEventListener("click", saveInput)



console.log(searchBtn)


function saveInput(event){
  event.preventDefault();


  var stateCode = document.querySelector("#stateInputText").value
      window.localStorage.setItem("state", stateCode);
      console.log(stateCode)
  getApi()
}




function getApi() {
  var stateStorage = window.localStorage.getItem("state")


  var requestUrl = 'https://developer.nps.gov/api/v1/parks?parkCode=&stateCode='+stateStorage+'&api_key=RoK1dEqNYGy3sRg4nQLmqFuSBnd6vuo9p4WA8l9Q';

  fetch(requestUrl)
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      console.log(data)
      
      newArray=[]
      
     console.log(newArray)
      for(let i=0; i<=10; i++){       
        var parkInfo = {
          name:  data.data[i].fullName,
          city: data.data[i].addresses[1].city,
          address: data.data[i].addresses[0].line1,
          zipcode: data.data[i].addresses[1].postalCode,
          image:data.data[i].images[0].url
      };
         newArray.push(parkInfo)
        
        window.localStorage.setItem("parkInfo",JSON.stringify(newArray))
          
        
      }
     
      //  console.log(localStorage.parkInfo)
    

    });
}
// var test = {conditions:["hot",'cold','misty','windy','gusty']}
  


// var storedNames = JSON.parse(localStorage.getItem("parkInfo"));
// console.log(storedNames[0].weather)
// console.log(storedNames)



// for(let i=0;i<storedNames.length;i++){
//   console.log(storedNames[i].city)
//   storedNames[i].weather= test.conditions[i]
  

// }

// //loop to append elements to page
// for(let i=0;i<storedNames.length;i++){
//   console.log(storedNames[i].weather)
  
  
  
//   const para = document.createElement("p");
//   para.innerHTML =storedNames[i].weather ;
//   document.getElementById("sPark").appendChild(para);
// }



// var newKey=storedNames[0].weather="hot"










// Dark and Light mode function
function darkLightMode() {
    var element = document.body;
    element.classList.toggle("dark-mode");
 }

 $("#dark-mode").click(darkLightMode);



var today = moment().format("L")

// function currentWeather() {
//   var cityStorage = window.localStorage.getItem("cityFetch")
//    var requestUrl = 'https://api.openweathermap.org/data/2.5/weather?q='+cityStorage+'&units=imperial&appid=e724ba8d68a039f0c9e73328553900ef';
//    fetch(requestUrl)
//     .then(function (response) {
//        return response.json();
//     })
//     .then(function (weatherResponse) {
      
      
//       console.log(weatherResponse);

//       var currentState = $(`
//             <h2 id="currentState">
//                 ${weatherResponse.name} ${today} 
//             </h2>
//             <p>Temperature: ${weatherResponse.main.temp} °F</p>
//             <p>Humidity: ${weatherResponse.main.humidity}\%</p>
//             <p>Wind Speed: ${weatherResponse.wind.speed} MPH</p>
//         `);





    //     $("#apiWeatherBox3").append(currentState);
    // });
    // ;
   


         
          //  console.log(localStorage.parkInfo)
        
    
     


    
  





    
 










