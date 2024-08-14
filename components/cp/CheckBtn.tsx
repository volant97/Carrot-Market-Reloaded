import React from "react";

const box0 =
  "flex justify-center items-center w-full h-10 border-2 border-blue-700";

interface Props {
  v: number;
  onClick: () => void;
}

export default function CheckBtn({ v, onClick }: Props) {
  let text = "";

  if (v === 1) text = "v";
  if (v === 2) text = "-";

  return (
    <button className={`${box0} active:bg-blue-600 `} onClick={onClick}>
      {text}
    </button>
  );
}
