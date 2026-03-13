import { useRef } from "react";
import ContactContext from "./contactContext";

const ContactState = (props) => {
  const contactRef = useRef(null);

  return (
    <ContactContext.Provider value={{ contactRef }}>
      {props.children}
    </ContactContext.Provider>
  );
};

export default ContactState;