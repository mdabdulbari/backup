var animals = [
    {
        name: 'Waffles', type: 'dog', age: 12
    },
    {
        name: 'Fluffy', type: 'cat', age: 14
    },
    {
        name: 'Spelunky', type: 'dog', age: 4
    },
    {
        name: 'Hank', type: 'dog', age: 11
    }
];

function get_animals(animal){
    if (animal.age > 10 && animal.type === "dog"){
        return true;
    }
    return false;
}

function random_color(){
    const colors = ['black', 'white', 'brown'];
    var randomnumber = Math.floor(Math.random() * (3));
    return colors[randomnumber];
}

function add_color(animals){
    animals.map(animal => animal.color = random_color());
}

function get_names(animals, func){
    let animalNames = animals.filter(animal => func(animal));
    return animalNames;
}

// implement reduce
function age_sum(animals, reducer){
    let animal_ages = func(animals);
    let sum = 0;
}

var sum = animals.reduce()

console.log(get_names(animals, get_animals));
add_color(animals);
console.log(animals[0].color);
console.log(age_sum(animals, redu));