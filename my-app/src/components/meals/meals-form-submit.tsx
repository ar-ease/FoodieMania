"use client";
import { useFormStatus } from "react-dom";
export default function MealsFormSubmit() {
  const { pending } = useFormStatus();
  // const pending = false;
  return (
    <>
      <button disabled={pending}>
        {pending ? "Submitting..." : "Share Meals"}
      </button>
    </>
  );
}
