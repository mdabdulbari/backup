let getWords = (givenString) => {
    let stringArr = givenString.split(" ");
    return stringArr.length;
}

console.log(getWords("this is nice"));