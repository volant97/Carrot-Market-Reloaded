import { ScrollAnimationContainer } from "@/components/ScrollAnimationContainer";
import React from "react";

export default function TestPage() {
  return (
    <div className="w-full h-[100dvh] overflow-y-auto overflow-x-hidden scrollbar-hide">
      <div className="flex flex-col items-center gap-4">
        <h1>1</h1>
        <ScrollAnimationContainer>
          <div className="border-4 h-96">
            <h1>Box</h1>
          </div>
        </ScrollAnimationContainer>
        <h1>1</h1>
        <ScrollAnimationContainer>
          <div className="border-4 h-96">
            <h1>Box</h1>
          </div>
        </ScrollAnimationContainer>
        <h1>1</h1>
        <ScrollAnimationContainer>
          <div className="border-4 h-96">
            <h1>Box</h1>
          </div>
        </ScrollAnimationContainer>
        <h1>1</h1>
        <ScrollAnimationContainer>
          <div className="border-4 h-96">
            <h1>Box</h1>
          </div>
        </ScrollAnimationContainer>
        <h1>1</h1>
        <ScrollAnimationContainer>
          <div className="border-4 h-96">
            <h1>Box</h1>
          </div>
        </ScrollAnimationContainer>
        <h1>1</h1>
        <ScrollAnimationContainer>
          <div className="border-4 h-96">
            <h1>Box</h1>
          </div>
        </ScrollAnimationContainer>
        <h1>1</h1>
        <ScrollAnimationContainer>
          <div className="border-4 h-96">
            <h1>Box</h1>
          </div>
        </ScrollAnimationContainer>
      </div>
    </div>
  );
}
