import {
  Checkbox,
  CheckboxIndicator,
  CheckboxLabel,
  CheckboxIcon,
  CheckboxGroup,
} from '@/components/ui/checkbox';
import { CheckIcon } from '@/components/ui/icon';
import { Text } from '@/components/ui/text';
import { Box } from '@/components/ui/box';
import { useState } from 'react';

const GearCheckbox = ({ value, label }: { value: string; label: string }) => {
  return (
    <Checkbox size="md" value={value}>
      <CheckboxIndicator>
        <CheckboxIcon as={CheckIcon} />
      </CheckboxIndicator>
      <CheckboxLabel>{label}</CheckboxLabel>
    </Checkbox>
  );
};

export const GearSelection = ({
  onChange,
}: {
  onChange: (values: Array<string>) => void;
}) => {
  const [values, setValues] = useState<Array<string>>([]);
  const handleChange = (newValues: Array<string>) => {
    setValues(newValues);
    onChange(newValues);
  };
  return (
    <Box className="mt-2">
      <Text>What gear do you have?</Text>
      <CheckboxGroup value={values} onChange={handleChange} isDisabled={false}>
        <GearCheckbox value="barbells" label="Barbells" />
        <GearCheckbox value="rack" label="Rack" />
        <GearCheckbox value="wallballs" label="Wallballs" />
        <GearCheckbox value="everything" label="All of the above" />
      </CheckboxGroup>
    </Box>
  );
};
