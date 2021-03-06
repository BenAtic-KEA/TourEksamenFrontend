import { renderTemplate, setActive, showPage } from './utils.js'
import {setupRiderHandlers, allRiders, teamSelector} from "./js-for-pages/allRiders.js"
import {editRiderHandler, riderSelector} from "./js-for-pages/editRider.js"
import {createRiderHandlers} from "./js-for-pages/createRiders.js"
import { currentLeaders } from './js-for-pages/currentLeaders.js'

function renderMenuItems(evt) {
  const element = evt.target
  setActive(element)
  const id = element.id
  renderTemplate(id) //This setups the HTML for the page
  switch (id) {
    //Here you can execute JavaScript for the selected page
    case 'page-riders': {
      allRiders()
      teamSelector()
      setupRiderHandlers()
      break
    }
    case 'page-edit-rider' :{
      riderSelector()
      editRiderHandler()
      break
    }
    case "page-add-rider" : {
      createRiderHandlers()
      teamSelector()
      break
    }
    case "page-current-leaders" :{
      currentLeaders()
      break
    }
    
  }
}

document.getElementById('menu').onclick = renderMenuItems
showPage('page-about') //Set the default page to render
