import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { colors, textStyles } from 'redvest/util/styles';

function GameScreen() {
  return (
    <View style={styles.container}>
      <Text style={[textStyles.bigRegular, { color: colors.offWhite }]}>Coming soon...</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: colors.darkBackground,
  },
});

export default GameScreen;
