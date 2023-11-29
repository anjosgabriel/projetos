import React from "react";
import {createBottomTabNavigator , createSwitchNavigator}  from 'react-navigation'
import Icon from 'react-native-vector-icons/FontAwesome'

import Login from './../pages/login'

const loginOrProfileRoute = createSwitchNavigator({
    Profile: Profile,
    Auth: Login
},{
    initialRouteName:'Profile'
}
)