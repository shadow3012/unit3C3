// Implement debouncing for network request
// On clicking book now store the selected movie in localstorage as key "movie"
// so that you can retrive it on checkout.html page

var walletBal = JSON.parse(localStorage.getItem("amount"))
document.getElementById("wallet").innerText = walletBal

async function movies(){
    let movie = document.getElementById("search").value
    var url = await `http://www.omdbapi.com/?apikey=fc09ada1&s=${movie}`
    fetch(url)
    .then(function(res){
        var res =   res.json()
        return res
        
    }).then(function(res){
        var data =  res.Search
// console.log(data)
       appendmovie(data)
    }).catch(function(err){
        console.log(err)
    })
}

let id = setTimeout(()=>{
    movies()
},500)
function main(){
    if(id){
        clearTimeout(id)
    }
    id = setTimeout(()=>{
        movies()
    },500)
}
function appendmovie(data){
    console.log(data)
    data.forEach(function(ele){
        var div = document.createElement("div")
        div.className = "searchmovie"
        var img = document.createElement("img")
        img.src = ele.Poster
        var name = document.createElement("h2")
        name.innerText = ele.Title
        var price = document.createElement("p")
        price.innerText  = 300
        var button = document.createElement("button")
        button.innerText = "Book Now"
        button.className = "booknow"
        button.addEventListener("click",move)
        div.append(img,name,price,button)
        document.getElementById("movies").append(div)

    })
    
}


function move(event){
let target = event.target
let parent = target.parentElement
var searchmoveis = parent.className

}














