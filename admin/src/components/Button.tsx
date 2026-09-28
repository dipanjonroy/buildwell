import { IconType } from "react-icons";

type ButtonType = {
  name: string;
  type: "submit" | "button";
  icon?: IconType;
  onClick: () => void;
  className?: string;
};

export default function Button({
  name,
  type,
  className,
  icon: Icon,
  onClick,
}: ButtonType) {
  return (
    <button
      type={type}
      onClick={onClick}
      className={`max-w-fit flex items-center gap-2 rounded-md cursor-pointer whitespace-nowrap ${className}`}
    >
      {Icon && (
        <span>
          <Icon size={12} />
        </span>
      )}
      <span className="text-sm font-medium">{name}</span>
    </button>
  );
}
