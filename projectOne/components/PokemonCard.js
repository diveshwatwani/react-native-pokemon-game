import { View, Text, StyleSheet, Platform, Image } from "react-native";

const getTypeDeatils = (type) =>{
    switch(type.toLowerCase()){
        case "electric":

            return { borderColor: "#FFD700", emoji: "⚡️" , backgroundColor:'#faf2cd'};

        case "water":

            return { borderColor: "#6493EA", emoji: "💧", backgroundColor:'#cdedfa' };

        case "fire":

            return { borderColor: "#FF5733", emoji: "🔥", backgroundColor:'#fae2cd'};

        case "grass":

            return { borderColor: "#66CC66", emoji: "🌿",backgroundColor:'#cdface' };

        default:

            return { borderColor: "#A0A0A0", emoji: "❓", backgroundColor:'#fff' };

    }
}
export default function PokemonCard(props){
    //console.log(props.data.name)
    const {name, image, type, hp, moves, weakness}= props.data
    const {borderColor, emoji,backgroundColor} = getTypeDeatils(type)
    return(
    <View style={[styles.card,{backgroundColor}]}>
        <View style={styles.nameContainer}>
            <Text style={styles.name}>{name}</Text>
            <Text style={styles.hp}>❤{hp}</Text>
        </View>
        
        <Image source={image} style={styles.image} accessibilityLabel={`${name} Pokemon`} resizeMode="contain" />
        
        <View style={styles.typeContainer}>
            <View style={[styles.badge, {borderColor}]}>
                <Text style={styles.typeEmoji}>{emoji}</Text>
                <Text style={styles.typeText}>{type}</Text>
            </View>
        </View>
        
        <View styles={styles.movesContainer}>
            <Text style={styles.movesText}>Moves: {moves.join(', ')}</Text>
        </View>
        <View styles={styles.weaknessContainer}>
            <Text style={styles.weaknessText}>Weakness: {weakness.join(", ")}</Text>
        </View>
    </View>
    )
}
const styles = StyleSheet.create({
    card:{
        backgroundColor:'white',
        borderRadius:16,
        borderWidth:2,
        padding:16,
        margin:16,
        ...Platform.select({
            ios:{

            },
            android:{
                elevation: 15,
            },
        })
    },
    nameContainer:{
        flexDirection:'row',
        justifyContent:'space-between',
        marginBottom:32,
        

    },
    name:{
        fontSize:32,
        fontStyle:"normal",
        color:'black',
    },
    hp:{
        marginTop:15,
        fontSize:15,
        fontStyle:'normal',
        color:'black',
    },
    textColor:{
        color:'black',
    },
    image:{
        width:"100%",
        height:200,
        marginBottom:16,

    },
    typeContainer:{
        marginBottom:40,
        flexDirection:'row',
        alignItems:'center',
        justifyContent:"center",

    },
    badge:{
        flexDirection:"row",
        alignItems:"center",
        paddingVertical:6,
        paddingHorizontal:12,
        borderRadius:20,
        borderWidth:4,
    },
    typeEmoji:{
        fontSize:30,
        marginRight:12,
        color:'black'
    },
    typeText:{
        fontSize:22,
        fontWeight:'bold',
        color:'black'
    },
    movesContainer:{
        marginBottom:12,
    },
    movesText:{
        fontSize:20,
        color:'black'
    },
    weaknessContainer:{
        marginBottom:12,
    },
    weaknessText:{
        fontSize:20,
        color:'black'
    }
}
    
)