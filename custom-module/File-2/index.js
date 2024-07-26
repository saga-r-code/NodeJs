const addition = require('./Addition-module')
const date = require('./date-module')


async function addNumber(){
    await addition.add()
    
    date()
    
}
addNumber()



