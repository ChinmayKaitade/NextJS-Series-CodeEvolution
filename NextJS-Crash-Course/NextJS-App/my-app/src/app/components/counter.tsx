"use client";
import { useId, useState } from "react";
import { useAuth, useUser } from "@clerk/nextjs";

export const Counter = () => {
  // const { isLoaded, userId, sessionId, getToken } = useAuth();
  const { isLoaded, isSignedIn } = useAuth();

  console.log("Counter Component");
  const [count, setCount] = useState(0);

  // if (!isLoaded || !useId) {
  //   return null;
  // }

  if (!isLoaded || !isSignedIn) {
    return null;
  }
  return (
    <>
      <button
        className="bg-orange-400 hover:bg-orange-700 p-2 rounded-md"
        onClick={() => setCount(count + 1)}
      >
        Clicked {count} times
      </button>
    </>
  );
};
