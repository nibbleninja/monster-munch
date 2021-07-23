import { Actor, Engine, ScreenElement, Sprite, SpriteSheet, UIActor, vec } from "excalibur";
import { Resources } from "../../resources";
import { AnimationHelper } from "./animationHelper";
import { ItemIconSprites } from "./itemIconSprites";

export class Recipe {
    public ingredients:string[];
    public resultName:string;
    public resultSprite:Sprite;

    constructor (ingredients:string[], resultName:string, resultSprite:Sprite) {
        this.ingredients = ingredients;
        this.resultSprite = resultSprite;
        this.resultName = resultName;
    }

    public ingredientsEqual(ingredientCheck:string[]) {
        console.log("looking for: " + JSON.stringify(ingredientCheck));
        
        if (
          !Array.isArray(this.ingredients)
          || !Array.isArray(ingredientCheck)
          || this.ingredients.length !== ingredientCheck.length
          ) {
            return false;
          }
        
        // .concat() to not mutate arguments
        const arr1 = this.ingredients.concat().sort();
        const arr2 = ingredientCheck.concat().sort();
        
        for (let i = 0; i < arr1.length; i++) {
            if (arr1[i] !== arr2[i]) {
                return false;
             }
        }
        
        return true;
    }
}

const Recipes = {
    MonsterPie: new Recipe (["Poison", "FlourBag", "Apple"],"Monster Pie",ItemIconSprites.PieRed),
    Taco: new Recipe (["Meat", "Cheese", "GreenLeaf"],"Taco",ItemIconSprites.Taco),
    Cookie: new Recipe (["FlourBag", "EggRaw"],"Cookie",ItemIconSprites.Cookie),
    FriedEgg: new Recipe (["EggRaw"],"Fried Egg",ItemIconSprites.EggCooked),
    Pizza: new Recipe (["FlourBag", "RedPot", "Cheese"],"Pizza",ItemIconSprites.PizzaPlain),
    PepperoniPizza: new Recipe (["FlourBag", "RedPot", "Meat","Cheese"],"Pepperoni Pizza",ItemIconSprites.PizzaToppings),
    BananaPie: new Recipe (["EggRaw", "FlourBag", "Banana"],"Banana Pie",ItemIconSprites.PieYellow),
    SpecialCrunchPie: new Recipe (["EggRaw", "FlourBag", "PurpleGem"],"Special Crunch Pie",ItemIconSprites.PiePurple),
    Burger: new Recipe (["Meat", "Bread", "GreenLeaf", "Cheese"],"Burger",ItemIconSprites.Burger),
    CrunchyCake: new Recipe (["EggRaw", "FlourBag", "YellowPot", "WhiteGem"],"Crunchy Cake",ItemIconSprites.Cake),
    IceCream: new Recipe (["YellowPot","EggRaw", "WhiteGem"],"Ice Cream",ItemIconSprites.IceCreamCone),
}

export {Recipes}

export class RecipeCard extends ScreenElement {
    private cardTargetWidth = 75;
    private cardTargetHeight = 120;
    
    private cardFrame:Sprite;
    private resultSprite:Sprite;
    private ingredientSprites:Sprite[] = [];

    public setRecipe(recipe:Recipe) {
        this.cardFrame = Resources.CardFrame.asSprite();
        this.cardFrame.scale = vec(this.cardTargetWidth / this.cardFrame.width, this.cardTargetHeight / this.cardFrame.height );

        this.resultSprite =AnimationHelper.getScaledSprite(recipe.resultSprite, 0.6);
        
        recipe.ingredients.forEach(i => {
            console.log("Adding sprite for ingredient: " + i)
            this.ingredientSprites.push(AnimationHelper.getScaledSprite(ItemIconSprites[i], 0.6));
        });
    }

    public onPreDraw (ctx: CanvasRenderingContext2D, _delta: number) {
        this.cardFrame.draw(ctx, 0,0);
        this.resultSprite.draw(ctx, this.cardTargetWidth / 2 - this.resultSprite.width,5);

        this.ingredientSprites[0].draw(ctx, 5,50)
        
        if (this.ingredientSprites.length >= 2) {
            this.ingredientSprites[1].draw(ctx, 40,50)
        }

        if (this.ingredientSprites.length >= 3) {
            this.ingredientSprites[2].draw(ctx, 5, 85)
        }

        if (this.ingredientSprites.length >= 4) {
            this.ingredientSprites[3].draw(ctx, 40, 85)
        }
    }
}