import React, { useState } from "react";
import emailjs from "emailjs-com";
import { useForm } from "react-hook-form";

const Contact = () => {
    const [successMessage, setSuccessMessage] = useState("");
    const { register, handleSubmit, errors } = useForm();
        
        const serviceID = "service_ID";
        const templateID = "template_ID";
        const userID = "user_W1EIKKTYeAwPUfSEjAkac";

        const onSubmit = (data, reset) => {
            sendEmail(
                serviceID,
                templateID,
                {
                    name: data.name,
                    phone: data.phone,
                    email: data.email,
                    subject: data.subject,
                    message: data.message
                },
                userID
            )
            reset.target.reset();
        }

        const sendEmail = (serviceID, templateID, variables, userID) => {
        emailjs.send(serviceID, templateID, variables, userID)
          .then(() => {
            setSuccessMessage("Your message has been sent!");
          }).catch(err => console.error(`Something went wrong ${err}`));
      }


    return (
        <div className="contact">
            <div className="text-center">
                <h2 id="contact">contact me</h2>
                <p className="text-muted font-italic mx-2" >Let's connect!  Use this form to send me an email and I will get back to you shortly!</p>
                <span className="success-message text-muted font-italic">{successMessage}</span>
            </div>
        <div className="container">
            <form  autocomplete="off" onSubmit={handleSubmit(onSubmit)}>
            <div className="row">
                <div className="col-md-6 col-xs-12">
                    {/* NAME INPUT  */}
                    <div className="text-center">
                    <span className="error-message py-1"> 
                     {errors.name && errors.name.message} 
                    </span>
                    <input
                    type="text"
                    className="form-control"
                    placeholder="Name"
                    name="name"
                    ref={
                        register({
                            required: " - Please enter your name - ",
                            maxLength: {
                                value: 50,
                                message: " - Please enter a name with fewer than 50 characters - "
                            }
                        })
                    }
                    />
                    <div className="line"></div>
                    </div>
                    {/* PHONE INPUT  */}
                    <div className="text-center">
                    <span className="error-message py-1">
                     {errors.phone && errors.phone.message} 
                    </span>
                    <input 
                    type="text"
                    className="form-control"
                    placeholder="Phone Number"
                    name="phone"
                    ref={
                        register({
                            required: " - Please enter your phone number - ",
                        })
                    }
                    />
                    <div className="line"></div>
                    </div>
                    {/* EMAIL INPUT  */}
                    <div className="text-center">
                    <span className="error-message py-1">
                     {errors.email && errors.email.message} 
                    </span>
                    <input 
                    type="email"
                    className="form-control"
                    placeholder="Email"
                    name="email"
                    ref={
                        register({
                            required: "- Please enter a valid email address -",
                            pattern: {
                                // value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i

                            }
                        })
                    }
                    />
                    <div className="line"></div>
                    </div>
                    {/* SUBJECT  */}
                    <div className="text-center">
                    <span className="error-message py-1">
                     {errors.subject && errors.subject.message} 
                    </span>
                    <input 
                    type="text"
                    className="form-control"
                    placeholder="Subject"
                    name="subject"
                    ref={
                        register({
                            required: " - Please enter a subject - ",
                        })
                    }
                    />
                    <div className="line"></div>
                    </div>
                </div>
                <div className="col-md-6 col-xs-12">
                    {/* MESSAGE  */}
                    <div className="text-center">
                    <span className="error-message">
                    {errors.message && errors.message.message}
                    </span>
                    <textarea 
                    type="text"
                    className="form-control"
                    placeholder="Message"
                    name="message"
                    ref={
                        register({
                            required: " - Please enter your message here - ",
                        })
                    }
                    />
                    <div className="line"></div>
                    </div>
                    <button className="btn-main-offer contact-btn" type="submit" value="send">Send Message</button>
                </div>
                </div>
                </form>
            </div>
        </div>
    )
}


export default Contact;
