import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Linking, Image, ScrollView } from 'react-native';

export default function ProjectDetailScreen({ route, navigation }) {
  const { project } = route.params;

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>
        <Text style={styles.backText}>← Back</Text>
      </TouchableOpacity>
      
      <Text style={styles.title}>{project.name}</Text>
      <Text style={styles.description}>{project.description}</Text>

      {/* Display Project Images */}
      <View style={styles.imageContainer}>
        {project.images && project.images.length > 0 ? (
          project.images.map((image, index) => (
            <Image key={index} source={image} style={styles.projectImage} />
          ))
        ) : (
          <Text style={styles.noImagesText}>No images available for this project</Text>
        )}
      </View>
{/* 
      <TouchableOpacity onPress={() => Linking.openURL(project.link)} style={styles.linkButton}>
        <Text style={styles.linkText}>Visit Project</Text>
      </TouchableOpacity> */}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { flexGrow: 1, padding: 20, alignItems: 'center', justifyContent: 'center' },
  title: { fontSize: 24, fontWeight: 'bold', marginBottom: 10 },
  description: { fontSize: 16, textAlign: 'center', marginVertical: 10 },
  backButton: { padding: 10, marginBottom: 20, backgroundColor: '#ddd', borderRadius: 5 },
  backText: { fontSize: 16 },
  linkButton: { backgroundColor: '#1E90FF', padding: 10, borderRadius: 5, marginTop: 20 },
  linkText: { color: 'white', fontSize: 16 },
  imageContainer: { marginTop: 20, alignItems: 'center' },
  projectImage: { width: 300, height: 200, borderRadius: 10, marginVertical: 10 },
  noImagesText: { fontSize: 16, color: 'gray' },
});
