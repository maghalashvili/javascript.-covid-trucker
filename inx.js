const wd=document.querySelector(".wd")
const select=document.createElement("select")
const loc=document.querySelector("#location")
const pop=document.querySelector("#population")
const dth=document.querySelector("#deaths")
const conf=document.querySelector("#confirmed")
const upd=document.querySelector("#update")
const lfexp=document.querySelector("#life-expectancy")
const infrate=document.querySelector("#nfection-rate")
const dthrate=document.querySelector("#death-rate")
wd.appendChild(select)
let arr1=[]



var btn=document.getElementById("btn")
var moretext=document.querySelector(".more")
var dots=document.getElementById("dots")
// if(btn.classList.contains('clicked')){
//     btn.classList.remove('clicked');
// }else{
//     btn.classList.add("clicked");
// }

// if (dots.style.display ==="none"){
//     dots.style.display="inline"
//     btn.innerHTML="read more"
    

//     moretext.style.display="none"
// }else{
//    ( dots.style.display==="none")
//     btn.innerHTML="view less"
//     moretext.style.display="inline"
// }

// }
btn.addEventListener("click",()=>{
    moretext.classList.toggle("more")

    if(btn.classList.contains("more"))
    btn.innerText="view more"
     if(!btn.classList.contains("more")){
        btn.innerText="view less"
    }
})










// const getaxios=()=>{
 axios.get("https://covid-api.mmediagroup.fr/v1/cases").then(response =>{
     console.log(response)
     let qveyana=response.data
     let arr=[]
     
     
    arr=Object.keys(qveyana)
    console.log('arr', arr)

for (let i=0;i<arr.length;i++){
    const k=document.createElement("option")
    k.innerText=arr[i]
    select.appendChild(k)
    if (k.value=="Global"){
        k.setAttribute("selected","selected") 
    }
}








console.log(response.data["Global"].All.location)

console.log(response.data["Global"].All.population)
pop.innerText=response.data["Global"].All.population

console.log(response.data["Global"].All.deaths)
dth.innerText=response.data["Global"].All.deaths

console.log(response.data["Global"].All.confirmed)
conf.innerText=response.data["Global"].All.confirmed


let percent=response.data["Global"].All.confirmed/response.data["Global"].All.population*100
let infrate =document.getElementById("infection-rate")
Math.round()
infrate.innerText=Math.round(percent)+"%"




let percent2=response.data["Global"].All.deaths/response.data["Global"].All.population*100
let dthrate =document.getElementById("death-rate")

dthrate.innerText=percent2+"%"
console.log(dthrate)






select.addEventListener("change",update=()=>{
console.log(select.value)

loc.innerText=response.data[select.value].All.location
console.log(response.data[select.value].All.location)

upd.innerText=response.data[select.value].All.updated
console.log(response.data[select.value].All.updated)

console.log(response.data[select.value].All.confirmed)
conf.innerText=response.data[select.value].All.confirmed

console.log(response.data[select.value].All.population)
pop.innerText=response.data[select.value].All.population

console.log(response.data[select.value].All.deaths)
dth.innerText=response.data[select.value].All.deaths

console.log(response.data[select.value].All.life_expectancy)
lfexp.innerText=response.data[select.value].All.life_expectancy


let nnn=response.data[select.value].All
     if (nnn.hasOwnProperty ("location")) {
    loc.innerText=response.data[select.value].All.location
     }
    if (nnn.hasOwnProperty ("updated")) {
      upd.innerText=response.data[select.value].All.updated


     }



let percent=response.data[select.value].All.confirmed/response.data[select.value].All.population*100
let infrate =document.getElementById("infection-rate")
Math.round()
infrate.innerText=Math.round(percent)+"%"




let percent2=response.data[select.value].All.deaths/response.data[select.value].All.population*100
let dthrate =document.getElementById("death-rate")

dthrate.innerText=percent2+"%"
console.log(dthrate)















 })


   



})
select.classList.add("selectd")






