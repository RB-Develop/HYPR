import { NumParticipantsSelect } from '@/components/NumParticipantsSelect';
import { Box } from '../ui/box';
import { WorkoutSelect } from '@/components/WorkoutSelect';
import { DurationSelect } from '@/components/DurationSelect';
import { GearSelection } from '@/components/GearSelection';
import { TargetStimulus } from '@/components/TargetStimulus';
import { Text } from '@/components/ui/text';
import { useState } from 'react';
import { Button, ButtonText } from '@/components/ui/button';

export interface WorkoutData {
  workoutType: string;
  numParticipants: number;
  duration: number;
  gear: string[];
  targetStimulus: string[];
}

export const WorkoutForm = ({
  onSave,
}: {
  onSave: (values: WorkoutData) => void;
}) => {
  const [workoutType, setWorkoutType] = useState<string>('');
  const [numParticipants, setNumParticipants] = useState<number>(1);
  const [duration, setDuration] = useState<number>(0);
  const [gear, setGear] = useState<string[]>([]);
  const [targetStimulus, setTargetStimulus] = useState<string[]>([]);

  const handleSave = () => {
    onSave({
      workoutType,
      numParticipants,
      duration,
      gear,
      targetStimulus,
    });
  };
  return (
    <Box className="p-4">
      <Text className="text-lg">Now tell us what you want to do today?</Text>
      <WorkoutSelect onChange={setWorkoutType} />
      <NumParticipantsSelect onChange={setNumParticipants} />
      <DurationSelect onChange={setDuration} />
      <GearSelection onChange={setGear} />
      <TargetStimulus onChange={setTargetStimulus} />
      <Button
        size="md"
        variant="solid"
        action="primary"
        className="mt-4 bg-blue-500"
        onPress={handleSave}
      >
        <ButtonText>Save</ButtonText>
      </Button>
    </Box>
  );
};
