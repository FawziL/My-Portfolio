import './Form.css';

function Form() {
  return (
    <>
        <form>
            <h3>Tenés alguna pregunta, pelotudo?</h3>

            <label>Nombre:</label>
            <input type="email" name="email" placeholder="Ingrese tu email." required/>
            <label>Mensaje:</label>
            <textarea id="message" name="message" rows="4" placeholder="Ingresa tu pregunta." required/>
            <input type="submit" value="Enviar"/>
        </form>

    </>
  );
}

export default Form;
