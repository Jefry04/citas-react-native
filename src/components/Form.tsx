import React, {useEffect, useState} from 'react';
import {
  Text,
  Modal,
  SafeAreaView,
  StyleSheet,
  TextInput,
  View,
  ScrollView,
  Pressable,
  Alert,
} from 'react-native';
import DatePicker from 'react-native-date-picker';

//todo: Type interfaces
interface IFormProps {
  isOpenModal: boolean;
  setIsOpenModal: any;
  setPatients: any;
  patients: IPatient[];
  selectedPatient: any;
  setPatient: any;
}

interface IPatient {
  id?: any;
  patient: string;
  owner: string;
  mail: string;
  phone: string;
  selectedDate: Date;
  symptoms: string;
}

const Form: React.FC<IFormProps> = ({
  isOpenModal,
  setIsOpenModal,
  setPatients,
  patients,
  selectedPatient,
  setPatient: setPatientApp,
}) => {
  const [id, setId] = useState('');
  const [patient, setPatient] = useState('');
  const [owner, setOwner] = useState('');
  const [mail, setMail] = useState('');
  const [phone, setPhone] = useState('');
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [symptoms, setSymptoms] = useState('');

  const hanldeNewAppointment = () => {
    if ([patient, owner, mail, phone, selectedDate, symptoms].includes('')) {
      Alert.alert('error', 'todos los campos son obligatorios');
      return;
    }
    const newPatient: IPatient = {
      patient,
      owner,
      mail,
      phone,
      selectedDate,
      symptoms,
    };

    if (id) {
      newPatient.id = id;
      const updatedPatients = patients.map(item =>
        item.id === newPatient.id ? newPatient : item,
      );
      setPatients(updatedPatients);
      setPatientApp({});
    } else {
      newPatient.id = Date.now();
      setPatients([...patients, newPatient]);
    }
    setIsOpenModal(false);
    setPatient('');
    setOwner('');
    setMail('');
    setPhone('');
    setId('');
    setSelectedDate(new Date());
    setSymptoms('');
  };

  useEffect(() => {
    if (Object.keys(selectedPatient).length > 0) {
      setPatient(selectedPatient.patient);
      setId(selectedPatient.id);
      setOwner(selectedPatient.owner);
      setMail(selectedPatient.mail);
      setPhone(selectedPatient.phone);
      setSelectedDate(selectedPatient.selectedDate);
      setSymptoms(selectedPatient.symptoms);
      console.log();
    }
  }, [selectedPatient]);

  return (
    <Modal animationType="slide" visible={isOpenModal}>
      <SafeAreaView style={styles.contenido}>
        <ScrollView>
          <Text style={styles.titulo}>
            {selectedPatient.id ? 'EDITAR' : 'NUEVA'} {''}
            <Text style={styles.tituloBold}>Cita</Text>
          </Text>
          <Pressable
            style={styles.btnCancel}
            onPress={() => {
              setIsOpenModal(false);
              setIsOpenModal(false);
              setPatient('');
              setOwner('');
              setMail('');
              setId('');
              setPhone('');
              setSelectedDate(new Date());
              setSymptoms('');
              setPatientApp({});
            }}>
            <Text style={styles.btnCancelText}>X CANCELAR</Text>
          </Pressable>
          <View style={styles.content}>
            <Text style={styles.label}>Nombre Paciente</Text>
            <TextInput
              style={styles.input}
              placeholder="Nombre Paciente"
              placeholderTextColor={'#666'}
              value={patient}
              onChangeText={setPatient}
            />
          </View>
          <View style={styles.content}>
            <Text style={styles.label}>Nombre Propietario</Text>
            <TextInput
              style={styles.input}
              placeholder="Nombre Propietario"
              placeholderTextColor={'#666'}
              value={owner}
              onChangeText={setOwner}
            />
          </View>
          <View style={styles.content}>
            <Text style={styles.label}>Email Propietario</Text>
            <TextInput
              style={styles.input}
              placeholder="Email Propietario"
              placeholderTextColor={'#666'}
              keyboardType="email-address"
              value={mail}
              onChangeText={setMail}
            />
          </View>
          <View style={styles.content}>
            <Text style={styles.label}>Telefono Propietario</Text>
            <TextInput
              style={styles.input}
              placeholder="Telefono propietario"
              placeholderTextColor={'#666'}
              keyboardType="number-pad"
              value={phone}
              onChangeText={setPhone}
              maxLength={10}
            />
          </View>
          <View style={styles.content}>
            <Text style={styles.label}>Fecha Alta </Text>
            <View style={styles.dateContainer}>
              <DatePicker
                date={selectedDate}
                onDateChange={date => setSelectedDate(date)}
              />
            </View>
          </View>
          <View style={styles.content}>
            <Text style={styles.label}>Sintomas</Text>
            <TextInput
              style={[styles.input, styles.symptomsInput]}
              placeholder="Sintomas"
              placeholderTextColor={'#666'}
              value={symptoms}
              onChangeText={setSymptoms}
              multiline={true}
              numberOfLines={4}
            />
          </View>
          <Pressable
            style={styles.btnNewAppointment}
            onPress={hanldeNewAppointment}>
            <Text style={styles.btnNewAppointmentText}>
              {selectedPatient.id ? 'EDITAR' : 'AGREGAR'} PACIENTE
            </Text>
          </Pressable>
        </ScrollView>
      </SafeAreaView>
    </Modal>
  );
};

const styles = StyleSheet.create({
  contenido: {
    backgroundColor: '#6d28d9',
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
  btnCancel: {
    marginVertical: 30,
    backgroundColor: '#5827a4',
    marginHorizontal: 30,
    padding: 15,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#FFF',
  },
  btnCancelText: {
    color: '#FFF',
    textAlign: 'center',
    fontWeight: '900',
    fontSize: 20,
  },
  content: {
    marginTop: 10,
    marginHorizontal: 30,
    marginBottom: 10,
  },
  label: {
    color: '#fff',
    marginBottom: 10,
    marginTop: 5,
    fontSize: 20,
    fontWeight: '600',
  },
  input: {
    backgroundColor: '#fff',
    padding: 15,
    borderRadius: 10,
  },
  symptomsInput: {
    height: 100,
  },
  dateContainer: {
    backgroundColor: '#FFF',
    borderRadius: 10,
  },
  btnNewAppointment: {
    marginVertical: 50,
    backgroundColor: '#f59e0b',
    paddingVertical: 15,
    marginHorizontal: 30,
    borderRadius: 10,
  },
  btnNewAppointmentText: {
    color: '#5827a4',
    textAlign: 'center',
    fontWeight: '900',
    fontSize: 16,
  },
});

export default Form;
