import React, { useState } from "react";
import { TouchableOpacity, View, Text } from 'react-native';
import { TextInput } from "react-native-paper";

const LoginScreen = ({ navigation }: { navigation: any }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async () => {
    navigation.navigate('Home')
  }

  return(
    <View className="flex-1 items-center justify-center bg-white px-5">
      <Text className="text-rose-800 text-2xl pb-4">Bem-vindo(a)!</Text>
      <TextInput 
      placeholder="Usuário"
      value={email}
      onChangeText={(text) => setEmail(text)}
      className="text-md w-full mb-4"
      />
      <TextInput
      placeholder="Senha"
      value={password}
      onChangeText={(text) => setPassword(text)}
      className="text-md w-full mb-4"
      />
      <TouchableOpacity
      onPress={handleLogin}
      className="border-none rounded-sm bg-rose-800 w-full p-4"
      >
        <Text className="text-white text-center uppercase">Acessar</Text>
      </TouchableOpacity>
    </View>
  );
}

export default LoginScreen;