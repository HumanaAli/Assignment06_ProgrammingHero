"use client";

import { useEffect, useState } from "react";

export default function WorkoutLibrary() {
  const [workouts, setWorkouts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://api.abcz.workers.dev/api/fitlog")
      .then((response) => response.json())
      .then((data) => {
        setWorkouts(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Failed to load workouts:", error);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return (
      <div className="py-12 text-center text-sm text-zinc-500">
        Loading workouts…
      </div>
    );
  }

  return (
    <div className="mt-7 grid gap-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
      {workouts.map((workout) => (
        <div
          key={workout.id}
          className="overflow-hidden rounded-xl border border-zinc-800 bg-zinc-950 transition hover:border-zinc-600"
        >
          <img
            src={workout.image}
            alt={workout.name}
            className="h-44 w-full object-cover"
          />

          <div className="p-4">
            <div className="flex flex-wrap gap-1.5">
              {workout.muscleGroups.map((muscle) => (
                <span
                  key={muscle}
                  className="rounded-full border border-lime-400/30 px-2 py-1 text-[10px] font-bold uppercase tracking-wide text-lime-400"
                >
                  {muscle}
                </span>
              ))}
            </div>

            <h3 className="mt-3 text-base font-black uppercase">
              {workout.name}
            </h3>

            <p className="mt-1 text-xs text-zinc-500">
              {workout.equipment}
            </p>

            <div className="mt-4 flex justify-between border-t border-zinc-800 pt-3 text-[11px] text-zinc-400">
              <span>{workout.duration} min</span>
              <span>{workout.caloriesBurned} kcal</span>
              <span>★ {workout.rating}</span>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}