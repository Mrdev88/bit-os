input.onGesture(Gesture.EightG, function () {
    basic.showString("Steps: " + Step)
})
buttonClicks.onButtonDoubleClicked(buttonClicks.AorB.A, function () {
    music.play(music.stringPlayable("C D E F G A B C5 ", 120), music.PlaybackMode.UntilDone)
    music.play(music.stringPlayable("C5 B A G F E D C ", 120), music.PlaybackMode.UntilDone)
    music.play(music.stringPlayable("C5 - A - F - D - ", 120), music.PlaybackMode.UntilDone)
    music.play(music.stringPlayable("C D E F G A B C5 ", 120), music.PlaybackMode.UntilDone)
    music.play(music.stringPlayable("C5 B A G F E D C ", 120), music.PlaybackMode.UntilDone)
    music.play(music.stringPlayable("C5 - A - F - D - ", 120), music.PlaybackMode.UntilDone)
    music.play(music.stringPlayable("C D E F E D C - ", 120), music.PlaybackMode.UntilDone)
    music.play(music.stringPlayable("C D E F E D C - ", 120), music.PlaybackMode.UntilDone)
    music.play(music.stringPlayable("C D E F G A B C5 ", 120), music.PlaybackMode.UntilDone)
    music.play(music.stringPlayable("C5 B A G F E D C ", 120), music.PlaybackMode.UntilDone)
    music.play(music.stringPlayable("C5 B A G A B C5 - ", 120), music.PlaybackMode.UntilDone)
    music.play(music.stringPlayable("C5 B A G A B C5 - ", 120), music.PlaybackMode.UntilDone)
    music.play(music.stringPlayable("C D E F G A B C5 ", 120), music.PlaybackMode.UntilDone)
    music.play(music.stringPlayable("C5 B A G F E D C ", 120), music.PlaybackMode.UntilDone)
})
input.onLogoEvent(TouchButtonEvent.LongPressed, function () {
    datalogger.log(
    datalogger.createCV("Steps", Step),
    datalogger.createCV("Running Time (ms)", input.runningTime()),
    datalogger.createCV("Tempature (C)", input.temperature()),
    datalogger.createCV("Light Level", input.lightLevel()),
    datalogger.createCV("Running Time (micros)", input.runningTimeMicros())
    )
    basic.showString("Saving Data")
})
input.onButtonPressed(Button.A, function () {
    Heading = input.compassHeading()
    basic.showString("Heading: " + Heading)
})
input.onPinPressed(TouchPin.P2, function () {
    basic.showString("Connect a servo to pin 2")
    pins.setEvents(DigitalPin.P2, PinEventType.Edge)
    servos.P2.setAngle(0)
    basic.pause(1000)
    servos.P2.setAngle(90)
    basic.pause(1000)
    servos.P2.setAngle(180)
    basic.pause(1000)
    servos.P2.setAngle(90)
    basic.pause(1000)
    servos.P2.setAngle(0)
    pins.setEvents(DigitalPin.P2, PinEventType.Touch)
})
input.onButtonPressed(Button.AB, function () {
    basic.showString("Record")
    record.startRecording(record.BlockingState.Blocking)
    record.playAudio(record.BlockingState.Blocking)
})
input.onButtonPressed(Button.B, function () {
    basic.showString("Images")
    myImage = images.createImage(`
        # # # # #
        # . . . #
        # . . . #
        # . . . #
        # # # # #
        `)
    myImage.scrollImage(1, 200)
    basic.pause(1000)
    basic.showLeds(`
        . . . . #
        . . . # .
        . . # . .
        . # . . .
        # . . . .
        `)
    basic.pause(1000)
    basic.showLeds(`
        # . . . .
        . # . . .
        . . # . .
        . . . # .
        . . . . #
        `)
    basic.pause(1000)
    basic.showIcon(IconNames.Happy)
    basic.pause(1000)
    basic.showIcon(IconNames.House)
    basic.pause(1000)
    basic.showIcon(IconNames.Scissors)
    basic.pause(1000)
    basic.showIcon(IconNames.LeftTriangle)
    basic.pause(1000)
    basic.showIcon(IconNames.Diamond)
    basic.pause(1000)
    basic.showIcon(IconNames.SmallDiamond)
})
function Stats () {
    basic.showString("Stats")
    basic.showString("Running Time: " + input.runningTime() + " ms")
    basic.showString("Running Time (micros): " + input.runningTimeMicros() + "micros")
    basic.showString("Temperature (C)" + input.temperature())
    basic.showString("Light Level: " + input.lightLevel())
    basic.showString("Sound Level: " + input.soundLevel())
}
input.onPinPressed(TouchPin.P1, function () {
    basic.showString("Connect a Neopixel to pin 1")
    pins.setEvents(DigitalPin.P1, PinEventType.Edge)
    strip.showRainbow(1, 360)
    for (let index = 0; index < 1000; index++) {
        strip.show()
        strip.rotate(1)
        basic.pause(100)
    }
    pins.setEvents(DigitalPin.P1, PinEventType.Touch)
})
input.onGesture(Gesture.Shake, function () {
    Step += 1
})
input.onLogoEvent(TouchButtonEvent.Pressed, function () {
    Stats()
})
let myImage: Image = null
let Heading = 0
let Step = 0
let strip: neopixel.Strip = null
strip = neopixel.create(DigitalPin.P1, 8, NeoPixelMode.RGB)
pins.setEvents(DigitalPin.P1, PinEventType.Touch)
pins.setEvents(DigitalPin.P2, PinEventType.Touch)
record.setMicGain(record.AudioLevels.High)
datalogger.setColumnTitles(
"Steps",
"Running Time (ms)",
"Tempature (C)",
"Light Level",
"Running Time (micros)"
)
basic.showString("Hello")
