const Buttons = ({ increase, decrease }: ButtonProps) => {
  return (
    <div className="text-8xl flex flex-col items-center gap-y-5">
      <button type="button" onClick={increase} className="cursor-pointer">
        🔼
      </button>
      <button type="button" onClick={decrease} className="cursor-pointer">
        🔽
      </button>
    </div>
  );
};

interface ButtonProps {
  increase: () => void;
  decrease: () => void;
}

export default Buttons;
