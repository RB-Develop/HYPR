import {
  Radio,
  RadioGroup,
  RadioIndicator,
  RadioLabel,
  RadioIcon,
} from '@/components/ui/radio';
import { Text } from '@/components/ui/text';
import { CircleIcon } from '@/components/ui/icon';
import { Box } from '@/components/ui/box';

export const TargetStimulus = ({
  onChange,
}: {
  onChange: (value: string) => void;
}) => {
  return (
    <Box className="mt-2">
      <RadioGroup onChange={onChange}>
        <Text>What will be your goal for today?</Text>
        <Radio value="cardio" size="md">
          <RadioIndicator>
            <RadioIcon as={CircleIcon} />
          </RadioIndicator>
          <RadioLabel>I want cardio focused</RadioLabel>
        </Radio>
        <Radio value="strength" size="md">
          <RadioIndicator>
            <RadioIcon as={CircleIcon} />
          </RadioIndicator>
          <RadioLabel>I want strength focused</RadioLabel>
        </Radio>
      </RadioGroup>
    </Box>
  );
};
