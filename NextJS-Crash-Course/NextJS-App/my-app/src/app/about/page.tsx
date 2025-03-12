"use client";
import { useRouter } from "next/navigation";

export default function About() {
  const router = useRouter();

  return (
    <div>
      <h1>About Us</h1>
      <button
        onClick={() => router.push("/")}
        className="bg-blue-800 hover:bg-blue-600 text-white p-2 rounded-md"
      >
        Go Back to Home
      </button>
    </div>
  );
}
