# Set the LED brightness to 64 (out of 255) to save energy
led.set_brightness(64)

# Initialize reading variable to store moisture sensor value
reading = 0

def on_forever():
    global reading  # Treat as a global variable
    
    # Turn on power to the sensor by setting P1 to high
    pins.digital_write_pin(DigitalPin.P1, 1)
    
    # Wait for 1 ms to let the sensor stabilize
    basic.pause(1)
    
    # Read the analog value from the moisture sensor on pin P0
    reading = pins.analog_read_pin(AnalogPin.P0)
    
    # Turn off power to the sensor to save energy
    pins.digital_write_pin(DigitalPin.P1, 0)
    
    # Display the moisture reading as a bar graph on the LED matrix
    # The maximum value is set to 1023 (10-bit ADC resolution)
    led.plot_bar_graph(reading, 1023)
    
    # If button A is pressed, display the numeric reading
    if input.button_is_pressed(Button.A):
        basic.show_number(reading)
    
    # Wait for 5 seconds before the next reading
    # This helps conserve energy
    basic.pause(5000)

# Run the function continuously
basic.forever(on_forever)