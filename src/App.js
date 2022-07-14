import { useEffect, useState } from "react"
import {initialWorkouts, generateWorkout} from "./Workouts.js"
import "./App.css"

function App() {
  const [workouts, setWorkouts] = useState(initialWorkouts)

  const addNewWorkout = () => {
    const newWorkout = generateWorkout()
    const newWorkouts = [...workouts, newWorkout]
    setWorkouts(newWorkouts)
    // test()
  }
  
  const deleteWorkout = (workout) => {
    const workoutsWithoutDeleteTarget = workouts.filter((workoutItem) => {
      return workoutItem !== workout
    })
    setWorkouts(workoutsWithoutDeleteTarget)
  }
  
  const completeWorkout = (workout) => {
    const updatedWorkouts = workouts.map((workoutItem) => {
      if (workoutItem === workout) {
        return {...workoutItem, done: true}
      }
      return workoutItem
    })
    setWorkouts(updatedWorkouts)
  }

  return (
    <div className="App">
      <h1>🏋️‍♀️Workout Generator</h1>
      <button onClick={addNewWorkout}>Add New Workout</button>
      <ul>
        {workouts.map((workout, index) => (
          <li key={index}>
            <p>
              {workout.sets}x sets of <strong>{workout.reps}x{workout.exercise}</strong> with {workout.rest} seconds rest
            </p>
            {!workout.done && 
              <button onClick={e=>completeWorkout(workout)}>Done</button>}
            {workout.done && 
             <p>✅</p>}
            <button onClick={e=>deleteWorkout(workout)}>Delete</button>
            <button onClick={() => console.log("workouts:", workouts)}>log workouts</button>
          </li>
        ))}
      </ul>
      
    </div>
  )
}
  // const test = () => {
  //   const timer = setTimeout(() => {
  //     console.log("workouts:", workouts)
  //   }, 2000);
  //   return () => clearTimeout(timer);
  // };
export default App
