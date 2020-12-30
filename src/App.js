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
      person.toLowerCase().includes(searchTerm)
    );
    setSearchResults(results);
  }, [searchTerm]);
  return (
    <div>
      <header>
        <nav class='navbar navbar-expand-md navbar-dark fixed-top bg-dark'>
          <div class='container-fluid'>
            <button
              class='navbar-toggler'
              type='button'
              data-bs-toggle='collapse'
              data-bs-target='#navbarCollapse'
              aria-controls='navbarCollapse'
              aria-expanded='false'
              aria-label='Toggle navigation'
            >
              <span class='navbar-toggler-icon'></span>
            </button>
            <div class='collapse navbar-collapse' id='navbarCollapse'>
              <form class='d-flex'>
                <input
                  class='form-control me-2'
                  type='search'
                  placeholder='Search'
                  aria-label='Search'
                  value={searchTerm}
                  onChange={handleChange}
                />
                <button class='btn btn-outline-success' type='submit'>
                  Search
                </button>
              </form>
            </div>
          </div>
        </nav>
      </header>

      <main class='flex-shrink-0'>
        <div class='container mt-5'>
          <ul class='list-group'>
            {searchResults.map((item) => (
              <li class='list-group-item'>{item}</li>
            ))}
          </ul>
        </div>
      </main>
    </div>
  );
}

export default App;
