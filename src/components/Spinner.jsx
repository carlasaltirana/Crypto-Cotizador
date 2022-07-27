import '../styles/Spinner.css'

const Spinner = () => {
  return (
    <div className="sk-folding-cube" style={{justifyContent: "center", alignItems: "center", marginTop: "2rem"}}>
        <div className="sk-cube1 sk-cube"></div>
        <div className="sk-cube2 sk-cube"></div>
        <div className="sk-cube4 sk-cube"></div>
        <div className="sk-cube3 sk-cube"></div>
    </div>
  )
}

export default Spinner