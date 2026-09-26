"use client";

import { createContext, useContext, useEffect, useState } from "react";
import { toast } from "react-toastify";

const PlanContext = createContext();

export function PlanProvider({ children }) {
  const [plan, setPlan] = useState([]);
  const [saved, setSaved] = useState([]);

  useEffect(() => {
    const storedPlan = localStorage.getItem("fitlog-plan");
    const storedSaved = localStorage.getItem("fitlog-saved");

    if (storedPlan) {
      setPlan(JSON.parse(storedPlan));
    }

    if (storedSaved) {
      setSaved(JSON.parse(storedSaved));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("fitlog-plan", JSON.stringify(plan));
  }, [plan]);

  useEffect(() => {
    localStorage.setItem("fitlog-saved", JSON.stringify(saved));
  }, [saved]);

  function addToPlan(workout) {
    if (plan.length >= 5) {
      toast.error("Today's plan can contain only 5 workouts.");
      return;
    }

    if (plan.some((item) => item.id === workout.id)) {
      toast.info("This workout is already in today's plan.");
      return;
    }

    setPlan((current) => [...current, { ...workout, done: false }]);
    toast.success("Added to today's plan");
  }

  function removeFromPlan(id) {
    setPlan((current) => current.filter((item) => item.id !== id));
    toast.success("Removed from today's plan");
  }

  function markAsDone(id) {
    setPlan((current) =>
      current.map((item) =>
        item.id === id ? { ...item, done: true } : item
      )
    );

    toast.success("Workout marked as done");
  }

  function saveForLater(workout) {
    if (saved.some((item) => item.id === workout.id)) {
      toast.info("This workout is already saved.");
      return;
    }

    setSaved((current) => [...current, workout]);
    toast.success("Saved for later");
  }

  function removeFromSaved(id) {
    setSaved((current) => current.filter((item) => item.id !== id));
    toast.success("Removed from saved");
  }

  return (
    <PlanContext.Provider
      value={{
        plan,
        saved,
        addToPlan,
        removeFromPlan,
        markAsDone,
        saveForLater,
        removeFromSaved,
      }}
    >
      {children}
    </PlanContext.Provider>
  );
}

export function usePlan() {
  return useContext(PlanContext);
}