import { useState } from "react";


export const useForm = (data = {}) => {

    const [formstate, setFormstate] = useState(data);

   

    const onChangeName = ({target}) => {
        setFormstate({
            ...formstate,
            nombre: target.value,
        })
    }
    const onChangeMail = ({target}) => {
        setFormstate({
            ...formstate,
            email: target.value,
        })
    }
    const onChangePW = ({target}) => {
        setFormstate({
            ...formstate,
            password: target.value,
        })
    }
    const onResetForm = () => {
        setFormstate(data)
        
    }



  return {
        formstate,
        onChangeMail,
        onChangeName,
        onChangePW,
        onResetForm,
    }
}
