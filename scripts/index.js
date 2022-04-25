// Store the wallet amount to your local storage with key "amount"


var totalAmount = JSON.parse(localStorage.getItem("amount"))

function addingTowallet(){
var amount = document.getElementById("amount").value
amount = +amount

totalAmount+=amount

document.getElementById("wallet").innerText = totalAmount
localStorage.setItem("amount",JSON.stringify(totalAmount))

}
let id = setTimeout(()=>{
    addingTowallet()
},1000)
function delayed(){
  
if(id){
    clearTimeout(id)
}
    id = setTimeout(()=>{
        addingTowallet()
    },1000)

}

var bookMovie = document.getElementById("book_movies")
bookMovie.addEventListener("click",function(){
    window.location.href = "movies.html"
})
