import { SERVER_URL } from "../settings.js"
import { makeOptions } from "../fetchUtils.js"

const URL = SERVER_URL + "riders"

export function createRiderHandlers(){
    document.getElementById("create-rider-btn").onclick = submitRider
}

function submitRider(evt){
evt.preventDefault()
let rider = {}

rider.name = document.getElementById("rider-name").value
rider.age = document.getElementById("rider-age").value
rider.country = document.getElementById("rider-country").value
rider.time = document.getElementById("rider-time").value
rider.mountainPoints = document.getElementById("rider-mtn-points").value
rider.sprintPoints = document.getElementById("rider-sprint-points").value
rider.teamId = document.getElementById("team-selector").value

const options = makeOptions("POST",rider)

fetch(URL,options)
.then(res=> res.json())
.catch(error => console.log(error.msg))

location.reload()
}

