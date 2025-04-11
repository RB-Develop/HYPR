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
import { WorkoutUserLevel } from '@/gen/model';

export const LevelSelect = ({
  onChange,
}: {
  onChange: (value: string) => void;
}) => {
  return (
    <Box className="mt-2">
      <Text>What is your level?</Text>
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
            <SelectItem label="Beginner" value={WorkoutUserLevel.BEGINNER} />
            <SelectItem
              label="Intermediate"
              value={WorkoutUserLevel.INTERMEDIATE}
            />
            <SelectItem
              label="Experienced"
              value={WorkoutUserLevel.EXPERIENCED}
            />
            <SelectItem label="Elite" value={WorkoutUserLevel.ELITE} />
          </SelectContent>
        </SelectPortal>
      </Select>
    </Box>
  );
};
