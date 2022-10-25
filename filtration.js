
// Filtration Panel

var product = document.querySelectorAll(".productBox");
var checkbox = document.querySelectorAll(".checkbox");
var groceryCheck = document.querySelectorAll(".groceryCheck");
var bevergeCheck = document.querySelectorAll(".bevergeCheck");
var HouseholdCheck = document.querySelectorAll(".HouseholdCheck");


var groceryProducts = document.querySelectorAll(".groceryProducts");
var bevergeProducts = document.querySelectorAll(".bevergeProducts");
var HouseholdProducts = document.querySelectorAll(".householdProducts");

var list = [];
var discountList = [];

var productCount = 0;


for (var check of checkbox) {

    check.addEventListener('click', function (e) {

        if (this.checked == true) {
            if (e.target.id == "allProductsGrocery") {

                for (var check of groceryCheck) {
                    check.checked = false;
                    check.disabled = true;
                }
                this.checked = true;
                this.disabled = false;

            } else if (e.target.id == "allProductsBeverge") {

                for (var check of bevergeCheck) {
                    check.checked = false;
                    check.disabled = true;
                }
                this.checked = true;
                this.disabled = false;

            } else if (e.target.id == "allProductsHousehold") {
                for (var check of HouseholdCheck) {
                    check.checked = false;
                    check.disabled = true;
                }
                this.checked = true;
                this.disabled = false;
            }

            // if (e.target.id == "discountCheckBox") {
            //     var discountBoxValue = e.target.dataset.btnNum;
            //     discountList.push(discountBoxValue);
            //     discountList.forEach(discount);
            // }

            const category = e.target;

            product.forEach((element) => element.classList.add("product-not-active"));

            const products = document.querySelectorAll(`.p-btn--${category.dataset.btnNum}`);

            if (products.length == 0) {
                document.getElementById("noProductsAvailable").innerHTML = ` No ${e.target.name} Products is Available`;
                setTimeout(() => {
                    this.checked = false;
                    e.target.disabled = true;
                }, 5000);
            } else {
                document.getElementById("noProductsAvailable").innerHTML = "";
            }

            productCount = products.length + productCount;

            list.push(category.dataset.btnNum);
            list.forEach(displayProducts);
        }

        if (this.checked != true) {

            if (e.target.id == "allProductsGrocery") {
           
                for (var check of groceryCheck) {
                    check.disabled = false;
                }
            
                this.disabled = false;

            } else if (e.target.id == "allProductsBeverge") {

                for (var check of bevergeCheck) {
                    check.disabled = false;
                }
                
                this.disabled = false;

            } else if (e.target.id == "allProductsHousehold") {
                
                for (var check of HouseholdCheck) {
                    check.disabled = false;
                }
               
                this.disabled = false;
            }

            // if (e.target.id == "allProducts") {
            //     for (var check of groceryCheck) {
            //         check.disabled = false;
            //     }
            //     for (var check of bevergeCheck) {
            //         check.disabled = false;
            //     }
            //     for (var check of Household) {
            //         check.disabled = false;
            //     }
            //     list.splice(0, list.length);

            //     productCount = 0;
            // }

            const category = e.target;

            const products = document.querySelectorAll(`.p-btn--${category.dataset.btnNum}`);

            products.forEach((element) => element.classList.add("product-not-active"));

            const removes = category.dataset.btnNum;
            list.splice(list.indexOf(removes), 1);

            productCount = productCount - products.length;

            list.forEach(displayProducts);
        }

        if (list.length == 0) {
            product.forEach((element) => element.classList.remove("product-not-active"));
            productCount = 0;
            document.getElementById("productsAvailable").innerHTML = "";

        }

        function displayProducts(datas) {
            var products = document.querySelectorAll(`.p-btn--${datas}`);

            products.forEach((element) => element.classList.remove("product-not-active"));

            if (productCount != 0) {
                document.getElementById("productsAvailable").innerHTML = ` ${Math.abs(productCount)} Products Available `;
            }
        }


        // function discount(values){
        //     product.forEach((element) => element.classList.add("product-not-active"));

        //     list.forEach((element) => {
        //        const discountedProducts = document.querySelectorAll(`.p-btn--${element}`);
        //        discountedProducts.forEach((element) => {
        //             const p = document.querySelectorAll(`.p-btn--${values}`);
        //             p.forEach((element) => element.classList.remove("product-not-active"));
        //        });
        //     });

        // }

    });
}

