import { Howl } from 'howler';
import level1Music from '../audio/level1Music.mp3'
import level2Music from '../audio/level2Music.mp3'
import level3Music from '../audio/level3Music.mp3'
import audioAbduction from '../audio/audioAbduction.mp3'
import audioGameOver from '../audio/audioGameOver.mp3'
import audioJump from '../audio/audioJump.mp3'
import audioLaser from '../audio/audioLaser.mp3'
import audioLosePowerUp from '../audio/audioLosePowerUp.mp3'
import audioZombieDeath from '../audio/audioZombieDeath.mp3'

export const audio = {
    level1Music: new Howl({
        src: [level1Music],
        volume: 0.08,
        loop: true
    }),
    audioAbduction: new Howl({
        src: [audioAbduction],
        volume: 0.0
    }),
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
}