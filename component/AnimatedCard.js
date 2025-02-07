import React, { useRef } from 'react';
import { Text, Animated, Pressable, StyleSheet } from 'react-native';

const AnimatedCard = ({ onPress }) => {
  const scaleAnim = useRef(new Animated.Value(1)).current;
  const moveAnim = useRef(new Animated.Value(0)).current;

  const handlePress = () => {
    Animated.sequence([
      Animated.timing(moveAnim, {
        toValue: 100,
        duration: 500,
        useNativeDriver: false, // We are removing native driver due to web limitations
      }),
      Animated.spring(scaleAnim, {
        toValue: 1.2,
        friction: 3,
        useNativeDriver: false, // Again, using JS-based animation
      }),
      Animated.timing(moveAnim, {
        toValue: 0,
        duration: 500,
        useNativeDriver: false,
      }),
      Animated.spring(scaleAnim, {
        toValue: 1,
        friction: 3,
        useNativeDriver: false,
      }),
    ]).start();

    if (onPress) {
      onPress(); // Trigger the portfolio view change
    }
  };

  return (
    <Pressable onPress={handlePress}>
      <Animated.View style={[styles.card, { transform: [{ translateY: moveAnim }, { scale: scaleAnim }] }]}>
        <Text style={styles.text}>Tap Me!</Text>
      </Animated.View>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  card: {
    width: 150,
    height: 150,
    backgroundColor: '#4CAF50',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
    elevation: 5,
    alignSelf: 'center',
    marginTop: 100,
  },
  text: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default AnimatedCard;
