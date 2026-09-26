"use client";

import { useEffect, useMemo, useState } from "react";
import Link from "next/link";

export default function WorkoutLibrary() {
  const [workouts, setWorkouts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [sortBy, setSortBy] = useState("duration");

  useEffect(() => {
    fetch("https://api.abcz.workers.dev/api/fitlog")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Failed to fetch workouts");
        }

        return response.json();
      })
      .then((data) => {
        setWorkouts(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Failed to load workouts:", error);
        setLoading(false);
      });
  }, []);

  const sortedWorkouts = useMemo(() => {
    return [...workouts].sort((a, b) => {
      if (sortBy === "duration") {
        return Number(a.duration) - Number(b.duration);
      }

      if (sortBy === "calories") {
        return Number(a.caloriesBurned) - Number(b.caloriesBurned);
      }

      if (sortBy === "rating") {
        return Number(b.rating) - Number(a.rating);
      }

      return 0;
    });
  }, [workouts, sortBy]);

  if (loading) {
    return (
      <div className="py-12 text-center text-sm text-zinc-500">
        Loading workouts…
      </div>
    );
  }

  return (
    <div>
      {/* Sort */}
      <div className="mt-6 flex justify-end">
        <label className="flex items-center gap-2 text-xs text-zinc-500">
          SORT BY

          <select
            value={sortBy}
            onChange={(event) => setSortBy(event.target.value)}
            className="rounded-md border border-zinc-700 bg-zinc-950 px-3 py-2 text-xs font-bold text-white outline-none"
          >
            <option value="duration">Duration</option>
            <option value="calories">Calories</option>
            <option value="rating">Rating</option>
          </select>
        </label>
      </div>

      {/* Workout Cards */}
      <div className="mt-5 grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3">
        {sortedWorkouts.map((workout) => (
          <Link
            key={workout.id}
            href={`/workout/${workout.id}`}
            className="block overflow-hidden rounded-xl border border-zinc-800 bg-zinc-950 transition hover:border-zinc-600"
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
          </Link>
        ))}
      </div>
    </div>
  );
}