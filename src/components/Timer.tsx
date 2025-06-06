import { useState } from "react";
import Buttons from "./Buttons";
import DisplayBox from "./DisplayBox";

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
          <Buttons increase={increaseMinute} decrease={decreaseMinute} />
          <DisplayBox content={minutes} text="Minutes" />
        </div>

        <div className="relative bottom-6">:</div>

        <div className="flex items-center justify-center gap-x-5">
          <DisplayBox content={seconds} text="Seconds" />
          <Buttons increase={increaseSecond} decrease={decreaseSecond} />
        </div>
      </div>
    </div>
  );
};

export default Timer;
