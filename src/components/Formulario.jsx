import { Formik, Form, Field } from "formik"
import * as Yup from "yup"
import Alerta from "./Alerta"

const Formulario = ({setInfoBusqueda}) => {

    const consultaSchema = Yup.object().shape({
        nombrePokemon: Yup.string().required("Ingrese el nombre del pokemon")
    })

    const handleSubmit = (consulta) =>{
        console.log("Desde el Formulario",consulta);
        setInfoBusqueda(consulta)
    }

    return (
        <div className="formulario-container">
            <Formik
                initialValues={{
                    nombrePokemon: ""
                }}

                onSubmit={(consulta) => {
                    handleSubmit(consulta)
                }}

                validationSchema={consultaSchema}
            >
                {({errors, touched}) =>{
                    return(
                    <Form>
                        <div className="formulario-input-container">
                            <label
                                className=""
                                htmlFor="nombrePokemon"
                            >
                            </label>
                            <Field
                                className="form-input-text"
                                id="nombrePokemon"
                                type="text"
                                placeholder= "Nombre del Pokemon"
                                name="nombrePokemon"
                            />

                            {errors.nombrePokemon && touched.nombrePokemon ? (
                                <Alerta>{errors.nombrePokemon}</Alerta>
                            ): null}
                        </div>
                        <div className="form-bottom-container">
                            <input
                                className="form-bottom"
                                type="submit"
                                value="Buscar Pokemon"
                            />
                        </div>
                    </Form>
                )}}
            </Formik>
        </div>
    )
}

export default Formulario