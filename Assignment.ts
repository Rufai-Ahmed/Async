import promptSync from "prompt-sync";
let prompt = promptSync();

// const promise = new Promise((resolve, reject) => {
//   let computer = Math.floor(Math.random() * 1);
//   console.log(computer);

//   let mine = parseInt(prompt("Choose a number: "));
//   let trial = 4;

//   while (computer !== mine && trial !== 0) {
//     const trials = parseInt(prompt(`You have ${(trial -= 1)} trials left: `));
//     if (trials === computer) {
//       resolve("You win");
//       break;
//     } else {
//       reject("You lose");
//     }
//   }
//   if (mine === computer) {
//     resolve("You win");
//   }
// })
//   .then((res) => {
//     console.log(res);
//   })
//   .catch((err) => {
//     console.log(err);
//   });

const names =
  "Zion, Nzube, Stanley, Prince, Ayo, Ekene, Regina, Jemima, Daniel";

const loadRequest = () => {
  return new Promise((resolve, reject) => {
    const individual = names.split(", ");
    const input = prompt(
      "Input the name you're searching for to check if it exists: "
    );

    const past = new Date().getSeconds() + 2;
    while (past > new Date().getSeconds()) {
      console.clear();
      console.log(`[##################]`);
    }

    const check = individual.some((el) => el === input);
    if (check) {
      resolve("Name exists");
    } else {
      reject("Not found");
    }
  })
    .then((res) => {
      console.log(res);
    })
    .catch((err) => {
      console.log(err);
    });
};

loadRequest();
