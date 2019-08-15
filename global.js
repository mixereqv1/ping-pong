export const game = {
    game_width: 640,
    game_height: 480,

    player_width: 20,
    player_height: 60,
    player_speed: 300,

    enemy_width: 20,
    enemy_height: 60,
    enemy_speed: 300,

    ball_speed: 250,
    ball_width: 30,
    ball_height: 30,

    going_left: true,
    going_down: true,

    score_left: 0,
    score_right: 0, 
}

export const keys = {
    arrow_up: 38,
    arrow_down: 40,
    key_w: 87,
    key_s: 83,
    space: 32,
}

export const game_state = {
    up_pressed: false,
    down_pressed: false,
    w_pressed: false,
    s_pressed: false,

    player_x: 0,
    player_y: 0,
    enemy_x: 0,
    enemy_y: 0,
    ball_x: 0,
    ball_y: 0,
    
    last_time: Date.now(),
}

export const $container = document.getElementById('game');
export const $playerDOM = document.createElement('img');
export const $enemyDOM = document.createElement('img');
export const $ballDOM = document.createElement('img');