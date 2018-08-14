import {Player} from "./player";
import {Info} from "./info"
import * as PIXI from "pixi.js";

const  check = (x, y) => !(x < 10 || x > window.innerWidth-10 || y < 10 || y > window.innerHeight-10);
var obj = {width:window.innerWidth,height:window.innerHeight};
export class World {
    constructor() {
        // Создадим игрока
        this.player = new Player(100,100)
    }

    // В зависисмости от нажатых клавиш изменяем среду
    move = (keys) => {
        // Для каждого ключа в объекте
        Object.keys(keys).map((key) => {
            // Если нажата кнопка
            if (keys[key]) {
                // Взависимости от того какая кнопка
                //if (window.innerWidth != obj.width || window.innerHeight != obj.height) {
                    //window.onload;
                    //obj.width = window.innerWidth;
                    //obj.height = window.innerHeight;
                //}
                switch (key) {

                    case "a":
                        check(this.player.x - 10,this.player.y) ? this.player.go_left():null;
                        break;
                    case "d":
                        check(this.player.x + 10,this.player.y) ? this.player.go_right():null;
                        break;
                    case "s":
                        check(this.player.x,this.player.y+10) ? this.player.go_down():null;
                        break;
                    case "w":
                        check(this.player.x,this.player.y-10) ? this.player.go_up():null;
                        break;
                }
            }
        });

    };

    get_items() {
        return [this.player, new Info(this.player.x, this.player.y)]
    }

}

