let random_number = 0
input.onButtonPressed(Button.A, function () {
    random_number = randint(1, 3)
    if (random_number == 1) {
        // ぐー
        basic.showLeds(`
            . . . . .
            . # # # .
            . # # # .
            . # # # .
            . . . . .
            `)
    } else if (random_number == 2) {
        // ちょき
        basic.showLeds(`
            # . . . #
            . # . # .
            . # # # .
            . . # . .
            . . # . .
            `)
    } else {
        // ちょき
        basic.showLeds(`
            # # # # #
            # # # # #
            # # # # #
            # # # # #
            # # # # #
            `)
    }
})
