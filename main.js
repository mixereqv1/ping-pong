import { createPlayer, updatePlayer } from "./player.js";
import { game_state, $container } from "./global.js";
import { onKeyDown, onKeyUp } from "./keys.js";
import { updateEnemy, createEnemy } from "./enemy.js";
import { createBall, updateBall } from "./ball.js";
import { updateResult, endResult, startGame } from "./tools.js";

export function update() {
    const currentTime = Date.now();
    const dt = (currentTime - game_state.last_time) / 1000;
    updatePlayer(dt);
    updateEnemy(dt);
    updateBall(dt);
    game_state.last_time = currentTime;
    const animation = requestAnimationFrame(update);
    updateResult();
    endResult(animation);
}

export function init() {
    createPlayer($container);
    createEnemy($container);
    createBall($container);
}

startGame();