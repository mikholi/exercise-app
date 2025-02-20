import { StyleSheet } from "react-native";

export default StyleSheet.create({
    container: {
        flex: 1, 
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#B3E5FC", 
        
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
    
    

      
    
})