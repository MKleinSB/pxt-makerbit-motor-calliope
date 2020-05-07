const enum mbMotor {
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
    //% subcategory=MBMotors // subcategory geändert wegen Vermischung mit Calliope Mini Motorblöcken
    //% blockId="makerbit_motor_run" block="run motor %motor | at speed %speed=speedPicker \\%"
    //% speed.min=-100 speed.max=100
    //% weight=90
    export function runMotor(motor: mbMotor, speed: number): void {
        if (speed === 0) {
            stopMotor(motor);
            return;
        }

        const absSpeedPercentage = Math.min(Math.abs(speed), 100);
        const analogSpeed = pins.map(absSpeedPercentage, 0, 100, 0, 1023);

        if (motor === mbMotor.MotorA || motor === mbMotor.MotorAll) {
            const isClockwise = speed * motorRotations[mbMotor.MotorA] > 0;
            pins.digitalWritePin(14, isClockwise ? 1 : 0); //P11
            pins.digitalWritePin(13, isClockwise ? 0 : 1); //P12
            pins.analogWritePin(11, analogSpeed);          //P13
        }

        if (motor === mbMotor.MotorB || motor === mbMotor.MotorAll) {
            const isClockwise = speed * motorRotations[mbMotor.MotorB] > 0;
            pins.digitalWritePin(19, isClockwise ? 1 : 0); //P15
            pins.digitalWritePin(23, isClockwise ? 0 : 1); //P16
            pins.analogWritePin(17, analogSpeed);          //P14
        }
    }

    /**
     * Stops a motor.
     * @param motor motor, eg: Motor.MotorA
     */
    //% subcategory=MBMotors
    //% blockId="makerbit_motor_stop" block="stop motor %motor"
    //% weight=89
    export function stopMotor(motor: mbMotor): void {
        if (motor === mbMotor.MotorA || motor === mbMotor.MotorAll) {
            pins.digitalWritePin(14, 0); //P11
            pins.digitalWritePin(13, 0); //P12
            pins.digitalWritePin(11, 0); //P13
        }

        if (motor === mbMotor.MotorB || motor === mbMotor.MotorAll) {
            pins.digitalWritePin(19, 0); //P15
            pins.digitalWritePin(23, 0); //P16
            pins.digitalWritePin(17, 0); //P14
        }
    }

    /**
     * Sets the rotation direction of a motor. Use this function at start time to configure your motors 
     * without the need to rewire.
     * @param motor motor, eg: Motor.MotorA
     * @param rotation rotation of the motor, eg: MotorDirection.Clockwise
     */
    //% subcategory=MBMotors
    //% blockId=makerbit_motor_set_direction block="set motor %motor rotation | to %rotation"
    //% weight=88
    export function setMotorRotation(motor: mbMotor, rotation: MotorRotation) {
        if (motor === mbMotor.MotorA || motor === mbMotor.MotorAll) {
            motorRotations[mbMotor.MotorA] = rotation;
        }

        if (motor === mbMotor.MotorB || motor === mbMotor.MotorAll) {
            motorRotations[mbMotor.MotorB] = rotation;
        }
    }
}
