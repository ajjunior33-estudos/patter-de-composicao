import { FC, ReactNode } from "react";

interface NotificationActionsProps {
  children: ReactNode;
}

const NotificationActions: FC<NotificationActionsProps> = ({
  children,
}: NotificationActionsProps) => {
  return (
    <>
      <div className="flex gap-2 self-center">{children}</div>
    </>
  );
};
export { NotificationActions };
