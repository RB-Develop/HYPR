import { UserForm, UserData } from '@/components/UserForm';
import { WorkoutForm, WorkoutData } from '@/components/WorkoutForm';
import { useEffect, useState } from 'react';
import { Box } from '@/components/ui/box';
import { useGenerateWorkout } from '@/gen/chat-controller/chat-controller';
import {
  WorkoutPromptType,
  Workout as WorkoutType,
  WorkoutUserLevel,
} from '@/gen/model';
import Workout from '../Workout/Workout';

export const WorkoutScreen = () => {
  const [userData, setUserData] = useState<UserData | null>(null);
  const [workoutData, setWorkoutData] = useState<WorkoutData | null>(null);
  const generateWorkout = useGenerateWorkout();

  const [data, setData] = useState<WorkoutType | null>(null);

  const handleUserDataSave = (data: UserData) => {
    setUserData(data);
  };

  const handleWorkoutDataSave = (workoutData: WorkoutData) => {
    setWorkoutData(workoutData);
  };

  useEffect(() => {
    if (workoutData && userData) {
      generateWorkout.mutate(
        {
          data: {
            type: workoutData.workoutType as WorkoutPromptType,
            participants: workoutData.numParticipants,
            durationMinutes: workoutData.duration,
            gear: workoutData.gear,
            targetStimulus: workoutData.targetStimulus,
            user: {
              gender: userData.gender,
              age: userData.age,
              weightKilos: userData.weight,
              level: userData.level as WorkoutUserLevel,
            },
            fullProgram: true,
          },
        },
        {
          onSuccess(data, variables, context) {
            setData(data);
          },
        },
      );
    }
  }, [workoutData]);

  const dataToRender = () => {
    if (data) {
      return <Workout stages={data.sections} />;
    }

    if (userData) {
      return (
        <WorkoutForm
          onSave={handleWorkoutDataSave}
          isLoading={generateWorkout.isPending}
        />
      );
    }

    return <UserForm onSave={handleUserDataSave} />;
  };

  return <Box>{dataToRender()}</Box>;
};
