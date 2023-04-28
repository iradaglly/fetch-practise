import { getAllCategories, postCategory } from "./httprequests.js";

let form = document.querySelector("form");
let nameInput = document.querySelector("#name");
let titleInput = document.querySelector("#title");
let countryInput = document.querySelector("#country");                                
let spanError = document.querySelector("#errormsg")


form.addEventListener("submit", async (e) => {
    e.preventDefault();
    if (nameInput.value.trim() == "" && titleInput.value.trim() == "" && countryInput.value.trim() == "") {
        spanError.style.display = "block"
    }
    else {
        let suppliers = {
            contactName: nameInput.value,
            contactTitle: titleInput.value,
            address: { country: countryInput.value }
        }
        // reset  
        spanError.style.display = "none"
        nameInput.value = ""
        titleInput.value = ""
        countryInput.value = ""

        await postCategory(suppliers)
        window.location.href = "http://127.0.0.1:5500/index.html"


    }
})