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
} from '../ui/select';

import { Text } from '../ui/text';
import { ChevronDownIcon } from '../ui/icon';

export const WorkoutSelect = () => {
  return (
    <>
      <Text>Select your workout type</Text>
      <Select>
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
    </>
  );
};
