import { createStackNavigator } from '@react-navigation/stack';
import React, { useState } from 'react';
import {
    Image,
    LayoutAnimation,
    Platform,
    ScrollView,
    StyleSheet,
    Text,
    TouchableOpacity,
    UIManager,
    View
} from 'react-native';
import AnimatedCard from './AnimatedCard';
import SkillScreen from './SkillScreen';

if (Platform.OS === 'android' && UIManager.setLayoutAnimationEnabledExperimental) {
  UIManager.setLayoutAnimationEnabledExperimental(true);
}

const Stack = createStackNavigator();

const projects = [
  { 
    name: 'Food Delivery Application', 
    description: 'A cool React project with advanced features.', 
    link: 'https://project1.com',
    images: [
      require('../assets/Food-Deliver-Website.png')
    ]
  },
  { 
    name: 'Blog Application', 
    description: 'A fun Node.js app with backend API integration.', 
    link: 'https://project2.com',
    images: [
      require('../assets/Blog-Application.png')
    ]
  },
  { 
    name: 'Dynamic Event Calendar', 
    description: 'A mobile app built using React Native with animations.', 
    link: 'https://project3.com',
    images: [
      require('../assets/Dynamic-Event-Calender.png')
    ]
  },
  { 
    name: 'TodoList Application', 
    description: 'A mobile app built using React Native with animations.', 
    link: 'https://project4.com',
    images: [
      require('../assets/TodoList.png')
    ]
  }
];

function PortfolioScreen({ navigation }) {
  const [showPortfolio, setShowPortfolio] = useState(false);
  const [showProjects, setShowProjects] = useState(false);
  const [showEducation, setShowEducation] = useState(false);

  const toggleSection = (section) => {
    LayoutAnimation.easeInEaseOut();
    if (section === 'projects') {
      setShowProjects(!showProjects);
    } else if (section === 'education') {
      setShowEducation(!showEducation);
    }
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      {!showPortfolio ? (
        <AnimatedCard onPress={() => setShowPortfolio(true)} />
      ) : (
        <View style={styles.portfolioContainer}>
          <View style={styles.buttonRow}>
            <TouchableOpacity style={styles.backButton} onPress={() => setShowPortfolio(false)}>
              <Text style={styles.buttonText}>← Back</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.educationButton} onPress={() => toggleSection('education')}>
              <Text style={styles.buttonText}>{showEducation ? 'Hide Education' : 'View Education'}</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.projectButton} onPress={() => toggleSection('projects')}>
              <Text style={styles.buttonText}>{showProjects ? 'Hide Projects' : 'View Projects'}</Text>
            </TouchableOpacity>
          </View>

          <Image source={require('../assets/profile4.jpg')} style={styles.profileImage} />
          <Text style={styles.title}>Rohan Mondal</Text>
          <Text style={styles.subtitle}>Frontend Developer</Text>

          <SkillScreen />

          {showEducation && (
            <ScrollView style={styles.educationContainer}>
              <Text style={styles.sectionTitle}>Education</Text>
              <Text style={styles.educationItem}>B.Tech CSE - UEM Jaipur (7.25 CGPA)</Text>
              <Text style={styles.educationItem}>12th - Your School Name (60%)</Text>
              <Text style={styles.educationItem}>10th - Your School Name (69%)</Text>
            </ScrollView>
          )}

          {showProjects && (
            <ScrollView style={styles.projectContainer}>
              <Text style={styles.sectionTitle}>Projects</Text>
              {projects.map((project, index) => (
                <TouchableOpacity 
                  key={index} 
                  style={styles.projectItem} 
                  onPress={() => navigation.navigate('ProjectDetail', { project })}
                >
                  <Text style={styles.projectTitle}>{project.name}</Text>
                  <Text style={styles.projectDescription}>{project.description.substring(0, 30)}...</Text>
                </TouchableOpacity>
              ))}
            </ScrollView>
          )}
        </View>
      )}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    alignItems: 'center',
    backgroundColor: '#f5f5f5',
    padding: 20,
  },
  portfolioContainer: {
    width: '100%',
    alignItems: 'center',
  },
  buttonRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    paddingHorizontal: 10,
    marginBottom: 10,
  },
  backButton: {
    backgroundColor: '#ddd',
    padding: 10,
    borderRadius: 10,
    flex: 1,
    marginHorizontal: 5,
    alignItems: 'center',
  },
  educationButton: {
    backgroundColor: '#2196F3',
    padding: 10,
    borderRadius: 10,
    flex: 1,
    marginHorizontal: 5,
    alignItems: 'center',
  },
  projectButton: {
    backgroundColor: '#4CAF50',
    padding: 10,
    borderRadius: 10,
    flex: 1,
    marginHorizontal: 5,
    alignItems: 'center',
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
  profileImage: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginBottom: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  subtitle: {
    fontSize: 18,
    color: 'gray',
    marginBottom: 20,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginTop: 20,
  },
  projectContainer: {
    width: '100%',
    marginTop: 10,
  },
  projectItem: {
    padding: 10,
    backgroundColor: '#fff',
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 3,
    elevation: 4,
    marginBottom: 10,
  },
  projectImage: {
    width: '100%',
    height: 200,
    borderRadius: 10,
    marginBottom: 10,
    resizeMode: 'cover',
  },
  projectTitle: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  projectDescription: {
    fontSize: 14,
    color: 'gray',
  },
  educationContainer: {
    width: '100%',
    marginTop: 20,
  },
  educationItem: {
    fontSize: 16,
    marginVertical: 5,
  },
});

export default PortfolioScreen;
