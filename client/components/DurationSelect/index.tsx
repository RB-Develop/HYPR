import {
  Select,
  SelectTrigger,
  SelectInput,
  SelectIcon,
  SelectPortal,
  SelectBackdrop,
  SelectContent,
  SelectDragIndicator,
  SelectDragIndicatorWrapper,
  SelectItem,
} from '@/components/ui/select';

import { Text } from '@/components/ui/text';
import { ChevronDownIcon } from '@/components/ui/icon';
import { Box } from '@/components/ui/box';

export const DurationSelect = ({
  onChange,
}: {
  onChange: (value: number) => void;
}) => {
  const handleChange = (value: string) => {
    const parsedValue = parseInt(value, 10);
    if (!isNaN(parsedValue)) {
      onChange(parsedValue);
    }
  };
  return (
    <Box className="mt-2">
      <Text>For how long do you want your training to be?</Text>
      <Select onValueChange={handleChange}>
        <SelectTrigger variant="outline" size="md">
          <SelectInput placeholder="Select option" />
          <SelectIcon className="mr-3" as={ChevronDownIcon} />
        </SelectTrigger>
        <SelectPortal>
          <SelectBackdrop />
          <SelectContent>
            <SelectDragIndicatorWrapper>
              <SelectDragIndicator />
            </SelectDragIndicatorWrapper>
            <SelectItem label="10 mins" value="10" />
            <SelectItem label="20 mins" value="20" />
            <SelectItem label="30 mins" value="30" />
            <SelectItem label="60 mins" value="60" />
            <SelectItem label="90 mins" value="90" />
          </SelectContent>
        </SelectPortal>
      </Select>
    </Box>
  );
};
