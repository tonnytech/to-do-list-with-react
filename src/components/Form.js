/* eslint-disable */
import { useRef } from "react";

const Form = ()=> {
    const ref = useRef();

    const handleSubmit = (e)=> {
        e.preventDefault();
        alert(ref.current.value)
    }

    return (
        <>
        <h1>React Form handling</h1>
        <form onSubmit={handleSubmit}>
            <label>
                First Name: <input type='text' ref={ref}/>
            </label>
            <input type="submit" />
        </form>
        </>
    )
}

export default Form;