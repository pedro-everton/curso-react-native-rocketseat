import { Image, View } from "react-native"
import {  } from "@expo"
import { styles } from "./styles"
import

export default function Index(){
    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Image source={require("@/assets/logo.png")} />
            </View>
        </View>
    )
}