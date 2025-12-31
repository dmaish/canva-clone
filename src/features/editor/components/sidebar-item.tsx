import type { LucideIcon } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

interface SidebarItemProps {
    icon: LucideIcon;
    label: string;
    isActive?: boolean;
    onClick?: () => void;
}

export const SidebarItem = ({ icon: Icon, label, isActive=false, onClick }: SidebarItemProps) => {
    return (
            <Button
                variant="ghost"
                className={cn(
                    "w-full h-[80px] aspect-video p-3 py-4 flex flex-col items-center justify-center rounded-none", //TODO: implement aspect-video/ratio in cn
                    isActive && "bg-muted text-primary"
                )}
                onClick={onClick}
            >
                <Icon className="size-5 stroke-2 shrink-0" />
                <span className="mt-2 text-xs">{label}</span>
            </Button>
    );
}