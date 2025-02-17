import { StyleSheet } from "react-native";

export default StyleSheet.create({
    container: {
        flex: 1, 
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#fff", 
        
      },

    heading: {
      padding: 20,
      fontFamily: 'PoppinsMedium',
      fontSize: 35,
    },
    text: {
        fontSize: 30,
        fontWeight: 'bold',
    },
    logo: {
        width: "80%", 
        height: undefined, 
        aspectRatio: 1, 
      },

      inputButtonContainer: {
        position: 'absolute',
        bottom: 60,
        left: 20,
        right: 20,
        alignItems: 'center',
    },
    
    inputButton: {
        backgroundColor: '#668BF2',
        paddingVertical: 15,
        paddingHorizontal: 40,
        borderRadius: 10,
        alignItems: 'center',
        
    },
    
    inputButtonText: {
        color: 'white',
        fontSize: 20,
        fontWeight: 'bold',
        fontFamily: 'PoppinsMedium',
    },
    

      
    
})