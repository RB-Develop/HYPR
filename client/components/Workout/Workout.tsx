import { ScrollView, View } from 'react-native';
import { VStack } from '@/components/ui/vstack';
import { Heading } from '@/components/ui/heading';
import { WorkoutComponent, type WorkoutSections } from '@/gen/model';
import { Card } from '@/components/ui/card';
import { Divider } from '@/components/ui/divider';
import { HStack } from '@/components/ui/hstack';
import { Text } from '@/components/ui/text';
import React from 'react';

export default function Workout({ stages }: { stages: WorkoutSections[] }) {
  return (
    <ScrollView>
      <View className="pb-[80px] pt-8">
        <VStack space="md" className="px-4" reversed={false}>
          {stages?.map((stage, index) => (
            <React.Fragment key={stage.name}>
              <Stage stage={stage} />
              {stages.length !== index + 1 && <Divider className="my-4" />}
            </React.Fragment>
          ))}
        </VStack>
      </View>
    </ScrollView>
  );
}

function Stage({ stage }: { stage: WorkoutSections }) {
  return (
    <VStack space="md">
      <VStack space="sm" className="mb-4">
        <Heading size="xl">{stage.name}</Heading>
        <Text>{stage.instruction}</Text>
      </VStack>

      {stage.components && (
        <VStack space="md">
          {stage.components.map((exercise) => (
            <Exercise key={exercise.name} exercise={exercise} />
          ))}
        </VStack>
      )}
    </VStack>
  );
}

function Exercise({ exercise }: { exercise: WorkoutComponent }) {
  const {
    name,
    instruction,
    sets,
    weightKilos,
    repetitions,
    exerciseDuration,
    restDuration,
    distance,
  } = exercise;
  return (
    <Card size="md">
      {name && <Heading>{name}</Heading>}

      <HStack space="sm">
        {distance && <Text>Distance: {distance}</Text>}
        {sets && <Text size="sm">Sets: {sets}</Text>}
        {repetitions && <Text size="sm">Reps: {sets}</Text>}
        {weightKilos && <Text size="sm">Weight: {weightKilos} kg</Text>}
      </HStack>

      <HStack space="sm" className="mb-4">
        {exerciseDuration && (
          <Text size="sm">Duration: {exerciseDuration}</Text>
        )}
        {restDuration && <Text size="sm">Rest: {restDuration}</Text>}
      </HStack>

      <Text>{instruction}</Text>
    </Card>
  );
}
