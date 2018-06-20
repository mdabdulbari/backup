const evenFunc = () => {
    console.log("Given number is even");
}

const oddFunc = () => {
    console.log("Given number is odd");
}

// const evenOrOdd = (givenNumber, evenCallback, oddCallback) => {
//     if(givenNumber % 2 === 0){
//         evenCallback();
//         return;
//     }
//     oddCallback();
// }

const evenOrOdd = (givenNumber) => {
    return new Promise(
        (resolve, reject) => {
            if(givenNumber % 2 === 0){resolve();}else{reject();}
        }
    )
}

evenOrOdd(10)
    .then(x => console.log("The number is even"))
    .catch(x => console.log("The number is odd"));