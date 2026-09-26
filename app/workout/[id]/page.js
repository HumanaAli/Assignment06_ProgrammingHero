import Link from "next/link";
import WorkoutActions from "../../../components/WorkoutActions";

async function getWorkout(id) {
  try {
    const response = await fetch(
      `https://api.abcz.workers.dev/api/fitlog/${id}`,
      {
        cache: "no-store",
      }
    );

    if (!response.ok) {
      return null;
    }

    return response.json();
  } catch (error) {
    console.error("Failed to fetch workout:", error);
    return null;
  }
}

export default async function WorkoutDetails({ params }) {
  const { id } = await params;
  const workout = await getWorkout(id);

  if (!workout) {
    return (
      <main className="min-h-screen bg-black px-5 py-16 text-white">
        <div className="mx-auto max-w-6xl">
          <p className="text-xs font-bold tracking-[0.25em] text-lime-400">
            FITLOG
          </p>

          <h1 className="mt-3 text-4xl font-black">
            WORKOUT NOT FOUND
          </h1>

          <Link
            href="/"
            className="mt-6 inline-block rounded-md bg-lime-400 px-5 py-3 text-xs font-black text-black"
          >
            BACK TO WORKOUTS
          </Link>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-black px-5 py-10 text-white md:px-8">
      <div className="mx-auto grid max-w-6xl gap-8 md:grid-cols-2">
        {/* Image */}
        <div className="overflow-hidden rounded-xl border border-zinc-800">
          <img
            src={workout.image}
            alt={workout.name}
            className="h-full min-h-[380px] w-full object-cover"
          />
        </div>

        {/* Information */}
        <div>
          <p className="text-xs font-bold tracking-[0.25em] text-lime-400">
            WORKOUT DETAILS
          </p>

          <h1 className="mt-3 text-3xl font-black uppercase md:text-4xl">
            {workout.name}
          </h1>

          <p className="mt-4 text-sm leading-6 text-zinc-400">
            {workout.description}
          </p>

          {/* Tags */}
          <div className="mt-5 flex flex-wrap gap-2">
            {workout.muscleGroups?.map((muscle) => (
              <span
                key={muscle}
                className="rounded-full border border-lime-400/30 px-3 py-1 text-[10px] font-bold uppercase text-lime-400"
              >
                {muscle}
              </span>
            ))}
          </div>

          {/* Specs */}
          <div className="mt-7 overflow-hidden rounded-xl border border-zinc-800">
            <div className="grid grid-cols-2 border-b border-zinc-800">
              <span className="p-3 text-[10px] font-bold text-zinc-500">
                EQUIPMENT
              </span>
              <span className="p-3 text-sm">
                {workout.equipment}
              </span>
            </div>

            <div className="grid grid-cols-2 border-b border-zinc-800">
              <span className="p-3 text-[10px] font-bold text-zinc-500">
                DIFFICULTY
              </span>
              <span className="p-3 text-sm">
                {workout.difficulty}
              </span>
            </div>

            <div className="grid grid-cols-2 border-b border-zinc-800">
              <span className="p-3 text-[10px] font-bold text-zinc-500">
                SETS
              </span>
              <span className="p-3 text-sm">
                {workout.sets}
              </span>
            </div>

            <div className="grid grid-cols-2 border-b border-zinc-800">
              <span className="p-3 text-[10px] font-bold text-zinc-500">
                REPS
              </span>
              <span className="p-3 text-sm">
                {workout.reps}
              </span>
            </div>

            <div className="grid grid-cols-2 border-b border-zinc-800">
              <span className="p-3 text-[10px] font-bold text-zinc-500">
                DURATION
              </span>
              <span className="p-3 text-sm">
                {workout.duration} min
              </span>
            </div>

            <div className="grid grid-cols-2 border-b border-zinc-800">
              <span className="p-3 text-[10px] font-bold text-zinc-500">
                CALORIES
              </span>
              <span className="p-3 text-sm">
                {workout.caloriesBurned} kcal
              </span>
            </div>

            <div className="grid grid-cols-2">
              <span className="p-3 text-[10px] font-bold text-zinc-500">
                RATING
              </span>
              <span className="p-3 text-sm">
                ★ {workout.rating}
              </span>
            </div>
          </div>

          {/* Instructions */}
          <div className="mt-7">
            <h2 className="text-lg font-black">
              INSTRUCTIONS
            </h2>

            <ol className="mt-4 space-y-3">
              {workout.instructions?.map((instruction, index) => (
                <li
                  key={index}
                  className="flex gap-3 text-sm leading-6 text-zinc-400"
                >
                  <span className="font-bold text-lime-400">
                    {String(index + 1).padStart(2, "0")}
                  </span>

                  <span>{instruction}</span>
                </li>
              ))}
            </ol>
          </div>

          {/* Functional Buttons */}
          <WorkoutActions workout={workout} />
        </div>
      </div>
    </main>
  );
}