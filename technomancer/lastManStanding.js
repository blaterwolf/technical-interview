// * Last Man Standing
// * ------------------------------------------------------------
// * Given a function with parameter n, return the last number standing after removing numbers on a loop.
// * So, let's say I have n = 10.
// * I will generate a number 1 to 10 in an array [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
// * I will remove every other number, starting with the second number, so I will remove 2, 4, 6, 8, 10
// * This left us with [1, 3, 5, 7, 9]. Now, I would have to remove 3, 7, and 1 since we are looping back to the beginning.
// * This leaves us with [5, 9]. Now, I would have to remove 9, making the last number standing 5.

// * Example:
// * lastManStanding(10) => 5
// * lastManStanding(20) => 9
// * lastManStanding(100) => 73

// * @param {number} n
// * @return {number}

const lastManStanding = n => {
    if (n <= 1) {
        return 'No man standing'
    }

    let battleground = []
    for (let i = 1; i <= n; i++) {
        battleground.push(i)
    }
    console.log('start:', battleground)

    while (battleground.length != 1) {
        let winner = []

        // ! isa sa mga mistakes ko during the technical exam, dapat pala nilabas ko na to sa mismong if statements
        // ! masyadong mahaba yung code na prinovide ko
        // ! also map function nagamit ko instead of filter function
        // ! ------------------------------------------------------------
        winner = battleground.filter((num, index) => {
            if (index % 2 == 0) {
                return num
            }
        })
        // ! ------------------------------------------------------------

        // * if the length is odd, remove the first index.
        if (battleground.length % 2 != 0) {
            // ! ------------------------------------------------------------
            // ! may shift function pala ayun yung opposite ng pop (remove last index)
            winner.shift()
            // ! ------------------------------------------------------------
        }

        console.log('winner:', winner)
        battleground = winner

        if (battleground.length == 2) {
            battleground.pop()
            return battleground[0]
        }

        if (battleground.length == 1) {
            return battleground[0]
        }
    }
}

console.log(lastManStanding(10), '\n')
console.log(lastManStanding(20), '\n')
console.log(lastManStanding(100), '\n')

// * ------------------------------------------------------------
// * NOTES ON SOLUTION
// * ------------------------------------------------------------
// * I'm not sure if this is the most efficient way to solve this problem, but it works.
// * I'm using a while loop to keep the function running until there is only one number left in the array.
// * The time complexity for this problem can be O(n) or O(n^2) depending on n.
