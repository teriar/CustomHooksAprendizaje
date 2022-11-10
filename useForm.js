import { useState } from "react"


export const useForm = (initialForm = {}) => {
 

    const [formState, setformstate] = useState(initialForm)

   
    const onResetForm=()=>{

        setformstate(initialForm)
    }

    const onInputChange=({target})=>{
        
        const {name,value} = target

        setformstate({
            ...formState,
            [name]: value
        })

    }

  

  return {
    ...formState,
     formState,
     onInputChange,
     onResetForm

  }


}
