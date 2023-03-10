import Vex from "vexflow";
import VF = Vex.Flow;
import { EngravingRules } from "./EngravingRules";
import { VexFlowMeasure } from "./VexFlow/VexFlowMeasure";
import { SkyBottomLineCalculationResult } from "./SkyBottomLineCalculationResult";
import { ISkyBottomLineBatchCalculatorBackendPartialTableConfiguration, ISkyBottomLineBatchCalculatorBackendTableConfiguration, SkyBottomLineBatchCalculatorBackend } from "./SkyBottomLineBatchCalculatorBackend";
/**
 * This class calculates the skylines and the bottom lines by using WebGL acceleration.
 */
export declare class WebGLSkyBottomLineBatchCalculatorBackend extends SkyBottomLineBatchCalculatorBackend {
    private gl;
    private texture;
    constructor(rules: EngravingRules, measures: VexFlowMeasure[]);
    protected getPreferredRenderingConfiguration(maxWidth: number, elementHeight: number): ISkyBottomLineBatchCalculatorBackendPartialTableConfiguration;
    protected onInitialize(tableConfiguration: ISkyBottomLineBatchCalculatorBackendTableConfiguration): void;
    protected calculateFromCanvas(canvas: HTMLCanvasElement, _: VF.CanvasContext, measures: VexFlowMeasure[], samplingUnit: number, tableConfiguration: ISkyBottomLineBatchCalculatorBackendTableConfiguration): SkyBottomLineCalculationResult[];
}
