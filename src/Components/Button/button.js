

export const ButtonComponent=(prop)=>{
    const {text,bgColor,onPress,height,width}=prop;
    return (
    <button onClick={onPress} style={{backgroundColor:bgColor, height:height, width:width}}>
        {text}
        </button>
)
}

