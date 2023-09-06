import { Stack, Link } from 'expo-router';
import {
  Box, FormControl,
  FormControlLabel,
  FormControlLabelText,
  Input, InputField, FormControlHelper,
  FormControlHelperText, FormControlError,
  FormControlErrorIcon,
  FormControlErrorText,
  AlertCircleIcon,
  Button,
  ButtonText,


} from "@gluestack-ui/themed"
import { Image, StyleSheet, View } from 'react-native';

export default function login() {
  return (
    <View style={styles.container}>
      <Stack.Screen
        options={{
          title: 'Login',
          headerTitle: "Login"
        }}
      />
      <View style={{ alignContent: 'center', marginBottom: 0 }}>
        <Image
          style={{ width: 224, height: 180, alignSelf: 'center', resizeMode: 'center' }}
          source={require('../../assets/logo.jpeg')}
        />
      </View>
      <Box h="$32" w="$72">
        <FormControl>
          <FormControlLabel>
            <FormControlLabelText>CPF</FormControlLabelText>
          </FormControlLabel>
          <Input>
            <InputField value="nataniel@sample.com" />
          </Input>
        </FormControl>
        <FormControl size="md" isDisabled={false} isInvalid={false} isReadOnly={false} isRequired={false} >
          <FormControlLabel mb='$1'>
            <FormControlLabelText>Senha</FormControlLabelText>
          </FormControlLabel>
          <Input>
            <InputField
              type="password"
              defaultValue="12345"
              placeholder="password"
            />
          </Input>
          <FormControlHelper>
            <FormControlHelperText>
              Senha deve conter pelo menos 6 caracteres.
            </FormControlHelperText>
          </FormControlHelper>
          <FormControlError>
            <FormControlErrorIcon
              as={AlertCircleIcon}
            />
            <FormControlErrorText>
              Atleast 6 characters are required.
            </FormControlErrorText>
          </FormControlError>
        </FormControl>
        <Link replace href={{ pathname: 'home', params: { name: 'Acesso' } }} asChild>
          <Button style={styles.button} size="md" variant="solid" action="primary" isDisabled={false} isFocusVisible={false} >
            <ButtonText>Entrar</ButtonText>
          </Button>
        </Link>
      
      </Box>
    </View>
  );
}


const styles = StyleSheet.create({
  button:{
    backgroundColor:"#2F888A"
  },

  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-start',
    paddingTop: 50,
    backgroundColor: "#fff"
  }

});
