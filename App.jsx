import { SafeAreaView, StatusBar } from 'react-native';
import Cesta from './src/Telas/Cesta';

export default function App() {
  return (
    <SafeAreaView>
      <StatusBar/>
      <Cesta/>
    </SafeAreaView>
  );
}