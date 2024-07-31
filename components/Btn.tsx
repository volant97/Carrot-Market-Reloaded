"use client";
import { useFormStatus } from "react-dom";

interface Props {
  text: string;
}

export default function Btn({ text }: Props) {
  const { pending } = useFormStatus();

  return (
    <button
      disabled={pending}
      className="primary-btn h-10 disabled:bg-neutral-400 disabled:text-neutral-300 disabled:cursor-wait"
    >
      {pending ? "로딩중..." : text}
    </button>
  );
}
