var double = document.querySelectorAll(".double");
        var max = 2;
        for (var i = 0; i < double.length; i++)
        double[i].onclick = selectiveCheck;
        function selectiveCheck (event) {
        var checkedChecks = document.querySelectorAll(".double:checked");
        if (checkedChecks.length >= max + 1)
        return false;
        }

        const name1 = document.getElementById("name");
        const surname = document.getElementById("surname");
        const street = document.getElementById("street");
        const house = document.getElementById("house");
        const flat = document.getElementById("flat");
        name1.addEventListener("focusout", () => {
            const invalid = document.getElementById("invName");
                if (name1.value == null || name1.value == "") {
                    invalid.style.visibility = "visible";
                    name1.style.borderColor = "red";
                    name1.style.borderRadius = "5px";
                    return false;
                }
                else{
                    invalid.style.visibility = "hidden";
                    name1.style.borderColor = "black";
                }
        })
        surname.addEventListener("focusout", () => {
            const invalid = document.getElementById("invSurname");
                if (surname.value == null || surname.value == "") {
                    invalid.style.visibility = "visible";
                    surname.style.borderColor = "red";
                    surname.style.borderRadius = "5px";
                }
                else{
                    invalid.style.visibility = "hidden";
                    surname.style.borderColor = "black";
                }
        })
        street.addEventListener("focusout", () => {
            const invalid = document.getElementById("invStreet");
                if (street.value == null || street.value == "") {
                    invalid.style.visibility = "visible";
                    street.style.borderColor = "red";
                    street.style.borderRadius = "5px";
                }
                else{
                    invalid.style.visibility = "hidden";
                    street.style.borderColor = "black";
                }
        })
        house.addEventListener("focusout", () => {
            const invalid = document.getElementById("invHouse");
                if (house.value == null || house.value == "") {
                    invalid.style.visibility = "visible";
                    house.style.borderColor = "red";
                    house.style.borderRadius = "5px";
                }
                else{
                    invalid.style.visibility = "hidden";
                    house.style.borderColor = "black";
                }
        })
        flat.addEventListener("focusout", () => {
            const invalid = document.getElementById("invFlat");
                if (flat.value == null || flat.value == "") {
                    invalid.style.visibility = "visible";
                    flat.style.borderColor = "red";
                    flat.style.borderRadius = "5px";
                }
                else{
                    invalid.style.visibility = "hidden";
                    flat.style.borderColor = "black";
                }
        })

        var deliveryPop = document.getElementById("popup");
        var btn = document.getElementById("completeBtn");
        var crossX = document.getElementById("cross");
        btn.addEventListener("click", () => {
            var name = document.getElementById("name").value;
            var surName = document.getElementById("surname").value;
            var street = document.getElementById("street").value;
            var house = document.getElementById("house").value;
            var flat = document.getElementById("flat").value;
            document.getElementById("adress").innerHTML = "The delivery adress is:" + " " + name + " " + surName + ", " + street + " street" + ", N" + house + ",  N" + flat;
            deliveryPop.showModal();
            deliveryPop.style.transform = "scale(1)";
        });
        crossX.addEventListener("click", () =>{
            deliveryPop.close();
            window.location.href = "../pages/catalog.html";
        });


    const name2 = document.getElementById("name");
    const surname2 = document.getElementById("surname");
    const street2 = document.getElementById("street");
    const house2 = document.getElementById("house");
    const flat2 = document.getElementById("flat");
    const btn2 = document.getElementById("completeBtn");
    const delBody = document.getElementById("deliveryBody");
    delBody.addEventListener("mousemove", () => {
        if (name2.value === null || name2.value === "" ||
            surname2.value === null || surname2.value === "" ||
            street2.value === null || street2.value === "" ||
            house2.value === null || house2.value === "" ||
            flat2.value === null || flat2.value === "") {
            btn2.disabled = true;
            return true;
        }
            else {
            btn2.disabled = false;
            return false;
        }
    })