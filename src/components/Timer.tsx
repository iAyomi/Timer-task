import { useState } from "react";

const Timer = () => {
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);

  const increaseMinute = () => {
    setMinutes((prevMinutes) => {
      if (prevMinutes == 59) return 0;
      return prevMinutes + 1;
    });
  };

  const decreaseMinute = () => {
    setMinutes((prevMinutes) => {
      if (prevMinutes == 0) return 59;
      return prevMinutes - 1;
    });
  };

  const increaseSecond = () => {
    setSeconds((prevSeconds) => {
      if (prevSeconds === 59) {
        if (minutes === 59) {
          setMinutes(0);
        } else {
          setMinutes(minutes + 1);
        }
        return 0;
      }
      return prevSeconds + 1;
    });
  };

  const decreaseSecond = () => {
    setSeconds((prevSeconds) => {
      if (prevSeconds === 0) {
        if (minutes === 0) {
          setMinutes(59);
        } else {
          setMinutes(minutes - 1);
        }
        return 59;
      }
      return prevSeconds - 1;
    });
  };

  return (
    <div>
      <div className="flex items-center justify-center gap-x-5 text-9xl">
        <div className="flex items-center justify-center gap-x-5">
          <div className="text-8xl flex flex-col items-center gap-y-5">
            <button
              type="button"
              onClick={increaseMinute}
              className="cursor-pointer"
            >
              🔼
            </button>
            <button
              type="button"
              onClick={decreaseMinute}
              className="cursor-pointer"
            >
              🔽
            </button>
          </div>
          <div className="flex flex-col items-center gap-y-5">
            <div className="p-5 border-3 border-gray-300 rounded-2xl">
              {minutes == 0 ? "00" : minutes < 10 ? `0${minutes}` : minutes}
            </div>
            <p className="text-2xl font-semibold">Minutes</p>
          </div>
        </div>

        <div className="relative bottom-6">:</div>

        <div className="flex items-center justify-center gap-x-5">
          <div className="flex flex-col items-center gap-y-5">
            <div className="p-5 border-3 border-gray-300 rounded-2xl">
              {seconds == 0 ? "00" : seconds < 10 ? `0${seconds}` : seconds}
            </div>
            <p className="text-2xl font-semibold">Seconds</p>
          </div>
          <div className="text-8xl flex flex-col items-center gap-y-5">
            <button
              type="button"
              onClick={increaseSecond}
              className="cursor-pointer"
            >
              🔼
            </button>
            <button
              type="button"
              onClick={decreaseSecond}
              className="cursor-pointer"
            >
              🔽
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Timer;
