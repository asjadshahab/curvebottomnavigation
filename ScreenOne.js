import React from 'react';
import { StyleSheet, Button, View, SafeAreaView, Text, Alert } from 'react-native';



const ScreenOne = ({navigation}) => (
  
    <View>
      <Text style={styles.title}>
        ScreenOne
      </Text>
      <Button
        title="Go to Screen Two"
        onPress={() =>navigation.navigate('2')}
      />
    </View>
    
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    marginHorizontal: 16,
  },
  title: {
    textAlign: 'center',
    marginVertical: 8,
  },
  fixToText: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  separator: {
    marginVertical: 8,
    borderBottomColor: '#737373',
    borderBottomWidth: StyleSheet.hairlineWidth,
  },
});

export default ScreenOne;
