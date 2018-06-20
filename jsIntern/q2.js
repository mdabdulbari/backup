// var account = {
//     id: 123,
//     name: 'Laurel',
//     balance: 3000,
//     interestRate: 10,
//     getAmount: function() {
//         return (1 + (account.interestRate / 100)) * account.balance;
//     }
// };

let get_account = (name, balance) => {
    return account = {
        id: Math.random(),
        name: name,
        balance: balance,
        interestRate: 10,
        getAmount: function() {
            return (1 + (account.interestRate / 100)) * account.balance;
        }
    }
}

bari_acc = get_account("Bari", 200);
console.log(bari_acc.getAmount());
account.interestRate = 80;
console.log(bari_acc.getAmount());