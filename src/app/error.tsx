"use client";
import { useEffect } from "react";

interface ErrorProps {
  error: Error;
  reset: () => void;
}

export default function ErrorComponent({ error, reset }: ErrorProps) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div className="text-center mt-10">
      <h2>Something went wrong!</h2>
      <button className="hover:text-amber-600" onClick={() => reset()}>Try again</button>
    </div>
  );
}
