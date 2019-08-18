import { game, game_state } from "./global.js";
import { restartPlayer } from "./player.js";
import { restartEnemy } from "./enemy.js";
import { restartBall } from "./ball.js";
import { init, update } from "./main.js";

export function startGame() {
    document.querySelector('.start__btn').addEventListener('click', function() {
        document.querySelector('.game').innerText = '';
        init();
        requestAnimationFrame(update);
        game.score_left = 0;
        game.score_right = 0;
        game.ball_speed = 0;
        setTimeout(() => {
            restartPlayer();
            restartEnemy();
            restartBall();
        }, 1000);
    })
}

export function setPos($element, x, y) {
    $element.style.transform = `translate(${x}px, ${y}px)`;
}

export function clamp(v, min, max) {
    if (v < min) {
        return min
    } else if (v > max) {
        return max
    } else {
        return v
    }
}

export function updateResult() {
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
        restartBall();
        game.ball_speed = 0;
        setTimeout(() => {
            restartPlayer();
            restartEnemy();
            restartBall();
        }, 1000);
    }
}

export function endResult(animation) {
    let game_container = document.querySelector('.game');
    if (game.score_left == 10 || game.score_right == 10) {
        cancelAnimationFrame(animation);
        if (game.score_left == 10) {
            game_container.innerText = 'Player 1 wins! Congratulations!';
        } else {
            game_container.innerText = 'Player 2 wins! Congratulations!';
        }

        game_container.classList.add('after__game');

        let restart_button = document.createElement('div');
        restart_button.className = 'restart__btn';
        restart_button.innerText = 'Restart game';
        game_container.appendChild(restart_button);
        document.querySelector('.restart__btn').addEventListener('click', a => {
            location.reload();
        })
    }
}