// SEARCH FILTRATION

function clearAll(){
    list.splice(0, list.length);

    productCount = 0;
    document.getElementById("productsAvailable").innerHTML = "";
    document.getElementById("noProductsAvailable").innerHTML = "";

    product.forEach((element) => element.classList.remove("product-not-active"));
    for (var check of checkbox) {
        check.checked = false;
        check.disabled = false;
    }
}

// SEARCH FILTRATION SECTION

function filter() {
    var filter = document.getElementById('findData').value.toUpperCase();
    var products = document.querySelectorAll(".productBox");

    for (var productsDiv of products) {
        var datas = productsDiv.querySelector(".findProduct");
        if (datas.textContent.toUpperCase().indexOf(filter) > -1) {
            productsDiv.style.display = "initial";
        } else {
            productsDiv.style.display = "none";
        }
    }

}

function filterGrocery() {
    var filter = document.getElementById('findData1').value.toUpperCase();
    var groceryProducts = document.querySelectorAll(".groceryProducts");

    for (var productsDiv of groceryProducts) {
        var datas = productsDiv.querySelector(".findProduct");
        if (datas.textContent.toUpperCase().indexOf(filter) > -1) {
            productsDiv.style.display = "initial";
        } else {
            productsDiv.style.display = "none";
        }
    }

}
function filterBeverges() {
    var filter = document.getElementById('findData2').value.toUpperCase();
    var bevergeProducts = document.querySelectorAll(".bevergeProducts");

    for (var productsDiv of bevergeProducts) {
        var datas = productsDiv.querySelector(".findProduct");
        if (datas.textContent.toUpperCase().indexOf(filter) > -1) {
            productsDiv.style.display = "initial";
        } else {
            productsDiv.style.display = "none";
        }
    }

}
function filterHousehold() {
    var filter = document.getElementById('findData3').value.toUpperCase();
    var householdProducts = document.querySelectorAll(".householdProducts");

    for (var productsDiv of householdProducts) {
        var datas = productsDiv.querySelector(".findProduct");
        if (datas.textContent.toUpperCase().indexOf(filter) > -1) {
            productsDiv.style.display = "initial";
        } else {
            productsDiv.style.display = "none";
        }
    }

}


// PAYMENT SUCCESS TOGGLE 
var openModal = document.querySelector("#payNowBtn");
var success = document.querySelector(".paymentModal");

openModal.addEventListener('click', () => {
    success.showModal();
});

var closeModal = document.querySelector("#donePayment");

closeModal.addEventListener('click', () => {
    success.close();
});

var reg = document.getElementById("Registered");
var successfulRegistered = document.getElementById("registeredSuccessfulModal");

reg.addEventListener('click', () => {
    successfulRegistered.showModal();
});

function succefulRegister() {
    var successfulRegistered = document.getElementById("registeredSuccessfulModal");
    var registerModal = document.querySelector(".Registermodal");
    var loginModal = document.querySelector(".Loginmodal");

    var registerButton = document.getElementById("registeredButton");
    registerButton.addEventListener('click', () => {
        successfulRegistered.close();
        loginModal.showModal();
        registerModal.close();
    });
}


// PAYMENT SUCCESFUL REDIRECT

function redirect() {

    alert("Redirecting To Your Cart");

    setTimeout(() => {
        window.open("cart.html","_self");
    }, 2000)
}
