import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

interface IPatientProps {
  patients: IPatient;
}
interface IPatient {
  id: string;
  patient: string;
  owner: string;
  mail: string;
  phone: number;
  selectedDate: string;
  symptoms: string;
}

const Patient: React.FC<IPatientProps> = ({patients}) => {
  const {patient, selectedDate} = patients;

  const formatDate = (date: string) => {
    const newDate = new Date(date);
    const options: Intl.DateTimeFormatOptions = {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    };

    return newDate.toLocaleDateString('es-Es', options);
  };
  return (
    <View style={styles.container}>
      <Text style={styles.label}> Paciente:</Text>
      <Text style={styles.text}> {patient}</Text>
      <Text style={styles.date}> {formatDate(selectedDate)}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    padding: 20,
    borderBottomColor: '#94a3b8',
    borderBottomWidth: 1,
  },
  label: {
    color: '#374151',
    textTransform: 'uppercase',
    fontWeight: '700',
    marginBottom: 10,
  },
  text: {
    color: '#6D28D9',
    fontSize: 20,
    fontWeight: '700',
    marginBottom: 10,
  },
  date: {
    color: '#374151',
  },
});

export default Patient;
