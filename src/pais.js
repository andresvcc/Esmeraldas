import React, { useState } from 'react'

const styles = ()=>({
    photo: {
        width:'350px',
        height: '200px',
        objectFit: 'cover'
    },
    button:{
        background: 'green'
    }
})

export default function Pais(props) {
    const { paisData } = props;
    const style = styles()
    const [open, cambiarOpen] = useState(false)

    const handleClikPais =()=>{
        cambiarOpen(!open)
    }

    return (
        <div>
            <h3>{paisData.nombre || ''}</h3>
            <img src={paisData.photo} alt="pais" style={style.photo} onClick={handleClikPais} />
            {
                open === true ? (
                    <div>
                        <button style={style.button}><h6>{paisData.piedras || '' }</h6></button>
                         {
                            paisData.typos? (
                                paisData.typos.map((elemento, index)=>{
                                    return (
                                        <p key={index}>{elemento}</p>
                                    )
                                })
                            ): null 
                         }
                        <h6>{paisData.historia || ''}</h6>
                        <h6>{paisData.cultura || ''}</h6>
                    </div>
                ):null
            }
        </div>
    )
}