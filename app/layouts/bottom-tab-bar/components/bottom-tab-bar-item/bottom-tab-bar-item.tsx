import { Button } from "@/app/ui/button/button";
import { CountBadge } from "@/app/ui/count-badge/count-badge";
import { MaterialIcon } from "@/app/ui/material-icon/material-icon";
import type { BottomTabBarItemProps } from "./types/bottom-tab-bar-item.types";

export const BottomTabBarItem = ({
  item,
  isActive,
  badgeCount,
  onClick,
}: BottomTabBarItemProps) => {
  return (
    <Button
      variant="unstyled"
      size="auto"
      onClick={onClick}
      className={`flex-1 flex-col justify-start text-center text-[10.5px] !gap-0 ${
        isActive ? "text-accent" : "text-muted-light"
      }`}
    >
      <span className="relative flex">
        <MaterialIcon name={item.icon} className="text-[20px]" />
        <CountBadge count={badgeCount} size="sm" className="absolute -right-2.5 -top-1" />
      </span>
      {item.label}
    </Button>
  );
};
