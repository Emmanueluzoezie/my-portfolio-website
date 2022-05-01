import { useState } from "react"
import { useForm, ValidationError } from '@formspree/react';
import ContactForm from "../components/form"
import CloseIcon from "@mui/icons-material/Close";
import ArrowCircleDownIcon from '@mui/icons-material/ArrowCircleDown';
import EmailIcon from '@mui/icons-material/Email';


function FormLink() {
  const [isOpen, setIsOpen] = useState(false);

  const [state, handleSubmit] = useForm("xnqwvagk");
  if (state.succeeded) {
      return <p>Thanks for joining!</p>;
  }

  const handleArrowIcon = <h1 className='w-20 text-lg md:text-2xl border-2 py-0 md:py-2 text-center bg-blue-500 text-white hover:bg-white hover:text-black  font-bold font-mono hover:transform hover:ease-in-out border-none hover:duration-700 animate-pulse rounded-xl'  onClick={() => setIsOpen(!isOpen)}>open</h1>
  const handleCloseIcon = <CloseIcon className='animate-pulse bg-red-300 rounded-full text-2xl'  onClick={() => setIsOpen(!isOpen)}/>
  return (
    <div  className="grid place-items-center px-5  mb-5 ">
        <div className="w-6/6 md:w-6/6 bg-gray-700 p-3 mb-10 rounded-2xl flex justify-between items-center text-white md:w-6/6">
        <EmailIcon style={{ fontSize: 35 }} />
        <h1 className="font-bold text-xl md:text-2xl mx-4">send your message</h1>
         <span fontSize={20} className="flex justify-center items-center cursor-pointer">{!isOpen ? (handleArrowIcon) : (handleCloseIcon) }</span>
         </div>
         {isOpen && <ContactForm />}
    </div>
  );
}

export default FormLink;


