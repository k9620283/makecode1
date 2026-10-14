namespace SpriteKind {
    export const 집 = SpriteKind.create()
    export const 애완동물 = SpriteKind.create()
}
sprites.onOverlap(SpriteKind.Player, SpriteKind.Enemy, function (sprite, otherSprite) {
    info.changeLifeBy(-1)
    tiles.placeOnRandomTile(enimy, sprites.castle.tileGrass1)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.애완동물, function (sprite, otherSprite) {
    info.changeScoreBy(1)
    tiles.placeOnRandomTile(고양이, sprites.castle.tileGrass2)
})
let enimy: Sprite = null
let 고양이: Sprite = null
let 주인공 = sprites.create(img`
    ........................
    .....ffff...............
    ...fff22fff.............
    ..fff2222fff............
    .fffeeeeeefff...........
    .ffe222222eef...........
    .fe2ffffff2ef...........
    .ffffeeeeffff...........
    ffefbf44fbfeff..........
    fee41fddf14eef..........
    .ffffdddddeef...........
    fddddf444eef............
    fbbbbf2222f4e...........
    fbbbbf2222fd4...........
    .fccf45544f44...........
    ..ffffffff..............
    ....ff..ff..............
    ........................
    ........................
    ........................
    ........................
    ........................
    ........................
    ........................
    `, SpriteKind.Player)
let 집 = sprites.create(img`
    77777777777777777777e2e22e2e77777777777777777777
    77777777777777777772eee22e2e22277777777777777777
    77777777777777772e22e2e22eee22e22277777777777777
    77777777777777772eeee2e22e2eeee22e22e77777777777
    77777777eee772e22e22e2e22e2e22e22e22eeee77777777
    77777222e22e22eeee22e2e22e2e22eeee22e22e22277777
    77722eeee22e22e22e22eee22eee22e22e22e22eeee22777
    4cc22e22e22eeee22e22e2e22e2e22e22eeee22e22e22cc4
    6c6eee22e22e22e22e22e2e22e2e22e22e22e22e22eee6c6
    46622e22eeee22e22eeee2e22e2eeee22e22eeee22e22664
    46622e22e22e22eeee22e2e22e2e22eeee22e22e22e22664
    4cc22eeee22e22e22e22eee22eee22e22e22e22eeee22cc4
    6c622e22e22eeee22e22e2e22e2e22e22eeee22e22e226c6
    466eee22e22e22e22e22e2e22e2e22e22e22e22e22eee664
    46622e22eeee22e22e22e2e22e2e22e22e22eeee22e22664
    4cc22e22e22e22e22eeee2e22e2eeee22e22e22e22e22cc4
    6c622eeee22e22eeee22eee22eee22eeee22e22eeee226c6
    46622e22e22eeee22e22e2e22e2e22e22eeee22e22e22664
    466eee22e22e22e22e22e2e22e2e22e22e22e22e22eee664
    4cc22e22eeee22e22e22e2e22e2e22e22e22eeee22e22cc4
    6c622e22e22e22e22e22eee22eee22e22e22e22e22e226c6
    46622eeee22e22e22eeecc6666cceee22e22e22eeee22664
    46622e22e22e22eeecc6666666666cceee22e22e22e22664
    4cceee22e22eeecc66666cccccc66666cceee22e22eeecc4
    6c622e22eeecc66666cc64444446cc66666cceee22e226c6
    46622e22cc66666cc64444444444446cc66666cc22e22664
    46622cc6666ccc64444444444444444446ccc6666cc22664
    4ccc6666ccc6444bcc666666666666ccb4446ccc6666ccc4
    cccccccc6666666cb44444444444444bc6666666cccccccc
    64444444444446c444444444444444444c64444444444446
    66cb444444444cb411111111111111114bc444444444bc66
    666cccccccccccd166666666666666661dccccccccccc666
    6666444444444c116eeeeeeeeeeeeee611c4444444446666
    666e2222222e4c16e4e44e44e44e44ee61c4e2222222e666
    666eeeeeeeee4c16e4e44e44e44e44ee61c4eeeeeeeee666
    666eddddddde4c66f4e4effffffe44ee66c4eddddddde666
    666edffdffde4c66f4effffffffff4ee66c4edffdffde666
    666edccdccde4c66f4effffffffffeee66c4edccdccde666
    666eddddddde4c66f4eeeeeeeeeeeeee66c4eddddddde666
    c66edffdffde4c66e4e44e44e44e44ee66c4edffdffde66c
    c66edccdccde4c66e4e44e44e44e44ee66c4edccdccde66c
    cc66666666664c66e4e44e44e44feeee66c46666666666cc
    7c66444444444c66e4e44e44e44ffffe66c44444444466c7
    77c64eee4eee4c66f4e44e44e44f44fe66c4eee4eee46c77
    777c4eee4eee4c66f4e44e44e44effee66c4eee4eee4c777
    7777644444444c66f4e44e44e44e44ee66c4444444467777
    7777764eee444c66f4e44e44e44e44ee66c444eee4677777
    7777776ccc666c66e4e44e44e44e44ee66c666ccc6777777
    `, SpriteKind.집)
주인공.setPosition(124, 92)
집.setPosition(96, 29)
주인공.setScale(1, ScaleAnchor.Middle)
controller.moveSprite(주인공)
tiles.setCurrentTilemap(tilemap`수준1`)
고양이 = sprites.create(img`
    . . . . . . . . . . . . . . 
    e e e . . . . e e e . . . . 
    c d d c . . c d d c . . . . 
    c b d d f f d d b c . . . . 
    c 3 b d d b d b 3 c . . . . 
    f b 3 d d d d 3 b f . . . . 
    e d d d d d d d d e . . . . 
    e d f d d d d f d e . b f b 
    f d d f d d f d d f . f d f 
    f b d d b b d d 2 b f f d f 
    . f 2 2 2 2 2 2 d b b d b f 
    . f d d d d d d d f f f f . 
    . . f d b d f d f . . . . . 
    . . . f f f f f f . . . . . 
    `, SpriteKind.애완동물)
고양이.setVelocity(-100, -100)
고양이.setScale(0.8, ScaleAnchor.Middle)
tiles.placeOnRandomTile(고양이, sprites.castle.tileGrass2)
enimy = sprites.create(img`
    . . . . c c c c c c . . . . . . 
    . . . c 6 7 7 7 7 6 c . . . . . 
    . . c 7 7 7 7 7 7 7 7 c . . . . 
    . c 6 7 7 7 7 7 7 7 7 6 c . . . 
    . c 7 c 6 6 6 6 c 7 7 7 c . . . 
    . f 7 6 f 6 6 f 6 7 7 7 f . . . 
    . f 7 7 7 7 7 7 7 7 7 7 f . . . 
    . . f 7 7 7 7 6 c 7 7 6 f c . . 
    . . . f c c c c 7 7 6 f 7 7 c . 
    . . c 7 2 7 7 7 6 c f 7 7 7 7 c 
    . c 7 7 2 7 7 c f c 6 7 7 6 c c 
    c 1 1 1 1 7 6 f c c 6 6 6 c . . 
    f 1 1 1 1 1 6 6 c 6 6 6 6 f . . 
    f 6 1 1 1 1 1 6 6 6 6 6 c f . . 
    . f 6 1 1 1 1 1 1 6 6 6 f . . . 
    . . c c c c c c c c c f . . . . 
    `, SpriteKind.Enemy)
enimy.setVelocity(10, 10)
enimy.setScale(0.8, ScaleAnchor.Middle)
tiles.placeOnRandomTile(enimy, sprites.castle.tileGrass1)
info.setScore(0)
info.setLife(3)
info.startCountdown(90)
scene.cameraFollowSprite(주인공)
game.onUpdateInterval(1000, function () {
    tiles.placeOnRandomTile(고양이, sprites.castle.tileGrass2)
})
game.onUpdateInterval(1000, function () {
    tiles.placeOnRandomTile(enimy, sprites.castle.tileGrass1)
})
