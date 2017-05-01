const baseUrl = 'https://api.tabula.life/';

function authenticateCalls(next, thunks) {
  const sentData = {
    method: 'GET',
    mode: 'cors',
    body: null,
    credentials: 'include',
  };

  fetch(`${baseUrl}login`, sentData)
    .then(response => response.json())
    .then(json => {
      if (json.redirect) {
        window.location = json.redirect;
      } else {
        thunks.forEach(thunk => next(thunk()));
      }
    });
}

export { authenticateCalls, baseUrl };
