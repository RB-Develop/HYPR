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
            <SelectItem label="Beginner" value="BEGINNER" />
            <SelectItem label="Intermediate" value="INTERMEDIATE" />
            <SelectItem label="Experienced" value="EXPERIENCED" />
            <SelectItem label="Elite" value="ELITE" />
          </SelectContent>
        </SelectPortal>
      </Select>
    </Box>
  );
};
