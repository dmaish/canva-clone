import { Leaf } from "lucide-react";

export type ActiveTool = "select" 
|"text" 
|"shapes" 
|"images" 
|"ai" 
|"design" 
|"settings" 
|"draw"
|"fill"
|"stroke-color"
|"stroke-width"
|"font"
|"opacity"
|"filter"
|"remove-bg"
|"templates";

export const FILL_COLOR = "rgba(0, 0, 0, 1)";
export const STROKE_COLOR = "rgba(0, 0, 0, 1)";
export const STROKE_WIDTH = 2;

export const CIRCLE_OPTIONS = {
    radius: 150,
    left: 100,
    top: 100,
    fill: FILL_COLOR,
    stroke: STROKE_COLOR,
    strokeWidth: STROKE_WIDTH,
};

export const RECTANGLE_OPTIONS = {
    top: 100,
    left: 100,
    stroke: STROKE_COLOR,
    strokeWidth: STROKE_WIDTH,
    fill: FILL_COLOR,
    width: 300,
    height: 300,
    angle: 0,
};

export const TRIANGLE_OPTIONS = {
    top: 100,
    left: 100,
    stroke: STROKE_COLOR,
    strokeWidth: STROKE_WIDTH,
    fill: FILL_COLOR,
    width: 300,
    height: 300,
    angle: 0,
};

export const DIAMOND_OPTIONS = {
    top: 100,
    left: 100,
    stroke: STROKE_COLOR,
    strokeWidth: STROKE_WIDTH,
    fill: FILL_COLOR,
    width: 300,
    height: 300,
    angle: 0,
};

export type buildEditorProps = {
    canvas: fabric.Canvas;
};

export interface Editor {
    addCircle: () => void;
    addSoftRectangle: () => void;
    addRectangle: () => void;
    addTriangle: () => void;
    addInverseTriangle: () => void;
    addDiamond: () => void;
}