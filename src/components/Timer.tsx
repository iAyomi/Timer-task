import { useState } from "react";

const Timer = () => {
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(55);

  console.log({ minutes });

  const increaseMinute = () => {
    setMinutes((prev) => {
      if (prev == 59) return 0;
      return prev + 1;
    });
  };

  const decreaseMinute = () => {
    setMinutes((prev) => {
      if (prev == 0) return 59;
      return prev - 1;
    });
  };

  const increaseSecond = () => {
    setSeconds((prev) => {
      if (prev == 59) {
        increaseMinute();
        return 0;
      }
      return prev + 1;
    });
  };

  const decreaseSecond = () => {
    setSeconds((prev) => {
      if (prev == 0) {
        decreaseMinute();
        return 59;
      }
      return prev - 1;
    });
  };

  return (
    <div>
      <div className="flex items-center justify-center gap-x-5 text-9xl">
        <div className="flex items-center justify-center gap-x-5">
          <div className="text-6xl flex flex-col items-center gap-y-5">
            <button onClick={increaseMinute}>🔼</button>
            <button onClick={decreaseMinute}>🔽</button>
          </div>
          <div className="flex flex-col items-center gap-y-5">
            <div className="p-5 border-3 border-gray-300 rounded-2xl">
              {minutes}
            </div>
            <p className="text-2xl font-semibold">Minutes</p>
          </div>
        </div>

        <div className="relative bottom-6">:</div>

        <div className="flex items-center justify-center gap-x-5">
          <div className="flex flex-col items-center gap-y-5">
            <div className="p-5 border-3 border-gray-300 rounded-2xl">
              {seconds}
            </div>
            <p className="text-2xl font-semibold">Seconds</p>
          </div>
          <div className="text-6xl flex flex-col items-center gap-y-5">
            <button onClick={increaseSecond}>🔼</button>
            <button onClick={decreaseSecond}>🔽</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Timer;
