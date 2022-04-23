import { useState } from 'react'

const Form = () => {
    const dataPaises = [
        { id: 1, nombre: "Natalia", apellido: "Tuiran", edad:20, idn: 1192798402, tel: 3184414686, correo:"tui@gmail.com", ciudad:"Barranquilla" },
        { id: 1, nombre: "Kelly", apellido: "Tuiran", edad:27, idn: 1192798402, tel: 3184414686, correo:"key@gmail.com", ciudad:"Barranquilla" },
        { id: 1, nombre: "Jorge", apellido: "Tuiran", edad:56, idn: 1192798402, tel: 3184414686, correo:"jor@gmail.com", ciudad:"Maicao" },
        // { id: 2, nombre: "Brasil", minutos: 225 },
        // { id: 3, nombre: "Colombia", minutos: 216 },
        // { id: 4, nombre: "Nigeria", minutos: 216 },
        // { id: 5, nombre: "Argentina", minutos: 207 },
        // { id: 6, nombre: "Indonesia", minutos: 195 },
        // { id: 7, nombre: "Emiratos Árabes Unidos", minutos: 191 },
        // { id: 8, nombre: "México", minutos: 190 },
        // { id: 9, nombre: "Sudáfrica", minutos: 190 },
        // { id: 10, nombre: "Egipto", minutos: 186 },
    ];

    const [data, setData] = useState(dataPaises);

    return (
        <div className="container mt-5">
            <h1 className='text-center'>REGISTRO DE USUARIOS</h1>
            <hr />
            <button className="btn btn-success">CREAR</button>
            <br /><br />
            <table className="table table-bordered">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Nombre</th>
                        <th>Apellido</th>
                        <th>Edad</th>
                        <th>N° ID</th>
                        <th>Télefono</th>
                        <th>Correo</th>
                        <th>Ciudad</th>
                        <th>Editar</th>
                        <th>Eliminar</th>
                    </tr>
                </thead>
                <tbody>
                    {data.map(elemento => (
                        <tr>
                            <td>{elemento.id}</td>
                            <td>{elemento.nombre}</td>
                            <td>{elemento.apellido}</td>
                            <td>{elemento.edad}</td>
                            <td>{elemento.idn}</td>
                            <td>{elemento.tel}</td>
                            <td>{elemento.correo}</td>
                            <td>{elemento.ciudad}</td>
                            <td><button className="btn btn-warning">Editar</button></td> 
                            <td><button className="btn btn-danger">Eliminar</button></td>
                        </tr>
                    ))
                    }
                </tbody>
            </table>
        </div>
    )
}

export default Form
