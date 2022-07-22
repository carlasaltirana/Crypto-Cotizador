import styled from '@emotion/styled'

const Contenedor =
  styled.div`
 color:#fff;
  `

const Texto =
  styled.p`
    `

const Precio =
  styled.div`
      `    



const Resultado = ({resultado}) => {
  const { PRICE, HIGHDAY, LOWDAY,CHANGEPCT24HOUR, IMAGEURL, LASTUPDATE} = resultado;

  return (
    <Contenedor>
      <Precio>Price : <span>{PRICE}</span></Precio>
      <Texto>Highest price of the day  : <span>{HIGHDAY}</span></Texto>
      <Texto>Lowest price of the day : <span>{LOWDAY}</span></Texto>
      <Texto>Change percent last 24 hours : <span>{CHANGEPCT24HOUR}</span></Texto>
      <Texto>Last update : <span>{LASTUPDATE}</span></Texto>
    </Contenedor>
  )
}

export default Resultado