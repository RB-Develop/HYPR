import { Input, InputField } from '@/components/ui/Input';
import { Box } from '@/components/ui/box';
import { Text } from '@/components/ui/text';
import { NativeSyntheticEvent, TextInputChangeEventData } from 'react-native';

export const AgeInput = ({
  onChange,
}: {
  onChange: (value: string) => void;
}) => {
  const handleChange = (e: NativeSyntheticEvent<TextInputChangeEventData>) => {
    const value = e.nativeEvent.text;
    onChange(value);
  };
  return (
    <Box className="mt-2">
      <Text>What is your age?</Text>
      <Input variant="outline" size="md">
        <InputField onChange={handleChange} placeholder="What is your age?" />
      </Input>
    </Box>
  );
};
