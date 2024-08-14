"use client";

import CheckBtn from "@/components/cp/CheckBtn";
import React, { useState } from "react";

const box1 = "flex w-full border-2 border-white";
const box2 = "flex w-full border-2 border-red-400";
const box2_col = "flex flex-col w-full border-2 border-red-400";
const box2_grid =
  "grid grid-rows-3 grid-flow-col w-full border-2 border-red-400";
const box3 = "flex w-full border-2 border-red-700";
const box3_col = "flex flex-col w-full border-2 border-red-700";
const box0 =
  "flex justify-center items-center w-full h-10 border-2 border-blue-700";

const center = "justify-center items-center";

export default function CPPage() {
  const [arr1, setArr1] = useState<number[]>([0, 0, 0, 0, 0, 0, 0, 0, 0]);
  const [arr2, setArr2] = useState<number[]>([0, 0, 0, 0, 0, 0, 0, 0, 0]);
  const [arr3, setArr3] = useState<number[]>([0, 0, 0, 0, 0, 0, 0, 0, 0]);

  const increaseValue = (arrNum: number, index: number) => {
    if (arrNum === 1) {
      setArr1((prev) =>
        prev.map((v, i) => {
          return i === index ? (v === 2 ? (v = 0) : v + 1) : v;
        })
      );
    }
    if (arrNum === 2) {
      setArr2((prev) =>
        prev.map((v, i) => {
          return i === index ? (v === 2 ? (v = 0) : v + 1) : v;
        })
      );
    }
    if (arrNum === 3) {
      setArr3((prev) =>
        prev.map((v, i) => {
          return i === index ? (v === 2 ? (v = 0) : v + 1) : v;
        })
      );
    }
  };

  return (
    <div className="flex flex-col items-center gap-6 p-10">
      <h1 className="font-medium text-2xl">
        크라임퍼즐에 오신것을 환영합니다!
      </h1>
      <div className="flex flex-col w-full h-full">
        {/* 1단 */}
        <div className={`${box1}`}>
          {/* 1구역 */}
          <div className={`${box2_col}`}></div>

          {/* 2구역 */}
          <div className={`${box2_col}`}>
            <div className={`${box3} ${center}`}>용의자</div>
            <div className={`${box3}`}>
              <div className={`${box0}`}>브라운</div>
              <div className={`${box0}`}>버밀</div>
              <div className={`${box0}`}>아주어</div>
            </div>
          </div>

          {/* 3구역 */}
          <div className={`${box2_col}`}>
            <div className={`${box3} ${center}`}>장소</div>
            <div className={`${box3}`}>
              <div className={`${box0}`}>마당</div>
              <div className={`${box0}`}>차고</div>
              <div className={`${box0}`}>침실</div>
            </div>
          </div>
        </div>

        {/* 2단 */}
        <div className={`${box1}`}>
          {/* 4구역 */}
          <div className={`${box2}`}>
            <div className={`${box3} ${center}`}>무기</div>
            <div className={`${box3_col}`}>
              <div className={`${box0}`}>보드</div>
              <div className={`${box0}`}>수정</div>
              <div className={`${box0}`}>암호책</div>
            </div>
          </div>

          {/* 5구역 */}
          <div className={`${box2_grid}`}>
            {arr1.map((v, i) => (
              <CheckBtn key={i} v={v} onClick={() => increaseValue(1, i)} />
            ))}
          </div>

          {/* 6구역 */}
          <div className={`${box2_grid}`}>
            {arr2.map((v, i) => (
              <CheckBtn key={i} v={v} onClick={() => increaseValue(2, i)} />
            ))}
          </div>
        </div>

        {/* 3단 */}
        <div className="flex">
          <div className={`${box1}`}>
            {/* 7구역 */}
            <div className={`${box2}`}>
              <div className={`${box3} ${center}`}>장소</div>
              <div className={`${box3_col}`}>
                <div className={`${box0}`}>마당</div>
                <div className={`${box0}`}>차고</div>
                <div className={`${box0}`}>침실</div>
              </div>
            </div>

            {/* 8구역 */}
            <div className={`${box2_grid}`}>
              {arr3.map((v, i) => (
                <CheckBtn key={i} v={v} onClick={() => increaseValue(3, i)} />
              ))}
            </div>

            {/* 9구역 */}
            <div className={`${box2_col}`}></div>
          </div>
        </div>
      </div>
    </div>
  );
}
