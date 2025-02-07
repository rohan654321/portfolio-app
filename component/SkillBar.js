import React, { useEffect, useRef } from 'react';
import { View, Text, StyleSheet, Animated } from 'react-native';

const SkillBar = ({ skill, animate }) => {
  const animatedWidth = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    if (animate) {
      Animated.timing(animatedWidth, {
        toValue: skill.level,
        duration: 1000,
        useNativeDriver: false,
      }).start();
    } else {
      animatedWidth.setValue(0);
    }
  }, [animate]);

  return (
    <View style={styles.skillContainer}>
      <Text style={styles.skillText}>{skill.name}</Text>
      <View style={styles.skillBarBackground}>
        <Animated.View
          style={[styles.skillBar, { width: animatedWidth.interpolate({
            inputRange: [0, 100],
            outputRange: ['0%', '100%']
          }) }]}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  skillContainer: {
    width: '100%',
    marginVertical: 5,
  },
  skillText: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  skillBarBackground: {
    width: '100%',
    height: 10,
    backgroundColor: '#ddd',
    borderRadius: 5,
    overflow: 'hidden',
    marginTop: 5,
  },
  skillBar: {
    height: 10,
    backgroundColor: '#4CAF50',
  },
});

export default SkillBar;
