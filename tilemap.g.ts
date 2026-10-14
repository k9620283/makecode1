// 자동 생성된 코드입니다. 편집하지 마십시오.
namespace myTiles {
    //% fixedInstance jres blockIdentity=images._tile
    export const transparency16 = image.ofBuffer(hex``);

    helpers._registerFactory("tilemap", function(name: string) {
        switch(helpers.stringTrim(name)) {
            case "수준1":
            case "수준1":return tiles.createTilemap(hex`1000100001050605050505050505010101050601010601060606060605050506060606010506050505050505050505050501060505060605050505050506050105050601080808080808080808080808080808080106070707050505050505050505010505070404040705050505050605050605050704030407050505060605060106010107020402070506010106050101050605060707070505050505060501050506050606050605050505050105010505060601050506060101060105050505010605060501010101050505050605050605010605050105050505050505050506060106060606010606060505010606010101010506050501010505010505050501`, img`
. . . . 2 2 2 2 . . . . . . . . 
. . . . 2 2 2 2 . . . . . . . . 
. . . . 2 . . 2 . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . 2 2 2 . . . . . . . . . . . 
. 2 . . . 2 . . . . . . . . . . 
. 2 . . . 2 . . . . . . . . . . 
. 2 . . . 2 . . . . . . . . . . 
. . 2 2 2 . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
`, [myTiles.transparency16,sprites.castle.tileGrass2,sprites.castle.tileDarkGrass3,sprites.castle.tileDarkGrass2,sprites.castle.tileDarkGrass1,sprites.castle.tileGrass1,sprites.castle.tileGrass3,sprites.builtin.forestTiles4,sprites.vehicle.roadHorizontal], TileScale.Sixteen);
        }
        return null;
    })

    helpers._registerFactory("tile", function(name: string) {
        switch(helpers.stringTrim(name)) {
            case "transparency16":return transparency16;
        }
        return null;
    })

}
// 자동 생성된 코드입니다. 편집하지 마십시오.
