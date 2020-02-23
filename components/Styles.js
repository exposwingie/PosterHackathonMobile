
import { StyleSheet, Dimensions } from 'react-native';

const { width: WIDTH } = Dimensions.get('window')

export default StyleSheet.create({
    backgroundContainer: {
      flex: 1,
      width: null,
      height: null,
      justifyContent: 'flex-start',
      alignItems: 'center',
    },
    logoContainer:{
      marginTop: 140,
      alignItems: 'center'
    },
    logo:{
      width: 300,
      height: 300
    },
    logoText:{
      fontSize:45,
      fontWeight: '500',
      marginTop:10,
      opacity: 0.5
    },
    input:{
      width: WIDTH-200,
      height: 45,
      borderRadius: 25,
      fontSize: 16,
      paddingLeft: 45,
      backgroundColor: 'rgba(0, 0, 0, 0.35)',
      color: 'rgba(255, 255, 255, 0.7)',
      marginHorizontal: 25
    }
    });
    