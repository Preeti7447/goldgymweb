import "./ContactForm.css";

const ContactForm = () => {
  return (
    <section className="contact-section">

      <div className="contact-box">

        <h2 className="contact-title">
          GET IN TOUCH WITH US
        </h2>

        <p className="contact-text">
          Speak with our experts to share your specific requirements,
          which can provide customized solutions catering to your needs.
        </p>

        <form>

          <select>
            <option>Select a Department</option>
            <option value="">INTRESTED IN FRENCHISE</option>
            <option value="">ADVERTISE WITH GOLD'S GYM</option>
            <option value="">ASSOCIATION & ALLIANCES</option>
            <option value="">CONTACT A SPECIFIC GYM</option>
            <option value="">CORPORATE SALES</option>
            <option value="">MARKETING</option>
            <option value="">CUSTOMER CARE</option>
            <option value="">JOB APPLICATION</option>
            <option value="">HR</option>
            <option value="">IT</option>
            <option value="">GGFI - FITNESS INSTITUTE</option>
            <option value="">ENROLL IN GGFI COURSE</option>
            <option value="">GENERAL</option>
          </select>

          <input type="text" placeholder="Enter Name" required />

          <input required type="email" placeholder="Enter Email" />

          <input required type="tel" placeholder="Enter Phone" />

          <select>
            <option>Select State</option>
            <option value="">Andhra Pradesh</option>
            <option value="">Aasaam</option>
            <option value="">Madhya Pradesh</option>
            <option value="">Uttar Pradesh</option>
            <option value="">Gujrat</option> 
            <option value="">Jharkhand</option>
            <option value="">Delhi NCR</option>
            <option value="">Bihar</option>
            <option value="">Kerala</option>
            <option value="">Uttarakhand</option>
          </select>

          <select>
            <option>Select City</option>

          </select>

          <select>
            <option>Select Gym</option>
          </select> 

          <textarea rows="5" placeholder="Enter Message"></textarea>

          <button type="submit">
            SUBMIT
          </button>

        </form>

      </div>

    </section>
  );
};

export default ContactForm;