
import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  ScrollView,
  StyleSheet,
  StatusBar,
  Platform,
} from 'react-native';

import StudentCard from '../components/StudentCard';

// Initial Student Records
const initialStudents = [
  {
    id: 's1',
    name: 'Ana Cruz',
    year: '3rd Year',
    photoUrl: 'https://i.pravatar.cc/100?img=1',
    flagged: false,
  },
  {
    id: 's2',
    name: 'Bea Santos',
    year: '2nd Year',
    photoUrl: 'https://i.pravatar.cc/100?img=2',
    flagged: false,
  },
  {
    id: 's3',
    name: 'Cid Ramos',
    year: '4th Year',
    photoUrl: 'https://i.pravatar.cc/100?img=3',
    flagged: false,
  },
  {
    id: 's4',
    name: 'Dex Alonzo',
    year: '1st Year',
    photoUrl: 'https://i.pravatar.cc/100?img=4',
    flagged: false,
  },
  {
    id: 's5',
    name: 'Eli Tan',
    year: '3rd Year',
    photoUrl: 'https://i.pravatar.cc/100?img=5',
    flagged: false,
  },
];

// Main Student Directory Component
export default function StudentDirectory() {

  // State for Student Records
  const [students, setStudents] = useState(initialStudents);

  // State for Search Input
  const [query, setQuery] = useState('');

  // Filter Students by Name (Case-Insensitive)
  const filteredStudents = students.filter((student) =>
    student.name
      .toLowerCase()
      .includes(query.trim().toLowerCase())
  );

  // Toggle Student Flag Status
  function toggleFlag(id) {
    setStudents((previousStudents) =>
      previousStudents.map((student) =>
        student.id === id
          ? {
              ...student,
              flagged: !student.flagged,
            }
          : student
      )
    );
  }

  // Count the Number of Flagged Students
  const flaggedCount = students.filter(
    (student) => student.flagged
  ).length;

  return (
    <View style={styles.container}>

      {/* Status Bar */}
      <StatusBar
        barStyle="dark-content"
        backgroundColor="#ffffff"
      />

      {/* Header Section */}
      <View style={styles.header}>
        <Text style={styles.headerTitle}>
          Student Directory
        </Text>

        <Text style={styles.headerSubtitle}>
          {students.length} students this term
        </Text>
      </View>

      {/* Search Section */}
      <View style={styles.searchSection}>

        <TextInput
          style={styles.searchInput}
          placeholder="Search students..."
          placeholderTextColor="#8983a6"
          value={query}
          onChangeText={setQuery}
          autoCapitalize="none"
          autoCorrect={false}
        />

        {/* Search Results Count */}
        <Text style={styles.resultCount}>
          {filteredStudents.length} students found
        </Text>

      </View>

      {/* Scrollable Student List */}
      <ScrollView
        style={styles.scrollView}
        contentContainerStyle={styles.listContent}
        keyboardShouldPersistTaps="handled"
      >
        {filteredStudents.map((student) => (
          <StudentCard
            key={student.id}
            id={student.id}
            name={student.name}
            year={student.year}
            photoUrl={student.photoUrl}
            flagged={student.flagged}
            onToggleFlag={toggleFlag}
          />
        ))}

        {/* No Search Results */}
        {filteredStudents.length === 0 && (
          <Text style={styles.noResults}>
            No students found.
          </Text>
        )}

      </ScrollView>

    </View>
  );
}

// Main Screen Styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
    paddingTop:
      Platform.OS === 'android'
        ? StatusBar.currentHeight || 0
        : 0,
  },

  header: {
    backgroundColor: '#1b194a',
    paddingHorizontal: 16,
    paddingVertical: 14,
  },

  headerTitle: {
    fontSize: 17,
    fontWeight: 'bold',
    color: '#ffffff',
  },

  headerSubtitle: {
    fontSize: 11,
    color: '#d3d0ed',
    marginTop: 3,
  },

  searchSection: {
    paddingHorizontal: 12,
    paddingTop: 10,
    paddingBottom: 8,
  },

  searchInput: {
    backgroundColor: '#f2f1fa',
    borderWidth: 1,
    borderColor: '#e5e2f1',
    borderRadius: 8,
    paddingHorizontal: 12,
    paddingVertical: 10,
    fontSize: 13,
    color: '#252345',
  },

  resultCount: {
    color: '#8883a0',
    fontSize: 11,
    marginTop: 8,
  },

  scrollView: {
    flex: 1,
  },

  listContent: {
    paddingHorizontal: 12,
    paddingTop: 2,
    paddingBottom: 25,
  },

  noResults: {
    color: '#8883a0',
    fontSize: 14,
    textAlign: 'center',
    marginTop: 30,
  },
});
