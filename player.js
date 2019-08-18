import { game_state, game, $playerDOM } from "./global.js";
import { setPos, clamp } from "./tools.js";

export function createPlayer($container) {
    game_state.player_x = 30;
    game_state.player_y = (game.game_height / 2) - (game.player_height / 2);
    $playerDOM.className = 'player';
    $container.appendChild($playerDOM);
    setPos($playerDOM, game_state.player_x, game_state.player_y);
}

export function updatePlayer(dt) {
    if(game_state.w_pressed) {
        game_state.player_y -= game.player_speed * dt;
    } else if(game_state.s_pressed) {
        game_state.player_y += game.player_speed * dt;
    }

    game_state.player_y = clamp(game_state.player_y, 0, game.game_height - game.player_height);
    setPos($playerDOM, game_state.player_x, game_state.player_y);
}

export function restartPlayer() {
    game_state.player_y = (game.game_height / 2) - (game.player_height / 2);
    setPos($playerDOM, game_state.player_x, game_state.player_y);
}