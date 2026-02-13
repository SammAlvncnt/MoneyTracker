import { View, Text, Button } from 'react-native';

export default function DashboardScreen({ navigation }) {
  return (
    <View style={{ flex:1, justifyContent:'center', alignItems:'center' }}>
      <Text>Dashboard</Text>
      <Button 
        title="Logout"
        onPress={() => navigation.navigate('Login')}
      />
    </View>
  );
}
