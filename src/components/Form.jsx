import { useState, useEffect } from 'react'
import { Modal, ModalBody, ModalHeader, ModalFooter } from 'reactstrap';
import {nanoid} from 'nanoid'
import {firebase} from '../firebase'

const Form = () => {
    // const dataPaises = [
    //     { id: 1, nombre: "Natalia", apellido: "Tuiran", edad: 20, idn: 1192798402, tel: 3184414686, correo: "tui@gmail.com", ciudad: "Barranquilla" },
    //     { id: 1, nombre: "Kelly", apellido: "Tuiran", edad: 27, idn: 1192798402, tel: 3184414686, correo: "key@gmail.com", ciudad: "Barranquilla" },
    //     { id: 1, nombre: "Jorge", apellido: "Tuiran", edad: 56, idn: 1192798402, tel: 3184414686, correo: "jor@gmail.com", ciudad: "Maicao" },
    // ];

    const [data, setData] = useState([]);
    const [modoEdicion, setModoEdicion] = useState(false)

    const [name, setName] = useState('');
    const [apellido, setApellido] = useState('');
    const [edad, setEdad] = useState(0);
    const [correo, setCorreo] = useState('');
    const [idn, setIdn] = useState('');
    const [tel, setTel] = useState('');
    const [ciudad, setCiudad] = useState('');
    const [id, setId] = useState(0);

    const [modalInsertar, setModalInsertar] = useState(false);

    //Metodos
    const openModalCreate = () => {
        setModalInsertar(true);
    }
    useEffect(()=>{
        const obtenerDatos = async () =>{
            try{
                const db = firebase.firestore()
                const data = await db.collection('frutas').get()
                const array = data.docs.map(item =>(
                    {
                        id:item.id, ...item.data()
                    }
                ))
                setData(array)

            }catch(error){
                console.log(error)
            }
        }
        obtenerDatos()

    })

    const add = async() => {
        try{
            const db = firebase.firestore()
            const newUser = {
                nombre: name,
                apellido:apellido,
                edad:edad,
                idn:idn,
                correo:correo,
                tel:tel,
                ciudad:ciudad
            }
            await db.collection('user').add(newUser)
            setData([...data, {
                id:nanoid(),
                nombre: name,
                apellido:apellido,
                edad:edad,
                idn:idn,
                correo:correo,
                tel:tel,
                ciudad:ciudad
            }])
        }catch(error){
            console.log(error)
        }
        setModalInsertar(false)
    }

    const auxEditar = (item) =>{
        setName(item.nombre)
        setApellido(item.apellido)
        setEdad(item.edad)
        setCorreo(item.correo)
        setIdn(item.idn)
        setTel(item.tel)
        setCiudad(item.ciudad)
        openModalCreate()
        setModoEdicion(true)
    }

    const eliminar = (item) => {

    }




    return (
        <div className="container mt-5">
            <h1 className='text-center'>REGISTRO DE USUARIOS</h1>
            <hr />
            <button className="btn btn-success" onClick={() => openModalCreate()}>CREAR</button>
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
                            <td><button className="btn btn-warning" onClick={()=> auxEditar(elemento)}>Editar</button></td>
                            <td><button className="btn btn-danger">Eliminar</button></td>
                        </tr>
                    ))
                    }
                </tbody>
            </table>

            <Modal isOpen={modalInsertar}>
                <ModalHeader>
                    <div>
                        <h3>Crear Usuario</h3>
                    </div>
                </ModalHeader>
                <ModalBody>
                    <div className="form-group">
                        <div className="row">
                            <div className="col-5">
                                <label>Nombre</label>
                                <input
                                    className="form-control"
                                    type="text"
                                    name="nombre"
                                    value={name}
                                    onChange={(e) => setName(e.target.value)}
                                />
                            </div>
                            <div className="col-5">
                                <label>Apellido</label>
                                <input
                                    className="form-control"
                                    type="text"
                                    name="Apellido"
                                    value={apellido}
                                    onChange={(e) => setApellido(e.target.value)}
                                />
                            </div>
                            <div className="col-2">
                                <label>Edad</label>
                                <input
                                    className="form-control"
                                    type="text"
                                    name="Edad"
                                    value={edad}
                                    onChange={(e) => setEdad(e.target.value)}
                                />
                            </div>
                        </div>
                        <br />
                        <div className="row">
                            <div className="col-6">
                                <label>Identificación</label>
                                <input
                                    className="form-control"
                                    type="text"
                                    name="id"
                                    value={idn}
                                    onChange={(e) => setIdn(e.target.value)}
                                />
                            </div>
                            <div className="col-6">
                                <label>Telefóno</label>
                                <br />
                                <input
                                    className="form-control"
                                    type="text"
                                    name="tel"
                                    value={tel}
                                    onChange={(e) => setTel(e.target.value)}
                                />
                            </div>
                        </div>
                        <br />
                        <div className="row">
                            <div className="col-6">
                                <label>Correo</label>
                                <input
                                    className="form-control"
                                    type="text"
                                    name="tel"
                                    value={correo}
                                    onChange={(e) => setCorreo(e.target.value)}
                                />
                            </div>
                            <div className="col-6">
                                <label>Ciudad</label>
                                <input
                                    className="form-control"
                                    type="text"
                                    name="tel"
                                    value={ciudad}
                                    onChange={(e) => setCiudad(e.target.value)}
                                />
                            </div>
                        </div>

                    </div>
                </ModalBody>
                <ModalFooter>
                    <button className="btn btn-primary"
                    onClick={() =>add()}
                    > Crear </button>
                    <button
                        className="btn btn-danger"
                        onClick={() => setModalInsertar(false)}
                    >
                        Cancelar
                    </button>
                </ModalFooter>
            </Modal>



        </div>
    )
}

export default Form
