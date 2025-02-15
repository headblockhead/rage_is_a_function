/*
@title: RAGE is a function of time over results
@author: Edward Hesketh
@tags: []
@addedOn: 2024-00-00
*/

const background_none = '0'
const background_tile = '1'
const background_wall_top = '2'
const background_wall_right = '3'
const background_wall_bottom = '4'
const background_wall_left = '5'
const background_wall_TL = '6'
const background_wall_TR = '7'
const background_wall_BL = '8'
const background_wall_BR = '9'

const trapdoor = 't'
const player = 'p'
const annoyer = 'a'
const annoyer_falling = 'f'
const wall = 'w'

setLegend(
  [player, bitmap`
3333333333333333
333LL333333LL333
33L3333333333L33
3333333333333333
3333233333323333
3332223333222333
3332023333202333
333202333320233C
333222333322233C
333121333312133C
333313333331333C
333333333333333C
33333L3333L3333C
333333LLLL33333C
333333333333333C
333333CCCCCCCCCC`],
  [annoyer, bitmap`
..88888HHHHHHH..
.8HHHHHHHHHHHHH.
8HHHHHHHHHHHHHHH
HHHHHHHHHHHHHHHH
HHHH2HHHHHH2HHHH
HHH222HHHH222HHH
HHH2L2HHHH2L2HHH
HHH2L2HHHH2L2HHH
HHH222HHHH222HHH
HHHH2HHHHHH2HHH8
HHHHHHHHHHHHHHH8
HHHHHHHHHHHHHHH8
HHHHHHHHHHHHHHH8
HHHHHHHHHHHHHH88
.HHHHHHHHHHHH88.
..HHHHHHH88888..`],
  [annoyer_falling, bitmap`
................
................
................
................
................
................
................
................
................
................
................
................
................
................
................
................`],
  [trapdoor, bitmap`
LLLLLLLLLLLLLLLL
L111166LL601111L
L111106LL661111L
L111100LL061111L
L111160LL001111L
L111166LL601111L
L111106LL661111L
L111100LL061111L
L111160LL001111L
L111166LL601111L
L111106LL661111L
L111100LL061111L
L111160LL001111L
L111166LL601111L
L111106LL661111L
LLLLLLLLLLLLLLLL`],
  [wall, bitmap`
0000000000000000
0000000000000000
0000000000000000
0000000000000000
0000000000000000
0000000000000000
0000000000000000
0000000000000000
0000000000000000
0000000000000000
0000000000000000
0000000000000000
0000000000000000
0000000000000000
0000000000000000
0000000000000000`],
  [background_wall_top, bitmap`
2222222222222222
1000000000000001
1000000000000001
L00000000000000L
L00000000000000L
L00000000000000L
L00000000000000L
L00000000000000L
L00000000000000L
L00000000000000L
L00000000000000L
L00000000000000L
L00000000000000L
L00000000000000L
L00000000000000L
LLLLLLLLLLLLLLLL`],
  [background_wall_right, bitmap`
11LLLLLLLLLLL112
1000000000000002
L000000000000002
L000000000000002
L000000000000002
L000000000000002
L000000000000002
L000000000000002
L000000000000002
L000000000000002
L000000000000002
L000000000000002
L000000000000002
L000000000000002
L000000000000002
LLLLLLLLLLLLL112`],
  [background_wall_bottom, bitmap`
11LLLLLLLLLLLLLL
100000000000000L
L00000000000000L
L00000000000000L
L00000000000000L
L00000000000000L
L00000000000000L
L00000000000000L
L00000000000000L
L00000000000000L
L00000000000000L
L00000000000000L
L00000000000000L
1000000000000001
1000000000000001
2222222222222222`],
  [background_wall_left, bitmap`
211LLLLLLLLLLLLL
200000000000000L
200000000000000L
200000000000000L
200000000000000L
200000000000000L
200000000000000L
200000000000000L
200000000000000L
200000000000000L
200000000000000L
200000000000000L
200000000000000L
200000000000000L
200000000000000L
211LLLLLLLLLLLLL`],
  [background_wall_TL, bitmap`
2222222222222222
2000000000000001
2000000000000001
200000000000000L
200000000000000L
200000000000000L
200000000000000L
200000000000000L
200000000000000L
200000000000000L
200000000000000L
200000000000000L
200000000000000L
200000000000000L
200000000000000L
211LLLLLLLLLLLLL`],
  [background_wall_TR, bitmap`
2222222222222222
1000000000000002
1000000000000002
L000000000000002
L000000000000002
L000000000000002
L000000000000002
L000000000000002
L000000000000002
L000000000000002
L000000000000002
L000000000000002
L000000000000002
L000000000000002
L000000000000002
LLLLLLLLLLLLL112`],
  [background_wall_BL, bitmap`
211LLLLLLLLLLLLL
200000000000000L
200000000000000L
200000000000000L
200000000000000L
200000000000000L
200000000000000L
200000000000000L
200000000000000L
200000000000000L
200000000000000L
200000000000000L
200000000000000L
2000000000000001
2000000000000001
2222222222222222`],
  [background_wall_BR, bitmap`
11LLLLLLLLLLL112
1000000000000002
L000000000000002
L000000000000002
L000000000000002
L000000000000002
L000000000000002
L000000000000002
L000000000000002
L000000000000002
L000000000000002
L000000000000002
L000000000000002
1000000000000002
1000000000000002
2222222222222222`],
  [background_tile, bitmap`
11LLLLLLLLLLLLLL
100000000000000L
L00000000000000L
L00000000000000L
L00000000000000L
L00000000000000L
L00000000000000L
L00000000000000L
L00000000000000L
L00000000000000L
L00000000000000L
L00000000000000L
L00000000000000L
L00000000000000L
L00000000000000L
LLLLLLLLLLLLLLLL`],
  [background_none, bitmap`
0000000000000000
0000000000000000
0000000000000000
0000000000000000
0000000000000000
0000000000000000
0000000000000000
0000000000000000
0000000000000000
0000000000000000
0000000000000000
0000000000000000
0000000000000000
0000000000000000
0000000000000000
0000000000000000`],
)

