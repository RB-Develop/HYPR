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
import { ChevronDownIcon } from '../ui/icon';
import { Box } from '@/components/ui/box';

export const NumParticipantsSelect = ({
  onChange,
}: {
  onChange: (value: number) => void;
}) => {
  const handleChange = (value: string) => {
    const numValue = parseInt(value, 10);
    if (!isNaN(numValue)) {
      onChange(numValue);
    }
  };
  return (
    <Box className="mt-2">
      <Text>How many people working out?</Text>
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
            <SelectItem label="1" value="1" />
            <SelectItem label="2" value="2" />
            <SelectItem label="3" value="3" />
            <SelectItem label="4" value="4" />
            <SelectItem label="5" value="5" />
          </SelectContent>
        </SelectPortal>
      </Select>
    </Box>
  );
};
