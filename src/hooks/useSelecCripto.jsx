import {useState} from 'react'
import styled from '@emotion/styled'

const LabelCrip = styled.label `
color: #fff;
display:block;
font-family:'Ubuntu Mono', sans-serif;
font-size:24px;
font-weight:700;
margin: 15px 0;
`
const SelectCrip = styled.select `
width:100%;
font-size:18px;
padding:14px;
border-radius:10px;

`


const useSelectCripMonedas = (label,opciones) => {
   
    const [state, setState] = useState ('')

    const SelectCriptomonedas = () => (
        <>
            <LabelCrip>{label}</LabelCrip>
            
            <SelectCrip 
                    value={state}
                    onChange = { e => setState (e.target.value)}
                    >

                <option value="">Selecione</option>
                
                 {opciones.map ( opcion => (

                <option
                        key = {opcion.id}
                        value = {opcion.id}
                        

                >{opcion.nombre}</option>

            ))}
            </SelectCrip>

           
        </>
     
    )

    return [ state,SelectCriptomonedas]

}

export default useSelectCripMonedas