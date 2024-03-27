import inquirer from "inquirer";
const randomNumber = Math.floor(Math.random() * 6 + 1);
const answer = await inquirer.prompt([
    {
        name: "UserGuessedNumber",
        type: "number",
        message: "Please guess a number",
    },
]);
if (answer.UserGuessedNumber === randomNumber) {
    console.log("you guessed it correctly!");
}
else if (answer.UserGuessedNumber !== randomNumber) {
    console.log("you lost");
}
//
// Using enum as a type
var Season;
(function (Season) {
    Season[Season["Spring"] = 0] = "Spring";
    Season[Season["Summer"] = 1] = "Summer";
    Season[Season["Autumn"] = 2] = "Autumn";
    Season[Season["Winter"] = 3] = "Winter";
})(Season || (Season = {}));
function getSeasonName(season) {
    switch (season) {
        case Season.Spring:
            return "Spring";
        case Season.Summer:
            return "Summer";
        case Season.Autumn:
            return "Autumn";
        case Season.Winter:
            return "Winter";
        default:
            return "Unknown Season";
    }
}
let currentSeason = Season.Summer;
console.log(getSeasonName(currentSeason)); // Output: Spring
//
function students() {
    const totalstudents = 500;
    const compstudents = 200;
    const laptopstudents = totalstudents - compstudents;
    return laptopstudents;
}
export default students;
function sami() {
    let cousin1 = 12;
    let cousin2 = 14;
    let cousin3 = 12 * 14;
    return cousin3;
}
console.log(sami());
