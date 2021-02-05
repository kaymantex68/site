import { useState, useCallback, useEffect } from 'react'

export const useAuth = () => {
    const [token, setToken] = useState(null)
    const [userId, setUserId] = useState(null)

    const userData = "userData"
    //=========================================== login
    const login = useCallback(
        (jwtToken, id) => {
            setToken(jwtToken)
            setUserId(id)
            localStorage.setItem(userData, JSON.stringify({ jwtToken, id }))
        }, [])
    //=========================================== logout    
    const logout = useCallback(
        () => {
            setToken(null)
            setUserId(null)

            localStorage.removeItem(userData)
        }, [])
    //================= вот эта часть отвечает за вход в личный кабинет
    //================= при загрузке страницы, если jwt токен жив
    useEffect(() => {
        const data = JSON.parse(localStorage.getItem(userData))
        if (data && data.jwtToken) {
            
            login(data.jwtToken, data.id)
        }
    }, [login])
    //============================= возвращаем объект для деструктуризации
    return { login, logout, token, userId }
}