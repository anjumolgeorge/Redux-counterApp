import { SUBMIT_FORM } from "./formTypes";

const SubmitForm = ({name,age}) => {
  return{ 
   type:SUBMIT_FORM,
   payload:{name,age}
  }
}

export default SubmitForm;
