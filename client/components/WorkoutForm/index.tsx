import { Box } from '@/components/ui/box';
import { WorkoutSelect } from '@/components/WorkoutSelect';

export const WorkoutForm = () => {
  return (
    <Box className="p-4">
      <WorkoutSelect />
    </Box>
  );
};
