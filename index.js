import { renderTemplate, setActive, showPage } from './utils.js'
import {setupRiderHandlers, allRiders} from "./js-for-pages/allRiders.js"

function renderMenuItems(evt) {
  const element = evt.target
  setActive(element)
  const id = element.id
  renderTemplate(id) //This setups the HTML for the page
  switch (id) {
    //Here you can execute JavaScript for the selected page
    case 'page-riders': {
      allRiders()
      setupRiderHandlers()
      break
    }
    case 'page-edit-rider' :{
      Riders()
      editRiderHandler()
    }
  }
}

document.getElementById('menu').onclick = renderMenuItems
showPage('page-about') //Set the default page to render
