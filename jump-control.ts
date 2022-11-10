let jumpCounter = 0

namespace controller {
    /**
     * Run some code when a button is pressed, released, or held
     */
    //% weight=99 blockGap=8
    //% blockId=singleJump block="set $sprite=variables_get jumps allowed $jumps with height $heightValue"
    //% group="Single Player"
    //% help=controller/on-button-event
    //% parts="Single Player"
    //% jumps.defl=1
    //% heightValue.defl=200


    export function singleJump(sprite: Sprite, jumps: number, heightValue: number) {

        if (sprite.vy == 0) {
            jumpCounter = 0
        }

        if (jumpCounter < jumps) {
            jumpCounter = jumpCounter + 1
            sprite.vy = -heightValue
        }

    }

}