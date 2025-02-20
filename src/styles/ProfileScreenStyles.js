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
        marginTop: 50,
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
        flex: 0.5,
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
    },
});

export default styles;