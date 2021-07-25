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
    Bone: new Recipe (["Poison","Skull","Drumstick"],"Bone",ItemIconSprites.Bone),
    CowboyBoots: new Recipe (["Poison","SyringeGreen","Meat"],"Cowboy Boots",ItemIconSprites.CowboyBoots),
    FlipPhone: new Recipe (["StormCloud","FloppyDisk","Skull"],"Flip Phone",ItemIconSprites.FlipPhone),
    Hotdog: new Recipe (["ToiletPaper","Meat","Bread"],"Hot Dog",ItemIconSprites.Hotdog),
    Fries: new Recipe (["Potato","TennisRacket","Salt"],"Fries",ItemIconSprites.Fries),
    BananaCandy: new Recipe (["Banana","SyringeYellow","WhiteGem"],"Banana Candy",ItemIconSprites.CandyYellow),
    BluePopsicle: new Recipe (["BlueGem","BluePot","SyringeBlue"],"Blue Popsicle",ItemIconSprites.FreezePopBlue),
    PinkPopsicle: new Recipe (["RedGem","SyringeRed","Snowflake"],"Banana Candy",ItemIconSprites.CandyYellow),
    BananaPeel: new Recipe (["Banana","Axe","SyringeYellow"],"Banana Peel",ItemIconSprites.CandyYellow),



}

export {Recipes}