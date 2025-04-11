import { WorkoutSession } from '@/gen/model';
import { SafeAreaView } from 'react-native-safe-area-context';
import Workout from '@/components/Workout/Workout';

export default function TabTwoScreen() {
  const stages: WorkoutSession[] = MOCK_DATA.components;

  return (
    <SafeAreaView edges={['top', 'bottom']}>
      <Workout stages={stages} />
    </SafeAreaView>
  );
}

const MOCK_DATA = {
  title: 'The 25-Minute Speedy Sprint Spectacular',
  description:
    'An electrifying solo running workout designed to boost your cardiovascular fitness and unleash your inner speed demon!',
  duration: '25 minutes',
  stimulusExplanation:
    'This workout incorporates dynamic warm-ups to prepare the body, followed by high-intensity interval training to significantly elevate heart rate and improve cardiovascular endurance, finishing with a maximum-effort sprint to maximize cardio benefits.',
  components: [
    {
      name: 'Dynamic Warm-Up: Ready, Set, Go!',
      instruction:
        'Prepare your body for a thrilling run with dynamic movements.',
      targetRounds: 1,
      workoutType: 'warm-up',
      duration: '5 minutes',
      components: [
        {
          name: 'Leg Swings',
          instruction:
            'Stand on one leg and swing the other leg forward and backward, then switch.',
          repetitions: 10,
          sets: 1,
          weightKilos: null,
          distance: null,
          exerciseDuration: '1 minute',
          restDuration: '0',
        },
        {
          name: 'High Knees',
          instruction:
            'Run in place, bringing your knees up to hip height quickly.',
          repetitions: null,
          sets: 1,
          weightKilos: null,
          distance: null,
          exerciseDuration: '1 minute',
          restDuration: '0',
        },
        {
          name: 'Butt Kicks',
          instruction: 'Run in place, kicking your heels towards your glutes.',
          repetitions: null,
          sets: 1,
          weightKilos: null,
          distance: null,
          exerciseDuration: '1 minute',
          restDuration: '0',
        },
        {
          name: 'Arm Circles',
          instruction:
            'Extend arms to the side and make small circles, then reverse.',
          repetitions: null,
          sets: 1,
          weightKilos: null,
          distance: null,
          exerciseDuration: '1 minute',
          restDuration: '0',
        },
        {
          name: 'Walking Lunges',
          instruction:
            'Take a step forward into a lunge, alternating legs as you walk.',
          repetitions: null,
          sets: 1,
          weightKilos: null,
          distance: null,
          exerciseDuration: '1 minute',
          restDuration: '0',
        },
      ],
    },
    {
      name: 'The Speedy Intervals: Race Against Time!',
      instruction:
        'Engage in a series of high-intensity intervals to push your cardio limits.',
      targetRounds: 4,
      workoutType: 'intervals',
      duration: '15 minutes',
      components: [
        {
          name: 'Sprint',
          instruction:
            'Run as fast as you can for 30 seconds, giving it your all!',
          repetitions: null,
          sets: 4,
          weightKilos: null,
          distance: null,
          exerciseDuration: '30 seconds',
          restDuration: '30 seconds',
        },
        {
          name: 'Jog Recovery',
          instruction:
            'Slow down to a light jog to recover before the next sprint.',
          repetitions: null,
          sets: 4,
          weightKilos: null,
          distance: null,
          exerciseDuration: '1 minute',
          restDuration: '0',
        },
      ],
    },
    {
      name: 'Final Burst: Go for Gold!',
      instruction: 'Finish strong with an all-out sprint to the finish line!',
      targetRounds: 1,
      workoutType: 'sprint',
      duration: '5 minutes',
      components: [
        {
          name: 'All-Out Sprint',
          instruction: 'Run at your maximum effort for the entire duration.',
          repetitions: null,
          sets: 1,
          weightKilos: null,
          distance: null,
          exerciseDuration: '5 minutes',
          restDuration: '0',
        },
      ],
    },
  ],
};
