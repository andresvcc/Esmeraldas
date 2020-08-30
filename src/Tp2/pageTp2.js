import React, {useState, useEffect} from 'react'

const PageTp2 = ()=> {
    const [nombre, setNombre] = useState('Andres')
    const [password, setPassword] = useState('password')
    const [conectado, setConnect] = useState(false)

    const inputChangeNombre =(value)=>{
        setNombre(value)
    }

    const inputChangePassword =(value)=>{
        setPassword(value)
    }

    useEffect(()=>{
        if(password === "123") setConnect(true)    
    }, [password])

    return(
        <div>
            {
                conectado? (
                    <div>
                        <h1>Conectado</h1>
                        <h3>{nombre}</h3>
                    </div>
                ) : (
                    <div>
                    <h1>Nombre:{nombre}</h1>
                    <h1>Password:{password}</h1>
        
                    <input
                        value={nombre}
                        onChange={(event)=>inputChangeNombre(event.target.value)}
                    ></input>
                    <input
                        value={password}
                        onChange={(event)=>inputChangePassword(event.target.value)}
                    ></input>
                    </div>
                )
            }
        </div>
    )
}

export default PageTp2
