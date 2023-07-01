import { FC, ReactNode } from "react";

interface NotificationRootProps {
  children: ReactNode;
}

const NotificationRoot: FC<NotificationRootProps> = ({
  children,
}: NotificationRootProps) => {
  return (
    <div className="bg-zinc-200 dark:bg-zinc-900 px-8 py-4 flex items-start gap-6">
      {children}
    </div>
  );
};

export { NotificationRoot };
