import React from "react";

import "./Contact.css";

const Contact = () => {
  return (

    
    <div>
      <section className="contact">
        <h2>Contact</h2>

        <p>
          Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex
          aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam quos
          quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia
          fugiat sit in iste officiis commodi quidem hic quas.
        </p>

        <div className="row">
          <div className="map">
          <iframe
  title="Google Map"
  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d111892.40923298929!2d77.48614145!3d28.790061899999994!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cf5cc68605d49%3A0x901b2a3216474cde!2sMuradnagar%2C%20Uttar%20Pradesh%20201206!5e0!3m2!1sen!2sin!4v1713807543277!5m2!1sen!2sin"
  width="600"
  height="450"
  style={{ border: "0" }} // Use curly braces to denote an object
  allowFullScreen=""
  loading="lazy"
  referrerPolicy="no-referrer-when-downgrade"
></iframe>

            </div>

          <div className="form-container">
            <form
              action="forms/contact.php"
              method="post"
              role="form"
              className="php-email-form"
            >
              <div className="row">
                <div className="form-group col-md-6">
                  <label for="name">Your Name</label>
                  <input
                    type="text"
                    name="name"
                    className="form-control"
                    id="name"
                    required=""
                  />
                </div>
                    <div className="form-group col-md-6">
                    <label for="name">Your Email</label>
                    <input
                    type="email"
                    className="form-control"
                    name="email"
                    id="email"
                    required=""
                    />
                    </div>
              </div>
              <div className="form-group">
                <label for="name">Subject</label>
                <input
                  type="text"
                  className="form-control"
                  name="subject"
                  id="subject"
                  required=""
                />
              </div>
              <div className="form-group">
                <label for="name">Message</label>
                <textarea
                  className="form-control"
                  name="message"
                  rows="10"
                  required=""
                ></textarea>
              </div>
              <div className="my-3">
                <div className="loading">Loading</div>
                <div className="error-message"></div>
                <div className="sent-message">
                  Your message has been sent. Thank you!
                </div>
              </div>
              <div className="text-center">
                <button type="submit">Send Message</button>
              </div>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
