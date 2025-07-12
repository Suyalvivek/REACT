export const Message=({msg,color,value})=>{
    console.log("message render");
    return (
        <h2 style={{color:color}}>{msg}{value}</h2>
    )
}