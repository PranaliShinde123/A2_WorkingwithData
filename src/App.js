import "./styles.css";
import React, { useEffect, useRef } from "react";
export default function App() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const dates = new Array(101).fill().map((_, index) => {
      const today = new Date();
      const daysInMilliseconds = 1000 * 60 * 60 * 24;
      const daysAgo = (101 - index) * 2 - 2;
      const date = new Date(today.getTime() - daysAgo * daysInMilliseconds);
      return date;
    });
    const randomValues = dates.map((date) => ({
      date,
      val: Math.floor(Math.random() * 51)
    }));
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    canvas.width = randomValues.length * 13;
    canvas.height = window.innerHeight - 20;
    ctx.fillStyle = `rgb(${Math.floor(Math.random() * 256)}, ${Math.floor(
      Math.random() * 256
    )}, ${Math.floor(Math.random() * 256)})`;
    randomValues.forEach(({ val }, index) => {
      const x = index * 13 + 6;
      const y = canvas.height / 2 - val;
      ctx.beginPath();
      ctx.arc(x, y, 5, 0, 2 * Math.PI);
      ctx.fill();
    });
  }, []);

  return (
    <div className="App">
      <canvas ref={canvasRef} />
    </div>
  );
}
