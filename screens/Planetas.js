import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Pressable, Image, ScrollView } from 'react-native';

import ordemPlanetas from '../assets/img/planetas/ordemPlanetas.jpg';
import iconPlaneta from '../assets/img//icons/iconPlaneta.png';
import iconGalaxia from '../assets/img/icons/iconGalaxia.png';
import iconBuracoNegro from '../assets/img/icons/iconBuracoNegro.png';
import iconInicio from '../assets/img/icons/iconInicio.png';

import imgMercurio from '../assets/img/planetas/imgMercurio.jpg';
import imgVenus from '../assets/img/planetas/imgVenus.jpg';
import imgTerra from '../assets/img/planetas/imgTerra.jpg';
import imgMarte from '../assets/img/planetas/imgMarte.png';
import imgJupiter from '../assets/img/planetas/imgJupiter.jpg';
import imgSaturno from '../assets/img/planetas/imgSaturno.jpg';
import imgUrano from '../assets/img/planetas/imgUrano.png';
import imgNetuno from '../assets/img/planetas/imgNetuno.jpg';

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
      <Text style={estilo.planetaNome}>Mercúrio</Text>
      <Image source={imgMercurio} style={estilo.imgPlaneta} />
      <Text style={estilo.conteudo}>É o menor planeta do Sistema Solar, o mais rápido e mais próximo ao Sol. 
        Em função dessa proximidade, apresenta médias de temperatura de 125 °C, podendo chegar a 425 °C. 
        Completa uma volta ao redor do Sol em 87,969 dias, mantendo sempre a mesma face voltada para ele, 
        formada por um deserto de rochas incandescentes. Sua face oculta é escura e gelada, com baixas 
        temperaturas. A atmosfera é bastante rarefeita.
      </Text>

      <Text style={estilo.planetaNome}>Vênus</Text>
      <Image source={imgVenus} style={estilo.imgPlaneta} />
      <Text style={estilo.conteudo}>Conhecido como “Estrela d’alva”, por causa de seu forte brilho, Vênus
        tal qual Mercúrio é um planeta que não possui satélite. Visível do nosso planeta, Vênus é o segundo
        planeta a partir do Sol e o mais perto do planeta Terra. Curioso notar que mesmo sendo o segundo planeta
        a partir do Sol (depois de Mercúrio), Vênus é o planeta mais quente do sistema solar, com temperaturas
        que podem atingir 480°C. Assemelha-se com o planeta Terra no tocante ao tamanho, composição, estrutura,
        massa, densidade e força gravitacional.
      </Text>

      <Text style={estilo.planetaNome}>Terra</Text>
      <Image source={imgTerra} style={estilo.imgPlaneta} />
      <Text style={estilo.conteudo}>Terceiro planeta do sistema solar a partir do Sol, o planeta Terra é rochoso,
        com atmosfera gasosa e temperatura média de 15°C. Possui apenas um satélite natural, a lua, conhecida como Selene.
        É chamado de "planeta azul", pois possui um elevado volume de água. Além disso, o teor de oxigênio ideal na
        atmosfera permite o desenvolvimento da vida. O planeta Terra é o único planeta do sistema solar que abriga vida humana.
        A rotação da Terra dura, aproximadamente, 24 horas. Por outro lado, o movimento de translação ocorre em 365 dias, ou um ano.
        Contudo, em anos bissextos, apresentam 366 dias, com o aumento de um dia a mais no mês de fevereiro.
      </Text>

      
      <Text style={estilo.planetaNome}>Marte</Text>
      <Image source={imgMarte} style={estilo.imgPlaneta} />
      <Text style={estilo.conteudo}>Quarto planeta a partir do Sol e o mais visível do planeta Terra, Marte possui dois satélites naturais
        “Fobos e Deimos”, sendo o segundo menor planeta do sistema solar, atrás de Mercúrio. Também chamado de “planeta vermelho”,
        devido às partículas de óxido de ferro presentes em sua atmosfera, o planeta Marte é um planeta rochoso, frio e seco.
        O movimento de rotação de Marte assemelha-se ao da Terra, com duração de 24 horas e 37 minutos, enquanto que o movimento de translação do planeta é de 687 dias.
      </Text>

      <Text style={estilo.planetaNome}>Júpiter</Text>
      <Image source={imgJupiter} style={estilo.imgPlaneta} />
      <Text style={estilo.conteudo}>
        É o quinto planeta a partir do Sol e o maior planeta do Sistema Solar,
        chegando a ser duas vezes e meia maior que todos os outros planetas juntos.
        É classificado como um gigante gasoso, composto principalmente de hidrogênio e hélio.
        Possui um sistema de anéis tênue e tem 95 luas confirmadas, sendo as quatro maiores
        (Io, Europa, Ganimedes e Calisto) descobertas por Galileu Galilei.
        Uma característica notável é a Grande Mancha Vermelha, uma tempestade gigante
        que dura séculos. Seu movimento de rotação é o mais rápido entre os planetas.
      </Text>

      <Text style={estilo.planetaNome}>Saturno</Text>
      <Image source={imgSaturno} style={estilo.imgPlaneta} />
      <Text style={estilo.conteudo}>
        É o sexto planeta a partir do Sol e o segundo maior do Sistema Solar,
        também classificado como um gigante gasoso. Sua característica mais famosa é o
        seu proeminente sistema de anéis, que é o mais extenso e visível de todos.
        Esses anéis são compostos principalmente por partículas de gelo e rocha.
        Saturno possui 146 luas confirmadas, sendo Titã a maior delas e a segunda maior
        lua do Sistema Solar, superando o planeta Mercúrio em tamanho.
        O planeta é notável por ser o menos denso de todos.
      </Text>

      <Text style={estilo.planetaNome}>Urano</Text>
      <Image source={imgUrano} style={estilo.imgPlaneta} />
      <Text style={estilo.conteudo}>
        É o sétimo planeta a partir do Sol e o terceiro maior do Sistema Solar.
        É classificado como um gigante de gelo, pois é composto por uma mistura
        de água, metano e amônia congelados. Sua cor azul-esverdeada é devida
        à presença de metano em sua atmosfera. Urano é único porque seu eixo de
        rotação é inclinado lateralmente em um ângulo de quase 98 graus, fazendo-o
        girar "de lado". Possui um sistema de anéis finos e tem 27 luas conhecidas.
      </Text>

      <Text style={estilo.planetaNome}>Netuno</Text>
      <Image source={imgNetuno} style={estilo.imgPlaneta} />
      <Text style={estilo.conteudo}>
        É o oitavo e último planeta principal do Sistema Solar. Assim como Urano,
        é classificado como um gigante de gelo. Sua atmosfera, também com metano,
        absorve a luz vermelha, dando-lhe uma intensa cor azul. Netuno é o planeta
        mais frio e o mais distante do Sol. Detém os ventos mais rápidos do Sistema
        Solar, que podem atingir mais de 2.000 km/h. Possui 16 luas conhecidas,
        sendo Tritão a maior e a mais notável. Seu período de translação é de
        aproximadamente 165 anos terrestres.
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
  planetaNome: {
   color: '#ffbb62b2',
   fontSize: 20,
   marginTop: 10,
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
    marginBottom: 20,
    marginTop: 10,
  },
});