setSolids([player, annoyer, wall])

function loadLevel(levelIndex) {
  setMap(levels[levelIndex])
  switch (levelIndex) {
    case 0:
      addSprite(0, 0, player)
      addSprite(5, 5, annoyer)
      addSprite(4, 5, annoyer)
      break;
    default:
      console.log("error: loading undefined level")
  }
}

let level = 0
const levels = [
  map`
6222222227
5wwwwwwww3
5w111111w3
5wwwwwwww3
5wwwwwwww3
5wt11111w3
5wwwwwwww3
8444444449`,
]
loadLevel(level)

let gameover = false;
let player_dead = false;
var gameState = "game";

// Player movement
onInput("w", () => {
  switch (gameState) {
    case "game":
      getFirst(player).y -= 1
      movetimer++;
      if (movetimer == 2) {
        moveAnnoyers();
        movetimer = 0;
      }
      break;
  }
})
onInput("a", () => {
  switch (gameState) {
    case "game":
      getFirst(player).x -= 1
      movetimer++;
      if (movetimer == 2) {
        moveAnnoyers();
        movetimer = 0;
      }
      break;
  }
})
onInput("s", () => {
  switch (gameState) {
    case "game":
      getFirst(player).y += 1
      movetimer++;
      if (movetimer == 2) {
        moveAnnoyers();
        movetimer = 0;
      }
      break;
  }
})
onInput("d", () => {
  switch (gameState) {
    case "game":
      getFirst(player).x += 1
      movetimer++;
      if (movetimer == 2) {
        moveAnnoyers();
        movetimer = 0;
      }
      break;
  }
})

onInput("j", () => {
  loadLevel(level)
})

