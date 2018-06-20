let dateFormat = (currentDate) => {
    dateFormatted = currentDate.getDate() + "-" + currentDate.getMonth() + "-" + currentDate.getYear();
    return dateFormatted;
}

let getDays = (month, year) => {
    return new Date(year, month, 0).getDate();
}

let getDateDifference = (min, max) => {
    let minDate = new Date(min);
    let maxDate = new Date(max);
    return (maxDate - minDate) / (1000 * 60 * 60 * 24);
}

console.log(getDateDifference("2018/06/11", "2018/07/13"));