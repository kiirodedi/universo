import { StyleSheet, Text, View, Pressable, Image } from 'react-native';

import iconPlaneta from '../assets/img//icons/iconPlaneta.png';
import iconGalaxia from '../assets/img/icons/iconGalaxia.png';
import iconBuracoNegro from '../assets/img/icons/iconBuracoNegro.png';
import iconInicio from '../assets/img/icons/iconInicio.png';

export default function Navegacao(props){
    return (
        <View style={estilo.container}>
      <Pressable
        onPress={ () => { props.navigation.navigate("Planetas") } }
        style={estilo.btn}>
        <Image source={iconPlaneta} style={{ width: 20, height: 20, marginRight: 6 }} />
        <Text style={estilo.textBtn}>Planetas</Text>
      </Pressable>

      <Pressable
        onPress={ () => { props.navigation.navigate("Galaxia") } }
        style={estilo.btn}>
        <Image source={iconGalaxia} style={{ width: 20, height: 20, marginRight: 6 }} />
        <Text style={estilo.textBtn}>Galáxias</Text>
      </Pressable>

      <Pressable
        onPress={ () => { props.navigation.navigate("BuracoNegro") } }
        style={estilo.btn}>
        <Image source={iconBuracoNegro} style={{ width: 20, height: 20, marginRight: 6 }} />  
        <Text style={estilo.textBtn}>Buraco Negro</Text>
      </Pressable>

      <Pressable
        onPress={ () => { props.navigation.navigate("Início") } }
        style={estilo.btn}>
          <Image source={iconInicio} style={{ width: 20, height: 20, marginRight: 6 }} />
        <Text style={estilo.textBtn}>Início</Text>
      </Pressable>
        </View>
    );
}
const estilo = StyleSheet.create({
  container :{
    alignItems: 'center',
    paddingVertical: 10,
    backgroundColor: '#000',
    borderTopColor: '#ffbb62b2',
    marginBottom: 40,
  },
    btn: {
    backgroundColor: '#ffbb62b2',
    paddingVertical: 10,
    paddingHorizontal: 14,
    borderRadius: 50,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    margin: 10,
    minWidth: 200,
  },

   textBtn: {
    fontWeight: 'bold',
  },
})