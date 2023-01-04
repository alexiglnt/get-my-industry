import Login from "./Elements/Login" 
import UserInfos from "./Elements/UserInfos"
import { useEffect, useState } from "react"


export default function PageUser() {

    const [isAuth, setIsAuth] = useState(false)

    useEffect(() => {
        
        if (localStorage.getItem('isAuth')) {
            setIsAuth(localStorage.getItem('isAuth'))
        }
        else {
            setIsAuth(true)
        }

    }, [])

    return (

        <div>
            {isAuth == 'true' ? <UserInfos /> : null}
            {isAuth == 'false' ? <Login /> : null}
        </div>
    )

}