import { Stack } from 'expo-router';
import { GluestackUIProvider, config } from '@gluestack-ui/themed';

export default function Layout() {
  return (
    <GluestackUIProvider config={config.theme}>
      <Stack
        screenOptions={{
          headerStyle: {
            backgroundColor: '#2F888A',
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',

          },
          headerTitleAlign: 'center',
        }}
      />
    </GluestackUIProvider>
  );
}
