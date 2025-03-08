// You've been tasked with designing the perfect shiny diamond rug cursh's room. They love
// stars, and you've decided to make a sparkling pattem using them. You need to help them
// create this rug, where the stars are arranged in the shape of a diamond!
// Problem Statement:
// Create a function shinyDiamondRug(n) that prints a shiny diamond shape made of stars.
// The number n represents the size of the diamond, with the middle of the diamond having 2n
// - 1 stars.
// Important Rules:
// Each line must not have trailing spaces.
// The output must not have an extra newline at the end.
function shinyDiamondRug(n) {
    let diamond = '';
    for (let i = 1; i <= n; i++) {
        for (let k = n - i; k > 0; k--) {
            diamond += ' ';

        }
        for (let j = 1; j <= 2 * i - 1; j++) {
            diamond += '*';
        }
        diamond += '\n';

    }
    for (let i = n - 1; i > 0; i--) {
        for (let k = 0; k < n - i; k++) {
            diamond += ' ';

        }
        for (let j = 1; j <= 2 * i - 1; j++) {
            diamond += '*';
        }
        diamond += '\n';


    }
    return diamond
}
console.log(shinyDiamondRug(4))