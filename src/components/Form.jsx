
const Form = () => {
    return (
        <>
            <div className="container mt-5">
                <h1 className='text-center'>REGISTRO DE USUARIOS</h1>
                <hr />
                <button type="button" class="btn btn-success">CREAR</button>
                <br></br>
                <br></br>
                <table class="table table-bordered ">
                    <thead class="thead-light">
                        <tr>
                            <th scope="col">Nombre</th>
                            <th scope="col">Apellido</th>
                            <th scope="col">Edad</th>
                            <th scope="col">Ciudad</th>
                            <th scope="col">Sexo</th>
                            <th scope="col">No.ID</th>
                            <th scope="col">Correo</th>
                            <th scope="col">Editar</th>
                            <th scope="col">Eliminar</th>

                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>Natalia</td>
                            <td>Tuiran</td>
                            <td>17</td>
                            <td>Barranquilla</td>
                            <td>Femenino</td>
                            <td>1192798402</td>
                            <td>tuirannatalia@gmail.com</td>
                            <td><button type="button" class="btn btn-warning">Editar</button></td>
                            <td><button type="button" class="btn btn-danger">Eliminar</button></td>

                        </tr>
                    </tbody>
                </table>
            </div>
        </>

    )
}

export default Form