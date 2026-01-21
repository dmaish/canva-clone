import { RGBColor } from "react-color";

// checks if the given type is a fabric text type object
export function isTextType(type: string | undefined): boolean {
    return type === "text" || type === "textbox" || type === "i-text";
}

export function rgbaObjectToString(rgba: RGBColor | "transparent"){
    if (rgba === "transparent") {
        return 'rgba(0, 0, 0, 0)';
    }

    const alpha = rgba.a === undefined ? 1 : rgba.a;
    return `rgba(${rgba.r}, ${rgba.g}, ${rgba.b}, ${alpha})`;
}