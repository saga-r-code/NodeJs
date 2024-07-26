const readline = require("readline");

/*const Addition = () => {
  const input = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });

  //normal
  input.question('Enter First Number: ', num1 =>{
      input.question('Enter Second Number: ', num2 =>{
          let sum = Number(num1) + Number(num2)
          console.log(`Addition Of Two Number is: ${sum}`)
          input.close()
      })
  })

};*/

const Addition = async () =>{

    const Askquestion = (query) =>{ //this fun take parameter
        const input = readline.createInterface({
            input: process.stdin,
            output: process.stdout,
        })

        //using promises
       return new Promise((res)=>{
        input.question(query, ans=>{ 
            input.close()
            res(ans)
        })
       }) 
    }

    const num1  = await Askquestion('Enter First Number: ');
    const num2 = await Askquestion('Enter Second Number: ');
    
    let sum = Number(num1) + Number(num2)
    console.log("Addition of two numbe is " + sum)
}

module.exports = {
  add: Addition,
};