import React, { useState } from "react";

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [query, setQuery] = useState("");

  const handleFormSubmit = (e) => {
    e.preventDefault()
    console.log(name, email, query);
  };

  return (
    <div className="container">
      <h1 style={{ textAlign: "center" }}>Contact Me</h1>
      <form className="form" onSubmit={handleFormSubmit}>
        <div className="form-data">
          <label htmlFor="name">Name</label>
          <input
            type="text"
            name="name"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className="form-data">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            name="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="form-data">
          <label htmlFor="query">Enter Query</label>
          <textarea
            name="query"
            id="query"
            cols="30"
            rows="10"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          ></textarea>
        </div>
        <button>Submit</button>
      </form>
      <h3 style={{color: "red", textAlign: "center", marginTop: "1em"}}>*Form is not working currently!</h3>
    </div>
  );
};

export default Contact;
