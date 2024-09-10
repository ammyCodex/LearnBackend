// const fs = require('fs');
// const express = require('express');
// const app = express();
// const port = 4000;
// function callbackFunction(err,data){
// console.log(data);
// }
// fs.readFile('a.txt','utf-8',callbackFunction);
// function calSum(cnt)
// {
//     let sum = 0;
//     for(let i =0;i<=cnt;i++)
//     {
//         sum += i;
//     }
//     return sum;
// }
// var result = calSum(4);
// console.log(result);
// app.get('/',(req,res)=>{
//     // console.log('Hello World');
//     // res.send('Lolo');
//     let ans = calSum(5);
//     res.send(`Result: ${ans}`);
// })
// app.listen(port,()=>{
//     console.log(`Server is running on port ${port}`);
// })
const express = require('express')

const app = express();
const port = 3000;
function calculateSum(count){

    let sum = 0;
    for(let i = 1; i <= count; i++){

        sum += i;
    }
    return sum
}


function handleFirstRequest(req, res){
    let count = req.query.count;
    let calculatedSum = calculateSum(count);
    let ans = `calculated sum is ${calculatedSum} kalu sdgjfjsdavjhvhjjhhvhjvg`
    // res.sendStatus(200)
    // console.log(typeof res.send());
    res.send(ans);
    
    
}



app.get('/', handleFirstRequest)


app.listen(port, () => {
    console.log(`port is running at ${port}`);
})

