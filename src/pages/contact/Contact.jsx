import "./Contact.css";
import { useForm, ValidationError } from "@formspree/react";

const Success = () => {
    return (
        <div className="container">
            <div className="success">
                <h2>Successfully sent email!</h2>
            </div>
        </div>
    );
};

const Contact = () => {
    const [state, handleSubmit] = useForm("meqwbenn");

    if (state.succeeded) {
        return <Success />;
    }
    return (
        <>
            <section className="contact">
                <div className="container">
                    <h1 className="page-title">Contact Me</h1>
                    <form className="form" onSubmit={handleSubmit}>
                        <label htmlFor="name">Name:</label>
                        <input id="name" type="name" name="name" />
                        <ValidationError
                            prefix="Name"
                            field="name"
                            errors={state.errors}
                        />

                        <label htmlFor="email">Email:</label>
                        <input id="email" type="email" name="email" />
                        <ValidationError
                            prefix="Email"
                            field="email"
                            errors={state.errors}
                        />

                        <label htmlFor="message">Message:</label>
                        <textarea id="message" name="message" />
                        <ValidationError
                            prefix="Message"
                            field="message"
                            errors={state.errors}
                        />
                        <button type="submit" disabled={state.submitting}>
                            Submit
                        </button>
                    </form>

                    <div className="contact-infos">
                        <h3>Email</h3>
                        <p>Louitzkie@gmail.com</p>

                        <h3>Mobile No#</h3>
                        <p>09319250185(Smart)</p>

                        <h3>Adress</h3>
                        <p>004 Parola St. Barangay Sanroque, Cainta, Rizal</p>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Contact;
