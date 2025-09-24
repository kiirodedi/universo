import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Pressable, Image, ScrollView } from 'react-native';

import ordemPlanetas from '../assets/img/ordemPlanetas.jpg';
import iconPlaneta from '../assets/img/iconPlaneta.png';
import iconGalaxia from '../assets/img/iconGalaxia.png';
import iconBuracoNegro from '../assets/img/iconBuracoNegro.png';
import iconInicio from '../assets/img/iconInicio.png';

import imgMercurio from '../assets/img/imgMercurio.jpg';

export default function Planetas(props) {
  return (
    <View style={estilo.container}>
      <ScrollView contentContainerStyle={{ alignItems: 'center', paddingBottom: 30 }} style={{ flex: 1, width: '100%' }}>
      <Text style={estilo.titulo}>Planetas</Text>
      <Text style={estilo.conteudo}>Os Planetas são corpos celestes sem luz e calor próprios, esféricos e com
        gravidade própria, os quais giram em torno de uma estrela, que no caso do planeta Terra é o Sol.
        Assim, no espaço onde o frio chega a 270 °C abaixo de zero, giram inúmeras esferas iluminadas por seus respectivos sóis.</Text>
      <Image
        source={ordemPlanetas}
        style={estilo.img}
      />
      <Text style={estilo.subTitulo}>Mercúrio</Text>
      <Image source={imgMercurio} style={estilo.imgPlaneta} />
      <Text style={estilo.conteudo}>É o menor planeta do Sistema Solar, o mais rápido e mais próximo ao Sol. 
        Em função dessa proximidade, apresenta médias de temperatura de 125 °C, podendo chegar a 425 °C. 
        Completa uma volta ao redor do Sol em 87,969 dias, mantendo sempre a mesma face voltada para ele, 
        formada por um deserto de rochas incandescentes. Sua face oculta é escura e gelada, com baixas 
        temperaturas. A atmosfera é bastante rarefeita.</Text>
      
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
      <StatusBar style="auto" />
      </ScrollView>
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

  img: { 
    width: 320,
    height: 240,
    borderRadius: 30,
  },

  titulo: {
    fontSize: 24,
    color: '#ffbb62b2',
    maxWidth: 320,
    marginTop: 20,
    marginBottom: 10,
    textAlign: 'center',
  },
  subTitulo: {
   color: '#ffbb62b2',
   fontSize: 20,
  },

  textBtn: {
    fontWeight: 'bold',
  },
  conteudo: {
    fontSize: 13,
    color: '#fff',
    maxWidth: 320,
},
  imgPlaneta: { 
    width: 200,
    height: 200,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
