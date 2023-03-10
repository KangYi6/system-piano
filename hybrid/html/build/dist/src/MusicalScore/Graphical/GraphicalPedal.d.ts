import { GraphicalObject } from "./GraphicalObject";
import { BoundingBox } from "./BoundingBox";
import { MusicSymbol } from "./MusicSymbol";
import { Pedal } from "../VoiceData/Expressions/ContinuousExpressions/Pedal";
/**
 * The graphical counterpart of an [[Pedal]]
 */
export declare class GraphicalPedal extends GraphicalObject {
    constructor(pedal: Pedal, parent: BoundingBox);
    getPedal: Pedal;
    pedalSymbol: MusicSymbol;
    private setSymbol;
}
