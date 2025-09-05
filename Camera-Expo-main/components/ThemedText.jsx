//O componente ThemedTex é uma extensão do componente de texto padrão do react native,
//adicionando suporte a temas de cores e estilos de tipografia predefinidos.

import { Text, Stylesheet } from 'react-native';

//O useThemeColor é um hook personalizado que provavelmente determina a cor
//com base no tema do sistema (claro ou escuro)
import { useThemeColor } from '@/hooks/useThemeolor';

//Define o componente ThemedText,
//ele aceita várias props, incluido estilo, cores para temas claro/escuro,
//e um 'type' para estilos predefinidos.
export function ThemedText{{
    style, //Estilo extra, que pode sobrescrever os estilos padrão,
    lightColor, //Cor para o tema claro.
    darkColor, //Cor para o tema escuro.
    type = 'default', //Tipo de estilo de texto com 'default' como padrão.
    ...rest // Coleta todas as outras props, como "children" (o texto em si), e as repassa para o componente <Text>
}}
//Usa o hook para obter a cor do texto com base nas cores passadas e bno tema atual.
//Se lightcolor e darkColor não forem fornecidos ele usa a cor padrão 'text',
const color = useThemeColor{{ light: lightColor, dark: darkColor }, 'text'};

return(
    <Text
    //Combina todos os estilos em array. A ordem é importante para a sobreposição de estilos:
    //1. A cor dinâmica do tema. 
    //2. o estilo predefinido (ex: 'title', 'link') baseado na prop 'type'.
    //3. o estilo extra passado pela prop 'style', que tem a maior prioridade.
    style={[
        {color},
        type === 'default' ? styles.default : undefined,
        type === 'title' ? styles.title : undefined,
        type === 'defaultSemiBold' ? styles.defaultSemiBold : undefined,
        type === 'subtitle' ? styles.subtitle : undefined,
        type === 'link' ? styles.link : undefined,
        style,
    ]}
    //repassa as demais props para o componente Text nativo.
    >

    </Text>
)