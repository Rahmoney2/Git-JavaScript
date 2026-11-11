//loops are used to repeat a block of code multiple times until a certain condition is met.
// There are several types of loops in JavaScript, including for loops, while loops, and do...while loops.

//Example of for loop
for (let i = 0; i < 5; i++) {
    console.log(`This is Iteration number ${i}`);
}

//Example of while loop Are used to execute a block of code as long as a specified condition is true.
// The loop will continue to run until the condition becomes false.

let k = 0;
do {
    console.log(`This is Iteration number ${k}`);
    k++;
} while (k < 5);

//Break statement is used to exit a loop or switch statement before it has completed all its iterations or cases.
for (let i = 0; i < 10; i++) {
    if (i === 5) {
        break; // Exit the loop when i is equal to 5
    }
    console.log(`This is Iteration number ${i}`);
}

//Continue statement is used to skip the current iteration of a loop and move on to the next iteration.

for (let i = 0; i < 10; i++) {
    if (i === 5) {
        continue; // Skip the iteration when i is equal to 5
    }
    console.log(`This is Iteration number ${i}`);
}