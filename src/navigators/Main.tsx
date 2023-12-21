import React from 'react';
import { AccountCreate, AddAssets, AddCard, AddEducation, AddWork, AppTerms, Assets, CaseInvoice, ChangePassword, Divorce, InitPayment, KidDetail, Kids, MainFlow, Marriage, NotificationSetting, Notifications, Patrimony, Payment, PaymentComplete, PaymentHistory, Policy, ProcessOTP, ReturnPolicy, Setting, SetupProfile, TermsCondition, WifeDetail, Wives } from '../screens';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();

// @refresh reset
const MainNavigator = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>

      <Stack.Screen name="MainFlow" component={MainFlow} />
      <Stack.Screen name="Wives" component={Wives} />
      <Stack.Screen name="Kids" component={Kids} />
      <Stack.Screen name="WifeDetail" component={WifeDetail} />
      <Stack.Screen name="KidDetail" component={KidDetail} />
      <Stack.Screen name="Assets" component={Assets} />
      <Stack.Screen name="Notifications" component={Notifications} />
      <Stack.Screen name="AddAssets" component={AddAssets} />
      <Stack.Screen name="Setting" component={Setting} />
      <Stack.Screen name="InitPayment" component={InitPayment} />
      <Stack.Screen name="Payment" component={Payment} />
      <Stack.Screen name="AddCard" component={AddCard} />
      <Stack.Screen name="PaymentComplete" component={PaymentComplete} />
      <Stack.Screen name="Marriage" component={Marriage} />
      <Stack.Screen name="Divorce" component={Divorce} />
      <Stack.Screen name="Patrimony" component={Patrimony} />
      <Stack.Screen name="SetupProfile" component={SetupProfile} />
      <Stack.Screen name="ChangePassword" component={ChangePassword} />
      <Stack.Screen name="NotificationSetting" component={NotificationSetting} />
      <Stack.Screen name="Policy" component={Policy} />
      <Stack.Screen name="ReturnPolicy" component={ReturnPolicy} />
      <Stack.Screen name="TermsCondition" component={TermsCondition} />
      <Stack.Screen name="PaymentHistory" component={PaymentHistory} />
      <Stack.Screen name="AppTerms" component={AppTerms} />
      <Stack.Screen name="AddWork" component={AddWork} />
      <Stack.Screen name="AddEducation" component={AddEducation} />
      <Stack.Screen name="CaseInvoice" component={CaseInvoice} />
      <Stack.Screen name="ProcessOTP" component={ProcessOTP} />

    </Stack.Navigator>
  );
};

export default MainNavigator;
