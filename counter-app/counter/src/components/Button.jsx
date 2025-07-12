export const Button=(props=>{
    console.log("button render");
    return(
        <button onClick={props.fn} style={
            {backgroundColor:props.color,color:'white'}
        }>
            {props.value}
            </button>
    )
})