// Open the trapdoors!
onInput("k", () => {
    switch (gameState) {
    case "game":
        gameState = "trapdoors"

        // Play the animations for the trapdoor and annoyers.
        setTimeout(() => { setLegend([trapdoor, bitmap`
      LLLLLLLLLLLLLLLL
      L11166LLLL60111L
      L11106LLLL66111L
      L11100LLLL06111L
      L11160LLLL00111L
      L11166LLLL60111L
      L11106LLLL66111L
      L11100LLLL06111L
      L11160LLLL00111L
      L11166LLLL60111L
      L11106LLLL66111L
      L11100LLLL06111L
      L11160LLLL00111L
      L11166LLLL60111L
      L11106LLLL66111L
      LLLLLLLLLLLLLLLL`]); }, 100);
        setTimeout(() => { setLegend([trapdoor, bitmap`
      LLLLLLLLLLLLLLLL
      L1166LL00LL6011L
      L1106LL00LL6611L
      L1100LL00LL0611L
      L1160LL00LL0011L
      L1166LL00LL6011L
      L1106LL00LL6611L
      L1100LL00LL0611L
      L1160LL00LL0011L
      L1166LL00LL6011L
      L1106LL00LL6611L
      L1100LL00LL0611L
      L1160LL00LL0011L
      L1166LL00LL6011L
      L1106LL00LL6611L
      LLLLLLLLLLLLLLLL`]); }, 200);
        setTimeout(() => { setLegend([trapdoor, bitmap`
      LLLLLLLLLLLLLLLL
      L166LL0000LL601L
      L106LL0000LL661L
      L100LL0000LL061L
      L160LL0000LL001L
      L166LL0000LL601L
      L106LL0000LL661L
      L100LL0000LL061L
      L160LL0000LL001L
      L166LL0000LL601L
      L106LL0000LL661L
      L100LL0000LL061L
      L160LL0000LL001L
      L166LL0000LL601L
      L106LL0000LL661L
      LLLLLLLLLLLLLLLL`]); }, 300);
        setTimeout(() => {
          setLegend(
            [annoyer_falling, bitmap`
      ................
      ..8888HHHHHHHH..
      .88HHHHHHHHHHHH.
      .8HHHHHHHHHHHHH.
      .HHH2HHHHHH2HHH.
      .HH222HHHH222HH.
      .HH2L2HHHH2L2HH.
      .HH2L2HHHH2L2HH.
      .HH222HHHH222HH.
      .HHH2HHHHHH2HHH.
      .HHHHHHHHHHHHH8.
      .HHHHHHHHHHHHH8.
      .HHHHHHHHHHHHH8.
      .HHHHHHHHHHHH88.
      ..HHHHHHHH8888..
      ................`],
            [trapdoor, bitmap`
      11LLLLLLLLLLLLLL
      166LL000000LL60L
      L06LL000000LL66L
      L00LL000000LL06L
      L60LL000000LL00L
      L66LL000000LL60L
      L06LL000000LL66L
      L00LL000000LL06L
      L60LL000000LL00L
      L66LL000000LL60L
      L06LL000000LL66L
      L00LL000000LL06L
      L60LL000000LL00L
      L66LL000000LL60L
      L06LL000000LL66L
      LLLLLLLLLLLLLLLL`]
          );
        }, 400);
        setTimeout(() => {
          setLegend(
            [annoyer_falling, bitmap`
      ................
      ................
      ...88HHHHHHHH...
      ..88HHHHHHHHHH..
      ..8HHHHHHHHHHH..
      ..HH2HHHHHH2HH..
      ..H2L2HHHH2L2H..
      ..H2L2HHHH2L2H..
      ..HH2HHHHHH2HH..
      ..HHHHHHHHHHHH..
      ..HHHHHHHHHHHH..
      ..HHHHHHHHHHH8..
      ..HHHHHHHHHH88..
      ...HHHHHHHH88...
      ................
      ................`],
            [trapdoor, bitmap`
      11LLLLLLLLLLLLLL
      166LL000000LL60L
      L06LL000000LL66L
      L00LL000000LL06L
      L60LL000000LL00L
      L66LL000000LL60L
      L06LL000000LL66L
      L00LL000000LL06L
      L60LL000000LL00L
      L66LL000000LL60L
      L06LL000000LL66L
      L00LL000000LL06L
      L60LL000000LL00L
      L66LL000000LL60L
      L06LL000000LL66L
      LLLLLLLLLLLLLLLL`]
          );
        }, 500);
        setTimeout(() => {
          setLegend(
            [annoyer_falling, bitmap`
      ................
      ................
      ....88HHHHHH....
      ...8HHHHHHHHH...
      ..8HHHHHHHHHHH..
      ..8H2L2HH2L2HH..
      ..HH2L2HH2L2HH..
      ..HH2L2HH2L2HH..
      ..HH2L2HH2L2HH..
      ..HHHHHHHHHHHH..
      ..HHHHHHHHHHH8..
      ..HHHHHHHHHHH8..
      ...HHHHHHHHH8...
      ....HHHHHH88....
      ................
      ................`],
            [trapdoor, bitmap`
      11LLLLLLLLLLLLLL
      16LL00000000LL6L
      L6LL00000000LL6L
      L0LL00000000LL0L
      L0LL00000000LL0L
      L6LL00000000LL6L
      L6LL00000000LL6L
      L0LL00000000LL0L
      L0LL00000000LL0L
      L6LL00000000LL6L
      L6LL00000000LL6L
      L0LL00000000LL0L
      L0LL00000000LL0L
      L6LL00000000LL6L
      L6LL00000000LL6L
      LLLLLLLLLLLLLLLL`]
          );
        }, 600);
        setTimeout(() => {
          setLegend(
            [annoyer_falling, bitmap`
      ................
      ................
      ................
      ................
      ....88HHHHHH....
      ....8HHHHHHH....
      ....H22HH22H....
      ....HLLHHLLH....
      ....H22HH22H....
      ....HHHHHHHH....
      ....HHHHHHH8....
      ....HHHHHH88....
      ................
      ................
      ................
      ................`],
            [trapdoor, bitmap`
      11LLLLLLLLLLLLLL
      16LL00000000LL6L
      L6LL00000000LL6L
      L0LL00000000LL0L
      L0LL00000000LL0L
      L6LL00000000LL6L
      L6LL00000000LL6L
      L0LL00000000LL0L
      L0LL00000000LL0L
      L6LL00000000LL6L
      L6LL00000000LL6L
      L0LL00000000LL0L
      L0LL00000000LL0L
      L6LL00000000LL6L
      L6LL00000000LL6L
      LLLLLLLLLLLLLLLL`]);
        }, 700);
        setTimeout(() => {
          setLegend(
            [annoyer_falling, bitmap`
      ................
      ................
      ................
      ................
      ................
      ................
      ......HHHH......
      ......HL2H......
      ......HHHH......
      ......HHHH......
      ................
      ................
      ................
      ................
      ................
      ................`],
            [trapdoor, bitmap`
      11LLLLLLLLLLLLLL
      1LL0000000000LLL
      LLL0000000000LLL
      LLL0000000000LLL
      LLL0000000000LLL
      LLL0000000000LLL
      LLL0000000000LLL
      LLL0000000000LLL
      LLL0000000000LLL
      LLL0000000000LLL
      LLL0000000000LLL
      LLL0000000000LLL
      LLL0000000000LLL
      LLL0000000000LLL
      LLL0000000000LLL
      LLLLLLLLLLLLLLLL`]
          );
        }, 800);
        setTimeout(() => {
          setLegend(
            [annoyer_falling, bitmap`
      ................
      ................
      ................
      ................
      ................
      ................
      ................
      .......H1.......
      .......HH.......
      ................
      ................
      ................
      ................
      ................
      ................
      ................`],
            [trapdoor, bitmap`
      11LLLLLLLLLLLLLL
      1L000000000000LL
      LL000000000000LL
      LL000000000000LL
      LL000000000000LL
      LL000000000000LL
      LL000000000000LL
      LL000000000000LL
      LL000000000000LL
      LL000000000000LL
      LL000000000000LL
      LL000000000000LL
      LL000000000000LL
      LL000000000000LL
      LL000000000000LL
      LLLLLLLLLLLLLLLL`]
          );
        }, 900);
        setTimeout(() => {
          setLegend(
            [annoyer_falling, bitmap`
      ................
      ................
      ................
      ................
      ................
      ................
      ................
      ................
      ................
      ................
      ................
      ................
      ................
      ................
      ................
      ................`],
            [trapdoor, bitmap`
      11LLLLLLLLLLLLLL
      100000000000000L
      L00000000000000L
      L00000000000000L
      L00000000000000L
      L00000000000000L
      L00000000000000L
      L00000000000000L
      L00000000000000L
      L00000000000000L
      L00000000000000L
      L00000000000000L
      L00000000000000L
      L00000000000000L
      L00000000000000L
      LLLLLLLLLLLLLLLL`]
          );
          var fallers = getAll(annoyer_falling);
          fallers.forEach((faller) => {
            faller.remove();
          })
        }, 1000);

        // after 1.5 seconds, display the appropriate gameover text.
                setTimeout(() => {
          gameState = "gameover";
          if (player_dead) {
            addText("You died!", { x: 0, y: 0, color: color`3` })
            addText("Press J to restart.", { x: 0, y: 1, color: color`3` })
          } else if (getAll(annoyer).length > 0) {
            addText("You lost!", { x: 0, y: 0, color: color`3` })
            addText("Press J to restart.", { x: 0, y: 1, color: color`3` })
          } else {
            addText("You win!", { x: 0, y: 0, color: color`4` })
            addText("Press L to continue.", { x: 0, y: 1, color: color`3` })
          }
        }, 1500);
      
        let annoyers = getAll(annoyer)
        let trapdoors = getAll(trapdoor)
        let player_inst = getFirst(player)
        
        trapdoors.forEach((trapdoor) => {
          if (trapdoor.x == player_inst.x && trapdoor.y == player_inst.y) {
            player_dead = true;
          }
          annoyers.forEach((annoyer) => {
            if (annoyer.x == trapdoor.x && annoyer.y == trapdoor.y) {
              addSprite(annoyer.x, annoyer.y, annoyer_falling);
              setTimeout(() => {
                annoyer.remove();
                annoyers.splice(annoyers.indexOf(annoyer), 1);
              }, 450);
            }
          });
        })
        break;
    }
});

let movetimer = 0;
afterInput(() => {
  
})

function moveAnnoyers() {
  player_sprite = getFirst(player)
  annoyers = getAll(annoyer)
  annoyers.forEach((annoyer) => {
    if (annoyer.x >= player_sprite.x) {
      annoyer.x -= 1
    }
    if (annoyer.x < player_sprite.x) {
      annoyer.x += 1
    }
    if (annoyer.y >= player_sprite.y) {
      annoyer.y -= 1
    }
    if (annoyer.y < player_sprite.y) {
      annoyer.y += 1
    }
  });
}
