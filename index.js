console.log(process.argv); //npm run start  --web-48 web-49 web-50

const cohort1 = process.argv[2];
const display = process.env.DISPLAY; //grabbed this by typing env in the console and choosing a property name

if (cohort1 === "web-49") {
  console.log(`${cohort1} is the best forever`);
} else {
  console.log(`booh cohort ${cohort1}`);
}

console.log(`the display is ${display}`);
