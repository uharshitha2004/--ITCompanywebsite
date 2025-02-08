import React from "react";
import Chatbot from "../components/Chatbot";

const Contact = () => {
  return (
    <div class="bg-blue-300 min-h-screen "
     style={{ backgroundImage: "url('/assets/contact.jpeg')" ,
        backgroundSize: "100% 100%",
        
          backgroundRepeat: "no-repeat",
          opacity: 1,
     }}>
    <div className=" p-8"
    
    >
      
     
      <h1 className="text-3xl font-bold">Contact Us</h1>
      <p>Email: contact@EinfratechSystem.com</p>
      <p>Phone: +1 234 567 890</p>

      
      <Chatbot />
    </div>
    </div>
    
  );
};

export default Contact;
