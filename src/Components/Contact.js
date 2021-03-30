import React, {useState, useEffect} from 'react';
import * as emailjs from 'emailjs-com';
import * as yup from 'yup';

const Contact = () => {
    const emptyData = {
        name: "",
        email: "",
        subject: "",
        message: ""
    }

    const [form,setForm] = useState(emptyData)
    const [errors,setErrors] = useState(emptyData)
    const [serverError] = useState("")
    const [button,setButton] = useState(true)

    const formSchema = yup
        .object()
        .shape({
            name: yup
                .string()
                .required("Name is required"),
            email: yup
                .string()
                .email("Must be a valid email")
                .required("Email address is required"),
            subject: yup.string(),
            message: yup
                .string()
                .required("Please enter your message")
        })

    const validateChange = (e) => {
        yup
            .reach(formSchema, e.target.name)
            .validate(e.target.name
                ? e.target.value
                : null)
            .then(valid => {
                setErrors({
                    ...errors,
                    [e.target.name]: ""
                })
            })
            .catch(err => {
                console.log(err)
                setErrors({
                    ...errors,
                    [e.target.name]: err.errors[0]
                })
            })
    }

    const formSubmit = (e) => {
        e.preventDefault();
        emailjs
            .sendForm('gmail', 'template_lvpawd4', e.target, 'user_UQlt4Jxj9BNbgpbwy6C2q')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });
        alert("Your message has been sent!")
        setForm( {
            name: "",
            email: "",
            subject: "",
            message: ""
        })
    }

    const inputChange = (e) => {
        e.persist()
        console.log("new input here", e.target.value)
        const newData = {
            ...form,
            [e.target.name]: e.target.value
        }
        validateChange(e)
        setForm(newData)
    }

    useEffect(() => {
        formSchema
            .isValid(form)
            .then(isValid => {
                setButton(!isValid)
            })
    },[form,formSchema])

    return (  
      <section id="contact">
        <div className="row section-head">
          <div className="two columns header-col">
            <h1>
              <span>Get In Touch.</span>
            </h1>
          </div>
        </div>
        <div className="row">
          <div className="eight columns">
            <form onSubmit={formSubmit}>
                {serverError
                    ? <p>{serverError}</p>
                    : null}
                <fieldset>
                <div>
                    <label htmlFor="name">
                      Name <span className="required">*</span>
                    </label>
                      <input
                        id="name"
                        type="text"
                        name="name"
                        data-cy="name"
                        placeholder="Your Full Name"
                        value={form.name}
                        onChange={inputChange}/> {errors.name.length > 0
                        ? <p>{errors.name}</p>
                        : null}
                </div>

                <div>
                  <label htmlFor="contactEmail">
                    Email <span className="required">*</span>
                  </label>
                    <input
                      id="email"
                      type="email"
                      name="email"
                      data-cy="email"
                      placeholder="email@gmail.com"
                      value={form.email}
                      onChange={inputChange}/> {errors.email.length > 0
                      ? <p>{errors.email}</p>
                      : null}
                </div>

                <div>
                  <label htmlFor="contactSubject">Subject</label>
                    <input
                        id="subject"
                        type="subject"
                        name="subject"
                        data-cy="subject"
                        placeholder="Subject"
                        value={form.subject}
                        onChange={inputChange}/> {errors.subject.length > 0
                        ? <p>{errors.subject}</p>
                        : null}
                </div>

                <div>
                <label htmlFor="contactMessage">
                  Message <span className="required">*</span>
                </label>
                  <textarea
                      id="message"
                      type="message"
                      name="message"
                      data-cy="message"
                      placeholder="Please be detailed within your message"
                      value={form.message}
                      onChange={inputChange}/> {errors.message.length > 0
                      ? <p>{errors.message}</p>
                      : null}
                </div>
                
                <div>
                  <button type="submit" data-cy="submit" disabled={button}>
                      Submit
                  </button>
                </div>
                </fieldset>
            </form>
              </div>
              <aside className="four columns footer-widgets">
                <div className="widget widget_contact">
                  <h4>Address and Phone</h4>
                  <p className="address">
                    Eric Capiz
                    <br />
                    ericcapiz@gmail.com
                    <br />
                    <br />
                    Chicago, IL
                    <br />
                    <span>443-307-3937</span>
                  </p>
                </div>
              </aside>
          </div>
      </section>
    )
}

export default Contact;



