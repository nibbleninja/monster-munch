import { Collider, CollisionStartEvent, CollisionType, Engine, Shape, Vector, Animation, isCollider, resetObsoleteCounter, Sound, Sprite, vec } from "excalibur";
import { Resources } from "../../resources";
import { LevelBase } from "../../scenes/levels/levelBase";
import { LevelBuildingHelper } from "../../util/helpers/levelBuildingHelper";
import { ItemIconSprites } from "../../util/spritesheet_wrappers/itemIconSprites";
import { Customer } from "../characters/customer";
import { Appliance, ApplianceType } from "./appliance";
import { Item } from "./item";
import { Recipe, Recipes } from "../../util/config/recipes";
import { AnimationHelper } from "excalibur-bootstraps";

export class Pan extends Item {
    private cookTimeMultiplier: number = 3000; // ms per ingredient
    private isOnStove: boolean = false;

    public ingredients: string[] = [];
    public attackAnimation: Animation;
    public isAttacking: boolean = false;

    public cookTime: number = 0;
    public isDone: boolean = false;
    public isBurned: boolean = false;

    private cookingSounds:Sound[] = [Resources.CookPop1, Resources.CookPop2, Resources.CookPop3];
    private soundDelay:number = 0;
    private burnTimeMultiplier: number = 3;

    public onPreDraw (ctx: CanvasRenderingContext2D, _delta: number) {
        if (this.cookTime === 0) {
            for (let i = 0; i < this.ingredients.length; i++) {
                let ispr = ItemIconSprites[this.ingredients[i]] as Sprite;
                ispr.scale = vec(1.5, 1.5);
                ispr.draw(ctx,i * 16, -9)
            }
        } else if (!this.isDone && this.isOnStove) {
            // Draw progress bar
            AnimationHelper.drawLine(ctx, vec(0,-6), vec(this.width, -6), 6, '#666666');

            let pDone = this.cookTime / (this.ingredients.length * this.cookTimeMultiplier);
            let start = vec(0, -6);
            let end = vec(pDone * this.width, -6);
            AnimationHelper.drawLine(ctx, start, end, 6, '#00ff00')
        } else if (!this.isBurned && this.isOnStove) {
            // Draw progress bar
            AnimationHelper.drawLine(ctx, vec(0,-6), vec(this.width, -6), 6, '#00ff00');

            let doneBase = this.ingredients.length * this.cookTimeMultiplier
            let pBurn = (this.cookTime - doneBase) / ((this.ingredients.length * this.cookTimeMultiplier * this.burnTimeMultiplier) - doneBase);

            let start = vec(0, -6);
            let end = vec(pBurn * this.width, -6);
            AnimationHelper.drawLine(ctx, start, end, 6, '#ff0000')
        }
    }

    public onInitialize(engine: Engine) {
        super.onInitialize(engine);

        this.body.collider.type = CollisionType.Passive;
        this.body.collider.shape = Shape.Box(LevelBuildingHelper.tileHeight, LevelBuildingHelper.tileHeight);

        // TODO refactor this to use onPreUpdate or something with a delta
        // Currently it takes longer to cook stuff on slower machines
        this.body.collider.on("precollision", (e: CollisionStartEvent<Collider>) => {
            let otherActor = e.other.body.actor;

            if (this.isAttacking) {
                /////////////////////////////////
                ////////// Plate Meal ///////////
                /////////////////////////////////
                if ( this.ingredients.length > 0 && 
                        otherActor instanceof Appliance && 
                        otherActor.applianceType === ApplianceType.ServingPlate &&
                        this.isDone &&
                        !otherActor.isOccupied ) {
                    let product:Recipe;

                    for (let r in Recipes) {
                        if (Recipes[r].ingredientsEqual(this.ingredients)) {
                            product = Recipes[r];
                        }
                    }

                    if (product && !this.isBurned) {
                        LevelBuildingHelper.createMeal(this.scene, product.resultSprite, product.resultName, otherActor.pos);
                    } else {
                        LevelBuildingHelper.createMeal(this.scene, ItemIconSprites.Trash, "inedible mush", otherActor.pos);
                    }

                    this.reset();
                }

                if (this.ingredients.length > 0 && 
                        otherActor instanceof Appliance && 
                        otherActor.applianceType === ApplianceType.Trashcan) {
                    this.reset();
                }
            }
            /////////////////////////////////
            ///////// Hit Customer //////////
            /////////////////////////////////
            if (otherActor instanceof Customer && this.isAttacking && otherActor.isAttacking) {
                (this.scene as LevelBase).removeCustomer(otherActor);
                Resources.Bonk1.play(0.3);
                otherActor.kill();
                this.reset();
            }
        });
    }

    private tickCook(delta: number) {
        let stoves = this.scene.actors.filter(x => x instanceof Appliance &&
                                                   x.applianceType === ApplianceType.Stove &&
                                                   this.body.collider.collide(x.body.collider) &&
                                                   this.ingredients.length > 0 &&
                                                   this.isHeld === false);

        if (stoves.length > 0) {
            // find a free stove
            let otherPans = this.scene.actors.filter(x => x instanceof Pan && x != this);
            let foundStove = false;

            stoves.forEach(stove => {
                let stoveIsFree = true;
                
                otherPans.forEach(pan => {
                    if (stove.contains(pan.pos.x, pan.pos.y)) {
                        stoveIsFree = false;
                    }
                });

                if (stoveIsFree) {
                    this.pos = stove.pos.clone();
                    foundStove = true;
                }
            });

            if (!foundStove) {
                return;
            }
            
            this.isOnStove = true;

            this.cookTime += delta;

            if (!this.isDone && this.soundDelay <= 0) {
                let sr = Math.floor(Math.random() * this.cookingSounds.length);
                this.cookingSounds[sr].play(0.1);
                this.soundDelay = 100;
            } else if (this.soundDelay > 0) {
                this.soundDelay -= delta
            }

            if (!this.isDone &&
                this.cookTime > this.ingredients.length * this.cookTimeMultiplier) {
                this.isDone = true;
                Resources.MealDone.play();
            }

            if (this.isDone && !this.isBurned &&
                this.cookTime > this.ingredients.length * this.cookTimeMultiplier * this.burnTimeMultiplier) {
                this.isBurned = true;
                Resources.MealBurned.play();
            }
        } else {
            this.isOnStove = false;
        }
    }
    
    private reset() {
        this.ingredients = [];
        this.isBurned = false;
        this.isDone = false;
        this.cookTime = 0;
    }

    public onPreUpdate(engine: Engine, delta: number) {
        this.tickCook(delta);

        // Render
        if (!this.isAttacking) {
            if (this.isBurned) {
                this.setDrawing("burned");
            } else if (this.isDone) {
                this.setDrawing("done");
            } else if (this.cookTime > 0 && this.isOnStove) {
                this.setDrawing("cooking");
            } else if (this.ingredients.length > 0) {
                this.setDrawing("filled");
            } else {
                this.setDrawing("empty");
            }
        } else {
            if (this.attackAnimation.isDone()) {
                this.isAttacking = false;
            }
        }
    }

    public attack(pos: Vector, facing: string) {
        this.isAttacking = true;
        this.pos = pos;
        this.setDrawing("attack");
        Resources.SwingPan.play();

        switch (facing) {
            case "r":
                this.attackAnimation.flipHorizontal = true;
                break;
            default:
                this.attackAnimation.flipHorizontal = false;
        }
    }
}
