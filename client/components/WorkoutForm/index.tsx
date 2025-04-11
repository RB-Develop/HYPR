import { Input, InputField } from '../ui/Input';

export const WorkoutForm = () => {
  return (
    <Input
      variant="outline"
      size="md"
      isDisabled={false}
      isInvalid={false}
      isReadOnly={false}
    >
      <InputField placeholder="Enter Text here..." />
    </Input>
  );
};
