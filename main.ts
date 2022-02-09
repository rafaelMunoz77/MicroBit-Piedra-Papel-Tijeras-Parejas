input.onGesture(Gesture.Shake, function () {
    MiJugada = randint(1, 3)
    if (MiJugada == 1) {
        basic.showLeds(`
            . # # # .
            # # # # #
            # # # # #
            # # # # #
            . # # # .
            `)
    } else if (MiJugada == 2) {
        basic.showLeds(`
            # # # # #
            # . . . #
            # . . . #
            # . . . #
            # # # # #
            `)
    } else {
        basic.showLeds(`
            # # . . .
            # # # . #
            . . . # .
            # # # . #
            # # . . .
            `)
    }
})
let MiJugada = 0
radio.setGroup(1)
