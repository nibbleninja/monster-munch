import { Actor, Color, Engine, Scene } from "excalibur";
import { ApplianceType } from "../../actors/objects/appliance";
import { Recipe } from "../../util/config/recipes";
import { LevelBuildingHelper } from "../../util/helpers/levelBuildingHelper";
import { InsideTileSprites } from "../../util/spritesheet_wrappers/insideTileSprites";
import { ItemIconSprites } from "../../util/spritesheet_wrappers/itemIconSprites";
import { LevelBase } from "./levelBase";

export class LevelTestRay extends LevelBase {
    public nextLevel: string;
    protected borderWidth: number;
    protected borderHeight: number;
    protected availableMeals: Recipe[];
    public levelName = "level_testray";
    protected initialCustomersToServe: number = 9001;
    
    protected addBackgroundTiles() {
        LevelBuildingHelper.createBackgroundTile(this, InsideTileSprites.CounterFaceLeft, 5, 9);
        LevelBuildingHelper.createBackgroundTile(this, InsideTileSprites.CounterFaceCenter, 6, 9);
        LevelBuildingHelper.createBackgroundTile(this, InsideTileSprites.CounterFaceCenter, 7, 9);
        LevelBuildingHelper.createBackgroundTile(this, InsideTileSprites.CounterFaceCenter, 8, 9);
        LevelBuildingHelper.createBackgroundTile(this, InsideTileSprites.CounterFaceRight, 9, 9);
    }

    protected addForegroundTiles() {
        let wallColor = new Color(200, 200, 200);
        LevelBuildingHelper.createWallTile(this, wallColor, 1, 1);
        LevelBuildingHelper.createWallTile(this, wallColor, 1, 3);

        LevelBuildingHelper.createWallTile(this, wallColor, 2, 2);
        LevelBuildingHelper.createWallTile(this, wallColor, 2, 4);

        LevelBuildingHelper.createWallTile(this, InsideTileSprites.StoolTopRed, 1, 7);
        LevelBuildingHelper.createWallTile(this, InsideTileSprites.StoolTopGrey, 2, 7);
        LevelBuildingHelper.createWallTile(this, InsideTileSprites.StoolTopRed, 3, 7);
        LevelBuildingHelper.createWallTile(this, InsideTileSprites.Table_H_TopLeft, 1, 8);
        LevelBuildingHelper.createWallTile(this, InsideTileSprites.Table_H_TopMid, 2, 8);
        LevelBuildingHelper.createWallTile(this, InsideTileSprites.Table_H_TopRight, 3, 8);
        LevelBuildingHelper.createWallTile(this, InsideTileSprites.Table_H_BottomLeftLeg, 1, 9);
        LevelBuildingHelper.createWallTile(this, InsideTileSprites.Table_H_BottomMidNoLeg, 2, 9);
        LevelBuildingHelper.createWallTile(this, InsideTileSprites.Table_H_BottomRightLeg, 3, 9);
        LevelBuildingHelper.createWallTile(this, InsideTileSprites.GreyStool, 1, 10);
        LevelBuildingHelper.createWallTile(this, InsideTileSprites.RedStool, 2, 10);
        LevelBuildingHelper.createWallTile(this, InsideTileSprites.GreyStool, 3, 10);
        
        LevelBuildingHelper.createWallTile(this, InsideTileSprites.TrashCanTopEmpty, 4, 4);
        LevelBuildingHelper.createWallTile(this, InsideTileSprites.TrashCanBottom, 4, 5);
        LevelBuildingHelper.createWallTile(this, InsideTileSprites.CounterVerticalFull, 5, 5);
        LevelBuildingHelper.createWallTile(this, InsideTileSprites.CounterVerticalFull, 5, 6);
        LevelBuildingHelper.createWallTile(this, InsideTileSprites.CounterVerticalFull, 5, 7);
        LevelBuildingHelper.createWallTile(this, InsideTileSprites.CounterCornerBottomLeft, 5, 8);


        LevelBuildingHelper.createWallTile(this, InsideTileSprites.TrashCanTopLid, 10, 4);
        LevelBuildingHelper.createWallTile(this, InsideTileSprites.TrashCanBottom, 10, 5);
        LevelBuildingHelper.createWallTile(this, InsideTileSprites.CounterVerticalFull, 9, 5);
        LevelBuildingHelper.createWallTile(this, InsideTileSprites.CounterVerticalFull, 9, 6);
        LevelBuildingHelper.createWallTile(this, InsideTileSprites.CounterVerticalFull, 9, 7);
        LevelBuildingHelper.createWallTile(this, InsideTileSprites.CounterBottomCornerRight, 9, 8);

        LevelBuildingHelper.createWallTile(this, InsideTileSprites.CounterBottomCentral, 6, 8);
        LevelBuildingHelper.createWallTile(this, InsideTileSprites.CounterBottomCentral, 7, 8);
        LevelBuildingHelper.createWallTile(this, InsideTileSprites.CounterBottomCentral, 8, 8);
    };
    protected addAppliances() {
        LevelBuildingHelper.createApplianceOnTile(this, ApplianceType.Stove, 9, 7);
        LevelBuildingHelper.createApplianceOnTile(this, ApplianceType.ServingPlate, 9, 5);
    };
    protected addPans(engine:Engine) {
        LevelBuildingHelper.createPanOnTile(this,engine, 7,8)
        LevelBuildingHelper.createPanOnTile(this,engine, 2,4)
    };

    protected addItems() {
        LevelBuildingHelper.createIngrediantSpawnerOnTile(this, 8, 8, "apple", ItemIconSprites.Apple )
        LevelBuildingHelper.createIngrediantSpawnerOnTile(this, 5, 5, "flour", ItemIconSprites.FlourBag )
        LevelBuildingHelper.createIngrediantSpawnerOnTile(this, 5, 6, "mayo", ItemIconSprites.Mayo )
        LevelBuildingHelper.createIngrediantSpawnerOnTile(this, 5, 7, "poison", ItemIconSprites.Poison )
        LevelBuildingHelper.createIngrediantSpawnerOnTile(this, 9, 6, "skull", ItemIconSprites.Skull )
    }

    protected addSeatsAndDoors(): Actor[] {
        throw new Error("not implimented");
    }
}