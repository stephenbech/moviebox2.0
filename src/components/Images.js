export const Image = ({path, alt, className})=>{
      return <img src={`/assets/images/${path}`} alt={alt} className={className}/>
}