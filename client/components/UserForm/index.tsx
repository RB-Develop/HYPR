import { GenderSelect } from '@/components/GenderSelect';
import { Box } from '@/components/ui/box';
import { AgeInput } from '@/components/AgeInput';
import { WeightInput } from '@/components/WeightInput';
import { Text } from '@/components/ui/text';
import { LevelSelect } from '@/components/LevelSelect';
import { Button, ButtonText } from '@/components/ui/button';
import { useState } from 'react';
import { Alert } from 'react-native';

export interface UserData {
  gender: string;
  age: string;
  weight: string;
  level: string;
}

export const UserForm = ({ onSave }: { onSave: (data: UserData) => void }) => {
  const [gender, setGender] = useState<string>('');
  const [age, setAge] = useState<string>('12');
  const [weight, setWeight] = useState<string>('');
  const [level, setLevel] = useState<string>('');

  const handleSave = () => {
    onSave({
      gender,
      age,
      weight,
      level,
    });
  };

  return (
    <Box className="p-4">
      <Text className="text-lg">We need some of your personal data</Text>
      <GenderSelect onChange={setGender} />
      <AgeInput onChange={setAge} />
      <WeightInput onChange={setWeight} />
      <LevelSelect onChange={setLevel} />
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
