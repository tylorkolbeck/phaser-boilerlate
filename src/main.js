import preload from './preload'
import create from './create'
import update from './update'

const config = {
    type: Phaser.AUTO,
    width: 800,
    height: 600,
    physics: {
        default: 'arcade',
        arcade: {
            gravity: {
                gravity: { y: 200 }
            }
        }
    },
    scene: {
        preload,
        create,
        update
    }
}

const game = new Phaser.Game(config)
