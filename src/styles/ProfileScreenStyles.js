import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'flex-start',
        alignItems: 'center',
        backgroundColor: '#fff',
    },
    header: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 16,
        marginTop: 20,
    },
    iconContainer: {
        marginTop: 16,
        borderRadius: 50, 
        overflow: 'hidden',
        width: 100,
        height: 100,
        backgroundColor: 'white',
        borderWidth: 1,
        justifyContent: 'center',
    },
    backgroundImage: {
        flex: 0.9,
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
    },

    statsContainer: {
        marginTop: 50,
        alignItems: 'center',
    },

    statsText: {
        fontSize: 18,
        marginVertical: 5,
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
        width: '90%',
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