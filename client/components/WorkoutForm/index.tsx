import { Box } from '../ui/box';
import { WorkoutSelect } from '@/components/WorkoutSelect';

export const WorkoutForm = () => {
  return (
    <Box className="p-4">
      <WorkoutSelect />
    </Box>
  );
};
