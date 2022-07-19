import { Howl } from 'howler';
import audioGameOver from '../audio/audioGameOver.mp3'
import audioJump from '../audio/audioJump.mp3'
import audioLaser from '../audio/audioLaser.mp3'
import audioLosePowerUp from '../audio/audioLosePowerUp.mp3'
import audioZombieDeath from '../audio/audioZombieDeath.mp3'
import coinCollect from '../audio/coinCollect.mp3'

export const audio = {
    audioGameOver: new Howl({
        src: [audioGameOver],
        volume: 0.4
    }),
    audioJump: new Howl({
        src: [audioJump],
        volume: 0.25
    }),
    audioLaser: new Howl({
        src: [audioLaser],
        volume: 0.4
    }),
    audioLosePowerUp: new Howl({
        src: [audioLosePowerUp],
        volume: 0.4
    }),
    audioZombieDeath: new Howl({
        src: [audioZombieDeath],
        volume: 0.4
    }),
    coinCollect: new Howl({
        src: [coinCollect],
        volume: 0.4
    })
}