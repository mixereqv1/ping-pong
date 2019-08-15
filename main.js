import { createPlayer, updatePlayer, restartPlayer } from "./player.js";
import { game, game_state, $container, keys } from "./global.js";
import { onKeyDown, onKeyUp } from "./keys.js";
import { updateEnemy, createEnemy, restartEnemy } from "./enemy.js";
import { createBall, updateBall, restartBall } from "./ball.js";

var animation;

export function update() {
    // if(!game_state.paused) {
        // console.log(game_state.paused);
        const currentTime = Date.now();
        const dt = (currentTime - game_state.last_time) / 1000;
        updatePlayer(dt);
        updateEnemy(dt);
        updateBall(dt);
        game_state.last_time = currentTime;
        animation = requestAnimationFrame(update);
    
        document.querySelector('.result').innerText = game.score_left + ':' + game.score_right;
        if(game_state.ball_x <= 0) {
            game.score_right += 1;
            document.querySelector('.result').innerText = game.score_left + ':' + game.score_right;
            restartPlayer();
            restartEnemy();
            restartBall();   
            cancelAnimationFrame(animation);
            game_state.paused = true;
        } else if(game_state.ball_x + game.ball_width >= game.game_width) {
            game.score_left += 1;
            document.querySelector('.result').innerText = game.score_left + ':' + game.score_right;
            restartPlayer();
            restartEnemy();
            restartBall();
            cancelAnimationFrame(animation);
            game_state.paused = true;
        }
    // } else {
        // console.log(game_state.paused);
        window.addEventListener('keydown', function(event) {
            if(event.keyCode === keys.space) {
                console.log('space');
                
                // console.log(game_state.paused);
                animation = requestAnimationFrame(update);
                game_state.paused = false;
            }
        })
    // }
    
}

function init() {
    createPlayer($container);
    createEnemy($container);
    createBall($container);
}
init();
animation = requestAnimationFrame(update);