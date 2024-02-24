interface ButtonProps {
  onClick: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
}

export const Button = ({ onClick }: ButtonProps) => {
  return (
    <button
      onClick={onClick}
      className="block text-text border border-borderColor bg-card hover:bg-hoverBtn transition-all:ease-out duration-500 rounded-md min-w-[13rem] px-4 py-1 text-left"
    >
      Search city...
    </button>
  );
};
