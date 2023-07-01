import { FC, ElementType, ButtonHTMLAttributes } from "react";
import { twMerge } from "tailwind-merge";
interface NotificationActionProps
  extends ButtonHTMLAttributes<HTMLButtonElement> {
  icon: ElementType;
}

const NotificationAction: FC<NotificationActionProps> = ({
  icon: Icon,
  ...rest
}: NotificationActionProps) => {
  return (
    <button
      {...rest}
      className={twMerge(
        "w-8 h-8 rounded flex items-center justify-center bg-zinc-400 hover:bg-zinc-500 dark:bg-zinc-800 hover:dark:bg-zinc-900",
        rest.className
      )}
    >
      <Icon className="w-3 h-3 text-zinc-50" />
    </button>
  );
};

export { NotificationAction };
