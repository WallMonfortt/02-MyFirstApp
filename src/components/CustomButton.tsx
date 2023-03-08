import { View, Text, TouchableOpacity, StyleSheet, TouchableNativeFeedback } from 'react-native';

interface Props {
    title: string;
    position: 'br' | 'bl';
    onPress: () => void;
}

export const CustomButton = ( {title, position, onPress}:Props ) => {

  return (
    <>
        <View
            style={[styles.fabLocation, position === 'br' ? styles.rigth : styles.left]}
        >
        <TouchableNativeFeedback
            // style={position === 'br' ? styles.fabLocationBR : styles.fabLocationBL} // Otra forma de hacerlo
            onPress={ onPress }
            background={TouchableNativeFeedback.Ripple('#28425B', false, 30)} // El tercer parametro es el radio del ripple
        >
            <View
                style={styles.fab}
            >
                <Text style = { styles.fabText}>
                    {title}
                </Text>
            </View>
        </TouchableNativeFeedback>
        </View>
    </>
  )
}


const styles = StyleSheet.create({ 
    fabLocation:{
        position: 'absolute',
        bottom: 25,
    },
    rigth: {
        right: 25,
    },
    left: {
        left: 25,
    },
    // fabLocationBR:{
    //     position: 'absolute',
    //     bottom: 25,
    //     right: 25,

    // },
    // fabLocationBL:{
    //     position: 'absolute',
    //     bottom: 25,
    //     left: 25,
    // },
    fab: {
        backgroundColor: '#5856D6',
        width: 60,
        height: 60,
        borderRadius: 100,
        justifyContent: 'center',
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 7,
        },
        shadowOpacity: 0.41,
        shadowRadius: 9.11,
        elevation: 8,
    },
    fabText: {
        color: 'white',
        fontSize: 25,
        fontWeight: 'bold',
        alignSelf: 'center',
    }
})