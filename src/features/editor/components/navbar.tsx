"use client"
import { ChevronDown, Download, MousePointerClick, Redo2, Undo2 } from "lucide-react";
import { Logo } from "./logo"; 
import { Button } from "@/components/ui/button";
import { 
    DropdownMenu,
    DropdownMenuItem,
    DropdownMenuContent,
    DropdownMenuTrigger,
 } from "@/components/ui/dropdown-menu";
import { CiFileOn } from "react-icons/ci";
import { Separator } from "@/components/ui/separator";
import { Hint } from "@/components/hint";
import { BsCloudCheck } from "react-icons/bs";
import { cn } from "@/lib/utils";
import { ActiveTool } from "../types";

interface NavbarProps {
    activeTool: string;
    onChangeActiveTool: (tool: ActiveTool) => void;
}

export const Navbar = ({ activeTool, onChangeActiveTool }: NavbarProps) => {
    return (
        <nav className="w-full flex items-center p-4 h-[68px] gap-x-8 border-b lg:pl-[34px]">
            <Logo />
            <div className="w-full h-full flex items-center gap-x-1">
                <DropdownMenu modal={false}>
                    <DropdownMenuTrigger asChild>
                        <Button size="sm" variant="ghost">
                            File
                            <ChevronDown className="ml-2 size-4" /> 
                        </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="start" className="min-w-60">
                        <DropdownMenuItem 
                            onClick={() => {}}
                            className="flex items-center gap-x-2">
                            <CiFileOn className="size-8" />
                            <div>
                                <p>Open</p>
                                <p className="text-xs text-muted-foreground">open a JSON file</p>
                            </div>
                        </DropdownMenuItem>
                    </DropdownMenuContent>
                </DropdownMenu>
                <Separator orientation="vertical" className="mx-2" />

                <Hint label="Select" side="bottom" sideOffset={10}>
                    <Button 
                        size="icon" 
                        variant="ghost" 
                        onClick={() => onChangeActiveTool("select")} 
                        className={cn(activeTool === "select" && "bg-gray-100")}
                    >
                        <MousePointerClick className="size-4"/>
                    </Button>
                </Hint>
                <Hint label="Undo" side="bottom" sideOffset={10}>
                    <Button size="icon" variant="ghost" onClick={() => onChangeActiveTool("undo")} className="">
                        <Undo2 className="size-4"/>
                    </Button>
                </Hint>
                <Hint label="Redo" side="bottom" sideOffset={10}>
                    <Button size="icon" variant="ghost" onClick={() => onChangeActiveTool("redo")} className="">
                        <Redo2 className="size-4"/>
                    </Button>
                </Hint>
                <Separator orientation="vertical" className="mx-2" />

                <div className="flex items-center gap-x-2">
                    <BsCloudCheck className="size-[20px] text-muted-foreground"/>
                    <div className="text-xs text-muted-foreground">
                        Saved
                    </div>
                </div>
                <div className="ml-auto flex items-center gap-x-4">
                    <DropdownMenu modal={false}>
                        <DropdownMenuTrigger asChild>
                            <Button size="sm" variant="ghost">
                                Export
                                <Download className="ml-2 size-4" /> 
                            </Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent align="end" className="min-w-60">
                            <DropdownMenuItem 
                                onClick={() => {}}
                                className="flex items-center gap-x-2">
                                <CiFileOn className="size-8" />
                                <div>
                                    <p>JSON</p>
                                    <p className="text-xs text-muted-foreground">save later for editing</p>
                                </div>
                            </DropdownMenuItem>
                            <DropdownMenuItem 
                                onClick={() => {}}
                                className="flex items-center gap-x-2">
                                <CiFileOn className="size-8" />
                                <div>
                                    <p>PNG</p>
                                    <p className="text-xs text-muted-foreground">best for web</p>
                                </div>
                            </DropdownMenuItem>
                            <DropdownMenuItem 
                                onClick={() => {}}
                                className="flex items-center gap-x-2">
                                <CiFileOn className="size-8" />
                                <div>
                                    <p>JPG</p>
                                    <p className="text-xs text-muted-foreground">save posting</p>
                                </div>
                            </DropdownMenuItem>
                            <DropdownMenuItem 
                                onClick={() => {}}
                                className="flex items-center gap-x-2">
                                <CiFileOn className="size-8" />
                                <div>
                                    <p>SVG</p>
                                    <p className="text-xs text-muted-foreground">save for editing in vector </p>
                                </div>
                            </DropdownMenuItem>
                    </DropdownMenuContent>
                    </DropdownMenu>
                </div>
            </div>
        </nav>
    );
}