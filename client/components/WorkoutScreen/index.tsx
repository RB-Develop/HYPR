import { UserForm, UserData } from '@/components/UserForm';
import { WorkoutForm, WorkoutData } from '@/components/WorkoutForm';
import { useState } from 'react';
import { Box } from '@/components/ui/box';

export const WorkoutScreen = () => {
  const [userData, setUserData] = useState<UserData | null>(null);
  const [workoutData, setWorkoutData] = useState<WorkoutData | null>(null);
  const handleUserDataSave = (data: UserData) => {
    setUserData(data);
  };

  const handleWorkoutDataSave = (workoutData: WorkoutData) => {
    setWorkoutData(workoutData);
  };

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
