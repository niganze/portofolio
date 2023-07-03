// import React from "react";
// import "../css/Contact.css";
// const Contact = () => {
//   return (
//     <div className="ContactForg" id="contact">
//       <h5>If you need, Just drop us a line</h5>
//       <form action="">
//         <div className="form_container">
//           <div className="form">
//             <label htmlFor="">Name</label>
//             <input type="text" placeholder="Enter your name " />
//             <label htmlFor="">Phone number</label>
//             <input type="text" placeholder="+250 7908 67645" />
//             <label htmlFor="">Email</label>
//             <input type="email" placeholder="example@gmail.com" />
//           </div>
//           <div className="mesasge">
//             <label htmlFor="">Message</label>
//             <textarea
//               name=""
//               id=""
//               cols="30"
//               rows="10"
//               placeholder="Enter your message"
//             ></textarea>
//             <button>Send message</button>
//           </div>
//         </div>
//       </form>
//     </div>
//   );
// };
// export default Contact;
import React, { useState } from "react";
import axios from "axios";
import "../css/Contact.css";

const Contact = () => {
  const [name, setName] = useState("");
  const [phonenumber, setphonenumber] = useState("");
  const [email, setemail] = useState("");
  const [MessageEvent, setMessageEvent] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [submitError, setSubmitError] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();

    setIsSubmitting(true);

    
    try {
      const response = await axios.post(
        "http://localhost:9999/api/v1/messagePost",
        {
          name,
          phonenumber,
          email,
          MessageEvent,
        }
      );

      setIsSubmitting(false);
      setSubmitSuccess(true);
      setName("");
      setphonenumber("");
      setemail("");
      setMessageEvent("");
    } catch (error) {
      setIsSubmitting(false);
      setSubmitSuccess(false);
      setSubmitError(error.message);
    }
  };

  return (
    <div className="ContactForg" id="contact">
      <h5>If you need, just drop us a line</h5>
      <form onSubmit={handleSubmit}>
        <div className="form_container">
          <div className="form">
            <label htmlFor="name">Name</label>
            <input
              type="text"
              id="name"
              placeholder="Enter your name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
            <label htmlFor="phoneNumber">Phone number</label>
            <input
              type="text"
              id="phoneNumber"
              placeholder="+250 7908 67645"
              value={phonenumber}
              onChange={(e) => setphonenumber(e.target.value)}
              required
            />
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              placeholder="example@gmail.com"
              value={email}
              onChange={(e) => setemail(e.target.value)}
              required
            />
          </div>
          <div className="message">
            <label htmlFor="message">Message</label>
            <textarea
              id="message"
              cols="30"
              rows="10"
              placeholder="Enter your message"
              value={MessageEvent}
              onChange={(e) => setMessageEvent(e.target.value)}
              required
            ></textarea>
            <button type="submit" disabled={isSubmitting}>
              {isSubmitting ? "Sending..." : "Send message"}
            </button>
          </div>
        </div>
      </form>

      {submitSuccess && (
        <p className="success-message">Message sent successfully!</p>
      )}
      {submitError && (
        <p className="error-message">An error occurred: {submitError}</p>
      )}
    </div>
  );
};

export default Contact;
