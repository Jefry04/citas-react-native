import React, {useState} from 'react';
import {
  SafeAreaView,
  Text,
  StyleSheet,
  Pressable,
  FlatList,
} from 'react-native';
import Form from './src/components/Form';
import Patient from './src/components/Patient';

interface IPatient {
  id: string;
  patient: string;
  owner: string;
  mail: string;
  phone: number;
  selectedDate: string;
  symptoms: string;
}

function App(): JSX.Element {
  const [isOPenModal, setIsOpenModal] = useState<boolean>(false);
  const [patients, setPatients] = useState<IPatient[]>([]);

  const newDateHandler = () => setIsOpenModal(true);

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>
        Administrador de citas {''}
        <Text style={styles.titleBold}>Veterinaria</Text>
      </Text>
      <Pressable onPress={newDateHandler} style={styles.btnNuevaCita}>
        <Text style={styles.btnTextnewDate}>NUEVA CITA</Text>
      </Pressable>
      {patients.length === 0 ? (
        <Text style={styles.noPatients}>No hay pacientes</Text>
      ) : (
        <FlatList
          style={styles.patientList}
          data={patients}
          keyExtractor={item => item.id}
          renderItem={({item}) => {
            return <Patient patients={item} />;
          }}
        />
      )}
      <Form
        isOpenModal={isOPenModal}
        setIsOpenModal={setIsOpenModal}
        setPatients={setPatients}
        patients={patients}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#F3F4F6',
    flex: 1,
  },
  title: {
    textAlign: 'center',
    fontSize: 30,
    color: '#374151',
    fontWeight: '600',
  },
  titleBold: {
    fontWeight: '900',
    color: '#6028D9',
  },
  btnNuevaCita: {
    backgroundColor: '#6d28d9',
    padding: 15,
    marginTop: 20,
    marginHorizontal: 20,
    borderRadius: 10,
  },
  btnTextnewDate: {
    textAlign: 'center',
    color: 'white',
    fontSize: 18,
    fontWeight: '900',
  },
  noPatients: {
    marginTop: 40,
    textAlign: 'center',
    fontSize: 24,
    fontWeight: '600',
  },
  patientList: {
    marginTop: 50,
    marginHorizontal: 30,
  },
});
export default App;
