import React, {useState} from 'react';
import {
  Text,
  Modal,
  SafeAreaView,
  StyleSheet,
  TextInput,
  View,
  ScrollView,
  Pressable,
} from 'react-native';
import DatePicker from 'react-native-date-picker';
interface IFormProps {
  isOpenModal: boolean;
}

const Form: React.FC<IFormProps> = ({isOpenModal}) => {
  const [patient, setPatient] = useState('');
  const [owner, setOwner] = useState('');
  const [mail, setMail] = useState('');
  const [phone, setPhone] = useState('');
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [symptoms, setSymptoms] = useState('');

  return (
    <Modal animationType="slide" visible={isOpenModal}>
      <SafeAreaView style={styles.contenido}>
        <ScrollView>
          <Text style={styles.titulo}>
            Nueva {''}
            <Text style={styles.tituloBold}>Cita</Text>
          </Text>
          <Pressable>
            <Text>X Cancelar</Text>
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
});

export default Form;
