import React from 'react';
import {Text, SafeAreaView, Pressable, View, StyleSheet} from 'react-native';

interface IPatientInfoProps {
  patient: any;
  setPatientModal: any;
}
// interface IPatient {
//   id: number;
//   patient: string;
//   owner: string;
//   mail: string;
//   phone: string;
//   selectedDate: Date;
//   symptoms: string;
// }

const PatientInfo: React.FC<IPatientInfoProps> = ({
  patient,
  setPatientModal,
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
          onPress={() => setPatientModal(false)}
          style={styles.btnClose}>
          <Text style={styles.btnCloseText}>Cerrar</Text>
        </Pressable>
      </View>
      <View style={styles.content}>
        <Text>{patient.patient}</Text>
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
    padding: 10,
    height: 300,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 8,
    },
    shadowOpacity: 0.46,
    shadowRadius: 11.14,

    elevation: 17,
  },
});
export default PatientInfo;
