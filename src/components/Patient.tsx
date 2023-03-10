import React, {Dispatch, SetStateAction} from 'react';
import {Pressable, StyleSheet, Text, View} from 'react-native';

interface IPatientProps {
  patients: IPatient;
  setIsOpenModal: Dispatch<SetStateAction<boolean>>;
  editPatient: (id: number) => void;
  deletePatient: (id: number) => void;
}
interface IPatient {
  id: number;
  patient: string;
  owner: string;
  mail: string;
  phone: string;
  selectedDate: Date;
  symptoms: string;
}

const Patient: React.FC<IPatientProps> = ({
  patients,
  setIsOpenModal,
  editPatient,
  deletePatient,
}) => {
  const {patient, selectedDate, id} = patients;

  const formatDate = (date: Date) => {
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

      <View style={styles.buttonsContainer}>
        <Pressable
          style={[styles.btn, styles.editBtn]}
          onPress={() => {
            editPatient(id);
            setIsOpenModal(true);
          }}>
          <Text style={styles.buttonstext}> Editar</Text>
        </Pressable>
        <Pressable
          style={[styles.btn, styles.deleteBtn]}
          onPress={() => deletePatient(id)}>
          <Text style={styles.buttonstext}> Eliminar</Text>
        </Pressable>
      </View>
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
    fontWeight: '900',
    marginBottom: 10,
  },
  date: {
    color: '#374151',
  },
  buttonsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 20,
  },
  btn: {
    paddingVertical: 5,
    paddingHorizontal: 20,
    borderRadius: 5,
  },
  editBtn: {
    backgroundColor: '#f59e0b',
  },
  deleteBtn: {
    backgroundColor: '#EF4444',
  },
  buttonstext: {
    textTransform: 'uppercase',
    fontWeight: '700',
    fontSize: 12,
    color: '#FFF',
  },
});

export default Patient;
