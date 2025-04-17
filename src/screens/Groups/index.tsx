import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

import { Container, Title } from './styles';

export function Groups() {
  return (
    <Container>
      <Title>
        Groups
      </Title>
      <StatusBar style="auto" />
    </Container>
  );
}
