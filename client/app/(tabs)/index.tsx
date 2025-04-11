import { SafeAreaView, Text } from 'react-native';
import { WorkoutScreen } from '@/components/WorkoutScreen';
import { QueryProvider } from '@/components/QueryClientProvider';

export default function HomeScreen() {
  return (
    <SafeAreaView>
      <QueryProvider>
        <WorkoutScreen />
      </QueryProvider>
    </SafeAreaView>
  );
}
