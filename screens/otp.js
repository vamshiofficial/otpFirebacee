import React,{useState,useEffect} from 'react'
import { View, Text, Touchable, TouchableOpacity ,StyleSheet, TextInput} from 'react-native'
import setupFirebase from '../setups/setupFirebase'
import PushNotification from "react-native-push-notification";

export default function OtpVerify() {
    const {auth} = setupFirebase()
    const [confirm, setconfirm] = useState(null)
    const [code, setcode] = useState('')
    // =
    useEffect(() => {
        CreateChannel()
    }, [])
    const sendOtpNow = async(phone) => {
        const confirmation = await auth().signInWithPhoneNumber(phone); 
        setconfirm(confirmation)
    }
    const confirmThisOtp = async() => {
        try{
            await confirm.confirm(code);
            alert('success')
        }
        catch(e){
            console.log(e);
        }
    }
    const CreateChannel = () => {
        PushNotification.createChannel(
            {
                channelId:"test-channel",
                channelName:'TestChannel'
            }
        )
    }
    const HandleNotifications = () => {
        PushNotification.localNotification({
            channelId:"test-channel",
            title:'New notification',
            message:'yes this is the firtst notifications',
            bigPictureUrl:"https://esigm.com/opens/assets/images/india-flag.png",
            largeIconUrl:'https://esigm.com/opens/used_imgs/opens-logo.png'
        })
    }
    if(!confirm){
        return (
            <View style={styles.container}>
                <Text>otp</Text>
                <TouchableOpacity onPress={()=> sendOtpNow('+91 9505504113')} style={styles.otp_btn}>
                    <Text>Send otp now</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={()=>HandleNotifications()} style={styles.otp_btn}>
                    <Text>DisplayNotification</Text>
                </TouchableOpacity>
            </View>
        )
    }
    return (
        <View style={styles.container}>
            <Text>otp</Text>
            <TextInput 
            defaultValue={code}
            onChangeText={(text)=>setcode(text)}
            placeholder="enter otp"
            style={styles.input_otp}
            />
            <TouchableOpacity onPress={()=> confirmThisOtp()} style={styles.otp_btn}>
                <Text>confirm otp</Text>
            </TouchableOpacity>
        </View>
    )
}
const styles = StyleSheet.create({
    container:{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    otp_btn:{
        width: '90%',
        paddingVertical:15,
        backgroundColor:'#3498db',
        borderRadius:25,
        alignItems: 'center',
        marginTop:50,
    },
    input_otp:{
        width: '90%',
        paddingVertical:15,
        backgroundColor:'#f3f3f3',
        borderRadius:25,
        alignItems: 'center',
        marginTop:50, 
    }
})
