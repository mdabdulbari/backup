const perfect = (given_number) => {
    
}

const is_even = (given_number) => {
    if(given_number % 2 == 0){
        return true;
    }
    else{
        return false;
    }
}

const is_prime = (given_number) => {
    if (given_number == 3 || given_number == 5){
        return true;
    }
    if(given_number % 2 == 0){
        return false;
    }
    else if(given_number % 3 == 0){
        return false;
    }
    else if(given_number % 5 == 0){
        return false;
    }
    return true
}

const is_armstrong = (given_number) => {
    let num_list = given_number.toString().split('');
    let cube_sum = 0;
    for(number of num_list){
        number = Number(number);
        cube_sum += number * number * number;
    }
    if(Number(given_number) === cube_sum){
        return true;
    }
    return false;
}

console.log(is_prime(133));
console.log(is_prime(8));
console.log(is_armstrong(153));
console.log(is_even(2));
console.log(is_even(3));