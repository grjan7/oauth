'use strict'

// This module adds the imported styles of all components
// to the top-level <style> element in the <head>.
//
// To Do: import all components and add the imported 
// component objects to the `components` array. 


// import all components
import rootComponent from '../components/root.component.js'

// include all imported components to this array
const components = [
  rootComponent
]

const setStyleService = () => {
  const styles = components.map(component => component.style).join('\n').replaceAll(/\n+|\t+/g, '')
  const style = document.getElementsByTagName('style')[0]
  style.innerHTML = styles
}

export default setStyleService