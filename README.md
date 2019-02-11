# MakerBit Motor

[![Build Status](https://travis-ci.org/1010Technologies/pxt-makerbit-motor.svg?branch=master)](https://travis-ci.org/1010Technologies/pxt-makerbit-motor)

MakeCode package for the MakerBit motor driver.

## MakerBit Board

The MakerBit connects to the BBC micro:bit to provide easy connections to a wide variety of sensors, actuators and other components. Among other things, it features a motor driver.

http://makerbit.com/

| ![MakerBit](https://github.com/1010Technologies/pxt-makerbit/raw/master/MakerBit.png "MakerBit") | ![MakerBit+R](https://github.com/1010Technologies/pxt-makerbit/raw/master/MakerBit+R.png "MakerBit+R") |
| :----------------------------------------------------------------------------------------------: | :----------------------------------------------------------------------------------------------------: |
|                                            _MakerBit_                                            |                                   _MakerBit+R with motor controller_                                   |

## Motor Blocks

The MakerBit board provides a motor controller that can control two bi-directional DC motors, or four one-direction motors.

### MakerBit runMotor

Sets the speed of a motor in the range of -100 to 100.

```sig
makerbit.runMotor(Motor.A, 80)
```

### MakerBit stopMotor

Stops a motor.

```sig
makerbit.stopMotor(Motor.A)
```

### MakerBit setMotorDirection

Sets the rotation direction of a motor. Use this function at start time to configure your motors without the need to rewire.

```sig
makerbit.setMotorRotation(Motor.A, MotorDirection.CounterClockwise)
```

## License

Licensed under the MIT License (MIT). See LICENSE file for more details.

## Supported targets

- for PXT/microbit
- for PXT/calliope
