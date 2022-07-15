import styled from "@emotion/styled"

const Texto = styled.div`
background-color:#4B4C4D;
color:black;
padding:5px;
font-size:15px;
font-family:'Ubuntu Mono', sans-serif;
text-transform:uppercase;
font-weight:300;
text-align:center;


`

const Error = ({children}) => {
  return (
    <Texto>
        {children}
    </Texto>
  )
}

export default Error