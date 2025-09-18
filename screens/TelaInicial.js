import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Pressable, Image } from 'react-native';

import imgTelaInicial from '../assets/img/imgTelaInicial.jpg';

export default function TelaInicial(props) {
  return (
    <View style={estilo.container}>
      <Image
        source={imgTelaInicial}
        style={estilo.img}
      />

      <Text style={estilo.titulo}>Conheça melhor sobre o universo</Text>
      <Text style={estilo.subTitulo}>Toque nos botões abaixo e conheça um pouco mais sobre o que existe no céu.</Text>
      <View style={{ flexDirection: 'row' }}>
        <Pressable
          onPress={ () => { props.navigation.navigate("Planetas") } }
          style={estilo.btn}>
            <Text style={estilo.textBtn}>Planetas</Text>
        </Pressable>

        <Pressable
          onPress={ () => { props.navigation.navigate("Galaxia") } }
          style={estilo.btn}>
          <Text style={estilo.textBtn}>Galáxias</Text>
        </Pressable>

        <Pressable
          onPress={ () => { props.navigation.navigate("BuracoNegro") } }
          style={estilo.btn}>
          <Text style={estilo.textBtn}>Buraco Negro</Text>
        </Pressable>
      </View>
      <StatusBar style="auto" />
    </View>
  );
}

const estilo = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
    alignItems: 'center',
    justifyContent: 'center',
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
  },

  img: { 
    width: 320,
    height: 240,
    borderRadius: 30,
  },

  titulo: {
    fontSize: 24,
    color: '#ffbb62b2',
    maxWidth: 320,
  },

  subTitulo: {
    fontSize: 13,
    color: '#fff',
    maxWidth: 320,
    marginTop: 5,
    marginBottom: 10,
  },

  textBtn: {
    fontWeight: 'bold',
  }
});
