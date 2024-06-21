const ImageComponent = (prop) => {
 const { src,height,width,alt } = prop;
 return (
    <>
    <img src={src} height={height} width={width} alt={alt}/>
    
    </>
 ) 
  
};
export default ImageComponent;
