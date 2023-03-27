import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Welcome from '../pages/Welcome'
import Singin from "../pages/Signin";

const Stack = createNativeStackNavigator();

export default function Routes(){
    return(
        <Stack.Navigator>
            <Stack.Screen
                name="Wellcome"
                component={Welcome}
                options={{ headerShown: false}} // tira o header padrão.
            />

            <Stack.Screen
                name="Signin"
                component={Singin}
                options={{ headerShown: false}}
            />
        </Stack.Navigator>
    )
}