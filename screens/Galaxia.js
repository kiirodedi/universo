import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Pressable, Image, ScrollView } from 'react-native';

import iconPlaneta from '../assets/img//icons/iconPlaneta.png';
import iconGalaxia from '../assets/img/icons/iconGalaxia.png';
import iconBuracoNegro from '../assets/img/icons/iconBuracoNegro.png';
import iconInicio from '../assets/img/icons/iconInicio.png';

import galaxiaCataVento from '../assets/img/galaxias/galaxiaCataVento.jpg';
import galaxiaRodamoinho from '../assets/img/galaxias/galaxiaRodamoinho.jpg';
import galaxiaAndromeda from '../assets/img/galaxias/galaxiaAndromeda.jpg';
import galaxiaSombreiro from '../assets/img/galaxias/galaxiaSombreiro.jpg';
import galaxiaOlhoNegro from '../assets/img/galaxias/galaxiaOlhoNegro.jpg';

export default function Galaxia(props) {
  return (
    <View style={estilo.container}>
      <ScrollView contentContainerStyle={{ alignItems: 'center', paddingBottom: 30 }} style={{ flex: 1, width: '100%' }}>
      <Text style={estilo.titulo}>Galáxias</Text>
      <Text style={estilo.conteudo}>
        Galáxias são vastos agrupamentos de gás, poeira, estrelas, planetas e matéria escura, mantidos unidos pela força da gravidade, formando sistemas que variam em tamanho e forma.
      </Text>

      <Text style={estilo.galaxiaNome}>Galáxia Cata-Vento</Text>
      <Image source={galaxiaCataVento} style={estilo.imgGalaxia} />
      <Text style={estilo.conteudo}>
        A Galáxia Cata-Vento, também conhecida como Messier 101 (M101) ou NGC 5457, é uma galáxia espiral localizada na constelação da Ursa Maior. Ela está a aproximadamente 21 milhões de anos-luz da Terra e é conhecida por sua estrutura espiral bem definida e seus braços ricos em estrelas jovens e regiões de formação estelar.
      </Text>

      <Text style={estilo.galaxiaNome}>Galáxia Rodamoinho</Text>
      <Image source={galaxiaRodamoinho} style={estilo.imgGalaxia} />
      <Text style={estilo.conteudo}>
        A Galáxia Rodamoinho, também conhecida como Messier 51 (M51) ou NGC 5194, é uma galáxia espiral localizada na constelação dos Cães de Caça. Ela está a aproximadamente 23 milhões de anos-luz da Terra e é famosa por sua estrutura espiral bem definida e seus braços ricos em estrelas jovens e regiões de formação estelar.
      </Text>

      <Text style={estilo.galaxiaNome}>Galáxia de Andrômeda</Text>
      <Image source={galaxiaAndromeda} style={estilo.imgGalaxia} />
      <Text style={estilo.conteudo}>
        A Galáxia de Andrômeda, também conhecida como Messier 31 (M31) ou NGC 224, é a galáxia espiral mais próxima da Via Láctea e a maior galáxia do Grupo Local. Ela está a aproximadamente 2,537 milhões de anos-luz da Terra e é visível a olho nu em noites claras. A Galáxia de Andrômeda é composta por centenas de bilhões de estrelas e possui um diâmetro de cerca de 220.000 anos-luz.
      </Text>

      <Text style={estilo.galaxiaNome}>Galáxia Sombreiro</Text>
      <Image source={galaxiaSombreiro} style={estilo.imgGalaxia} />
      <Text style={estilo.conteudo}>
        A Galáxia Sombreiro, também conhecida como Messier 104 (M104) ou NGC 4594, é uma galáxia espiral localizada na constelação de Virgem. Ela está a aproximadamente 31 milhões de anos-luz da Terra e é conhecida por sua estrutura distinta, que se assemelha a um sombrero devido ao seu núcleo brilhante e ao disco achatado de estrelas e poeira que o circunda.
      </Text>

      <Text style={estilo.galaxiaNome}>Galáxia do Olho Negro</Text>
      <Image source={galaxiaOlhoNegro} style={estilo.imgGalaxia} />
      <Text style={estilo.conteudo}>
        Ela tem uma faixa escura espetacular de observar, a poeira na frente do núcleo brilhante da galáxia, dando origem a seus apelidos do "Olho Negro" e "Olho Mau"
      </Text>
      </ScrollView>
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

  galaxiaNome: {
   color: '#ffbb62b2',
   fontSize: 20,
   marginTop: 10,
  },

  imgGalaxia: { 
    width: 200,
    height: 200,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 20,
    marginTop: 10,
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
