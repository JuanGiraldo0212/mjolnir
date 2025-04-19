'use client'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { Button } from "@/components/ui/button"
import { Plus } from 'lucide-react';
import { useState } from "react";
import ExerciseCard from "@/components/coach-page/exercise-card";

type SessionExercises = {
  active: boolean;
  exerciseObject: object;
};

export default function CoachPage() {
  const mocks: SessionExercises[] = [
    {
      active: false,
      exerciseObject: {}
    },
    {
      active: false,
      exerciseObject: {}
    },
    {
      active: false,
      exerciseObject: {}
    },
    {
      active: false,
      exerciseObject: {}
    },
  ];
  const [workingOut, setWorkingOut] = useState<boolean>(false);
  const [exercises, setExercises] = useState<SessionExercises[]>(mocks);

  const closeCards = () => {
    const clone = [...exercises]
    clone.forEach((exercise: SessionExercises) => {
      exercise.active = false;
    });
    setExercises(clone);
  }

  const openCard = (card: SessionExercises) => {
    const clone = [...exercises];
    const i = exercises.indexOf(card);
    clone[i].active = true;
    setExercises(clone);
  }

  return (
    <>
      <main className="w-full p-5 flex flex-col gap-y-3">
        <header className="mb-2 p-2 border-b border-black-900 shadow-md">
          <h1 className="font-bold text-3xl">Coach Page</h1>
        </header>
        <div>
          {!workingOut ? (<div className="flex flex-row gap-x-2">
            <Select>
              <SelectTrigger className="w-full">
                <SelectValue placeholder="Select Protocol..." />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="light">Light</SelectItem>
                <SelectItem value="dark">Dark</SelectItem>
                <SelectItem value="system">System</SelectItem>
              </SelectContent>
            </Select>
            <Button size="icon">
              <Plus />
            </Button>
          </div>) : (<div className="flex border rounded-md p-2 justify-between bg-secondary">
            <p>Summer Shredaton</p>
            <p>00:12:00</p>
          </div>)}
          <div className="p-2">
            <h1 className="font-bold underline">{new Date().toDateString()} - Leg Day</h1>
            <p className="pb-2">Overview: 5 exercises - 15 sets</p>
            <div className="flex flex-col gap-y-2">
              {exercises.map((exercise: SessionExercises) => (
                <div onClick={() => {
                  closeCards();
                  openCard(exercise);
                }}>
                  <ExerciseCard open={exercise.active} />
                </div>
              ))}
            </div>
          </div>

          {!workingOut ? (<Button className="w-full" onClick={() => {
            setWorkingOut(true);
          }}>
            Start Workout
          </Button>) : <Button className="w-full" variant='destructive' onClick={() => {
            setWorkingOut(false);
          }}>Stop Workout</Button>}
        </div>
      </main>
    </>
  );
}
