var customerName = "Alliance  ";

// <h1 id="tm-header" class="tm-brand text-uppercase"></h1> <!--todo: Add Customer Name-->
function addCustomerName() {

    let title = document.getElementById('title')
    title.textContent = customerName;
    
    // <h1 id="tm-header" class="tm-brand text-uppercase"></h1> <!--todo: Add Customer Name-->

    // <h2 id="introheader" class="tm-section-title mb-5 text-uppercase tm-color-primary"></h2> <!--todo: Add Customer Name-->

};
addCustomerName()

function toggleColors() {
    // <!-- todo: Change all classes named 'tm-white-rect' to 'tm-blue-rect' -->
    let arrElem = document.querySelectorAll('.tm-white-rect')
    arrElem.forEach(element => {
        element.classList.remove('tm-white-rect')
        element.classList.add('tm-blue-rect')
    });

};
toggleColors()

function hideElement() {
    document.querySelector('.tm-social-links').style.display = "none";
    //<ul class="nav flex-row tm-social-links">  <!--todo: Hide social links-->

};
hideElement()

 function addText() {

    document.querySelector('h2#introheader').textContent = "Alliance"
    document.querySelector('p#intropara1').textContent = "Alliance was founded in 1931 by Albert Daniels."
    document.querySelector('p#intropara2').textContent = "The company is a leader in P.C. Manufacturing"
    document.querySelector('p#aboutpara1').textContent = "We deliver the best service this side of creation"
    document.querySelector('p#aboutpara2').textContent = "Our motto is satisfaction guaranteed"
    document.querySelector('p#addresspara').textContent = "1-800-565-5656"

    //<p id="intropara1" class="tm-color-gray">  <!--todo: Add customer company introduction text about their founding year-->

    //<p id="intropara2" class="mb-0 tm-color-gray"> <!--todo: Add customer company introduction text about what they lead in-->

     //<p id="aboutpara1" id="a" class="mb-5"> <!--todo: Add customer company about text-->

    //<p id="aboutpara2"> <!--todo: Add customer company motto text-->

    // <p id="addresspara" class="mb-3"> <!--todo: Add customer company phone number text-->

}; 


addText()
