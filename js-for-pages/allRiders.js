import { SERVER_URL } from "../settings.js"
import { makeOptions } from "../fetchUtils.js"
import { encode } from "../utils.js"

const URL = SERVER_URL + "riders"

let riders = []
let currentSortDir = "desc"

export function setupRiderHandlers(){
    document.getElementById("time-header").onclick = () => sortByTime(0)

}

export function allRiders(){
    riders = []
    const options = makeOptions("GET")

    fetch(URL,options)
    .then(res => res.json())
    .then(data => {
        riderList(data)
        createTableBody(data)
    })
}

export function sortByTime(n){
    if(currentSortDir === "desc"){
        let filteredList = riders.sort((a,b) => a.time > b.time ? 1: a.time < b.time ? -1: 0)
        createTableBody(filteredList) 
        currentSortDir = "asc"
    } else if (currentSortDir === "asc") {
        let filteredList = riders.sort((a,b) => a.time < b.time ? 1: a.time > b.time ? -1: 0)
        createTableBody(filteredList) 
        currentSortDir = "desc"
    }
}

function createTableBody(data){
    const row = data.map(rider => `
        <tr>
            <td scope="row">${encode(rider.id)}</td>
            <td>${encode(rider.team.name)}</td>
            <td>${encode(rider.name)}</td>
            <td>${encode(rider.age)}</td>
            <td>${encode(rider.country)}</td>
            <td>${encode(rider.mountainPoints)}</td>
            <td>${encode(rider.sprintPoints)}</td>
            <td>${encode(rider.time)}</td>
        </tr>
        `).join("")
        document.getElementById("table-body-riders").innerHTML = row
    }

function riderList(data){
    for(let i = 0; i < data.length; i++){
        riders.push(data[i])
    }
}