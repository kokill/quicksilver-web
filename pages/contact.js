import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faMap, faPhone } from "@fortawesome/free-solid-svg-icons";
import Image from "next/image";

import { useForm } from "react-hook-form";
import { useState } from "react";

export default function Contact() {
  const { register, handleSubmit } = useForm({
    mode: "onSubmit",
    reValidateMode: "onChange",
    resolver: undefined,
    context: undefined,
    criteriaMode: "firstError",
    shouldFocusError: true,
    shouldUnregister: false,
  });
  const [errorMessages, setErrorMessages] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const onSubmit = (data) => {
    console.log("Sending");
    // console.log(data);

    fetch("api/contact", {
      method: "POST",
      headers: {
        "Accept": "application/json, text/plain, */*",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    }).then((res) => {
      console.log("response recieved");
      if (res.status === 200) {
        console.log("response succeeded");
        setErrorMessages("");
        setSubmitted(true);
      }
    });
  };

  const onErrors = (errors) => {
    setErrorMessages(Object.entries(errors)[0][1].message);
  };

  return (
    <>
      {/* Contac header section */}
      <header>
        <div className="page-header section-height-100">
          <div>
            <img
              className="
              position-absolute
              fixed-top
              ms-auto
              w-50
              h-100
              z-index-0
              d-none d-sm-none d-md-block
              border-radius-section
              border-top-end-radius-0
              border-top-start-radius-0
              border-bottom-end-radius-0
            "
              src="/images/contact-header-cover.webp"
            />
          </div>
          <div className="container">
            <div className="row">
              <div className="col-lg-7 d-flex justify-content-center flex-column">
                <div
                  className="
                  card
                  d-flex
                  justify-content-center
                  p-4
                  shadow-lg
                  my-sm-0 my-sm-6
                  mt-8
                  mb-5
                "
                >
                  <div className="text-center">
                    <h3 className="text-gradient text-primary">Contact us</h3>
                    <p className="mb-0">
                      For further questions, regarding Auticare and other
                      services provided by us contact using our contact form
                    </p>
                  </div>
                  <span className="badge bg-gradient-danger mt-3">
                    {errorMessages}
                  </span>

                  <div className="card card-plain">
                    <form
                      role="form"
                      id="contact-form"
                      autoComplete="off"
                      onSubmit={handleSubmit(onSubmit, onErrors)}
                    >
                      <div className="card-body pb-2">
                        <div className="row">
                          <div className="col-md-6">
                            <label>Full Name</label>
                            <div className="input-group mb-4">
                              <input
                                className="form-control"
                                placeholder="Full Name"
                                aria-label="Full Name"
                                // name="fullName"
                                type="text"
                                {...register("fullName", {
                                  required: "Full Name field is required",
                                  minLength: {
                                    value: 3,
                                    message:
                                      "Name should be more than 3 character",
                                  },
                                })}
                              />
                            </div>
                          </div>
                          <div className="col-md-6 ps-md-2">
                            <label>Email</label>
                            <div className="input-group mb-4">
                              <input
                                type="text"
                                name="email"
                                className="form-control"
                                placeholder="Email"
                                {...register("email", {
                                  required: "Email is required",
                                  pattern: {
                                    value:
                                      /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
                                    message: "Please enter a valid Email",
                                  },
                                  minLength: {
                                    value: 3,
                                    message:
                                      "Email should be more than 3 characters",
                                  },
                                })}
                              />
                            </div>
                          </div>
                          <div className="col-md-6 ps-md-2">
                            <label>Phone Number</label>
                            <div className="input-group mb-4">
                              <input
                                className="form-control"
                                placeholder="Phone Number"
                                aria-label="Phone Number"
                                type="tel"
                                name="phoneNumber"
                                {...register("phoneNumber", {
                                  required: "Phone number is required",
                                  pattern: {
                                    value: /^\d{10}$/i,
                                    message:
                                      "Please enter a valid Phone number",
                                  },
                                })}
                              />
                            </div>
                          </div>
                          <div className="col-md-6 ps-md-2">
                            <label>Subject</label>
                            <div className="input-group">
                              <input
                                type="text"
                                className="form-control"
                                placeholder="Subject"
                                name="subject"
                                {...register("subject", {
                                  required: "Please provide a subject",
                                  minLength: {
                                    value: 3,
                                    message:
                                      "subject length should be more than 3 character",
                                  },
                                })}
                              />
                            </div>
                          </div>
                        </div>
                        <div className="form-group mb-0 mt-md-0 mt-4">
                          <label>How can we help you?</label>
                          <textarea
                            name="message"
                            className="form-control"
                            id="message"
                            rows="4"
                            placeholder="Describe your requirements in a brief sentence"
                            {...register("message", {
                              required: false,
                            })}
                          ></textarea>
                        </div>
                        <div className="row">
                          <div className="col-md-12 text-center">
                            <button
                              type="submit"
                              className="btn bg-gradient-primary mt-3 mb-0"
                            >
                              Send Message
                            </button>
                          </div>
                        </div>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
      {/* Contact header section */}
    </>
  );
}
