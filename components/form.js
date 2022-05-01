import { useForm, ValidationError } from '@formspree/react';
import {TextField} from '@mui/material';
import TextareaAutosize from '@mui/base/TextareaAutosize';


function ContactForm() {

  const [state, handleSubmit] = useForm("xnqwvagk");
  if (state.succeeded) {
      return <p>Thanks for joining!</p>; 
  }

  return (
    <form onSubmit={handleSubmit}>
        <div className="bg-slate-300 p-5 rounded-2xl">
        <TextField fullWidth
        id="email"
        type="email" 
        name="email"
        className=" text-5xl "
        label="Email" 
        variant="filled"
        />
        <ValidationError 
        prefix="Email" 
        field="email"
        errors={state.errors}
        />

        <TextareaAutosize
          maxRows={4}
          placeholder="write your message"
        id="message"
        name="message"
          style={{ width: "100%", padding: "20px", marginTop: "20px", borderRadius: "10px", fontSize: "15px"}}
        />
        <ValidationError 
        prefix="Message" 
        field="message"
        errors={state.errors}
        />
        <button className="w-24 md:w-36 text-xl border-2 mt-4 py-2 md:py-3 bg-blue-500 text-white hover:bg-blue-700 hover:text-black rounded-xl font-bold font-mono hover:transform hover:ease-in-out border-none hover:duration-700" type="submit" disabled={state.submitting}>
        Submit
        </button>
        </div>
        </form>
  );
}

export default ContactForm;


