import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';
import { postApi } from '../utils/Api';

const LoginScreen: React.FC = ({navigation}) => {
  const [email, setEmail] = useState<string>('');
  const [password,setPassword] = useState<string>('');
  console.log(navigation);
  
  const handleLogin = async() => {
    const resp = await postApi({email,password},'/api/users/login');
    if(resp.type==='success'){
      navigation.navigate('Home');
    }

  };

  return (
    <View style={styles.container}>
      <Text>Enter Username:</Text>
      <TextInput
        style={styles.input}
        onChangeText={(text) => setEmail(text)}
        value={email}
      />
      <TextInput
        style={styles.input}
        onChangeText={(text) => setPassword(text)}
        value={password}
      />
      <Button title="Login" onPress={handleLogin} />
      <Text>Don't have account ? <Text onPress={()=>{navigation.navigate('Register')}}>Register</Text></Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { padding: 16 },
  input: { borderWidth: 1, marginVertical: 8, padding: 8 },
});

export default LoginScreen;
