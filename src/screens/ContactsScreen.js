import { View, Text,StyleSheet,TouchableOpacity,Image,ScrollView } from 'react-native'
import React,{useState,useEffect} from 'react'
import {SearchBar,Divider} from 'react-native-elements'

import { contacts as allContacts } from '../api/static_data/contacts'

const ContactsScreen = () => {
  const [searchText,setSearchText] = useState('');
  const [contacts,setContacts] = useState(allContacts);
  const [activeExtraMenuKey,setActiveExtraMenuKey] = useState(-1);

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Contacts</Text>
      <View style={styles.contactsWrapper}>
        <SearchBar
          placeholder="Search"
          lightTheme
          round
          containerStyle={{marginVertical:6,marginHorizontal:8,padding:0,borderRadius:50}}
          inputContainerStyle={{backgroundColor:'#f1f7ff',height:30}}
          value={searchText}
          onChangeText={(search) =>{setContacts(allContacts.filter((contact=>contact.name.includes(search))));setSearchText(search)}}
          autoCorrect={false}
          style={{height:10}}
        />
        <Divider width={2} />
       <ScrollView style={{padding:12}}> 
       {contacts.map((element,index) =>(
                    <View key={index} style={[styles.singleContact,{paddingBottom:activeExtraMenuKey==index && index==contacts.length-1?70:10}]}>
                        <View style={{flexDirection:'row'}}>
                            <Image source={{uri:element.image}} style={styles.contactsImage} />
                            <View style={{lineHeight:12}}>
                                <Text style={{fontSize:17,fontWeight:'500',marginBottom:3}}>{element.name}</Text>
                                <Text style={{fontSize:14,fontWeight:'400'}}>{element.relation}  <Text style={{fontWeight:'800'}}>.</Text>  {element.contact}</Text>
                            </View>  
                        </View>
                        <TouchableOpacity onPress={()=>{activeExtraMenuKey==index?setActiveExtraMenuKey(-1):setActiveExtraMenuKey(index)}}>
                            <Image style={{height:26,width:18}} source = {require('../../assets/images/vertical-menu.png')} />   
                        </TouchableOpacity>
                        <View key={index} style={[styles.extraOptions,{display:activeExtraMenuKey==index?'flex':'none'}]}>
                                <TouchableOpacity><Text>Call</Text></TouchableOpacity>
                                <TouchableOpacity><Text>Send Email</Text></TouchableOpacity>
                                <TouchableOpacity><Text>Edit</Text></TouchableOpacity>
                        </View>
                    </View> 
                ))}
        </ScrollView>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 6,
    backgroundColor: '#f1f5ff',
    borderTopLeftRadius:30,
    borderTopRightRadius:30,
    paddingTop:20,
    paddingHorizontal:20,
  },
  heading:{
    color:'#78b2d4',
    fontSize:25,
    fontWeight:'700',
    marginBottom:20,
    letterSpacing:0.2
  },
  contactsWrapper:{
    backgroundColor:'white',
    borderWidth:2,
    borderColor:'lightgrey',
    flex:1,
    // padding:5,
    borderRadius:8,
    paddingBottom:10,
    borderBottomWidth:0
  },
  contactsImage:{
    width:60,
    height:60,
    borderRadius:50,
    marginRight:15
  },
  extraOptions:{
    borderWidth:2,
    position:'absolute',
    top:40,
    right:0,
    width:100,
    padding:5,
    backgroundColor:'rgba(241, 245, 255, 1)',
    display:'none',
    borderRadius:12,
    padding:10,
    borderColor:'lightgrey',
    zIndex:1000
  },
  singleContact:{
    flexDirection:'row',
    justifyContent:'space-between',
    borderStyle: 'dashed',
    borderBottomWidth:1,
    borderColor:'lightgrey',
    paddingVertical:12,
  }
});
export default ContactsScreen