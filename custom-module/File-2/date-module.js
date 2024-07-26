
const currentDate = () =>{
    let date = new Date()
    console.log("\nDate Module: ")
    console.log("Date: " + date.getDate())
    console.log("Month: " + date.getMonth())
    console.log("Year: " + date.getFullYear())
    console.log("Hours: " + date.getHours())
    console.log("Minutes: " + date.getMinutes())
    console.log("Seconds: " + date.getSeconds())

}

module.exports = currentDate