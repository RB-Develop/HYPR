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

export const WorkoutSelect = ({
  onChange,
}: {
  onChange: (value: string) => void;
}) => {
  return (
    <Box className="mt-1">
      <Text>Select your workout type</Text>
      <Select onValueChange={onChange}>
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
            <SelectItem label="Crossfit" value="CROSSFIT" />
            <SelectItem label="Running" value="RUNNING" />
            <SelectItem label="Gym" value="GYM" />
          </SelectContent>
        </SelectPortal>
      </Select>
    </Box>
  );
};
