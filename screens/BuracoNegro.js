import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, ScrollView } from 'react-native';

import Navegacao from '../components/Navegacao.js';

import iconPlaneta from '../assets/img/icons/iconPlaneta.png';
import iconGalaxia from '../assets/img/icons/iconGalaxia.png';
import iconBuracoNegro from '../assets/img/icons/iconBuracoNegro.png';
import iconInicio from '../assets/img/icons/iconInicio.png';

import imgBN from '../assets/img/buracoNegro/imgBN.jpg';
import buracoNegroTopo from '../assets/img/buracoNegro/buracoNegroTopo.png';

export default function BuracoNegro(props) {
  return (
    <View style={estilo.container}>
      <ScrollView contentContainerStyle={{ alignItems: 'center', paddingBottom: 30 }} style={{ flex: 1, width: '100%' }}>
      <Text style={estilo.titulo}>Buraco Negro</Text>
      <Image source={buracoNegroTopo} style={estilo.imgTopo} />
      <Text style={estilo.conteudo}>
        Um buraco negro é uma região no espaço onde a gravidade é tão intensa que nada, nem mesmo a luz, consegue escapar dela. Essa força extrema resulta de uma grande quantidade de matéria concentrada num volume minúsculo, o que distorce o tecido do espaço-tempo ao seu redor. O limite a partir do qual nada pode escapar é chamado de horizonte de eventos. 
      </Text>
      <Image source={imgBN} style={estilo.imgBN} />
      <Text style={estilo.conteudo}>
         no dia 10 de abril de 2019, a colaboração do Event Horizon Telescope revelou a primeira foto de um buraco negro da história. Esse projeto teve a participação de mais de 200 pesquisadores e 8 telescópios ao redor do globo.
      </Text>

      </ScrollView>

      <Navegacao navigation={props.navigation} />
      <StatusBar style="auto" />
    </View>
  );
}

const estilo = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
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

    imgTopo: { 
    width: 320,
    height: 240,
    borderRadius: 30,
    marginVertical: 20,
  },

    conteudo: {
    fontSize: 13,
    color: '#fff',
    maxWidth: 320,
},

  titulo: {
    fontSize: 24,
    color: '#ffbb62b2',
    maxWidth: 320,
    marginTop: 20,
    marginBottom: 10,
    textAlign: 'center',
  },
});
