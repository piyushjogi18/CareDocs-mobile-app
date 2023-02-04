import { View, Text,StyleSheet,Image,TouchableOpacity } from 'react-native'

const Header = () => {
  return (
    <View style={styles.container}>
            <Image style = {styles.backButton} source = {{uri:'https://img.icons8.com/ios-glyphs/90/ffffff/back.png'}}  />
            <View style={styles.headerContentContainer}>
                <View>
                   <Text style={styles.heading}>Care<Text style={{fontWeight:'900'}}>docs</Text></Text>
                   <Text style={styles.subHeading}>Owner</Text>
               </View>
               <TouchableOpacity style={styles.iconsOuter}>
                   <View style={styles.unreadBadgeContainer}>
                      <Text style={styles.unreadBadgeText}>10</Text>
                   </View>
                   <Image style={styles.icons} source = {require('../../assets/images/bell.png')} />
               </TouchableOpacity>
               <TouchableOpacity style={styles.iconsOuter}>
                   <Image style={styles.icons} source = {require('../../assets/images/menu-icon.png')} />
               </TouchableOpacity>
            </View>
    </View>
  )
}

const styles = StyleSheet.create({

    container:{
       flex:1,
       flexDirection:'row',
       justifyContent:'space-between',
       alignItems:'center',
       paddingHorizontal:15,
    }, 
    icons:{
       width:30,
       height:30,
       resizeMode:'contain'
    },
    headerContentContainer:{
       flexDirection:'row',
       justifyContent:'flex-start',
       alignItems:'center' 
    },
    heading:{
        color:'white',
        fontSize:35,
        letterSpacing:2,
        marginRight:2
    },
    iconsOuter : {
        backgroundColor:'#379dba',
        margin:4,
        paddingVertical:8,
        paddingHorizontal:2,
        borderRadius:50,
        marginBottom:25
    },
    subHeading:{
        fontSize:14,
        textAlign:'center',
        letterSpacing:1,
        color:'white',
    },
    backButton: {
       height:25,
       width:25,
       resizeMode:'contain',
    },
    unreadBadgeContainer: {  
      backgroundColor:'#f0496f',
      height:22,
      width:22,
      position:"absolute",
      left:16,
      bottom:28,
      borderRadius:25,
      alignItems:'center',
      justifyContent:'center',
      zIndex:100,
    }, 
    unreadBadgeText:{
      color:'white',
      fontWeight:'800',
    },
 });

export default Header