import { createPlayer, updatePlayer, restartPlayer } from "./player.js";
import { game,game_state, $container } from "./global.js";
import { onKeyDown, onKeyUp } from "./keys.js";
import { updateEnemy, createEnemy,restartEnemy } from "./enemy.js";
import { createBall, updateBall, restartBall } from "./ball.js";

export function update() {
    const currentTime = Date.now();
    const dt = (currentTime - game_state.last_time) / 1000;
    updatePlayer(dt);
    updateEnemy(dt);
    updateBall(dt);
    game_state.last_time = currentTime;
    requestAnimationFrame(update);

    document.querySelector('.result').innerText = game.score_left + ':' + game.score_right;
    if (game_state.ball_x <= 0) {
        game.score_right += 1;
        document.querySelector('.result').innerText = game.score_left + ':' + game.score_right;
        restartPlayer();
        restartEnemy();
        restartBall();
        game.ball_speed = 0;
        setTimeout(() => {
            restartPlayer();
            restartEnemy();
            restartBall();
        }, 1000);
    } else if (game_state.ball_x + game.ball_width >= game.game_width) {
        game.score_left += 1;
        document.querySelector('.result').innerText = game.score_left + ':' + game.score_right;
        restartPlayer();
        restartEnemy();
        // restartBall();
        game.ball_speed = 0;
        setTimeout(() => {
            restartPlayer();
            restartEnemy();
            restartBall();
        }, 1000);
    }
}

function init() {
    createPlayer($container);
    createEnemy($container);
    createBall($container);
}
init();
requestAnimationFrame(update);