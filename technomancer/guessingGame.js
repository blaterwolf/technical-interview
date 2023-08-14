// * Guessing Game
// * Create a program that asks the user to guess a number between 1 and 100.
// * Once the user guesses a number, the program should say, higher, lower, or tell the user that he got the number correct.
// * The user will be given gameOverCounter variable and would only have 10 tries.
// * If the user does not guess the number after 10 tries, the program should display that the user lost the game.

// ! hindi ko to nagawa sa actual technical exam. sabi ko assumption lang ang prompt for the user input.
// ! ------------------------------------------------------------
const { stdin, stdout } = process

function prompt(question) {
    return new Promise((resolve, reject) => {
        stdin.resume()
        stdout.write(question)

        stdin.on('data', data => resolve(data.toString().trim()))
        stdin.on('error', err => reject(err))
    })
}
// ! ------------------------------------------------------------

const guessResult = (number, guess) => {
    if (guess > number) {
        console.log(`You guessed ${guess}. The number is lower than ${guess}.`)
        return false
    } else if (guess < number) {
        console.log(`You guessed ${guess}. The number is higher than ${guess}.`)
        return false
    } else {
        return true
    }
}

const guessingGame = async () => {
    // ! hindi ko alam yung random number generator sa javascript so sabi ko assume na meron na.
    // ! ------------------------------------------------------------
    let number = Math.floor(Math.random() * 100) + 1
    // ! ------------------------------------------------------------
    let gameOverCounter = 10
    let win = false

    while (gameOverCounter > 0) {
        // ? see above for prompt function details
        let guess = parseInt(await prompt('Guess a number between 1 and 100: '))

        if (guessResult(number, guess)) {
            win = true
            break
        } else {
            gameOverCounter--
            console.log(`You have ${gameOverCounter} tries left.\n`)
        }
    }

    if (win) {
        console.log(`You guessed the number! It's ${number}.`)
    } else {
        console.log(`You lost! The number is ${number}.`)
    }
    return
}

guessingGame()

// * ------------------------------------------------------------
// * NOTES ON SOLUTION
// * ------------------------------------------------------------
// * kasalanan to nung tiktok
