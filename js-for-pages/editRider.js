import { SERVER_URL } from "../settings.js"
import { makeOptions } from "../fetchUtils.js"
import { encode} from "../utils.js"

const URL = SERVER_URL + "riders"
let currentRider = {}

export function editRiderHandler(){
    document.getElementById("rider-selector").onchange = riderInfo
    //document.getElementById("edit-rider-btn").onclick = editRider
    //document.getElementById("delete-rider-btn").onclick = deleteRider
}

export function riderSelector(){
    const options = makeOptions("GET",false)
    fetch(URL,options)
    .then(res => res.json())
    .then(data => {
        currentRider.id = data[0].id
        const row = data.map(rider => `
        <option value="${encode(rider.id)}"> ${encode(rider.team.name)} - ${encode(rider.name)}
        `).join("")
        document.getElementById("rider-selector").innerHTML = row
        editRiderForm(data[0])
    })
}

function editRiderForm(rider){
    const idRow = `
        <input id="input-id" class="form-control" value="${encode(rider.id)} "readonly>`

    const ageRow = `
    <input id="input-age" class="form-control" placeholder="${encode(rider.age)} ">
    `
    const countryRow = `
    <input id="input-country" class="form-control" placeholder="${encode(rider.country)} ">
    `
    const nameRow = `
    <input id="input-name" class="form-control" placeholder="${encode(rider.name)}" >`
    
    const timeRow = `
    <input id="input-name" class="form-control" placeholder="${encode(rider.time)}" >`

     const mtnPointsRow = `
    <input id="input-name" class="form-control" placeholder="${encode(rider.mountainPoints)}" >`

     const sprintPointsRow = `
    <input id="input-name" class="form-control" placeholder="${encode(rider.sprintPoints)}" >`

     
    document.getElementById("rider-id").innerHTML = idRow
    document.getElementById("rider-name").innerHTML = nameRow
    document.getElementById("rider-age").innerHTML = ageRow
    document.getElementById("rider-country").innerHTML = countryRow
    document.getElementById("rider-time").innerHTML = timeRow
    document.getElementById("rider-mtn-points").innerHTML = mtnPointsRow
    document.getElementById("rider-sprint-points").innerHTML = sprintPointsRow
}

function riderInfo(evt){
    evt.preventDefault()
    let value = document.getElementById("rider-selector").value
    fetch(URL + "/" + value)
    .then(res => res.json())
    .then(rider => {
        
        console.log(rider)
        currentRider.id = rider.id
        currentRider.name = rider.name
        currentRider.age = rider.age
        currentRider.country = rider.country
        currentRider.time = rider.time
        currentRider.mountainPoints = rider.mountainPoints
        currentRider.sprintPoints = rider.sprintPoints
        currentRider.teamId = rider.team[0]
        currentRider.teamName = rider.team[1]
        
       editRiderForm(rider)
    })
}

function editRider(){
    currentRider.name = document.getElementById("input-name").value
    const options = makeOptions("PUT",currentCandidate)
    console.log(currentCandidate)
    fetch(URL + "/" + currentCandidate.id,options)
    .then(res => res.json())
    location.reload()

}

function deleteRider(){
    const options = makeOptions("DELETE")
    fetch(URL + "/" + currentRider.id,options)
    .then(res => res.json())
location.reload()
}