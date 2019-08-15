import { game_state, game, $enemyDOM } from "./global.js";
import { setPos, clamp } from "./tools.js";

export function createEnemy($container) {
    game_state.enemy_x = game.game_width - game.enemy_width - 50;
    game_state.enemy_y = (game.game_height / 2) - (game.enemy_height / 2);
    $enemyDOM.className = 'enemy';
    $container.appendChild($enemyDOM);
    setPos($enemyDOM, game_state.enemy_x, game_state.enemy_y);
}

export function updateEnemy(dt) {
    if(game_state.up_pressed) {
        game_state.enemy_y -= game.player_speed * dt;
    } else if(game_state.down_pressed) {
        game_state.enemy_y += game.player_speed * dt;
    }

    game_state.enemy_y = clamp(game_state.enemy_y, 0, game.game_height - game.enemy_height);

    setPos($enemyDOM, game_state.enemy_x, game_state.enemy_y);
}

export function restartEnemy() {
    game_state.enemy_y = (game.game_height / 2) - (game.enemy_height / 2);
    setPos($enemyDOM, game_state.enemy_x, game_state.enemy_y);
}