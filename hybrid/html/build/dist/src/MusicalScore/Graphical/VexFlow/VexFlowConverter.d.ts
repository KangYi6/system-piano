import Vex from "vexflow";
import VF = Vex.Flow;
import { ClefEnum } from "../../VoiceData/Instructions/ClefInstruction";
import { ClefInstruction } from "../../VoiceData/Instructions/ClefInstruction";
import { Pitch } from "../../../Common/DataObjects/Pitch";
import { Fraction } from "../../../Common/DataObjects/Fraction";
import { RhythmInstruction } from "../../VoiceData/Instructions/RhythmInstruction";
import { KeyInstruction } from "../../VoiceData/Instructions/KeyInstruction";
import { GraphicalNote } from "../GraphicalNote";
import { SystemLinesEnum } from "../SystemLinesEnum";
import { FontStyles } from "../../../Common/Enums/FontStyles";
import { Fonts } from "../../../Common/Enums/Fonts";
import { OutlineAndFillStyleEnum } from "../DrawingEnums";
import { SystemLinePosition } from "../SystemLinePosition";
import { GraphicalVoiceEntry } from "../GraphicalVoiceEntry";
import { OrnamentContainer } from "../../VoiceData/OrnamentContainer";
import { Notehead } from "../../VoiceData/Notehead";
import { EngravingRules } from "../EngravingRules";
import { ArpeggioType } from "../../VoiceData/Arpeggio";
/**
 * Helper class, which contains static methods which actually convert
 * from OSMD objects to VexFlow objects.
 */
export declare class VexFlowConverter {
    /**
     * Mapping from numbers of alterations on the key signature to major keys
     * @type {[alterationsNo: number]: string; }
     */
    private static majorMap;
    /**
     * Mapping from numbers of alterations on the key signature to minor keys
     * @type {[alterationsNo: number]: string; }
     */
    private static minorMap;
    /**
     * Convert a fraction to Vexflow string durations.
     * A duration like 5/16 (5 16th notes) can't be represented by a single (dotted) note,
     *   so we need to return multiple durations (e.g. for 5/16th ghost notes).
     * Currently, for a dotted quarter ghost note, we return a quarter and an eighth ghost note.
     *   We could return a dotted quarter instead, but then the code would need to distinguish between
     *   notes that can be represented as dotted notes and notes that can't, which would complicate things.
     *   We could e.g. add a parameter "allowSingleDottedNote" which makes it possible to return single dotted notes instead.
     * But currently, this is only really used for Ghost notes, so it doesn't make a difference visually.
     *   (for other uses like StaveNotes, we calculate the dots separately)
     * @param fraction a fraction representing the duration of a note
     * @returns {string[]} Vexflow note type strings (e.g. "h" = half note)
     */
    static durations(fraction: Fraction, isTuplet: boolean): string[];
    /**
     * Takes a Pitch and returns a string representing a VexFlow pitch,
     * which has the form "b/4", plus its alteration (accidental)
     * @param pitch
     * @returns {string[]}
     */
    static pitch(pitch: Pitch, isRest: boolean, clef: ClefInstruction, notehead?: Notehead, octaveOffsetGiven?: number): [string, string, ClefInstruction];
    static restToNotePitch(pitch: Pitch, clefType: ClefEnum): Pitch;
    /** returns the Vexflow code for a note head. Some are still unsupported, see Vexflow/tables.js */
    static NoteHeadCode(notehead: Notehead): string;
    static GhostNotes(frac: Fraction): VF.GhostNote[];
    /**
     * Convert a GraphicalVoiceEntry to a VexFlow StaveNote
     * @param gve the GraphicalVoiceEntry which can hold a note or a chord on the staff belonging to one voice
     * @returns {VF.StaveNote}
     */
    static StaveNote(gve: GraphicalVoiceEntry): VF.StaveNote;
    static generateArticulations(vfnote: VF.StemmableNote, gNote: GraphicalNote, rules: EngravingRules): void;
    static generateOrnaments(vfnote: VF.StemmableNote, oContainer: OrnamentContainer): void;
    static StrokeTypeFromArpeggioType(arpeggioType: ArpeggioType): VF.Stroke.Type;
    /**
     * Convert a set of GraphicalNotes to a VexFlow StaveNote
     * @param notes form a chord on the staff
     * @returns {VF.StaveNote}
     */
    static CreateTabNote(gve: GraphicalVoiceEntry): VF.TabNote;
    /**
     * Convert a ClefInstruction to a string represention of a clef type in VexFlow.
     *
     * @param clef The OSMD object to be converted representing the clef
     * @param size The VexFlow size to be used. Can be `default` or `small`.
     * As soon as #118 is done, this parameter will be dispensable.
     * @returns    A string representation of a VexFlow clef
     * @see        https://github.com/0xfe/vexflow/blob/master/src/clef.js
     * @see        https://github.com/0xfe/vexflow/blob/master/tests/clef_tests.js
     */
    static Clef(clef: ClefInstruction, size?: string): {
        type: string;
        size: string;
        annotation: string;
    };
    /**
     * Convert a RhythmInstruction to a VexFlow TimeSignature object
     * @param rhythm
     * @returns {VF.TimeSignature}
     * @constructor
     */
    static TimeSignature(rhythm: RhythmInstruction): VF.TimeSignature;
    /**
     * Convert a KeyInstruction to a string representing in VexFlow a key
     * @param key
     * @returns {string}
     */
    static keySignature(key: KeyInstruction): string;
    /**
     * Converts a lineType to a VexFlow StaveConnector type
     * @param lineType
     * @returns {any}
     */
    static line(lineType: SystemLinesEnum, linePosition: SystemLinePosition): any;
    /**
     * Construct a string which can be used in a CSS font property
     * @param fontSize
     * @param fontStyle
     * @param font
     * @returns {string}
     */
    static font(fontSize: number, fontStyle: FontStyles, font: Fonts, rules: EngravingRules, fontFamily?: string): string;
    /**
     * Converts the style into a string that VexFlow RenderContext can understand
     * as the weight of the font
     */
    static fontStyle(style: FontStyles): string;
    /**
     * Convert OutlineAndFillStyle to CSS properties
     * @param styleId
     * @returns {string}
     */
    static style(styleId: OutlineAndFillStyleEnum): string;
}
