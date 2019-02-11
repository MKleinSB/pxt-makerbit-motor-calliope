/**
 * Motor tests
 */

makerbit.runMotor(Motor.MotorA, 80);
makerbit.stopMotor(Motor.MotorA);

makerbit.runMotor(Motor.MotorB, -50);
makerbit.stopMotor(Motor.MotorB);

makerbit.runMotor(Motor.MotorAll, 80);
makerbit.stopMotor(Motor.MotorAll);

makerbit.setMotorRotation(Motor.MotorA, MotorRotation.Clockwise);
makerbit.setMotorRotation(Motor.MotorB, MotorRotation.CounterClockwise);
