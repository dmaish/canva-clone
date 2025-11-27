import { useCallback } from "react";
import { fabric } from "fabric";

export const useEditor = () => {
    // Editor hook logic here
    const init = useCallback(({
        initialCanvas,
        initialContainer
    }:{
        initialCanvas: fabric.Canvas;
        initialContainer: HTMLDivElement ;
    }) => {
        console.log("Editor initialized");
    }, []);

    return { init };
};