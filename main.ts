basic.showIcon(IconNames.Happy)
basic.forever(function () {
    if (true) {
        mbit_Robot.CarCtrlSpeed(mbit_Robot.CarState.Car_Run, mbit_Robot.Ultrasonic_Car())
    } else {
        mbit_Robot.CarCtrlSpeed(mbit_Robot.CarState.Car_Stop, mbit_Robot.Ultrasonic_Car())
    }
})
