import { WorkoutForm } from '@/components/WorkoutForm';
import { SafeAreaView, Text } from 'react-native';

export default function HomeScreen() {
  return (
    <SafeAreaView>
      <Text>Home Page</Text>
      <WorkoutForm />
    </SafeAreaView>
  );
}
