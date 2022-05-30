import { SERVER_URL } from "../settings.js"
import { makeOptions } from "../fetchUtils.js"
import { encode } from "../utils.js"

const URL = SERVER_URL + "riders"


export function currentLeaders(){
    currentYellowLeadersBody()
    currentMountainLeadersBody()
    currentSprintLeadersBody()
    currentWhiteLeadersBody()
}

function currentYellowLeadersBody(){
    const options = makeOptions("GET")
    const yellowURL = URL + "/yellow"
    fetch(yellowURL,options)
    .then(res => res.json())
    .then(rider => {
        const nameRow = `
        <input class="form-control" value="${encode(rider.name)}" readonly>
        `
        document.getElementById("yellow-name-input").innerHTML = nameRow

        const teamRow =`
        <input class="form-control" value="${encode(rider.team.name)}" readonly>
        `
        document.getElementById("yellow-team-input").innerHTML = teamRow
        const timeRow =`
        <input class="form-control" value="${encode(rider.time)}" readonly>
        `
        document.getElementById("yellow-time-input").innerHTML = timeRow
        const countryRow =`
        <input class="form-control" value="${encode(rider.country)}" readonly>
        `
        document.getElementById("yellow-country-input").innerHTML = countryRow
    })
}
function currentWhiteLeadersBody(){
    const options = makeOptions("GET")
    const whiteURL = URL + "/white"
    fetch(whiteURL,options)
    .then(res => res.json())
    .then(rider => {
        const nameRow = `
        <input class="form-control" value="${encode(rider.name)}" readonly>
        `
        document.getElementById("white-name-input").innerHTML = nameRow

        const teamRow =`
        <input class="form-control" value="${encode(rider.team.name)}" readonly>
        `
        document.getElementById("white-team-input").innerHTML = teamRow
        const timeRow =`
        <input class="form-control" value="${encode(rider.time)}" readonly>
        `
        document.getElementById("white-time-input").innerHTML = timeRow
        const countryRow =`
        <input class="form-control" value="${encode(rider.country)}" readonly>
        `
        document.getElementById("white-country-input").innerHTML = countryRow
    })
}
function currentMountainLeadersBody(){
    const options = makeOptions("GET")
    const mountainURL = URL + "/mountain"
    fetch(mountainURL,options)
    .then(res => res.json())
    .then(rider => {
        const nameRow = `
        <input class="form-control" value="${encode(rider.name)}" readonly>
        `
        document.getElementById("mtn-name-input").innerHTML = nameRow

        const teamRow =`
        <input class="form-control" value="${encode(rider.team.name)}" readonly>
        `
        document.getElementById("mtn-team-input").innerHTML = teamRow
        const timeRow =`
        <input class="form-control" value="${encode(rider.mountainPoints)}" readonly>
        `
        document.getElementById("mtn-points-input").innerHTML = timeRow
        const countryRow =`
        <input class="form-control" value="${encode(rider.country)}" readonly>
        `
        document.getElementById("mtn-country-input").innerHTML = countryRow
    })
}
function currentSprintLeadersBody(){
    const options = makeOptions("GET")
    const sprintURL = URL + "/sprint"
    fetch(sprintURL,options)
    .then(res => res.json())
    .then(rider => {
        const nameRow = `
        <input class="form-control" value="${encode(rider.name)}" readonly>
        `
        document.getElementById("sprint-name-input").innerHTML = nameRow

        const teamRow =`
        <input class="form-control" value="${encode(rider.team.name)}" readonly>
        `
        document.getElementById("sprint-team-input").innerHTML = teamRow
        const timeRow =`
        <input class="form-control" value="${encode(rider.time)}" readonly>
        `
        document.getElementById("sprint-points-input").innerHTML = timeRow
        const countryRow =`
        <input class="form-control" value="${encode(rider.country)}" readonly>
        `
        document.getElementById("sprint-country-input").innerHTML = countryRow
    })
}
