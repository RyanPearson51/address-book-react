import React, {useState} from 'react'

export default function Contact(props) {
    const name = `${props.contact.name.first} ${props.contact.name.last}`
    const [isHidden, setHide] = useState(true)
    //const [isLiked, setIsLiked] = useState(false)
    const handleClick = () => {
        setHide(!isHidden)
      }
    return (
     <li>
        <img src={props.contact.picture.medium} alt={name}></img>
        <h3>{name}</h3>
        <button onClick={handleClick}>
            {isHidden===true?"Show Details" : "Hide Details"}
        </button>
        {isHidden ? <div></div> :
        <div>
            <p>{props.contact.email}</p>
            <p>{props.contact.phone}</p>
        </div>
        }
        <br></br><br></br><br></br>
     </li>
    )
}

