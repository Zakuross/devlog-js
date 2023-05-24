// you can write js here
console.log('exo-2');

const myDate = new Date('May 22, 2023 09:00')

console.log(myDate.getDay())
let semaine = "c'est la semaine"
let weekend = "c'est le weekend"
let heure = myDate.getHours()
const isTesting = true
console.log(heure)
//if(myDate.getDay() > 0 && myDate.getDay() < 6){
    //console.log(semaine)

//} else {
    //console.log(weekend)
//}
function isWeek(myDateParameter){
    return myDateParameter.getDay() > 0 && myDateParameter.getDay() < 6
}
function FridayWeekend(date){
    return date.getDay() == 5 && heure >16
}

if(isWeek(myDate)&&(FridayWeekend(myDate)==false)&&(MondayWeek(myDate)==false)){
    console.log(semaine)

} else {
    console.log(weekend)
}

function MondayWeek(date2){
    return date2.getDay() == 1 && heure < 9   
}

function Testing(){
    if(isTesting == true){
        const hour = prompt("heure ?")
        const day = prompt("jour ?")
        const month = prompt("mois ?")
        const year = prompt("année ?")
        const myDate = new Date(year, month, day, hour)
        console.log(new Date)

    } else {
        console.log(myDate.getDay())
    }
}

Testing();