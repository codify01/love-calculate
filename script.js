

const calculate = () => {
    let male = document.getElementById('male').value
    let female = document.getElementById('female').value
    
    if (male == "" || female == "") {
        alert("Your crush no get name??")
    } else {
        document.getElementById('male').value = ""
        document.getElementById('female').value = ""
        let num = Math.round(Math.random()*100)
        console.log(male, female , num)
        if (num <= 49) {
            document.getElementById('show').innerHTML = `<div>
            <h2>The result is Here!!!</h2>
            <strong>${num} %</strong> <br>
            ${male} and ${female} are not really in love with each other 
          </div>`
        
        } else if (num >= 50 && num <=74) {
            document.getElementById('show').innerHTML = `<div>
            <h2>The result is Here!!!</h2>
            <strong>${num} %</strong> <br>
            ${male} and ${female} are in love with each other
          </div>`
        } else if (num >= 75 && num <= 100) {
            document.getElementById('show').innerHTML = `<div>
            <h2>The result is Here!!!</h2>
            <strong>${num} %</strong> <br>
            ${male} and ${female} are in love with each other. Do well to not loose each other
          </div>`
        }
    }
    
} 