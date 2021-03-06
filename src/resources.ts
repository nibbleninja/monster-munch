import { Sound, Texture } from 'excalibur';
import bag from './images/bag.png';
import itemIcons from './images/item_icons.png';
import balloonIcons from './images/balloon_1.png';
import playerSprites from './images/player_sprites.png';
import panAttack from './images/pan_attack.png';
import panEmpty from './images/pan_empty.png';
import panFilled from './images/pan_filled.png';
import panCooking from './images/pan_cooking.png';
import panDone from './images/pan_done.png';
import panBurned from './images/pan_burned.png';
import insideTilesB from './images/tileB_inside4.png';
import insideFloorsWalls from './images/tileA5_inside.png';
import stove from './images/stove.png';
import trashcan from './images/trashcan.png';
import customer1 from './images/customer_1.png';
import cardFrame from './images/card_frame.png';
import restartButton from './images/restart_button.png';
import warningSquare from './images/warning_square.png';
import tutorialButton from './images/tutorial_button.png';
import door from './images/door.png';
import worldTiles from './images/tileB_world.png';

const levelLoop1 = require('./audio/level_loop1.wav');
const bonk1 = require('./audio/bonk1.wav');
const levelWin = require('./audio/level_win.wav');
const cookPop1 = require('./audio/cook_pop_1.wav');
const cookPop2 = require('./audio/cook_pop_2.wav');
const cookPop3 = require('./audio/cook_pop_3.wav');
const customerBite = require('./audio/customer_bite.wav');
const cashRegister = require('./audio/cash_register.wav');
const mealBurned = require('./audio/meal_burned.wav');
const mealDone = require('./audio/meal_done.wav');
const playerHurt = require('./audio/player_hurt.wav');
const swingPan = require('./audio/swing_pan.wav');
const trash = require('./audio/trash.wav');
const newCustomer = require('./audio/new_customer.wav');

/**
 * Default global resource dictionary. This gets loaded immediately
 * and holds available assets for the game.
 */

const Resources = {
    Bag: new Texture(bag),
    ItemIconSheet: new Texture(itemIcons),
    PlayerSprites: new Texture(playerSprites),
    LevelLoop1: new Sound(levelLoop1),
    BalloonIconSheet: new Texture(balloonIcons),
    PanAttack: new Texture(panAttack),
    PanEmpty: new Texture(panEmpty),
    PanFilled: new Texture(panFilled),
    PanCooking: new Texture(panCooking),
    PanDone: new Texture(panDone),
    PanBurned: new Texture(panBurned),
    InsideTilesB: new Texture(insideTilesB),
    InsideFloorsWalls: new Texture(insideFloorsWalls),
    Stove: new Texture(stove),
    Trashcan: new Texture(trashcan),
    Customer1: new Texture(customer1),
    CardFrame: new Texture(cardFrame),
    Bonk1: new Sound(bonk1),
    RestartButton: new Texture(restartButton),
    WarningSquare: new Texture(warningSquare),
    TutorialButton: new Texture (tutorialButton),
    Door: new Texture (door),
    LevelWin: new Sound(levelWin),
    WorldTiles: new Texture(worldTiles),
    CookPop1: new Sound(cookPop1),
    CookPop2: new Sound(cookPop2),
    CookPop3: new Sound(cookPop3),
    CustomerBite: new Sound(customerBite),
    CashRegister: new Sound(cashRegister),
    MealBurned: new Sound(mealBurned),
    MealDone: new Sound(mealDone),
    PlayerHurt: new Sound(playerHurt),
    SwingPan: new Sound(swingPan),
    Trash: new Sound(trash),
    NewCustomer: new Sound(newCustomer)
}

export { Resources }
