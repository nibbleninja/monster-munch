(()=>{"use strict";var e,t={235:(e,t,n)=>{var i,r,o=n(325),a=n(761),c=n(650),l=n(966),s=n(362),u=n(916),p=n(279),h=n(78),f=n(553),g=n(196),d=n(89),b=n(802),y=n(765),S=n(489),m=n(316),w=n(94),T=n(518),O={Bag:new o.Texture(a),ItemIconSheet:new o.Texture(c),PlayerSprites:new o.Texture(s),LevelLoop1:new o.Sound(T),BalloonIconSheet:new o.Texture(l),PanAttack:new o.Texture(u),PanEmpty:new o.Texture(p),PanFilled:new o.Texture(h),PanCooking:new o.Texture(f),PanDone:new o.Texture(g),PanBurned:new o.Texture(d),InsideTilesB:new o.Texture(b),InsideFloorsWalls:new o.Texture(y),Stove:new o.Texture(S),Trashcan:new o.Texture(m),Customer1:new o.Texture(w)},P=(i=function(e,t){return(i=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])})(e,t)},function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Class extends value "+String(t)+" is not a constructor or null");function n(){this.constructor=e}i(e,t),e.prototype=null===t?Object.create(t):(n.prototype=t.prototype,new n)}),v=function(e){function t(){return null!==e&&e.apply(this,arguments)||this}return P(t,e),t}(o.Actor);!function(e){e[e.Stove=0]="Stove",e[e.ServingPlate=1]="ServingPlate",e[e.Trashcan=2]="Trashcan"}(r||(r={}));var _=function(){function e(){}return Object.defineProperty(e,"BlueTilePattern",{get:function(){return this.sheet.getSprite(21)},enumerable:!1,configurable:!0}),e.sheet=new o.SpriteSheet({image:O.InsideFloorsWalls,rows:16,columns:8,spWidth:16,spHeight:16}),e}(),j=function(){function e(){}return Object.defineProperty(e,"CounterVerticalFull",{get:function(){return this.iconSheet.getSprite(16)},enumerable:!1,configurable:!0}),Object.defineProperty(e,"CounterCornerBottomLeft",{get:function(){return this.iconSheet.getSprite(17)},enumerable:!1,configurable:!0}),Object.defineProperty(e,"CounterBottomCentral",{get:function(){return this.iconSheet.getSprite(18)},enumerable:!1,configurable:!0}),Object.defineProperty(e,"CounterBottomCornerRight",{get:function(){return this.iconSheet.getSprite(19)},enumerable:!1,configurable:!0}),Object.defineProperty(e,"CounterFaceLeft",{get:function(){return this.iconSheet.getSprite(49)},enumerable:!1,configurable:!0}),Object.defineProperty(e,"CounterFaceCenter",{get:function(){return this.iconSheet.getSprite(50)},enumerable:!1,configurable:!0}),Object.defineProperty(e,"CounterFaceRight",{get:function(){return this.iconSheet.getSprite(51)},enumerable:!1,configurable:!0}),Object.defineProperty(e,"Table_V_TopSmall",{get:function(){return this.iconSheet.getSprite(88)},enumerable:!1,configurable:!0}),Object.defineProperty(e,"Table_H_TopLeft",{get:function(){return this.iconSheet.getSprite(89)},enumerable:!1,configurable:!0}),Object.defineProperty(e,"Table_H_TopMid",{get:function(){return this.iconSheet.getSprite(90)},enumerable:!1,configurable:!0}),Object.defineProperty(e,"Table_H_TopRight",{get:function(){return this.iconSheet.getSprite(91)},enumerable:!1,configurable:!0}),Object.defineProperty(e,"Table_V_TopLarge",{get:function(){return this.iconSheet.getSprite(104)},enumerable:!1,configurable:!0}),Object.defineProperty(e,"Table_H_BottomLeftLeg",{get:function(){return this.iconSheet.getSprite(105)},enumerable:!1,configurable:!0}),Object.defineProperty(e,"Table_H_BottomMidNoLeg",{get:function(){return this.iconSheet.getSprite(106)},enumerable:!1,configurable:!0}),Object.defineProperty(e,"Table_H_BottomRightLeg",{get:function(){return this.iconSheet.getSprite(107)},enumerable:!1,configurable:!0}),Object.defineProperty(e,"Table_V_Mid",{get:function(){return this.iconSheet.getSprite(120)},enumerable:!1,configurable:!0}),Object.defineProperty(e,"StoolTopRed",{get:function(){return this.iconSheet.getSprite(121)},enumerable:!1,configurable:!0}),Object.defineProperty(e,"Table_V_BottomLeg",{get:function(){return this.iconSheet.getSprite(136)},enumerable:!1,configurable:!0}),Object.defineProperty(e,"Table_H_MidLeg",{get:function(){return this.iconSheet.getSprite(136)},enumerable:!1,configurable:!0}),Object.defineProperty(e,"StoolBottomRed",{get:function(){return this.iconSheet.getSprite(137)},enumerable:!1,configurable:!0}),Object.defineProperty(e,"StoolTopGrey",{get:function(){return this.iconSheet.getSprite(153)},enumerable:!1,configurable:!0}),Object.defineProperty(e,"StoolBottomGrey",{get:function(){return this.iconSheet.getSprite(169)},enumerable:!1,configurable:!0}),Object.defineProperty(e,"RedStool",{get:function(){return this.iconSheet.getSprite(152)},enumerable:!1,configurable:!0}),Object.defineProperty(e,"GreyStool",{get:function(){return this.iconSheet.getSprite(168)},enumerable:!1,configurable:!0}),Object.defineProperty(e,"TrashCanTopLid",{get:function(){return this.iconSheet.getSprite(172)},enumerable:!1,configurable:!0}),Object.defineProperty(e,"TrashCanTopEmpty",{get:function(){return this.iconSheet.getSprite(173)},enumerable:!1,configurable:!0}),Object.defineProperty(e,"TrashCanTopTrash",{get:function(){return this.iconSheet.getSprite(174)},enumerable:!1,configurable:!0}),Object.defineProperty(e,"TrashCanTopBag",{get:function(){return this.iconSheet.getSprite(175)},enumerable:!1,configurable:!0}),Object.defineProperty(e,"TrashCanBottom",{get:function(){return this.iconSheet.getSprite(188)},enumerable:!1,configurable:!0}),Object.defineProperty(e,"Tray",{get:function(){return this.iconSheet.getSprite(110)},enumerable:!1,configurable:!0}),e.iconSheet=new o.SpriteSheet({image:O.InsideTilesB,rows:16,columns:16,spWidth:16,spHeight:16}),e}(),C=function(){function e(){}return Object.defineProperty(e,"Heart",{get:function(){return this.iconSheet.getSprite(1)},enumerable:!1,configurable:!0}),Object.defineProperty(e,"Skull",{get:function(){return this.iconSheet.getSprite(6)},enumerable:!1,configurable:!0}),Object.defineProperty(e,"FlourBag",{get:function(){return this.iconSheet.getSprite(9)},enumerable:!1,configurable:!0}),Object.defineProperty(e,"RedGem",{get:function(){return this.iconSheet.getSprite(25)},enumerable:!1,configurable:!0}),Object.defineProperty(e,"BlueGem",{get:function(){return this.iconSheet.getSprite(26)},enumerable:!1,configurable:!0}),Object.defineProperty(e,"YellowGem",{get:function(){return this.iconSheet.getSprite(27)},enumerable:!1,configurable:!0}),Object.defineProperty(e,"PurpleGem",{get:function(){return this.iconSheet.getSprite(28)},enumerable:!1,configurable:!0}),Object.defineProperty(e,"GreenGem",{get:function(){return this.iconSheet.getSprite(29)},enumerable:!1,configurable:!0}),Object.defineProperty(e,"WhiteGem",{get:function(){return this.iconSheet.getSprite(30)},enumerable:!1,configurable:!0}),Object.defineProperty(e,"BlackGem",{get:function(){return this.iconSheet.getSprite(31)},enumerable:!1,configurable:!0}),Object.defineProperty(e,"GreenLeaf",{get:function(){return this.iconSheet.getSprite(32)},enumerable:!1,configurable:!0}),Object.defineProperty(e,"RedLeaf",{get:function(){return this.iconSheet.getSprite(33)},enumerable:!1,configurable:!0}),Object.defineProperty(e,"RedPot",{get:function(){return this.iconSheet.getSprite(34)},enumerable:!1,configurable:!0}),Object.defineProperty(e,"BluePot",{get:function(){return this.iconSheet.getSprite(35)},enumerable:!1,configurable:!0}),Object.defineProperty(e,"YellowPot",{get:function(){return this.iconSheet.getSprite(36)},enumerable:!1,configurable:!0}),Object.defineProperty(e,"GreenPot",{get:function(){return this.iconSheet.getSprite(37)},enumerable:!1,configurable:!0}),Object.defineProperty(e,"Posion",{get:function(){return this.iconSheet.getSprite(39)},enumerable:!1,configurable:!0}),Object.defineProperty(e,"Apple",{get:function(){return this.iconSheet.getSprite(40)},enumerable:!1,configurable:!0}),Object.defineProperty(e,"Banana",{get:function(){return this.iconSheet.getSprite(42)},enumerable:!1,configurable:!0}),Object.defineProperty(e,"Bread",{get:function(){return this.iconSheet.getSprite(44)},enumerable:!1,configurable:!0}),Object.defineProperty(e,"Cheese",{get:function(){return this.iconSheet.getSprite(45)},enumerable:!1,configurable:!0}),Object.defineProperty(e,"Drumstick",{get:function(){return this.iconSheet.getSprite(46)},enumerable:!1,configurable:!0}),Object.defineProperty(e,"Cookie",{get:function(){return this.iconSheet.getSprite(47)},enumerable:!1,configurable:!0}),Object.defineProperty(e,"Burger",{get:function(){return this.iconSheet.getSprite(48)},enumerable:!1,configurable:!0}),Object.defineProperty(e,"Fries",{get:function(){return this.iconSheet.getSprite(49)},enumerable:!1,configurable:!0}),Object.defineProperty(e,"Hotdog",{get:function(){return this.iconSheet.getSprite(50)},enumerable:!1,configurable:!0}),Object.defineProperty(e,"PizzaPlain",{get:function(){return this.iconSheet.getSprite(52)},enumerable:!1,configurable:!0}),Object.defineProperty(e,"PizzaToppings",{get:function(){return this.iconSheet.getSprite(53)},enumerable:!1,configurable:!0}),Object.defineProperty(e,"Meat",{get:function(){return this.iconSheet.getSprite(54)},enumerable:!1,configurable:!0}),Object.defineProperty(e,"EggRaw",{get:function(){return this.iconSheet.getSprite(55)},enumerable:!1,configurable:!0}),Object.defineProperty(e,"EggCooked",{get:function(){return this.iconSheet.getSprite(56)},enumerable:!1,configurable:!0}),Object.defineProperty(e,"Taco",{get:function(){return this.iconSheet.getSprite(57)},enumerable:!1,configurable:!0}),Object.defineProperty(e,"Burrito",{get:function(){return this.iconSheet.getSprite(58)},enumerable:!1,configurable:!0}),Object.defineProperty(e,"Ketchup",{get:function(){return this.iconSheet.getSprite(61)},enumerable:!1,configurable:!0}),Object.defineProperty(e,"Mayo",{get:function(){return this.iconSheet.getSprite(62)},enumerable:!1,configurable:!0}),Object.defineProperty(e,"Relish",{get:function(){return this.iconSheet.getSprite(63)},enumerable:!1,configurable:!0}),Object.defineProperty(e,"PieYellow",{get:function(){return this.iconSheet.getSprite(71)},enumerable:!1,configurable:!0}),Object.defineProperty(e,"PieRed",{get:function(){return this.iconSheet.getSprite(72)},enumerable:!1,configurable:!0}),Object.defineProperty(e,"PiePurple",{get:function(){return this.iconSheet.getSprite(73)},enumerable:!1,configurable:!0}),Object.defineProperty(e,"Cake",{get:function(){return this.iconSheet.getSprite(74)},enumerable:!1,configurable:!0}),Object.defineProperty(e,"IceCreamCone",{get:function(){return this.iconSheet.getSprite(75)},enumerable:!1,configurable:!0}),Object.defineProperty(e,"FreezePopPink",{get:function(){return this.iconSheet.getSprite(76)},enumerable:!1,configurable:!0}),Object.defineProperty(e,"FreezePopBlue",{get:function(){return this.iconSheet.getSprite(77)},enumerable:!1,configurable:!0}),Object.defineProperty(e,"CandyRed",{get:function(){return this.iconSheet.getSprite(78)},enumerable:!1,configurable:!0}),Object.defineProperty(e,"CandyYellow",{get:function(){return this.iconSheet.getSprite(79)},enumerable:!1,configurable:!0}),Object.defineProperty(e,"Trash",{get:function(){return this.iconSheet.getSprite(109)},enumerable:!1,configurable:!0}),e.iconSheet=new o.SpriteSheet({image:O.ItemIconSheet,rows:11,columns:16,spWidth:12,spHeight:12}),e}(),k=function(){function e(){}return e.getScaledAnimation=function(e,t,n,i,r,a){void 0===r&&(r=1),void 0===a&&(a=100);var c=t.getAnimationBetween(e,n,i,a),l=N.tileHeight/c.width*r,s=N.tileHeight/c.height*r;return c.scale=(0,o.vec)(l,s),c},e.getScaledSprite=function(e,t){void 0===t&&(t=1);var n=N.tileHeight/e.width*t,i=N.tileHeight/e.height*t;return e.scale=(0,o.vec)(n,i),e},e}(),I=function(){var e=function(t,n){return(e=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])})(t,n)};return function(t,n){if("function"!=typeof n&&null!==n)throw new TypeError("Class extends value "+String(n)+" is not a constructor or null");function i(){this.constructor=t}e(t,n),t.prototype=null===n?Object.create(n):(i.prototype=n.prototype,new i)}}(),x=function(e){function t(){var t=null!==e&&e.apply(this,arguments)||this;return t.spriteScale=.9,t.baseSpeed=200,t}return I(t,e),t.prototype.onInitialize=function(e){var t=new o.SpriteSheet({image:this.sprites,rows:4,columns:3,spWidth:this.sprites.width/3,spHeight:this.sprites.height/4});this.setZIndex(1e3),this.addDrawing("standDown",k.getScaledSprite(t.getSprite(1),this.spriteScale)),this.addDrawing("standLeft",k.getScaledSprite(t.getSprite(4),this.spriteScale)),this.addDrawing("standRight",k.getScaledSprite(t.getSprite(7),this.spriteScale)),this.addDrawing("standUp",k.getScaledSprite(t.getSprite(10),this.spriteScale)),this.addDrawing("walkDown",k.getScaledAnimation(e,t,0,3,this.spriteScale)),this.addDrawing("walkLeft",k.getScaledAnimation(e,t,3,6,this.spriteScale)),this.addDrawing("walkRight",k.getScaledAnimation(e,t,6,9,this.spriteScale)),this.addDrawing("walkUp",k.getScaledAnimation(e,t,9,11,this.spriteScale))},t.prototype.onPreUpdate=function(e,t){if(this.doFacing(),0===this.vel.x&&0===this.vel.y)switch(this.facing){case"l":this.setDrawing("standLeft");break;case"r":this.setDrawing("standRight");break;case"u":this.setDrawing("standUp");break;case"d":this.setDrawing("standDown")}else switch(this.facing){case"l":this.setDrawing("walkLeft");break;case"r":this.setDrawing("walkRight");break;case"u":this.setDrawing("walkUp");break;case"d":this.setDrawing("walkDown")}},t.prototype.doFacing=function(){this.vel.y>0?this.facing="d":this.vel.x<0?this.facing="l":this.vel.x>0?this.facing="r":this.vel.y<0&&(this.facing="u")},t}(o.Actor),B=function(){var e=function(t,n){return(e=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])})(t,n)};return function(t,n){if("function"!=typeof n&&null!==n)throw new TypeError("Class extends value "+String(n)+" is not a constructor or null");function i(){this.constructor=t}e(t,n),t.prototype=null===n?Object.create(n):(i.prototype=n.prototype,new i)}}(),W=function(e){function t(){var t=null!==e&&e.apply(this,arguments)||this;return t.speed=200,t}return B(t,e),t.prototype.onInitialize=function(t){this.sprites=O.Customer1,e.prototype.onInitialize.call(this,t)},t.prototype.walkToTile=function(e){return this.actions.moveTo(e.x,e.y,this.speed)},t}(x),A=function(){var e=function(t,n){return(e=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])})(t,n)};return function(t,n){if("function"!=typeof n&&null!==n)throw new TypeError("Class extends value "+String(n)+" is not a constructor or null");function i(){this.constructor=t}e(t,n),t.prototype=null===n?Object.create(n):(i.prototype=n.prototype,new i)}}(),H=function(e){function t(){var t=null!==e&&e.apply(this,arguments)||this;return t.isHeld=!1,t.canBeTrashed=!1,t}return A(t,e),t}(o.Actor),D=function(){var e=function(t,n){return(e=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])})(t,n)};return function(t,n){if("function"!=typeof n&&null!==n)throw new TypeError("Class extends value "+String(n)+" is not a constructor or null");function i(){this.constructor=t}e(t,n),t.prototype=null===n?Object.create(n):(i.prototype=n.prototype,new i)}}(),F=function(e){function t(){return null!==e&&e.apply(this,arguments)||this}return D(t,e),t.prototype.onInitialize=function(t){this.canBeTrashed=!0,e.prototype.onInitialize.call(this,t)},t}(H),M=function(){var e=function(t,n){return(e=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])})(t,n)};return function(t,n){if("function"!=typeof n&&null!==n)throw new TypeError("Class extends value "+String(n)+" is not a constructor or null");function i(){this.constructor=t}e(t,n),t.prototype=null===n?Object.create(n):(i.prototype=n.prototype,new i)}}(),E=function(e){function t(){return null!==e&&e.apply(this,arguments)||this}return M(t,e),t.prototype.setupSpawner=function(e,t){var n=this;this._ingredientName=e,this._ingredientSprite=t,this.spawnIngredient(),this.body.collider.on("collisionend",(function(e){var t=e.other.body.actor;t instanceof F&&t.name===n._ingredientName&&(n.newItemTimer||(n.newItemTimer=new L({interval:5e3,repeats:!1,fcn:n.spawnIngredient}),n.newItemTimer.spawner=n,n.scene.add(n.newItemTimer)),n.newItemTimer.reset())}))},t.prototype.spawnIngredient=function(){this instanceof L?N.createIngredientAtPosition(this.spawner.scene,this.spawner._ingredientSprite.clone(),this.spawner._ingredientName,this.spawner.pos.x,this.spawner.pos.y):N.createIngredientAtPosition(this.scene,this._ingredientSprite.clone(),this._ingredientName,this.pos.x,this.pos.y)},t}(o.Actor),L=function(e){function t(){return null!==e&&e.apply(this,arguments)||this}return M(t,e),t}(o.Timer),R=function(){var e=function(t,n){return(e=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])})(t,n)};return function(t,n){if("function"!=typeof n&&null!==n)throw new TypeError("Class extends value "+String(n)+" is not a constructor or null");function i(){this.constructor=t}e(t,n),t.prototype=null===n?Object.create(n):(i.prototype=n.prototype,new i)}}(),z=function(e){function t(){return null!==e&&e.apply(this,arguments)||this}return R(t,e),t.prototype.onInitialize=function(t){this.canBeTrashed=!0,e.prototype.onInitialize.call(this,t)},t}(H),V={MonsterPie:new(function(){function e(e,t,n){this.ingredients=e,this.resultSprite=n,this.resultName=t}return e.prototype.ingredientsEqual=function(e){if(!Array.isArray(this.ingredients)||!Array.isArray(e)||this.ingredients.length!==e.length)return!1;for(var t=this.ingredients.concat().sort(),n=e.concat().sort(),i=0;i<t.length;i++)if(t[i]!==n[i])return!1;return!0},e}())(["poison","flour","apple"],"monsterPie",C.PieRed)},G=function(){var e=function(t,n){return(e=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])})(t,n)};return function(t,n){if("function"!=typeof n&&null!==n)throw new TypeError("Class extends value "+String(n)+" is not a constructor or null");function i(){this.constructor=t}e(t,n),t.prototype=null===n?Object.create(n):(i.prototype=n.prototype,new i)}}(),U=function(e){function t(){var t=null!==e&&e.apply(this,arguments)||this;return t.cookTimeMultiplier=1e3,t.ingredients=[],t.isAttacking=!1,t.cookTime=0,t.isDone=!1,t.isBurned=!1,t}return G(t,e),t.prototype.onInitialize=function(t){var n=this;e.prototype.onInitialize.call(this,t),this.body.collider.type=o.CollisionType.Passive,this.body.collider.shape=o.Shape.Box(N.tileHeight,N.tileHeight),this.body.collider.on("precollision",(function(e){var t=e.other.body.actor;if(0===n.cookTime&&t instanceof F&&(t.isHeld||n.isHeld||(n.ingredients.push(t.name),t.kill())),t instanceof v&&t.applianceType===r.Stove&&n.ingredients.length>0&&!1===n.isHeld&&(n.cookTime++,!n.isDone&&n.cookTime>n.ingredients.length*n.cookTimeMultiplier&&(n.isDone=!0),n.isDone&&!n.isBurned&&n.cookTime>n.ingredients.length*n.cookTimeMultiplier*3&&(n.isBurned=!0)),n.isAttacking&&n.ingredients.length>0&&t instanceof v&&t.applianceType===r.ServingPlate&&n.isDone){var i=void 0;for(var o in V)V[o].ingredientsEqual(n.ingredients)&&(i=V[o]);i&&!n.isBurned?N.createMeal(n.scene,i.resultSprite,i.resultName,t.pos):N.createMeal(n.scene,C.Trash,"inedible mush",t.pos),n.reset()}t instanceof W&&(t.kill(),n.reset())}))},t.prototype.reset=function(){this.ingredients=[],this.isBurned=!1,this.isDone=!1,this.cookTime=0},t.prototype.onPreUpdate=function(e,t){this.isAttacking?this.attackAnimation.isDone()&&(this.isAttacking=!1):this.isBurned?this.setDrawing("burned"):this.isDone?this.setDrawing("done"):this.cookTime>0?this.setDrawing("cooking"):this.ingredients.length>0?this.setDrawing("filled"):this.setDrawing("empty")},t.prototype.attack=function(e,t){switch(this.isAttacking=!0,this.pos=e,this.setDrawing("attack"),t){case"r":this.attackAnimation.flipHorizontal=!0;break;default:this.attackAnimation.flipHorizontal=!1}},t}(H),N=function(){function e(){}return e.createWallTile=function(e,t,n,i){this.createTile(e,t,n,i,!0,1)},e.createBackgroundTile=function(e,t,n,i){this.createTile(e,t,n,i,!1,-1)},e.createTile=function(e,t,n,i,r,a){var c=new o.Actor({scene:e,width:this.tileWidth,height:this.tileHeight,pos:(0,o.vec)(n*this.tileWidth,i*this.tileHeight)});if(t instanceof o.Color)c.color=t;else{var l=this.tileWidth/t.width,s=this.tileHeight/t.height;t.scale=(0,o.vec)(l,s),c.addDrawing(t)}e.add(c),c.setZIndex(a),r&&(c.body.collider.type=o.CollisionType.Fixed)},e.createIngrediantSpawnerOnTile=function(e,t,n,i,r,a){var c=new E({scene:e,width:this.tileWidth,height:this.tileHeight,pos:(0,o.vec)(t*this.tileWidth,n*this.tileHeight)});if(a){var l=this.tileWidth/a.width,s=this.tileHeight/a.height;a.scale=(0,o.vec)(l,s),c.addDrawing(a)}return c.setupSpawner(i,r),e.add(c),c},e.createIngredientAtPosition=function(e,t,n,i,r){var a=.75,c=new F({scene:e,width:this.tileWidth,height:this.tileHeight,pos:(0,o.vec)(i,r)});return e.add(c),c.setZIndex(40),k.getScaledSprite(t,a),c.addDrawing(t),c.name=n,c.body.collider.shape=o.Shape.Box(c.width*a,c.height*a),c.body.collider.type=o.CollisionType.Fixed,c},e.createIngredientOnTile=function(e,t,n,i,r){var o=i*this.tileWidth,a=r*this.tileHeight;return this.createIngredientAtPosition(e,t,n,o,a)},e.createMeal=function(e,t,n,i){var r=.75,a=new z({scene:e,width:this.tileWidth,height:this.tileHeight,pos:i});return e.add(a),a.setZIndex(40),k.getScaledSprite(t,r),a.addDrawing(t),a.name=n,a.body.collider.shape=o.Shape.Box(a.width*r,a.height*r),a.body.collider.type=o.CollisionType.Fixed,a},e.createApplianceOnTile=function(e,t,n,i){var a,c=.75,l=new v({scene:e,width:this.tileWidth,height:this.tileHeight,pos:(0,o.vec)(n*this.tileWidth,i*this.tileHeight)});switch(t){case r.Stove:a=O.Stove.asSprite();break;case r.ServingPlate:a=j.Tray;break;case r.Trashcan:a=O.Trashcan.asSprite(),l.body.collider.shape=o.Shape.Box(l.width*c,l.height*c),l.body.collider.type=o.CollisionType.Fixed;break;default:throw new Error("unsupported appliance type: "+t)}return e.add(l),l.setZIndex(40),k.getScaledSprite(a,c),l.addDrawing(a),l.applianceType=t,l},e.createPanOnTile=function(e,t,n,i){var r=.75,a=new U({scene:e,width:this.tileWidth,height:this.tileHeight,pos:(0,o.vec)(n*this.tileWidth,i*this.tileHeight)});e.add(a),a.setZIndex(35);var c=new o.SpriteSheet({image:O.PanAttack,rows:1,columns:3,spWidth:18,spHeight:18}),l=k.getScaledAnimation(t,c,0,3,r,150);l.loop=!1,a.attackAnimation=l;var s=k.getScaledSprite(O.PanEmpty.asSprite(),r),u=k.getScaledSprite(O.PanFilled.asSprite(),r),p=k.getScaledSprite(O.PanDone.asSprite(),r),h=k.getScaledSprite(O.PanBurned.asSprite(),r),f=new o.SpriteSheet({image:O.PanCooking,rows:1,columns:3,spWidth:18,spHeight:9}),g=k.getScaledAnimation(t,f,0,3,r,50);return a.addDrawing("empty",s),a.addDrawing("filled",u),a.addDrawing("attack",l),a.addDrawing("cooking",g),a.addDrawing("burned",h),a.addDrawing("done",p),a},e.createCustomer=function(e,t){var n=new W({scene:e,width:this.tileWidth,height:this.tileHeight,pos:t});return e.add(n),n.setZIndex(40),n},e.tileWidth=50,e.tileHeight=50,e}(),K=function(){function e(){}return Object.defineProperty(e,"MusicBalloon",{get:function(){return this.balloonSheet.getSprite(18)},enumerable:!1,configurable:!0}),Object.defineProperty(e,"MusicBalloonOff",{get:function(){return this.balloonSheet.getSprite(17)},enumerable:!1,configurable:!0}),e.balloonSheet=new o.SpriteSheet({image:O.BalloonIconSheet,rows:11,columns:8,spWidth:16,spHeight:16}),e}(),Z=function(){function e(){}return e.createUIIcon=function(e,t,n){var i=new o.ScreenElement({width:this.iconWidth,height:this.iconHeight,pos:(0,o.vec)(t,n)});return i.addDrawing(this.scaleSprite(e)),i},e.scaleSprite=function(e){var t;return(t=typeof e==typeof o.Texture?e.asSprite():e).scale=(0,o.vec)(3,3),t},e.createUIToggleButton=function(e,t,n,i){var r=new o.ScreenElement({width:this.iconWidth,height:this.iconHeight,pos:(0,o.vec)(n,i)});return r.addDrawing("on",this.scaleSprite(e)),r.addDrawing("off",this.scaleSprite(t)),r},e.addLevelUI=function(e){var t=this.createUIToggleButton(K.MusicBalloon,K.MusicBalloonOff,800,50);t.on("pointerup",(function(n){e.toggleMusic(),e.muteMusic?t.setDrawing("off"):t.setDrawing("on")})),e.add(t);var n=this.createUIIcon(C.Heart,900,50),i=this.createUIIcon(C.Heart,930,50),r=this.createUIIcon(C.Heart,960,50);e.add(n),e.add(i),e.add(r)},e.iconWidth=50,e.iconHeight=50,e}(),Y=function(){var e=function(t,n){return(e=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])})(t,n)};return function(t,n){if("function"!=typeof n&&null!==n)throw new TypeError("Class extends value "+String(n)+" is not a constructor or null");function i(){this.constructor=t}e(t,n),t.prototype=null===n?Object.create(n):(i.prototype=n.prototype,new i)}}(),q=function(e){function t(){var t=e.call(this,{pos:(0,o.vec)(150,150),width:25,height:25,color:new o.Color(100,255,100)})||this;return t.spriteScale=.9,t.hitboxScale=.8,t}return Y(t,e),t.prototype.onInitialize=function(t){this.sprites=O.PlayerSprites,this.body.collider.type=o.CollisionType.Active,this.body.collider.shape=o.Shape.Box(N.tileHeight*this.hitboxScale,N.tileHeight*this.hitboxScale),e.prototype.onInitialize.call(this,t)},t.prototype.onPreUpdate=function(t,n){e.prototype.onPreUpdate.call(this,t,n);var i=!1;if(this.heldItem instanceof U&&(i=this.heldItem.isAttacking),i?this.vel=(0,o.vec)(0,0):this.doMovement(t),i||(this.heldItem&&(this.heldItem.pos=(0,o.vec)(this.pos.x,this.pos.y-40)),t.input.keyboard.wasPressed(o.Input.Keys.Space)&&(this.heldItem?this.trySetDownItem():this.tryPickupItem()),t.input.keyboard.wasPressed(o.Input.Keys.E)&&this.heldItem instanceof U&&this.heldItem.attack(this.getFacingTargetPos(.7),this.facing),t.input.keyboard.wasPressed(o.Input.Keys.Q)&&this.examine()),t.input.keyboard.wasPressed(o.Input.Keys.Semicolon)){var r=prompt("goto level","level_test");r&&t.goToScene(r)}},t.prototype.doMovement=function(e){var t=0,n=0;e.input.keyboard.isHeld(o.Input.Keys.W)&&(n-=1),e.input.keyboard.isHeld(o.Input.Keys.S)&&(n+=1),e.input.keyboard.isHeld(o.Input.Keys.A)&&(t-=1),e.input.keyboard.isHeld(o.Input.Keys.D)&&(t+=1);var i=Math.sqrt(Math.abs(t)+Math.abs(n)),r=n/i*this.baseSpeed,a=t/i*this.baseSpeed;this.vel=i>0?(0,o.vec)(a,r):(0,o.vec)(0,0)},t.prototype.getFacingTargetPos=function(e){var t=0,n=0;switch(this.facing){case"l":t-=N.tileWidth*e;break;case"r":t+=N.tileWidth*e;break;case"u":n-=N.tileHeight*e;break;case"d":n+=N.tileHeight*e}return(0,o.vec)(this.pos.x+t,this.pos.y+n)},t.prototype.trySetDownItem=function(){var e=this,t=this.getFacingTargetPos(1);if(this.scene.actors.filter((function(e){return e instanceof v&&e.applianceType===r.Trashcan&&e.contains(t.x,t.y)})).length>0&&this.heldItem.canBeTrashed)return this.heldItem.kill(),void(this.heldItem=null);0===this.scene.actors.filter((function(n){return n instanceof H&&!(n instanceof U)&&!(n===e.heldItem)&&n.contains(t.x,t.y)})).length&&(this.heldItem.pos=t,this.heldItem.isHeld=!1,this.heldItem=null)},t.prototype.tryPickupItem=function(){var e=this.getFacingTargetPos(.55),t=this.scene.actors.filter((function(t){return t instanceof H&&t.contains(e.x,e.y)}));t.length>0&&(this.heldItem=t[0],this.heldItem.isHeld=!0)},t.prototype.examine=function(){var e=this.getFacingTargetPos(.55),t=this.scene.actors.filter((function(t){return(t instanceof H||t instanceof v)&&t.contains(e.x,e.y)}))[0];t&&(t instanceof U&&alert("Pan with contents: "+JSON.stringify(t.ingredients)),t instanceof F&&alert("Ingredient: "+t.name),t instanceof v&&alert("Appliance: "+t.applianceType),t instanceof z&&alert("Meal: "+t.name))},t}(x),$=function(){var e=function(t,n){return(e=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])})(t,n)};return function(t,n){if("function"!=typeof n&&null!==n)throw new TypeError("Class extends value "+String(n)+" is not a constructor or null");function i(){this.constructor=t}e(t,n),t.prototype=null===n?Object.create(n):(i.prototype=n.prototype,new i)}}(),Q=function(e){function t(t){var n=e.call(this,t)||this;return n.grid=[],n.muteMusic=!1,n}return $(t,e),t.prototype.onInitialize=function(e){Z.addLevelUI(this),this.player=new q,this.add(this.player),this.camera.strategy.lockToActor(this.player),this.musicTrack=O.LevelLoop1,this.musicTrack.loop=!0,this.musicTrack.play(),this.addBackgroundTiles(),this.addForegroundTiles(),this.addAppliances(),this.addPans(e),this.addItems()},t.prototype.toggleMusic=function(){this.muteMusic=!this.muteMusic,this.muteMusic?this.musicTrack.stop():this.musicTrack.play()},t}(o.Scene),J=function(){var e=function(t,n){return(e=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])})(t,n)};return function(t,n){if("function"!=typeof n&&null!==n)throw new TypeError("Class extends value "+String(n)+" is not a constructor or null");function i(){this.constructor=t}e(t,n),t.prototype=null===n?Object.create(n):(i.prototype=n.prototype,new i)}}(),X=function(e){function t(){return null!==e&&e.apply(this,arguments)||this}return J(t,e),t.prototype.onInitialize=function(t){this.baseTile=_.BlueTilePattern,e.prototype.onInitialize.call(this,t),alert("Controls:\nWASD - Movement\nSpace - Pick up/put down\nE - Swing pan\nQ - Examine")},t.prototype.addBackgroundTiles=function(){N.createBackgroundTile(this,j.CounterFaceLeft,5,9),N.createBackgroundTile(this,j.CounterFaceCenter,6,9),N.createBackgroundTile(this,j.CounterFaceCenter,7,9),N.createBackgroundTile(this,j.CounterFaceCenter,8,9),N.createBackgroundTile(this,j.CounterFaceRight,9,9)},t.prototype.addForegroundTiles=function(){var e=new o.Color(200,200,200);N.createWallTile(this,e,1,1),N.createWallTile(this,e,1,3),N.createWallTile(this,e,2,2),N.createWallTile(this,e,2,4),N.createWallTile(this,j.CounterVerticalFull,5,5),N.createWallTile(this,j.CounterVerticalFull,5,6),N.createWallTile(this,j.CounterVerticalFull,5,7),N.createWallTile(this,j.CounterCornerBottomLeft,5,8),N.createWallTile(this,j.CounterVerticalFull,9,5),N.createWallTile(this,j.CounterVerticalFull,9,6),N.createWallTile(this,j.CounterVerticalFull,9,7),N.createWallTile(this,j.CounterBottomCornerRight,9,8),N.createWallTile(this,j.CounterBottomCentral,6,8),N.createWallTile(this,j.CounterBottomCentral,7,8),N.createWallTile(this,j.CounterBottomCentral,8,8)},t.prototype.addAppliances=function(){N.createApplianceOnTile(this,r.Stove,9,7),N.createApplianceOnTile(this,r.ServingPlate,9,5),N.createApplianceOnTile(this,r.Trashcan,7,4)},t.prototype.addPans=function(e){N.createPanOnTile(this,e,7,8),N.createPanOnTile(this,e,2,4)},t.prototype.addItems=function(){N.createIngrediantSpawnerOnTile(this,8,8,"apple",C.Apple),N.createIngrediantSpawnerOnTile(this,5,5,"flour",C.FlourBag),N.createIngrediantSpawnerOnTile(this,5,6,"mayo",C.Mayo),N.createIngrediantSpawnerOnTile(this,5,7,"poison",C.Posion),N.createIngrediantSpawnerOnTile(this,9,6,"skull",C.Skull);var e=N.createCustomer(this,(0,o.vec)(500,500));e.actions.moveTo(500,450,200).moveTo(400,450,200).moveTo(400,500,200).moveTo(500,500,200).repeatForever(),e.wantsMeal="monsterPie"},t}(Q),ee=function(){var e=function(t,n){return(e=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])})(t,n)};return function(t,n){if("function"!=typeof n&&null!==n)throw new TypeError("Class extends value "+String(n)+" is not a constructor or null");function i(){this.constructor=t}e(t,n),t.prototype=null===n?Object.create(n):(i.prototype=n.prototype,new i)}}(),te=function(e){function t(){return null!==e&&e.apply(this,arguments)||this}return ee(t,e),t.prototype.addBackgroundTiles=function(){N.createBackgroundTile(this,j.CounterFaceLeft,5,9),N.createBackgroundTile(this,j.CounterFaceCenter,6,9),N.createBackgroundTile(this,j.CounterFaceCenter,7,9),N.createBackgroundTile(this,j.CounterFaceCenter,8,9),N.createBackgroundTile(this,j.CounterFaceRight,9,9)},t.prototype.addForegroundTiles=function(){var e=new o.Color(200,200,200);N.createWallTile(this,e,1,1),N.createWallTile(this,e,1,3),N.createWallTile(this,e,2,2),N.createWallTile(this,e,2,4),N.createWallTile(this,j.StoolTopRed,1,7),N.createWallTile(this,j.StoolTopGrey,2,7),N.createWallTile(this,j.StoolTopRed,3,7),N.createWallTile(this,j.Table_H_TopLeft,1,8),N.createWallTile(this,j.Table_H_TopMid,2,8),N.createWallTile(this,j.Table_H_TopRight,3,8),N.createWallTile(this,j.Table_H_BottomLeftLeg,1,9),N.createWallTile(this,j.Table_H_BottomMidNoLeg,2,9),N.createWallTile(this,j.Table_H_BottomRightLeg,3,9),N.createWallTile(this,j.GreyStool,1,10),N.createWallTile(this,j.RedStool,2,10),N.createWallTile(this,j.GreyStool,3,10),N.createWallTile(this,j.TrashCanTopEmpty,4,4),N.createWallTile(this,j.TrashCanBottom,4,5),N.createWallTile(this,j.CounterVerticalFull,5,5),N.createWallTile(this,j.CounterVerticalFull,5,6),N.createWallTile(this,j.CounterVerticalFull,5,7),N.createWallTile(this,j.CounterCornerBottomLeft,5,8),N.createWallTile(this,j.TrashCanTopLid,10,4),N.createWallTile(this,j.TrashCanBottom,10,5),N.createWallTile(this,j.CounterVerticalFull,9,5),N.createWallTile(this,j.CounterVerticalFull,9,6),N.createWallTile(this,j.CounterVerticalFull,9,7),N.createWallTile(this,j.CounterBottomCornerRight,9,8),N.createWallTile(this,j.CounterBottomCentral,6,8),N.createWallTile(this,j.CounterBottomCentral,7,8),N.createWallTile(this,j.CounterBottomCentral,8,8)},t.prototype.addAppliances=function(){N.createApplianceOnTile(this,r.Stove,9,7),N.createApplianceOnTile(this,r.ServingPlate,9,5)},t.prototype.addPans=function(e){N.createPanOnTile(this,e,7,8),N.createPanOnTile(this,e,2,4)},t.prototype.addItems=function(){N.createIngrediantSpawnerOnTile(this,8,8,"apple",C.Apple),N.createIngrediantSpawnerOnTile(this,5,5,"flour",C.FlourBag),N.createIngrediantSpawnerOnTile(this,5,6,"mayo",C.Mayo),N.createIngrediantSpawnerOnTile(this,5,7,"poison",C.Posion),N.createIngrediantSpawnerOnTile(this,9,6,"skull",C.Skull)},t}(Q),ne=function(){var e=function(t,n){return(e=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])})(t,n)};return function(t,n){if("function"!=typeof n&&null!==n)throw new TypeError("Class extends value "+String(n)+" is not a constructor or null");function i(){this.constructor=t}e(t,n),t.prototype=null===n?Object.create(n):(i.prototype=n.prototype,new i)}}(),ie=function(e){function t(){return null!==e&&e.apply(this,arguments)||this}return ne(t,e),t.prototype.addBackgroundTiles=function(){throw new Error("Method not implemented.")},t.prototype.addForegroundTiles=function(){throw new Error("Method not implemented.")},t.prototype.addAppliances=function(){throw new Error("Method not implemented.")},t.prototype.addPans=function(e){throw new Error("Method not implemented.")},t.prototype.addItems=function(){throw new Error("Method not implemented.")},t.prototype.onInitialize=function(t){e.prototype.onInitialize.call(this,t)},t}(Q),re=function(){var e=function(t,n){return(e=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])})(t,n)};return function(t,n){if("function"!=typeof n&&null!==n)throw new TypeError("Class extends value "+String(n)+" is not a constructor or null");function i(){this.constructor=t}e(t,n),t.prototype=null===n?Object.create(n):(i.prototype=n.prototype,new i)}}(),oe=new(function(e){function t(){return e.call(this,{displayMode:o.DisplayMode.FullScreen})||this}return re(t,e),t.prototype.start=function(){oe.add("level_test",new X(this)),oe.add("level_1",new ie(this)),oe.add("levelTestRay",new te(this));var t=new o.Loader(Object.values(O));return t.suppressPlayButton=!1,e.prototype.start.call(this,t)},t}(o.Engine));oe.backgroundColor=new o.Color(245,242,254),oe.start().then((function(){oe.goToScene("level_test")})),document.oncontextmenu=function(){return!1}},518:(e,t,n)=>{e.exports=n.p+"64ba563e6ad61b443cac.wav"},761:(e,t,n)=>{e.exports=n.p+"fdf6337d6ffc17459338.png"},966:(e,t,n)=>{e.exports=n.p+"ef4623bfdde5763e26d2.png"},94:(e,t,n)=>{e.exports=n.p+"fd89020968ce56f21943.png"},650:(e,t,n)=>{e.exports=n.p+"c54710804fb52b22f45e.png"},916:(e,t,n)=>{e.exports=n.p+"4687a6dbfe1b412c2f04.png"},89:(e,t,n)=>{e.exports=n.p+"f6256e8807347b25cd36.png"},553:(e,t,n)=>{e.exports=n.p+"e5044f0fcc13982144ad.png"},196:(e,t,n)=>{e.exports=n.p+"361e85d4f64d950d5c0c.png"},279:(e,t,n)=>{e.exports=n.p+"e7c2fc6cc69f2631f43c.png"},78:(e,t,n)=>{e.exports=n.p+"0bf3b904bc699388453f.png"},362:(e,t,n)=>{e.exports=n.p+"5ab5c8076e8f2e660fd8.png"},489:(e,t,n)=>{e.exports=n.p+"5b00616f4b77e29b073c.png"},765:(e,t,n)=>{e.exports=n.p+"4518ef3856b6ee183ca5.png"},802:(e,t,n)=>{e.exports=n.p+"b23e0406280c9f7416d8.png"},316:(e,t,n)=>{e.exports=n.p+"0f6ff4229d8174a5112c.png"}},n={};function i(e){var r=n[e];if(void 0!==r)return r.exports;var o=n[e]={exports:{}};return t[e](o,o.exports,i),o.exports}i.m=t,e=[],i.O=(t,n,r,o)=>{if(!n){var a=1/0;for(u=0;u<e.length;u++){for(var[n,r,o]=e[u],c=!0,l=0;l<n.length;l++)(!1&o||a>=o)&&Object.keys(i.O).every((e=>i.O[e](n[l])))?n.splice(l--,1):(c=!1,o<a&&(a=o));if(c){e.splice(u--,1);var s=r();void 0!==s&&(t=s)}}return t}o=o||0;for(var u=e.length;u>0&&e[u-1][2]>o;u--)e[u]=e[u-1];e[u]=[n,r,o]},i.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),i.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),(()=>{var e;i.g.importScripts&&(e=i.g.location+"");var t=i.g.document;if(!e&&t&&(t.currentScript&&(e=t.currentScript.src),!e)){var n=t.getElementsByTagName("script");n.length&&(e=n[n.length-1].src)}if(!e)throw new Error("Automatic publicPath is not supported in this browser");e=e.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),i.p=e})(),(()=>{var e={179:0};i.O.j=t=>0===e[t];var t=(t,n)=>{var r,o,[a,c,l]=n,s=0;for(r in c)i.o(c,r)&&(i.m[r]=c[r]);if(l)var u=l(i);for(t&&t(n);s<a.length;s++)o=a[s],i.o(e,o)&&e[o]&&e[o][0](),e[a[s]]=0;return i.O(u)},n=self.webpackChunkexcalibur_webpack=self.webpackChunkexcalibur_webpack||[];n.forEach(t.bind(null,0)),n.push=t.bind(null,n.push.bind(n))})();var r=i.O(void 0,[325],(()=>i(235)));r=i.O(r)})();
//# sourceMappingURL=main.js.map