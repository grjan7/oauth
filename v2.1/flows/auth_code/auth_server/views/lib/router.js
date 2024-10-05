'use strict'

document.addEventListener('click', (event) => {
  const { target } = event;
  if (!target.matches('nav a')) {
    return
  }
  event.preventDefault()
  urlRoute()
})

const routesMap = {
  404: {
    template: '/components/404/index.html',
  },
  '/': {
    template: '/components/home/index.html'
  },
  '/signin': {
    template: '/components/signin/index.html'
  },
  '/signup': {
    template: '/components/signup/index.html'
  },
  '/signout': {
    template: '/components/signout/index.html'
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

  const route = routesMap[location] || routesMap[404]
  const content = await fetch(route.template).then(data => data.text())
  document.getElementById('root').innerHTML = content
}

window.onpopstate = urlLocationHandler
window.route = urlRoute
urlLocationHandler()