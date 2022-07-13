export const Button = ({ buttonText, callback, color, textColor }) => {
  return (
    <button
      className={`bg-[#${color}] text-${textColor} w-full p-2 m-1 ${
        color ? "" : "border-2"
      } hover:opacity-60`}
      onClick={callback}
    >
      {buttonText}
    </button>
  );
};
