import React, { useState } from 'react';
import { View, Button } from 'react-native';
import SkillBar from './SkillBar';

const skills = [
  { name: 'React Native', level: 80 },
  { name: 'React Js', level: 90 },
  { name: 'MongoDb', level: 70 },
  { name: 'JavaScript', level: 90 },
  { name: 'Node.js', level: 75 },
];

const SkillScreen = () => {
  const [showSkills, setShowSkills] = useState(false);

  return (
    <View style={{ padding: 20 }}>
      <Button title="Skills" onPress={() => setShowSkills(!showSkills)} />
      {showSkills && skills.map((skill, index) => (
        <SkillBar key={index} skill={skill} animate={showSkills} />
      ))}
    </View>
  );
};

export default SkillScreen;
