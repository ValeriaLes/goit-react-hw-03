import { Formik , Form, Field} from "formik"
import { useId } from "react";
export default function ContactForm ({onSubmit}) {

    const nameFieldId = useId();
    const numberFieldId = useId();

    const initialValues= {
        
        name: "",
        number:""
    }

    const handleSubmit = (values, actions) => {
        onSubmit(values)
        actions.resetForm();
    }
    return (
        <>
        <Formik initialValues={initialValues} onSubmit={handleSubmit}>
            <Form>
                <label htmlFor={nameFieldId}>Name</label>
                <Field name="name" type="text" id={nameFieldId}/>
                <label htmlFor={numberFieldId}>Number</label>
                <Field name="number" type="number" id={numberFieldId}/>
                <button type="submit">Add contact</button>
            </Form>
        </Formik>
        </>
    )
}