// setTimeout(function() {
//     setTimeout(function(){
//         console.log("hi");
//     },2000)
//     console.log("its me")
// },3000);


// console.log("its not me") 异步的概念

//promise

// const promise = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         if (Math.random() < 0.5) {
//             resolve('success');
//         }
//         else {
//             reject('error');  
//         }
//     }, 1000);
// });

// promise.then(result => {
//     console.log("123");
//     console.log(result);
// }).catcj(errpr => {
//     console.log("456");
//     console.log(error);
// })

const axiosRequest = require("axios");

axiosRequest
    .get("https://www.boredapi.com/api/activity")
    .then(reponse => {
        console.log(`The activity is: ${response.data.activity}`);
    })
    .catch(errpr => {
        console.error(`Error: ${error}`);
    });

console.log("why am I here")

// is there a way to wait for a Promise? await

async function getActivity() {
    .get("https://www.boredapi.com/api/activity")
    let res = await axiosRequest.get("")
}

getActivity()