const enum Motor {    // Todo: Pins genauer lokalisieren & ändern  
    //% block="A"     // A kollidiert mit dem Button A des Calliope Mini
    MotorA = 0,
    //% block="B"     // B ebenso
    MotorB = 1,
    //% block="A + B"
    MotorAll = 2
}

const enum MotorRotation {
    //% block="clockwise"
    Clockwise = 1,
    //% block="counter-clockwise"
    CounterClockwise = -1
}

// MakerBit motor driver blocks
namespace makerbit {
    const motorRotations = [MotorRotation.Clockwise, MotorRotation.Clockwise];

    /**
     * Sets the speed of a motor.
     * @param motor motor, eg: Motor.MotorA
     * @param speed percentage in the range of -100 to 100, eg: 80
     */
    //% subcategory=Motors
    //% blockId="makerbit_motor_run" block="run motor %motor | at speed %speed"
    //% speed.min=-100 speed.max=100
    //% weight=90
    export function runMotor(motor: Motor, speed: number): void {
        if (speed === 0) {
            stopMotor(motor);
            return;
        }

        const absSpeedPercentage = Math.min(Math.abs(speed), 100);
        const analogSpeed = pins.map(absSpeedPercentage, 0, 100, 0, 1023);

        if (motor === Motor.MotorA || motor === Motor.MotorAll) {
            const isClockwise = speed * motorRotations[Motor.MotorA] > 0;
            pins.digitalWritePin(DigitalPin.P11, isClockwise ? 1 : 0);
            pins.digitalWritePin(DigitalPin.P12, isClockwise ? 0 : 1);
            pins.analogWritePin(AnalogPin.P13, analogSpeed);
        }

        if (motor === Motor.MotorB || motor === Motor.MotorAll) {
            const isClockwise = speed * motorRotations[Motor.MotorB] > 0;
            pins.digitalWritePin(DigitalPin.P15, isClockwise ? 1 : 0);
            pins.digitalWritePin(DigitalPin.P16, isClockwise ? 0 : 1);
            pins.analogWritePin(AnalogPin.P14, analogSpeed);
        }
    }

    /**
     * Stops a motor.
     * @param motor motor, eg: Motor.MotorA
     */
    //% subcategory=Motors
    //% blockId="makerbit_motor_stop" block="stop motor %motor"
    //% weight=89
    export function stopMotor(motor: Motor): void {
        if (motor === Motor.MotorA || motor === Motor.MotorAll) {
            pins.digitalWritePin(DigitalPin.P11, 0);
            pins.digitalWritePin(DigitalPin.P12, 0);
            pins.digitalWritePin(DigitalPin.P13, 0);
        }

        if (motor === Motor.MotorB || motor === Motor.MotorAll) {
            pins.digitalWritePin(DigitalPin.P15, 0);
            pins.digitalWritePin(DigitalPin.P16, 0);
            pins.digitalWritePin(DigitalPin.P14, 0);
        }
    }

    /**
     * Sets the direction of a motor.
     * @param motor motor, eg: Motor.MotorA
     * @param rotation rotation of the motor, eg: MotorDirection.Clockwise
     */
    //% subcategory=Motors
    //% blockId=makerbit_motor_set_direction block="set motor %motor rotation | to %rotation"
    //% weight=88
    export function setMotorRotation(motor: Motor, rotation: MotorRotation) {
        if (motor === Motor.MotorA || motor === Motor.MotorAll) {
            motorRotations[Motor.MotorA] = rotation;
        }

        if (motor === Motor.MotorB || motor === Motor.MotorAll) {
            motorRotations[Motor.MotorB] = rotation;
        }
    }
}