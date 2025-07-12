const App=()=>{
  let name = "vivek";
  const myStyle = {
    color:'cyan',
    backgroundColor:"black"
  }
  return(
    <div style={myStyle}>
    <h1>hello react js</h1>
    <p>hi {name}</p>
    </div>
  )
}
export default App;