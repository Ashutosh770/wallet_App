import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';
import { postApi } from '../utils/Api';

const RegisterScreen: React.FC = ({navigation}) => {
    const [username, setUsername] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [password,setPassword] = useState<string>('');
//   console.log(navigation);
  
  const handleRegister = async() => {
    const resp = await postApi({username,email,password},'/api/users/register');
    console.log(resp);
    
    if(resp.type==='success'){
      navigation.navigate('Login');
    }

  };

  return (
    <View style={styles.container}>
      <Text>Enter Username:</Text>
      <TextInput
        style={styles.input}
        placeholder='username'
        onChangeText={(text) => setUsername(text)}
        value={username}
      />
      <TextInput
        style={styles.input}
        onChangeText={(text) => setEmail(text)}
        placeholder='email'
        value={email}
      />
      <TextInput
        style={styles.input}
        onChangeText={(text) => setPassword(text)}
        placeholder='password'
        value={password}
      />
      <Button title="Register" onPress={handleRegister} />

      <Text>Already have account ? <Text onPress={()=>{navigation.navigate('Login')}}>Login</Text></Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { padding: 16 },
  input: { borderWidth: 1, marginVertical: 8, padding: 8 },
});

export default RegisterScreen;
