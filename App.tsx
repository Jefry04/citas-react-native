import React, {useState} from 'react';
import {SafeAreaView, Text, StyleSheet, Pressable} from 'react-native';
import Form from './src/components/Form';

function App(): JSX.Element {
  const [isOPenModal, setIsOpenModal] = useState<boolean>(false);
  const [patients, setPatients] = useState([]);

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
});
export default App;
