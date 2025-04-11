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

export const GenderSelect = ({
  onChange,
}: {
  onChange: (value: string) => void;
}) => {
  return (
    <Box className="mt-2">
      <Text>Select your gender</Text>
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
            <SelectItem label="Male" value="MALE" />
            <SelectItem label="Female" value="FEMALE" />
          </SelectContent>
        </SelectPortal>
      </Select>
    </Box>
  );
};
