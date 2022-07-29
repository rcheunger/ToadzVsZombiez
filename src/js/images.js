import homeBackground from '../img/homePage/background.png'
import help from '../img/homePage/help.png'
import shop from '../img/homePage/shop.png'
import play from '../img/homePage/play.png'

import helpBackground from '../img/helpPage/helpPage.png'
import shopBackground from '../img/shopPage/shopPage.png'
import b9 from '../img/shopPage/b9.png'
import b10 from '../img/shopPage/b10.png'

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

import backgroundLevel4 from '../img/level4/background.png'
import hillsLevel4 from '../img/level4/hills.png'




export const images = {
    levels: {
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
        }, 
        4: {
            background: backgroundLevel4,
            hills: hillsLevel4,
        }, 
        5: {
            background: homeBackground,
            help,
            shop,
            play
        },
        6: {
            background: helpBackground,
        },
        7: {
            background: shopBackground,
            b9,
            b10
        },
    }
}

images.background