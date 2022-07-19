import backgroundLevel4 from '../img/level0/background.png'
import helpBackground from '../img/helpPage/helpPage.png'
import help from '../img/level0/help.png'
import shop from '../img/level0/shop.png'
import play from '../img/level0/play.png'

import backgroundLevel2 from '../img/level2/background.png'
import hillsLevel2 from '../img/level2/hills.png'
import platformLevel2 from '../img/level2/platform.png'
import tPlatformLevel2 from '../img/level2/tPlatform.png'
import xtPlatformLevel2 from '../img/level2/xtPlatform.png'

import backgroundLevel3 from '../img/level3/background.png'
import hillsLevel3 from '../img/level3/hills.png'
import platformLevel3 from '../img/level3/platform.png'
import tPlatformLevel3 from '../img/level3/tPlatform.png'
import xtPlatformLevel3 from '../img/level3/xtPlatform.png'




export const images = {
    levels: {
        11: {
            background: helpBackground
        },
        0: {
            background: backgroundLevel4,
            help,
            shop,
            play
        },
        1: {
            background: ''
        },
        2: {
            background: backgroundLevel2,
            hills: hillsLevel2,
            platform: platformLevel2,
            tPlatform: tPlatformLevel2,
            xtPlatform: xtPlatformLevel2
        },
        3: {
            background: backgroundLevel3,
            hills: hillsLevel3,
            platform: platformLevel3,
            tPlatform: tPlatformLevel3,
            xtPlatform: xtPlatformLevel3
        }
    }
}

images.background