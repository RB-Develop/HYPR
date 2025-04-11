import { Input, InputField } from '@/components/ui/Input';
import { Box } from '@/components/ui/box';
import { Text } from '@/components/ui/text';
import { NativeSyntheticEvent, TextInputChangeEventData } from 'react-native';

export const WeightInput = ({
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
      <Text>What is your weight?</Text>
      <Input
        variant="outline"
        size="md"
        isDisabled={false}
        isInvalid={false}
        isReadOnly={false}
      >
        <InputField
          onChange={handleChange}
          placeholder="What is your weight?"
        />
      </Input>
    </Box>
  );
};
