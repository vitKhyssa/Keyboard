const word = []
const allLi = document.querySelectorAll('li');
allLi.forEach(item => word.push(item.id));
let randomKey;
function getRandomKey() {
    randomKey = word[Math.floor(Math.random() * word.length)]
    // randomKey - random key which need to press
    const element = document.getElementById(randomKey)
    element.classList.add("newClass")
}
getRandomKey()
let countRight = 0
let countWrong = 0
document.addEventListener("keydown" , function (event) {
    let element = document.getElementById(event.code)
    // console.log("element", element.classList)
    element.classList.add("pressKey")
    setTimeout(() => element.classList.remove("pressKey"),800)
    if (randomKey === event.code) {
        getRandomKey()
        countRight++
        // even.code - current press button
        element.classList.remove("newClass")
    }else if (randomKey !== event.code){
        countWrong ++
    }
})
 function getPrecent(right , wrong){
    return Math.round(right / (right+wrong) * 10000)/100
 }
 function getYourResult (yes , no){
     return `Your score after TEN SECOND is equal to ${yes} your wrong pressed key ${no} 
     your speed from 100% equal ${getPrecent(yes , no)}`
 }
setInterval(()=>{
    console.log(getYourResult(countRight , countWrong))
    countRight = 0
    countWrong = 0
},10000 )










