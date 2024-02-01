'use client';
import React, { useState } from "react";
import Header from "../../components/Header";
import PageHeader from "../../components/PageHeader";

const Contactus = () => {
  // Create state variables
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

  // Step 5: Form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    // Set loading to true when starting the form submission
    setLoading(true);

    // Your form submission logic goes here

    try {
      const response = await fetch("/api/mail", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          fullName,
          email,
          subject,
          message,
        }),
      });

      if (response.ok) {
        // If you want to perform any action after successful submission, you can do it here.
        // For example, you can reset the form or show a success message.
        alert("Success! Email sent successfully!");

        setFullName("");
        setEmail("");
        setSubject("");
        setMessage("");

        // Simulate an asynchronous operation (replace with your actual async logic)
        await new Promise((resolve) => setTimeout(resolve, 2000));
      } else {
        alert("Failed to send email. Please try again." + error );
      }
    } catch (error) {
      alert("Error sending email: " + error);
    } finally {
      // Set loading back to false, regardless of success or failure
      setLoading(false);
    }
  };
  return (
    <>
      <Header />
      <PageHeader pageTitle="Contact Us" />

      {/* <!-- Contact Start --> */}
      <div className="container-xxl py-5">
        <div className="container">
          <div className="row g-5">
            <div className="col-lg-6 wow fadeIn" data-wow-delay="0.1s">
              <div className="d-inline-block rounded-pill bg-secondary text-primary py-1 px-3 mb-3">
                Contact Us
              </div>
              <h1 className="display-6 mb-5">
                If You Have Any Query, Please Contact Us
              </h1>
              <p className="mb-4">
                Reach out to us for any inquiries, information, or support.
                We're here to assist you .
              </p>
              <form onSubmit={handleSubmit}>
                <div className="row g-3">
                  <div className="col-md-6">
                    <div className="form-floating">
                      <input
                        type="text"
                        className="form-control"
                        id="name"
                        placeholder="Your Full Name"
                        required
                        value={fullName}
                        onChange={(e) => setFullName(e.target.value)}
                      ></input>
                      <label htmlFor="name">Your Name</label>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="form-floating">
                      <input
                        type="email"
                        className="form-control"
                        id="email"
                        placeholder="Your Email"
                        required
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                      ></input>
                      <label htmlFor="email">Your Email</label>
                    </div>
                  </div>
                  <div className="col-12">
                    <div className="form-floating">
                      <input
                        type="text"
                        className="form-control"
                        id="subject"
                        placeholder="Subject"
                        required
                        value={subject}
                        onChange={(e) => setSubject(e.target.value)}
                      ></input>
                      <label htmlFor="subject">Subject</label>
                    </div>
                  </div>
                  <div className="col-12">
                    <div className="form-floating">
                      <textarea
                        className="form-control"
                        placeholder="Leave a message here"
                        id="message"
                        style={{ height: 100 + "px" }}
                        required
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                      ></textarea>
                      <label htmlFor="message">Message</label>
                    </div>
                  </div>
                  <div className="col-12">
                    <button
                      type="submit"
                      className="btn btn-primary py-2 px-3 me-3"
                      disabled={loading} // Disable the button when loading is true
                    >
                      {loading ? "Sending..." : "Send Message"}

                      <div className="d-inline-flex btn-sm-square bg-white text-primary rounded-circle ms-2">
                        <i className="fa fa-arrow-right"></i>
                      </div>
                    </button>
                  </div>
                </div>
              </form>
            </div>
            <div
              className="col-lg-6 wow fadeIn"
              data-wow-delay="0.5s"
              style={{ minHeight: 450 + "px" }}
            >
              <div className="position-relative rounded overflow-hidden h-100">
                <iframe async
                  className="position-relative w-100 h-100"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3988.7732487607122!2d36.81825027380594!3d-1.3114253356516767!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x182f11acce585601%3A0x77d09ef85d415926!2sThe%20Zambezi%20Hospital!5e0!3m2!1sen!2ske!4v1706626858464!5m2!1sen!2ske"
                  // width="600"
                  // height="450"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  //border="0"
                  style={{ minHeight: 450 + "px", border: 0 }}
                  allowFullScreen=""
                  aria-hidden="false"
                  tabIndex="0"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- Contact End --> */}
    </>
  );
};

export default Contactus;
