import { Text, StyleSheet } from 'react-native'
const RaveScreen = () => {
    return (
        <Text style={styles.wrapper}>Your recordings are displayed here</Text>
    )
}
const styles = StyleSheet.create({
    wrapper: {
        marginTop: 200,
        marginLeft: 80,
        justifyContent: 'center',
        alignItems: 'center'
    },

})

export default RaveScreen