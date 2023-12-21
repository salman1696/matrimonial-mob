import React from 'react';
import { AccountCreate, Example, Login, Signup, LoginTab, SecurityCode, EnterOTP, RecoverPassword, NewPassword, AccountCompete, QuestionaireSkip, CaseInvoice } from '../screens';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();

// @refresh reset
const AuthNavigator = () => {
    return (
        <Stack.Navigator screenOptions={{ headerShown: false }}>
            {/* <Stack.Screen name="CaseInvoice" component={CaseInvoice} /> */}

            <Stack.Screen name="Login" component={Login} />
            <Stack.Screen name="Signup" component={Signup} />
            <Stack.Screen name="AccountCreate" component={AccountCreate} />
            <Stack.Screen name="LoginTab" component={LoginTab} />
            <Stack.Screen name="SecurityCode" component={SecurityCode} />
            <Stack.Screen name="RecoverPassword" component={RecoverPassword} />
            <Stack.Screen name="EnterOTP" component={EnterOTP} />
            <Stack.Screen name="NewPassword" component={NewPassword} />
            <Stack.Screen name="AccountCompete" component={AccountCompete} />
            <Stack.Screen name="QuestionaireSkip" component={QuestionaireSkip} />


        </Stack.Navigator>
    );
};

export default AuthNavigator;
