import AsyncStorage from "@react-native-async-storage/async-storage";
import axios from "axios";
import React, {createContext, useState} from "react";
import { BASE_URL } from "../config";
export const AuthContext = createContext();

export const AuthProvider = ({children}) => {

    const [isLoading,setIsLoading] = useState(false);
    const [userInfo, SetUserInfo] = useState({});

    const login = (email,password) => {
        setIsLoading(true);
        const url = `${BASE_URL}/login?email=${email}&password=${password}`;
        axios
            .post(url,
            {},
            )
            .then(res => {
                let userInfo = res.data;
                console.log(userInfo.token);
                SetUserInfo(userInfo);
                AsyncStorage.setItem('userInfo', JSON.stringify(userInfo));
                setIsLoading(false);
            })
            .catch(e => {
                console.log(`login error ${e}`);
                setIsLoading(false);
            });
    }

    return(
        <AuthContext.Provider 
        value={{
            isLoading,
            userInfo,
            login
        }}>
            {children}
        </AuthContext.Provider>
    );
};