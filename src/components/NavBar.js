// import React from 'react';
// import { StyleSheet, View, Text, Image, Pressable } from 'react-native';
// import { Octicons } from '@expo/vector-icons';
// import theme from '../../assets/themes';

// var iconSize = 26;

// const NavBar = ({navigation}) => {
//         return (
//             <View style = {styles.container}>
//                 <View style = {styles.navContainer}>
//                     <View style = {styles.navBar}>
//                         <Pressable onPress = {() => navigation.navigate('Feed')} style = {styles.iconBehavior}
//                         android_ripple = {{borderless: true, radius: 50}}>
//                             <Octicons name = 'home' size = {iconSize} color = {theme.colors.primary} />
//                         </Pressable>

//                         <Pressable onPress = {() => navigation.navigate('Profile')} style = {styles.iconBehavior}
//                         android_ripple = {{borderless: true, radius: 50}}>
//                             <Octicons name = 'plus' size = {iconSize} color = {theme.colors.primary} />
//                         </Pressable>

//                         <Pressable onPress = {() => navigation.navigate('Discover')} style = {styles.iconBehavior}
//                         android_ripple = {{borderless: true, radius: 50}}>
//                             <Octicons name = 'search' size = {iconSize} color = {theme.colors.primary} />
//                         </Pressable>

//                         <Pressable onPress = {() => navigation.navigate('Profile')} style = {styles.iconBehavior}
//                         android_ripple = {{borderless: true, radius: 50}}>
//                             <Octicons name = 'person' size = {iconSize} color = {theme.colors.primary} />
//                         </Pressable>
//                     </View>
//                 </View>
//             </View>
//         )
// }

// const styles = StyleSheet.create({
//     container: {
//         flex: 1,
//         alignItems: 'center',
//         justifyContent: 'center',
//     },
//     navContainer: {
//         alignItems: 'center',
//         justifyContent: 'center',
//         position: 'absolute',
//         bottom: 15,
//     },
//     navBar: {
//         flexDirection: 'row',
//         backgroundColor: theme.colors.gray,
//         width: '90%',
//         justifyContent: 'space-evenly',
//         borderRadius: theme.borderRadius.m,
//     },
//     iconBehavior: {
//         padding: 14,
//     }
// })

// export default NavBar;