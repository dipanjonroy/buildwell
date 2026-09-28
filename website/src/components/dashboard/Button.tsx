import { IconType } from "react-icons";

type ButtonType = {
  name: string;
  icon?: IconType;
  onClick: () => void;
};

export default function Button({ name, icon: Icon, onClick }: ButtonType) {
  return (
    <button
      onClick={onClick}
      className="max-w-fit flex items-center gap-2 px-3 py-2 black-bg white-text rounded-md cursor-pointer whitespace-nowrap"
    >
      {Icon && (
        <span>
          <Icon size={12} />
        </span>
      )}
      <span className="text-xs font-medium">{name}</span>
    </button>
  );
}
