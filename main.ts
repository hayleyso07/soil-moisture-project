//  Set the LED brightness to 64 (out of 255) to save energy
led.setBrightness(64)
//  Initialize reading variable to store moisture sensor value
let reading = 0
//  Run the function continuously
basic.forever(function on_forever() {
    
    //  Treat as a global variable
    //  Turn on power to the sensor by setting P1 to high
    pins.digitalWritePin(DigitalPin.P1, 1)
    //  Wait for 1 ms to let the sensor stabilize
    basic.pause(1)
    //  Read the analog value from the moisture sensor on pin P0
    reading = pins.analogReadPin(AnalogPin.P0)
    //  Turn off power to the sensor to save energy
    pins.digitalWritePin(DigitalPin.P1, 0)
    //  Display the moisture reading as a bar graph on the LED matrix
    //  The maximum value is set to 1023 (10-bit ADC resolution)
    led.plotBarGraph(reading, 1023)
    //  If button A is pressed, display the numeric reading
    if (input.buttonIsPressed(Button.A)) {
        basic.showNumber(reading)
    }
    
    //  Wait for 5 seconds before the next reading
    //  This helps conserve energy
    basic.pause(5000)
})
