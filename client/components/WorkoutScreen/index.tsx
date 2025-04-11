import { UserForm, UserData } from '@/components/UserForm';
import { WorkoutForm, WorkoutData } from '@/components/WorkoutForm';
import { useEffect, useState } from 'react';
import { Box } from '@/components/ui/box';
import { useGenerateWorkout } from '@/gen/chat-controller/chat-controller';
import { WorkoutPromptType, WorkoutUserLevel } from '@/gen/model';

export const WorkoutScreen = () => {
  const [userData, setUserData] = useState<UserData | null>(null);
  const [workoutData, setWorkoutData] = useState<WorkoutData | null>(null);
  const generateWorkout = useGenerateWorkout();

  const handleUserDataSave = (data: UserData) => {
    setUserData(data);
  };

  const handleWorkoutDataSave = (workoutData: WorkoutData) => {
    setWorkoutData(workoutData);
  };

  useEffect(() => {
    if (workoutData && userData) {
      generateWorkout.mutate({
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
        },
      });
    }
  }, [workoutData]);

  return (
    <Box>
      {userData ? (
        <WorkoutForm onSave={handleWorkoutDataSave} />
      ) : (
        <UserForm onSave={handleUserDataSave} />
      )}
    </Box>
  );
};
