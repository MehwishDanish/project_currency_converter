// iquirer install

import inquirer  from "inquirer";

// currency conversion object

let  currencyconversion = {
      "PKR": {
        "USD":0.0036,
        "GBP":0.0029,
        "PKR": 1,

      },
      "GBP": {
        "USD": 1.25,
        "GBP": 1,
        "PKR": 348.19,
      },
      "USD": {
        "USD":1,
        "GBP":0.80,
        "PKR":278.04,
      },

};

// prompt user for input

const answer: {
    from: "PKR" | "GBP" |"USD",
    to:   "PKR" | "GBP" |"USD",
    amount: number,
} = await inquirer.prompt([{
    type: "list",
    name: "from",
    message: "plaese select your currency?",
    choices: ["PKR", "GBP","USD"],
},
{
    type: "list",
    name: "to",
    message: "plaese select your converstion rate",
    choices: ["PKR", "GBP","USD"],
},
{
    type: "number",
    name: "amount",
    message: "plaese enter the amount you wish to convert",
}
]);

// destructuring user Input

const {from, to, amount} = answer;

//  perform currency conversion

if (from && to && amount){
    let result = currencyconversion[from][to] *amount;
    console.log(`you conversion from ${from} to ${to} is ${result}`);
}else{
    console.log("invalid conversion");
}