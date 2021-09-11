
function displayName() {
    'use strict';
    var firstName = Xrm.Page.getAttribute("firstname").getValue();
    var lastName = Xrm.Page.getAttribute("lastname").getValue();
    console.log(firstName + lastName);
}