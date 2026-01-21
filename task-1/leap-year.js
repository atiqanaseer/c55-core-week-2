import promptSync from 'prompt-sync';
const prompt = promptSync();

const year = prompt("Enter a year: "); // prompt user to enter a year
const yearNumber = Number(year); // convert the user input to number

// First check if the number is valid and year is from 1 to 9999
if (!isNaN(yearNumber) && yearNumber >= 1 && yearNumber <= 9999) {
    // Then check if the year is leap year or not
    if (yearNumber % 4 === 0 && (yearNumber % 400 === 0 || yearNumber % 100 !== 0)) {
        console.log(`Yes, ${yearNumber} is a leap year`);
    } else {
        console.log(`No, ${yearNumber} is not a leap year`);
    }
} else {
    console.log("Invalid year!");
}
