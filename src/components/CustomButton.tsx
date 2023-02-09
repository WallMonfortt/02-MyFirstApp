import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

export const CustomButton = ( location:String , setCounter:Function, counter:number ) => {

  return (
    <TouchableOpacity
            style={location == 'br' ? styles.fabLocationBR : styles.fabLocationBL}
            onPress={() => {
                setCounter(counter + 1)
            }}
        >
            <View
                style={styles.fab}
            >
                <Text style = { styles.fabText}>
                    {location == 'br' ? '+1' : '-1'}
                </Text>
            </View>
        </TouchableOpacity>
  )
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
    },
    title: {
        fontSize: 20,
        textAlign: 'center',
    },
    button: {
        backgroundColor: 'red',
        height: 50,
        width: 50,
        borderRadius: 50,
        justifyContent: 'center',
        alignItems: 'center',
    }, 
    fabLocationBR:{
        position: 'absolute',
        bottom: 25,
        right: 25,

    },
    fabLocationBL:{
        position: 'absolute',
        bottom: 25,
        left: 25,
    },
    fab: {
        backgroundColor: '#5856D6',
        width: 60,
        height: 60,
        borderRadius: 100,
        justifyContent: 'center',
    },
    fabText: {
        color: 'white',
        fontSize: 25,
        fontWeight: 'bold',
        alignSelf: 'center',
    }
})