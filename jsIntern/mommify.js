var mommify = (given_string) => {
    let length_of_the_string = given_string.length;
    let no_of_vowels = 0;
    let mommified_arr = [];

    var is_vowel = (given_char) =>{
        const vowels = ["a", "e", "i", "o", "u"];
        for (let i = 0; i < 5; i++){
            if (given_char === vowels[i]){
                return true
            }
        }
        return false
    }
    for (i=0; i < length_of_the_string; i++) {
        if (is_vowel(given_string[i])){
            mommified_arr.push("mommy");
            no_of_vowels += 1;
        }
        else{
            mommified_arr.push(given_string[i]);
        }
    }

    const percentage_of_vowels = (no_of_vowels / length_of_the_string) * 100;
    if(percentage_of_vowels < 30) {
        return given_string;
    }
    else {
        let final_mommified_array = []
        for (let i = 0; i < mommified_arr.length; i++){
            if (mommified_arr[i] == "mommy"){
                if (mommified_arr[i + 1] == "mommy"){
                    while(mommified_arr[i] == "mommy"){
                        i += 1;
                    }
                    i -= 1
                    final_mommified_array.push("mommies");
                }
                else{
                    final_mommified_array.push("mommy")
                }
            }
            else{
                final_mommified_array.push(mommified_arr[i]);
            }
        }
        return final_mommified_array.join("");
    }
}

console.log(mommify("This is my stringeeee"));
