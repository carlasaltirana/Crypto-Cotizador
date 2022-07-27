import { useState } from 'react'
import styled from '@emotion/styled'
import Error from './Error'
import useSelectMonedas from '../hooks/useSelectMonedas'
import {monedas} from '../data/monedas'
import { useEffect } from 'react'
import useSelectCripMonedas from '../hooks/useSelecCripto'

const InputSubmit = 
    styled.input`
        background-color:#E7460E;
        border: none;
        width:100%;
        padding:10px;
        color: #fff;
        font-weight:700;
        text-transform: uppercase;
        border-radius:5px;
        font-size:20px;
        transition:background-color .3s ease;
        margin-top:25px;

        &:hover{
            background-color:#A1340E;
        }`

const Formulario = ({setMonedas}) =>{

    const [criptos, setCriptos] = useState([])
    const [error, setError] = useState(false)

    const [moneda, SelectMonedas] = useSelectMonedas('Elige tu moneda',monedas)
    const [criptomoneda, SelectCriptomonedas] = useSelectCripMonedas('Elige tu criptomoneda',criptos)

    useEffect(() => {
        const consultarApi = async () => {
            const url = `https://min-api.cryptocompare.com/data/top/mktcapfull?limit=15&tsym=ARS`;
            const respuesta = await fetch(url);
            const resultado = await respuesta.json();
            
            const arrayCriptos = resultado.Data.map(cripto => {
                const objeto = {
                    id: cripto.CoinInfo.Name,
                    nombre: cripto.CoinInfo.FullName
                }
                return objeto;
            })
         
            setCriptos(arrayCriptos);
        }
        consultarApi();
    },[])

    const handleSubmit = e => {
        e.preventDefault();

        if([moneda,criptomoneda].includes('')){
            setError(true);
            return;
        }

        setError(false);
        setMonedas({
            moneda,
            criptomoneda
        });
    }

    return(
        <>
            {error && <Error>Todos los campos son obligatorios</Error>}
            <form onSubmit={handleSubmit}> 
                <SelectMonedas />
                <SelectCriptomonedas/>
                <InputSubmit
                    type="submit" 
                    value="Cotizar"
                />
            </form>
        </>
    )
}

export default Formulario