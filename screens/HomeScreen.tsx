import { Pressable, StyleSheet } from 'react-native';
import { View, Text } from '../components/Themed';

//
interface HomeScreenProps {
    navigation: any;
}

//
export default function HomeScreen({ navigation }: HomeScreenProps) {
    return (
        <View style={styles.container}>
            <Text>This is Home</Text>

            <Pressable>
                <Text
                    onPress={() => {
                        navigation.navigate('Root');
                    }}
                >
                    Goto Root
                </Text>
            </Pressable>
        </View>
    );
}

//
const styles = StyleSheet.create({
    container: {},
});
