voiceRecognition.init()
voiceRecognition.setVolume(7)
voiceRecognition.setMuteMode(voiceRecognition.MUTE.OFF)
voiceRecognition.setWakeTime(45)
serial.writeLine("" + (voiceRecognition.getWakeTime()))
voiceRecognition.playByCMDID(voiceRecognition.checkWord1(voiceRecognition.WakeupWords.W2))
serial.writeLine("==================")
maqueen.motorStop(maqueen.Motors.All)
basic.showIcon(IconNames.Ghost)
/**
 * Park A Car
 * 
 * APPLY BRAKES
 */
basic.forever(function () {
    voiceRecognition.getCMDID()
    if (voiceRecognition.checkCMDID()) {
        if (voiceRecognition.readCMDID() == voiceRecognition.checkWord3(voiceRecognition.FixedCommandWords.W24)) {
            maqueen.motorStop(maqueen.Motors.All)
            basic.showIcon(IconNames.No)
        } else if (voiceRecognition.readCMDID() == voiceRecognition.checkWord2(voiceRecognition.LearningCommandWords.W5)) {
            maqueen.motorStop(maqueen.Motors.All)
            basic.showString("S")
        } else if (voiceRecognition.readCMDID() == voiceRecognition.checkWord3(voiceRecognition.FixedCommandWords.W62)) {
            basic.showIcon(IconNames.Happy)
        } else if (voiceRecognition.readCMDID() == voiceRecognition.checkWord3(voiceRecognition.FixedCommandWords.W22)) {
            maqueen.motorRun(maqueen.Motors.All, maqueen.Dir.CW, 30)
            basic.showString("F")
        } else if (voiceRecognition.readCMDID() == voiceRecognition.checkWord3(voiceRecognition.FixedCommandWords.W23)) {
            maqueen.motorRun(maqueen.Motors.All, maqueen.Dir.CCW, 30)
            basic.showString("R")
        } else if (voiceRecognition.readCMDID() == voiceRecognition.checkWord3(voiceRecognition.FixedCommandWords.W65)) {
            basic.clearScreen()
        }
    }
})
