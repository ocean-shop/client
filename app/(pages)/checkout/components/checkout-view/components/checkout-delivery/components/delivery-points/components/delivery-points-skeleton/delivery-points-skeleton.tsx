import { DELIVERY_POINTS_SKELETON_ROWS } from "./constants/delivery-points-skeleton.constants";

export const DeliveryPointsSkeleton = () => {
  return (
    <div className="flex animate-pulse flex-col gap-2">
      {Array.from({ length: DELIVERY_POINTS_SKELETON_ROWS }, (_, index) => (
        <div key={index} className="h-[78px] rounded-xl bg-surface" />
      ))}
    </div>
  );
};
