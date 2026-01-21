"use client";
import { useCallback, useEffect, useRef, useState } from "react";
import { useEditor } from "../hooks/use-editor";
import { fabric } from "fabric";
import { Navbar } from "./navbar";
import { Sidebar } from "./sidebar";
import { Toolbar } from "./toolbar";
import { Footer } from "./footer";
import { ActiveTool } from "../types";
import { Shapesidebar } from "./shape-sidebar";
import { FillColorSidebar } from "./fill-color-sidebar";

const Editor = () => {

    const { init, editor } = useEditor();
    const canvasRef = useRef(null);
    const containerRef = useRef<HTMLDivElement>(null);
    const [activeTool, setActiveTool] = useState<ActiveTool>("select");

    const onChangeActiveTool = useCallback((tool: ActiveTool) => {
        if (tool !== activeTool) {
            setActiveTool(tool);
        }
    }, [activeTool]);

    useEffect(() => { 
        const canvas = new fabric.Canvas(canvasRef.current, { //todo; confirm this is where the ref gets attached to the fabric instance controlsAboveOverlay: true,
            controlsAboveOverlay: true,
            preserveObjectStacking: true,
        });

        init({
            initialCanvas: canvas,
            initialContainer: containerRef.current!,
        });

        return () => {
            canvas.dispose();
        }

    }, [init]);


    return (
        <div className="h-full flex flex-col">
            <Navbar activeTool={activeTool} onChangeActiveTool={onChangeActiveTool} />
            <div className="absolute h-[calc(100%-68px)] w-full top-[68px] flex">
                <Sidebar activeTool={activeTool} onChangeActiveTool={onChangeActiveTool} />
                <Shapesidebar activeTool={activeTool} editor={editor} onChangeActiveTool={onChangeActiveTool} />
                <FillColorSidebar activeTool={activeTool} editor={editor} onChangeActiveTool={onChangeActiveTool} />
                <main className="bg-muted flex-1 overflow-auto relative flex flex-col">
                    <Toolbar
                        editor={editor}
                        activeTool={activeTool}
                        onChangeActiveTool={onChangeActiveTool} 
                        key={JSON.stringify(editor?.canvas.getActiveObject())} // Force re-render when active object changes. Very hacky but works for now.
                    />
                    <div className="flex-1 h-[100%-124px] bg-muted" ref={containerRef}>
                        <canvas ref={canvasRef} />
                    </div>
                    <Footer />
                </main>
            </div>
        </div>
    );
}

export default Editor;