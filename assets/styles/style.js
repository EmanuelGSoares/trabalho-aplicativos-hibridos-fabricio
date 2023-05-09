import { StyleSheet } from 'react-native';


const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignSelf: 'center',
      alignItems: 'center',
      justifyContent: 'center',
      width: 300,
      marginTop: 300,
      borderWidth: 1,
      borderRadius: 10,
      borderColor: '#9e9494',
      paddingHorizontal: 10,
      paddingVertical: 50,
      backgroundColor: '#f0eaea',
    },
    input: {
      borderWidth: 1,
      borderColor: '#9e9494',
      padding: 10,
      marginVertical: 10,
      width: '80%',
      borderRadius: 5,
      backgroundColor: '#fff',
    },
    button: {
      backgroundColor: '#7884f0',
      marginTop: 10,
      borderWidth: 1,
      borderColor: '#3b459e',
      borderRadius: 5,
      paddingVertical: 7,
      paddingHorizontal: 10,
    },
    text:{
      fontSize: 15,
      color: '#fff'
    },
    text_login:{
      fontSize: 30,
      color: '#000',
      marginBottom: 20,
    }
  });

export default styles;