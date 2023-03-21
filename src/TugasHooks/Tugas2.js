import { useState, useEffect } from "react";

function Tugas2() {
  const [date, setDate] = useState(new Date());
  const [seconds, setSeconds] = useState(2);
  const [isShow, setIsShow] = useState(true);

  function refreshClock() {
    setDate(new Date());
  }
  useEffect(() => {
    const timerId = setInterval(refreshClock, 1000);
    return function cleanup() {
      clearInterval(timerId);
    };
  }, []);

  useEffect(() => {
    if (seconds > 0) {
      setTimeout(() => setSeconds(seconds - 1), 1000);
    } else {
      setIsShow(false);
      setTimeout(() => {
        setSeconds(10);
        setIsShow(true);
      }, [1000]);
    }
  });
  
  return (
    <>
      {isShow && (
        <div>
          <h2>{date.toLocaleTimeString()}</h2>
          <p>Countdown: {seconds}</p>
        </div>
      )}
    </>
  );
}
export default Tugas2;
