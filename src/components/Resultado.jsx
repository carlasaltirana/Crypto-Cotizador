import styled from '@emotion/styled'

const Contenedoresultado =
  styled.div`
    color:white;
    font-family:'Ubuntu Mono';
    display:flex;
    max-width:900px;
    margin-top: 2rem;
    margin:0 auto;
    width:90%;
    //background-color:#040405;
    border-radius:5px;
    margin-bottom:1.875rem;
    justify-content: center;
    align-items: center;
    margin-right:17rem;
  `

const Imagen =
  styled.img`
    display:block; 
    width: 160px;
    align-items:left;
    gap:3rem;
    margin: 2rem;
  `  
const Conttexto = 
   styled.div `
     align-items:center;
`

const Texto =
  styled.p`
    font-size: 20px;
    span {
      font-weight:700;
    }
  `

const Precio =
  styled.div`
    font-size: 40px;
    span {
      font-weight:700;
    }
    pre{
      color: #E7460E;
      font-size: 10px;
    }

  &::after{
      content: '';
      width: 400px;
      height: 6px;
      background-color: #E7460E;
      display: block;
      margin: 10px auto 0 auto;
    }  
  `    

const Resultado = ({resultado}) => {
  const { PRICE, HIGHDAY, LOWDAY, CHANGEPCT24HOUR, IMAGEURL, LASTUPDATE} = resultado;

  return (
    <Contenedoresultado>
      
        <Imagen 
          src = {`https://cryptocompare.com/${IMAGEURL}`} 
          alt = "imagen cripto" 
        />
        <div style={{margin: "2rem"}}>
          <Precio>PRICE : <span>{PRICE}</span></Precio>
          <Texto>■ HIGHEST PRICE OF THE DAY : <span>{HIGHDAY}</span></Texto>
          <Texto>■ LOWEST PRICE OF THE DAY : <span>{LOWDAY}</span></Texto>
          <Texto>■ CHANGE PERCENT LAST 24 HOURS: <span>{CHANGEPCT24HOUR}</span></Texto>
          <Texto>■ LAST UPDATE : <span>{LASTUPDATE}</span></Texto>
        </div>
      
    </Contenedoresultado>
  )
}

export default Resultado