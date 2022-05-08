import { useState } from './react';


export function useForm(initailData) {
    const [data, setData] = useState(initailData)
    const [isEmailValid, setIsEmailValid] = useState(true);
    const [isPassValid, setIsPassValid] = useState(true);

    const changeHandler = (key) => (e) => {
        const value = e.target.value;

        setData({
            ...data,
            [key]: value,
        });

        
    }    

    // click handler is remove inputs data
    const clickHandler = () => {
        setData(initailData)
    }

    // check for form validation
    const isValid = () =>  {
        
        const insertedEmail = data?.email;
        const insertedPassword = data?.password;
        
        if (!insertedEmail?.includes(".com") && !insertedEmail?.includes("@")) {
             setIsEmailValid(false)
        } else setIsEmailValid(true);

        if (insertedPassword.length <= 8) {
            setIsPassValid(false)
        } else setIsPassValid(true)
 
    }

    return [ data, isEmailValid, isPassValid, changeHandler, isValid]
}