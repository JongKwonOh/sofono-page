import { useState } from "react";
import { Comparison } from "./Comparison";

type DemoPair = {
  leftSrc: string;
  rightSrc: string;
  leftAlt: string;
  rightAlt: string;
  label: string;
};

interface DemoSwitcherProps {
  pairs: DemoPair[];
}

export default function DemoSwitcher({ pairs }: DemoSwitcherProps) {
  const [index, setIndex] = useState(0);

  const current = pairs[index];

  function prev() {
    setIndex((i) => (i === 0 ? pairs.length - 1 : i - 1));
  }

  function next() {
    setIndex((i) => (i === pairs.length - 1 ? 0 : i + 1));
  }

  return (
    <div style={{ maxWidth: "50rem", margin: "0 auto" }}>
      <div className="flex justify-between items-center mb-4">
        <button
          onClick={prev}
          className="px-3 py-1 rounded-lg bg-zinc-200 text-zinc-800 dark:bg-zinc-700 dark:text-zinc-100 text-sm font-medium"
        >
          ◀ Prev
        </button>

        <div className="text-xl text-zinc-600 dark:text-zinc-300 font-semibold">
          {current.label}
        </div>

        <button
          onClick={next}
          className="px-3 py-1 rounded-lg bg-zinc-200 text-zinc-800 dark:bg-zinc-700 dark:text-zinc-100 text-sm font-medium"
        >
          Next ▶
        </button>
      </div>

      <figure className="bg-white dark:bg-zinc-800 inline-block px-5 py-5 my-16 rounded-xl w-full">
        <Comparison
          itemOne={
            <img
              src={current.leftSrc}
              alt={current.leftAlt}
              style={{
                width: "100%",
                height: "auto",
                objectFit: "contain",
              }}
            />
          }
          itemTwo={
            <img
              src={current.rightSrc}
              alt={current.rightAlt}
              style={{
                width: "100%",
                height: "auto",
                objectFit: "contain",
              }}
            />
          }
        />

        <figcaption className="text-center text-sm text-zinc-600 dark:text-zinc-400 mt-2">
          A photo comparison between low resolution input (Bicubic) and high resolution output (Reconstructed).
        </figcaption>
      </figure>
    </div>
  );
}
