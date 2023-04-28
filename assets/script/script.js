import { deleteCategoryByID, getAllCategories, editCAtegoryByID } from "./httprequests.js";

let tableBody = document.querySelector("tbody");
let modal = document.querySelector("#add-category-modal");
let nameInput = document.querySelector("#name");
let titleInput = document.querySelector("#title");
let countryInput = document.querySelector("#country");
let closeBtn = document.querySelector("#close-modal");
let addBtn = document.querySelector("#addBtn")

getAllCategories().then(data => {
    data.forEach(suppliers => {

        let tableRow = document.createElement("tr")

        let Id = document.createElement("th")
        Id.setAttribute("scope", "row")
        Id.innerText = suppliers.id

        let contactName = document.createElement("td")
        contactName.innerText = suppliers.contactName

        let contactTitle = document.createElement("td")
        contactTitle.innerText = suppliers.contactTitle

        let contactCountry = document.createElement("td")
        contactCountry.innerText = suppliers.address?.country

        let settings = document.createElement("td")
        let editBtn = document.createElement("button")
        editBtn.classList.add("btn")
        editBtn.classList.add("btn-warning")

        let icon1 = document.createElement("i")
        icon1.classList.add("fa-solid")
        icon1.classList.add("fa-pen")

        let deleteBtn = document.createElement("button")
        deleteBtn.classList.add("btn")
        deleteBtn.classList.add("btn-danger")

        let icon2 = document.createElement("i")
        icon2.classList.add("fa-solid")
        icon2.classList.add("fa-trash")
        deleteBtn.classList.add("mx-2")

        editBtn.append(icon1)
        deleteBtn.append(icon2)
        settings.append(editBtn, deleteBtn)
        tableRow.append(Id, contactName, contactTitle, contactCountry, settings)
        tableBody.append(tableRow)


        deleteBtn.addEventListener("click", () => {

            const swalWithBootstrapButtons = Swal.mixin({
                customClass: {
                    confirmButton: 'btn btn-success',
                    cancelButton: 'btn btn-danger'
                },
                buttonsStyling: false
            })

            swalWithBootstrapButtons.fire({
                title: 'Are you sure?',
                text: "You won't be able to revert this!",
                icon: 'warning',
                showCancelButton: true,
                confirmButtonText: 'Yes, delete it!',
                cancelButtonText: 'No, cancel!',
                reverseButtons: true
            }).then((result) => {
                if (result.isConfirmed) {
                    swalWithBootstrapButtons.fire(
                        'Deleted!',
                        'Your file has been deleted.',
                        'success'
                    )
                    let id = suppliers.id
                    deleteCategoryByID(id)
                    tableRow.remove();
                } else if (
                    /* Read more about handling dismissals below */
                    result.dismiss === Swal.DismissReason.cancel
                ) {
                    swalWithBootstrapButtons.fire(
                        'Cancelled',
                        'Your imaginary file is safe :)',
                        'error'
                    )
                }
            })

            editBtn.addEventListener("click", () => {

            })
        })

        editBtn.addEventListener("click", async (e) => {
            e.preventDefault()
            document.body.classList.add("modal-body");
            modal.style.opacity = "1";
            modal.style.visibility = "visible";
            modal.style.transform = "translate(-50%,-50%) scale(1)";
            nameInput.value = suppliers.contactName
            titleInput.value = suppliers.contactTitle
            countryInput.value = suppliers.address?.country
        })
        // addBtn.addEventListener("click", async () => {
        //     let newName = nameInput.value
        //     let newTitle = titleInput.value
        //     let newCountry = countryInput.value
        //     let supplier = {
        //         contactName: newName,
        //         contactTitle: newTitle,
        //         address: { country: newCountry }
        //     }
        //     await editCAtegoryByID(id, supplier);
        // })
    });
})
