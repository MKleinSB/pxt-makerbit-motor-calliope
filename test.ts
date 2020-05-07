/**
 * Motor tests
 */

makerbit.runMotor(mbMotor.MotorA, 80);
makerbit.stopMotor(mbMotor.MotorA);

makerbit.runMotor(mbMotor.MotorB, -50);
makerbit.stopMotor(mbMotor.MotorB);

makerbit.runMotor(mbMotor.MotorAll, 80);
makerbit.stopMotor(mbMotor.MotorAll);

makerbit.setMotorRotation(mbMotor.MotorA, MotorRotation.Clockwise);
makerbit.setMotorRotation(mbMotor.MotorB, MotorRotation.CounterClockwise);
