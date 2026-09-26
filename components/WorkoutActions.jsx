"use client";

import { usePlan } from "../context/PlanContext";

export default function WorkoutActions({ workout }) {
  const { addToPlan, saveForLater } = usePlan();

  return (
    <div className="mt-8 flex flex-wrap gap-3">
      <button
        type="button"
        onClick={() => addToPlan(workout)}
        className="rounded-md bg-lime-400 px-5 py-3 text-xs font-black text-black transition hover:bg-lime-300"
      >
        ADD TO TODAY'S PLAN
      </button>

      <button
        type="button"
        onClick={() => saveForLater(workout)}
        className="rounded-md border border-zinc-700 px-5 py-3 text-xs font-black text-white transition hover:border-zinc-500"
      >
        SAVE FOR LATER
      </button>
    </div>
  );
}