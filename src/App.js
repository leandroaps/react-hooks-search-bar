import React, { useEffect, useState } from 'react';

const social = [
  'Siri',
  'Alexa',
  'Google',
  'Facebook',
  'Twitter',
  'Linkedin',
  'Sinkedin',
];
function App() {
  const [searchTerm, setSearchTerm] = useState('');
  const [searchResults, setSearchResults] = useState([]);

  const handleChange = (e) => {
    setSearchTerm(e.target.value);
  };

  useEffect(() => {
    const results = social.filter((person) =>
      person.toLowerCase().includes(searchTerm),
    );
    setSearchResults(results);
  }, [searchTerm]);
  return (
    <div>
      <header>
        <nav className="navbar navbar-expand-md navbar-dark fixed-top bg-dark">
          <div className="container-fluid">
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarCollapse"
              aria-controls="navbarCollapse"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon" />
            </button>
            <div className="collapse navbar-collapse" id="navbarCollapse">
              <form className="d-flex">
                <input
                  className="form-control me-2"
                  type="search"
                  placeholder="Search"
                  aria-label="Search"
                  value={searchTerm}
                  onChange={handleChange}
                />
                <button className="btn btn-outline-success" type="submit">
                  Search
                </button>
              </form>
            </div>
          </div>
        </nav>
      </header>

      <main className="flex-shrink-0">
        <div className="container mt-5">
          <ul className="list-group">
            {searchResults.map((item) => (
              <li className="list-group-item" key={item}>
                {item}
              </li>
            ))}
          </ul>
        </div>
      </main>
    </div>
  );
}

export default App;
