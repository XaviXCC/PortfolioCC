/* 
  File: contact.jsx
  Student Name: Xiaowei Xue
  Student ID: 300579496
  Date: 2025-02-03
*/


export default function Contact() {
    return (
        <div class="contact-page">
            {/* a panel to list my own info */}
            <div class="contact-panel">
                <h2>Contact Information</h2>
                <p>Email: example@example.com</p>
                <p>Phone: +1 234 567 890</p>
                <p>Address: 123 Example St, Example City, EX 12345</p>
            </div>

            {/* a form to send me a message */}
            <form class="contact-form" onsubmit="handleSubmit(event)">
                <h2>Send Me a Message</h2>
                <div class="form-group">
                    <label for="firstName">First Name</label>
                    <input type="text" id="firstName" name="firstName" required />
                </div>
                <div class="form-group">
                    <label for="lastName">Last Name</label>
                    <input type="text" id="lastName" name="lastName" required />
                </div>
                <div class="form-group">
                    <label for="contactNumber">Contact Number</label>
                    <input type="tel" id="contactNumber" name="contactNumber" required />
                </div>
                <div class="form-group">
                    <label for="email">Email Address</label>
                    <input type="email" id="email" name="email" required />
                </div>
                <div class="form-group">
                    <label for="message">Message</label>
                    <textarea id="message" name="message" rows="5" required></textarea>
                </div>
                <button type="submit" class="submit-button">Send Message</button>
            </form>
        </div>
    );
}
