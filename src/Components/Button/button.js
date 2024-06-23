

const ButtonComponent=(prop)=>{
    const{text, height, width,bgColor,onPress}=prop;
    return(
        <button onClick={onPress} style={{backgroundColor:bgColor, height:height, width:width}}>{text}</button>
    )
}
export default ButtonComponent;

