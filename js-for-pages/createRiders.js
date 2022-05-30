import { SERVER_URL } from "../settings.js"
import { handleErrors, makeOptions } from "../fetchUtils.js"

const URL = SERVER_URL + "riders"

export function createRiderHandlers(){
    document.getElementById("create-rider-btn").onclick = submitRider
}

async function submitRider(evt){
    evt.preventDefault()
    let rider = {}
    document.getElementById("error-msg").innerText = ""
    rider.name = document.getElementById("rider-name").value
    rider.age = document.getElementById("rider-age").value
    rider.country = document.getElementById("rider-country").value
    rider.time = document.getElementById("rider-time").value
    rider.mountainPoints = document.getElementById("rider-mtn-points").value
    rider.sprintPoints = document.getElementById("rider-sprint-points").value
    rider.teamId = document.getElementById("team-selector").value

    const options = makeOptions("POST",rider)
    try{
    await fetch(URL,options)
    .then(res =>{  
        if(!res.ok){
        throw new Error(res.status + "\n"+ "Wrong input") 
     }
     return res.json()
    })  
    } catch (e){
        document.getElementById("error-msg").style.display = "block"
            document.getElementById("error-msg").innerText = e
    }
           
    
}