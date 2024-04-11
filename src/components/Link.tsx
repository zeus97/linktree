import { useRef } from 'react'
import '../styles/Link.scss'

interface Props{
    link:string,
    picture:string,
    name:string
};

function Link({link,picture,name}:Props) {

  const filterRef = useRef<HTMLDivElement>(null);
  const filterOver = ()=>{
    if (filterRef.current){
      filterRef.current.style.left = "0";
      filterRef.current.style.width = "100%"
    }
  };
  const filterLeave = ()=>{
    if (filterRef.current){
      filterRef.current.style.left = "";
      filterRef.current.style.right = "0";
      filterRef.current.style.width = "0"
    }
  }

  return (
    <a className='link' href={link} onMouseOver={filterOver} onMouseLeave={filterLeave}>
      <div ref={filterRef} className='filter'></div>
        <img src={picture} alt={name} />
        <p>{name}</p>
    </a>
  )
}

export default Link