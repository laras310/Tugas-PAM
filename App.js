import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, Button, View, SafeAreaView, TextInput, Pressable } from 'react-native';
import React from 'react';

export default function App() {
  console.log("aplikasi berjalan");
  
  // const InputTeks = () =>{

  // }
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.isi}>
        <Text>ini tempat ikon</Text>
      </View>
      
      <Text style={styles.title}>Hiling.id</Text>
      
      <View style={styles.area}>
        <Text  style={styles.textarea}>Lokasi Keberangkatan</Text>
        
        <TextInput
          style={styles.input}
          // onChangeText={onChangeNumber}
          // value={number}
          placeholder="Masukan Lokasi Keberangkatan"
        />

        <Text  style={styles.textarea}>Lokasi Tujuan</Text>
                
        <TextInput
          style={styles.input}
          // onChangeText={onChangeNumber}
          // value={number}
          placeholder="Masukan Lokasi Tujuan"
        />

        <Text  style={styles.textarea}>Tanggal Keberangkatan</Text>

        <TextInput
          style={styles.input}
          // onChangeText={onChangeNumber}
          // value={number}
          placeholder="Masukan Tanggal Keberangkatan"
        />

        <Pressable
          // onPress={() => {
          //   setTimesPressed((current) => current + 1);
          // }}
          style={({ pressed }) => [
            {
              backgroundColor: pressed
                ? '#B4846C'
                : '#7D5A50'
            },
            styles.button
          ]}>
          {({ pressed }) => (
            <Text style={styles.btnText}>
              Cari
            </Text>
          )}
        </Pressable>
      </View>
      <Text style={styles.copyright}>Copyright Nurul Aulia Larasati-119140008</Text> 
      <StatusBar style="auto" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#E5B299',
    // alignItems: 'center',
    // justifyContent: 'center',
    // marginHorizontal: 16,
  },

  isi:{
    marginHorizontal:30,
    marginVertical:40,
  },
  area:{
    marginHorizontal: 50,
    marginVertical:50,
    backgroundColor:"#FFEFDF",
    paddingTop:15,
    paddingHorizontal:30,
    paddingBottom:60,
    borderRadius:10,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },

  title:{
    textAlign:'center',
    // marginVertical:10,
    fontSize:30,
  },

  textarea:{
    fontWeight:"bold",
    marginVertical:10,
    fontSize:15,
  },
  
  input:{
    borderWidth:1,
    marginBottom:12,
    height:40,
    padding:10
  },

  button:{
    borderRadius:10,
    padding:10,
    marginTop:30,
  },

  btnText:{
    fontSize:20,
    color:'white',
    textAlign:'center',
    // marginVertical: 12,
  },

  copyright:{
    fontSize:15,
    opacity:0.3,
    marginTop:150,
    textAlign:'center',
  }
});
