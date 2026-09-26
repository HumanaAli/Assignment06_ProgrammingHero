"use client";

import { useState } from "react";
import Link from "next/link";
import { usePlan } from "../../context/PlanContext";

export default function MyPlanPage() {
  const {
    plan,
    saved,
    removeFromPlan,
    markAsDone,
    removeFromSaved,
  } = usePlan();

  const [activeTab, setActiveTab] = useState("plan");

  const currentList = activeTab === "plan" ? plan : saved;

  const totalMinutes = plan.reduce(
    (total, workout) => total + Number(workout.duration || 0),
    0
  );

  const totalCalories = plan.reduce(
    (total, workout) => total + Number(workout.caloriesBurned || 0),
    0
  );

  return (
    <main className="min-h-screen bg-black px-5 py-10 text-white md:px-8">
      <div className="mx-auto max-w-6xl">
        {/* Heading */}
        <div>
          <p className="text-xs font-bold tracking-[0.25em] text-lime-400">
            FITLOG
          </p>

          <h1 className="mt-2 text-3xl font-black md:text-4xl">
            MY PLAN
          </h1>

          <p className="mt-2 text-sm text-zinc-500">
            Cap of five lifts for today. Finish them, then load more.
          </p>
        </div>

        {/* Metrics */}
        <div className="mt-7 grid grid-cols-3 gap-3">
          <div className="rounded-xl border border-zinc-800 bg-zinc-950 p-4">
            <p className="text-[10px] font-bold text-zinc-500">
              EXERCISES
            </p>

            <p className="mt-2 text-2xl font-black">
              {plan.length}
            </p>
          </div>

          <div className="rounded-xl border border-zinc-800 bg-zinc-950 p-4">
            <p className="text-[10px] font-bold text-zinc-500">
              MINUTES
            </p>

            <p className="mt-2 text-2xl font-black">
              {totalMinutes}
            </p>
          </div>

          <div className="rounded-xl border border-zinc-800 bg-zinc-950 p-4">
            <p className="text-[10px] font-bold text-zinc-500">
              CALORIES
            </p>

            <p className="mt-2 text-2xl font-black">
              {totalCalories}
            </p>
          </div>
        </div>

        {/* Tabs */}
        <div className="mt-8 flex border-b border-zinc-800">
          <button
            type="button"
            onClick={() => setActiveTab("plan")}
            className={`px-5 py-3 text-xs font-black ${
              activeTab === "plan"
                ? "border-b-2 border-lime-400 text-lime-400"
                : "text-zinc-500"
            }`}
          >
            TODAY'S PLAN
          </button>

          <button
            type="button"
            onClick={() => setActiveTab("saved")}
            className={`px-5 py-3 text-xs font-black ${
              activeTab === "saved"
                ? "border-b-2 border-lime-400 text-lime-400"
                : "text-zinc-500"
            }`}
          >
            SAVED
          </button>
        </div>

        {/* Loading / Empty / List */}
        <div className="mt-7">
          {currentList.length === 0 ? (
            <div className="rounded-xl border border-zinc-800 bg-zinc-950 px-5 py-14 text-center">
              <h2 className="text-xl font-black">
                NOTHING HERE YET
              </h2>

              <p className="mx-auto mt-3 max-w-md text-sm leading-6 text-zinc-500">
                Browse the library and add a lift to get today moving.
              </p>

              <Link
                href="/"
                className="mt-6 inline-block rounded-md bg-lime-400 px-5 py-3 text-xs font-black text-black"
              >
                GO TO WORKOUTS
              </Link>
            </div>
          ) : (
            <div className="space-y-3">
              {currentList.map((workout) => (
                <div
                  key={workout.id}
                  className="rounded-xl border border-zinc-800 bg-zinc-950 p-4"
                >
                  <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
                    {/* Thumbnail */}
                    <img
                      src={workout.image}
                      alt={workout.name}
                      className="h-24 w-full rounded-lg object-cover sm:w-32"
                    />

                    {/* Information */}
                    <div className="min-w-0 flex-1">
                      <h3
                        className={`text-base font-black uppercase ${
                          workout.done
                            ? "text-zinc-600 line-through"
                            : "text-white"
                        }`}
                      >
                        {workout.name}
                      </h3>

                      <p className="mt-1 text-xs text-zinc-500">
                        {workout.equipment}
                      </p>

                      <div className="mt-3 flex flex-wrap gap-4 text-[11px] text-zinc-400">
                        <span>◷ {workout.duration} min</span>
                        <span>🔥 {workout.caloriesBurned} kcal</span>
                        <span>★ {workout.rating}</span>
                      </div>
                    </div>

                    {/* Actions */}
                    <div className="flex flex-wrap gap-2 sm:justify-end">
                      <Link
                        href={`/workout/${workout.id}`}
                        className="rounded-md border border-zinc-700 px-3 py-2 text-[10px] font-black"
                      >
                        VIEW DETAILS
                      </Link>

                      {activeTab === "plan" && !workout.done && (
                        <button
                          type="button"
                          onClick={() => markAsDone(workout.id)}
                          className="rounded-md bg-lime-400 px-3 py-2 text-[10px] font-black text-black"
                        >
                          ✓ MARK AS DONE
                        </button>
                      )}

                      <button
                        type="button"
                        onClick={() =>
                          activeTab === "plan"
                            ? removeFromPlan(workout.id)
                            : removeFromSaved(workout.id)
                        }
                        className="rounded-md border border-red-900 px-3 py-2 text-[10px] font-black text-red-400"
                      >
                        ✕ REMOVE
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </main>
  );
}