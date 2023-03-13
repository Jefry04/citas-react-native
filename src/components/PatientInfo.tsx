import React from 'react';
import {Text, SafeAreaView, Pressable, View, StyleSheet} from 'react-native';
import {formatDate} from '../utils';

interface IPatientInfoProps {
  patient: any;
  setPatientModal: any;
  setPatient: any;
}

const PatientInfo: React.FC<IPatientInfoProps> = ({
  patient,
  setPatientModal,
  setPatient,
}) => {
  console.log(patient);
  return (
    <SafeAreaView style={styles.container}>
      <View>
        <Text style={styles.titulo}>
          Informacion {''}
          <Text style={styles.tituloBold}>Paciente</Text>
        </Text>
        <Pressable
          onPress={() => {
            setPatientModal(false);
            setPatient({});
          }}
          style={styles.btnClose}>
          <Text style={styles.btnCloseText}>Cerrar</Text>
        </Pressable>
      </View>
      <View style={styles.content}>
        <View style={styles.textContainer}>
          <Text style={styles.label}>Nombre Mascota:</Text>
          <Text style={styles.text}>{patient.patient}</Text>
        </View>
        <View style={styles.textContainer}>
          <Text style={styles.label}>Propietario:</Text>
          <Text style={styles.text}>{patient.mail}</Text>
        </View>
        <View style={styles.textContainer}>
          <Text style={styles.label}>Email:</Text>
          <Text style={styles.text}>{patient.owner}</Text>
        </View>
        <View style={styles.textContainer}>
          <Text style={styles.label}>Telefono:</Text>
          <Text style={styles.text}>{patient.phone}</Text>
        </View>
        <View style={styles.textContainer}>
          <Text style={styles.label}>Fecha Alta:</Text>
          <Text style={styles.text}>{formatDate(patient.selectedDate)}</Text>
        </View>
        <View style={styles.textContainer}>
          <Text style={styles.label}>Sintomas:</Text>
          <Text style={styles.text}>{patient.symptoms}</Text>
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#F59E0B',
    flex: 1,
  },
  titulo: {
    fontSize: 30,
    fontWeight: '600',
    textAlign: 'center',
    marginTop: 30,
    color: '#FFF',
  },
  tituloBold: {
    fontWeight: '900',
  },
  btnClose: {
    marginVertical: 30,
    backgroundColor: '#E06900',
    marginHorizontal: 30,
    padding: 15,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#FFF',
  },
  btnCloseText: {
    color: '#FFF',
    textAlign: 'center',
    fontWeight: '900',
    fontSize: 20,
  },
  content: {
    backgroundColor: '#FFF',
    marginHorizontal: 30,
    borderRadius: 10,
    padding: 20,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 8,
    },
    shadowOpacity: 0.46,
    shadowRadius: 11.14,

    elevation: 17,
  },
  textContainer: {
    marginBottom: 10,
  },
  label: {
    textTransform: 'uppercase',
    color: '#374151',
    fontWeight: '600',
    marginBottom: 3,
    fontSize: 12,
  },
  text: {
    fontWeight: '700',
    fontSize: 20,
    color: '#334155',
  },
});
export default PatientInfo;
