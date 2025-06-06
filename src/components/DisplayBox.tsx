const DisplayBox = ({ content, text }: DisplayBoxProps) => {
  return (
    <div className="flex flex-col items-center gap-y-5">
      <div className="p-5 border-3 border-gray-300 rounded-2xl">
        {content == 0 ? "00" : content < 10 ? `0${content}` : content}
      </div>
      <p className="text-2xl font-semibold">{text}</p>
    </div>
  );
};

interface DisplayBoxProps {
  content: number;
  text: string;
}

export default DisplayBox;
