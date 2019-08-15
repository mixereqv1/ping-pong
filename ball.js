import { game_state, game, $ballDOM } from "./global.js";
import { setPos, clamp } from "./tools.js";

export function createBall($container) {
    game_state.ball_x = (game.game_width - 15) / 2;
    game_state.ball_y = (game.game_height - 15) / 2;
    $ballDOM.className = 'ball';
    $container.appendChild($ballDOM);
    setPos($ballDOM, game_state.ball_x, game_state.ball_y);
}

export function updateBall(dt) {

    if(game.going_left) {
        game_state.ball_x -= game.ball_speed * dt;
    } else {
        game_state.ball_x += game.ball_speed * dt;
    }
    
    if(game.going_down) {
        game_state.ball_y += game.ball_speed * dt;
    } else {
        game_state.ball_y -= game.ball_speed * dt;
    }


    if(game_state.ball_x <= (game_state.player_x + game.player_width) && game_state.ball_y >= (game_state.player_y) && game_state.ball_y <= (game_state.player_y + game.player_height)) {
        game.going_left = false;
    } else if(game_state.ball_x >= (game_state.enemy_x) && game_state.ball_y >= game_state.enemy_y && game_state.ball_y <= (game_state.enemy_y + game.enemy_height)) {
        game.going_left = true;
    }

    if(game_state.ball_y + game.ball_height >= game.game_height) {
        game.going_down = false;
    } else if(game_state.ball_y <= 0){
        game.going_down = true;
    }   

    game_state.ball_x = clamp(game_state.ball_x, 0, game.game_width - game.ball_width);
    game_state.ball_y = clamp(game_state.ball_y, 0, game.game_height - game.ball_height / 2);
    setPos($ballDOM, game_state.ball_x, game_state.ball_y);
}

export function restartBall() {
    game_state.ball_x = (game.game_width - 15) / 2;
    game_state.ball_y = (game.game_height - 15) / 2;
    setPos($ballDOM, game_state.ball_x, game_state.ball_y);
}