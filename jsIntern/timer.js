let count = 1
const timer = (givenNumber) => {
    if (count <= givenNumber){
        console.log(count);
        count += 1;
        return
    }
    clearInterval(timer1);
}

const timer1 = setInterval(() => { timer(3);}, 1000);