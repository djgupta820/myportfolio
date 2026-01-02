import React, { useState } from "react";

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [query, setQuery] = useState("");
  const [status, setStatus] = useState("");

  const handleFormSubmit = (e) => {
    e.preventDefault();
    
    const form = e.target;
    const data = new FormData(form);

    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: new URLSearchParams(data).toString(),
    })
      .then(() => {
        setStatus("success");
        setName("");
        setEmail("");
        setQuery("");
      })
      .catch(() => {
        setStatus("error");
      });
  };

  return (
    <div className="container">
      <div className="contact-terminal">
        <div className="terminal-header">
          <span className="terminal-dots"></span>
          <span className="terminal-command">$ cat ~/contact.sh && ./contact.sh</span>
        </div>
        <div className="contact-content">
          <h1 className="contact-title">
            <span className="prompt">~$</span> Get In Touch
          </h1>
          <form className="contact-form" onSubmit={handleFormSubmit} name="contact" method="POST" data-netlify="true" netlify-honeypot="bot-field">
            <input type="hidden" name="form-name" value="contact" />
            <input type="hidden" name="bot-field" />
            
            <div className="form-group">
              <label htmlFor="name">
                <span className="label-prompt">&gt;</span> Name
              </label>
              <input
                type="text"
                name="name"
                id="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Enter your name..."
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="email">
                <span className="label-prompt">&gt;</span> Email
              </label>
              <input
                type="email"
                name="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="your.email@example.com"
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="query">
                <span className="label-prompt">&gt;</span> Message
              </label>
              <textarea
                name="query"
                id="query"
                rows="8"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Type your message here..."
                required
              ></textarea>
            </div>
            <button type="submit" className="submit-btn">
              <span>$ send_message</span>
            </button>
          </form>
          
          {status === "success" && (
            <div className="contact-message success-message">
              <span className="message-icon">✓</span>
              <p>Message sent successfully! I'll get back to you soon.</p>
            </div>
          )}
          
          {status === "error" && (
            <div className="contact-message error-message">
              <span className="message-icon">✗</span>
              <p>Failed to send message. Please try again or contact via social links.</p>
            </div>
          )}
          
          <div className="contact-note">
            <span className="note-icon">ℹ</span>
            <p>Form submissions are processed securely via Netlify Forms. You can also reach out through social links in the navbar.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
