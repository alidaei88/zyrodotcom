import './LetsTalk.css';
import contactMeImg from '../../public/contactme.avif'
import { useState } from 'react';
import { useForm } from '../../modules/useForm';

// function useForm(initailData) {
//     const [data, setData] = useState(initailData)
//     const [isEmailValid, setIsEmailValid] = useState(true);
//     const [isPassValid, setIsPassValid] = useState(true);

//     const changeHandler = (key) => (e) => {
//         const value = e.target.value;

//         setData({
//             ...data,
//             [key]: value,
//         });

        
//     }    

//     // click handler is remove inputs data
//     const clickHandler = () => {
//         setData(initailData)
//     }

//     // check for form validation
//     const isValid = () =>  {
        
//         const insertedEmail = data?.email;
//         const insertedPassword = data?.password;
        
//         if (!insertedEmail?.includes(".com") && !insertedEmail?.includes("@")) {
//              setIsEmailValid(false)
//         } else setIsEmailValid(true);

//         if (insertedPassword.length <= 8) {
//             setIsPassValid(false)
//         } else setIsPassValid(true)
 
//     }

//     return [ data, isEmailValid, isPassValid, changeHandler, isValid]
// }



const LetsTalk = () => {

    const [data, evalid, pvalid, hc, is] = useForm({ email: "", password: "" });

    // const [isEmailValid, setIsEmailValid] = useState(true);
    // const [isPassValid, setIsPassValid] = useState(true);
    // const validation = () => {
    //     const insertedEmail = data.email
    //     const insertedPassword = data.password
    //     if (!insertedEmail?.includes(".com") && !insertedEmail?.includes("@")) {
    //         setIsEmailValid(false)
    //     } else setIsEmailValid(true);

    //     if (insertedPassword.length <= 8) {
    //         setIsPassValid(false)
    //     }else setIsPassValid(true)

    //     console.log(insertedEmail, insertedPassword)

    // }

    return (
        <div className="letsTalkSection">
            <div className="formSection">
                <h1 className="letsTalkTitle">Let's talk</h1>
                <form className="form">
                    <label htmlFor='name'>Name</label>
                    <input type="text" id='name' placeholder="your name" />
                    <label htmlFor='email'>Your email*</label>
                    <input type="text" id='email' placeholder="your email address" />
                    <label htmlFor='message'>Message*</label>
                    <textarea id='message' placeholder="Enter your message" width="50%"></textarea>
                    <button className="submitBtn">Submit</button>
                </form>

            <div className="formSection">
                  <label htmlFor='email'>Your email*</label>
                    <input type="text" id='email' placeholder="your email address" value={data.email}  onChange={ hc("email") } />
                  <br />  
                  <label htmlFor='password'>Your password*</label>
                    <input type="password" id='password' placeholder="your passwword" value={data.password} onChange={hc("password")} /> 
                    <div>
                      {!evalid && <p>invalid Email Inserted </p>}
                    </div> 
                    <div>
                      {!pvalid && <p>invalid password inserted </p> }
                    </div>
                   
                  <br />
                  <button className="submitBtn" onClick={ is }>Submit</button>  
            </div>
            </div>
            <div className="contactImageHolder">
                <img className="contactMeImg" src={ contactMeImg } alt="Contact Me" />
            </div>

        </div>
    )
}

export default LetsTalk;