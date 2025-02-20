import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'flex-start',
        alignItems: 'center',
        backgroundColor: '#B3E5FC',
        
    },
    header: {
        fontSize: 24,
        fontWeight: 'bold',
        
        marginTop: 20,
    },
    iconContainer: {
        marginTop: 10,
        borderRadius: 50, 
        overflow: 'hidden',
        width: 100,
        height: 100,
        backgroundColor: 'white',
        borderWidth: 1,
        justifyContent: 'center',
    },
    backgroundImage: {
        flex: 1,
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        resizeMode: 'cover',
    },

    statsContainer: {
        marginTop: 30,
        alignItems: 'center',
    },

    statsText: {
        fontSize: 18,
        marginVertical: 5,
        fontWeight: 'bold',
    },

    sportsContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingVertical: 10,
        paddingHorizontal: 50,
        marginVertical: 5,
        backgroundColor: '#03A9F4',
        borderRadius: 10,
        width: '80%',
    },

    sportText: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#fff',
    },

    distanceText: {
        fontSize: 18,
        color: 'black',
    },
    

    
});

export default styles;