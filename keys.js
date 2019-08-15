import { keys, game_state } from "./global.js";

export function onKeyDown(event) {
    if(event.keyCode === keys.arrow_up) {
        game_state.up_pressed = true;
    } else if(event.keyCode === keys.arrow_down) {
        game_state.down_pressed = true;
    } else if(event.keyCode === keys.key_w) {
        game_state.w_pressed = true;
    } else if(event.keyCode === keys.key_s) {
        game_state.s_pressed = true;
    }
}

export function onKeyUp(event) {
    if(event.keyCode === keys.arrow_up) {
        game_state.up_pressed = false;
    } else if(event.keyCode === keys.arrow_down) {
        game_state.down_pressed = false;
    } else if(event.keyCode === keys.key_w) {
        game_state.w_pressed = false;
    } else if(event.keyCode === keys.key_s) {
        game_state.s_pressed = false;
    }
}

window.addEventListener('keydown', onKeyDown);
window.addEventListener('keyup', onKeyUp);