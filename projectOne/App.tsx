import React from 'react';
import { View, Text, StyleSheet, SafeAreaView, ScrollView, Image } from 'react-native';
import PokemonCard from './components/PokemonCard';

//const charmanderImg = <Image source={{uri: 'https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/e2a5ed19-821d-468d-97f8-a40ad04ce7c2/dbm69i8-237e2849-de0d-4a58-8eb9-ec94c13e0153.gif?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcL2UyYTVlZDE5LTgyMWQtNDY4ZC05N2Y4LWE0MGFkMDRjZTdjMlwvZGJtNjlpOC0yMzdlMjg0OS1kZTBkLTRhNTgtOGViOS1lYzk0YzEzZTAxNTMuZ2lmIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.qt4B3_ACyvNlYNKS2_9Y1BZnjh5mKQC7INBtTmj0PdY'}}/>


const charmanderData={
  name:'Charmander',
  // image:{uri: 'https://www.deviantart.com/metallicumbrage/art/Happy-Charmander-ANIMATION-702371744'},
  image:require('./assets/Charmander.gif'),
  type:'Fire',
  hp:39,
  moves:['Scratch', 'Ember'],
  weakness:['Water','Rock']
}
const squirtleData={
  name:'Squirtle',
  image:require('./assets/Squirtle.gif'),
  type:'Water',
  hp:44,
  moves:['Water Gun', 'Rain Dance'],
  weakness:['Grass','Electric']
}
const bulbasurData={
  name:'Bulbasaur',
  image:require('./assets/bulbasur.gif'),
  type:'Grass',
  hp:45,
  moves:['Tackle', 'Vine Whip'],
  weakness:['Fire','Ice']
}
const pikachuData={
  name:'Pokemon',
  image:require('./assets/pikachu.gif'),
  type:'Electric',
  hp:35,
  moves:['Quick Attack', 'Thunder Bolt'],
  weakness:['Ground']
}

const App: React.FC = () => {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <PokemonCard data={pikachuData}/>
        <PokemonCard data={charmanderData}/>
        <PokemonCard data={squirtleData}/>
        <PokemonCard data={bulbasurData}/>
        <PokemonCard data={pikachuData}/>
      </ScrollView>
    </SafeAreaView>
  );
};

 

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
      
  },
});

 

export default App;