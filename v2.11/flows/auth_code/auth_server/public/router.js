'use strict'

document.addEventListener('click', (e) => {
  const { target } = e;
  if (!target.matches('nav a')) {
    return
  }
  e.preventDefault()
  urlRoute()
})

const urlRoutes = {
  404: {
    template: '/templates/404.html',
  },
  '/': {
    template: '/templates/index.html'
  },
  '/signin': {
    template: '/templates/signin.html'
  },
  '/register': {
    template: '/templates/register.html'
  }
}

const urlRoute = (event) => {
  event = event || window.event;
  event.preventDefault()
  history.pushState({}, "", event.target.href);
  urlLocationHandler();
}

const urlLocationHandler = async () => {
  const location = window.location.pathname
  if (location.length == 0) {
    location = '/'
  }

  const route = urlRoutes[location] || urlRoutes[404]
  const content = await fetch(route.template).then(data => data.text())
  document.getElementById('main').innerHTML = content
}

window.onpopstate = urlLocationHandler
window.route = urlRoute
urlLocationHandler()