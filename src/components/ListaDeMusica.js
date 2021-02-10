import React from "react";

const ListaAudio = props => {
    console.log(props.lista)
    return (
        <>
            <h1>Playlist de Mario Bross </h1>
            <div className="container">
                <div className="mt-5 pa-5 d-flex jc-c">
                    <div className="card py-3 px-3" id="listaMusica">
                        {
                            !!props.lista &&
                            props.lista.map((elem, i) =>//manda la cancion segun la posicion en la q esta en el arreglo
                            { //elem.name linkea el nombre con la cancion
                                // hay q concatenar 2 url para q sea 1 cancion
                                return (
                                    <table>
                                        <tr>
                                            <td key={i}> {elem.name}</td>
                                            <td>                          <audio controls>
                                                <source src={"https://assets.breatheco.de/apis/sound/" + elem.url} type="audio/ogg" />
                                                <source src="music.mp3" type="audio/mpeg" />
                                            </audio>
                                            </td>
                                        </tr>
                                    </table>
                                )
                            })
                        }
                    </div>
                </div>
            </div>
        </>
    )
}



export default ListaAudio;