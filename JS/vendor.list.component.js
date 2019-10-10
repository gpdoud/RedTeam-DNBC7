const getVendors = () => {
    UserService.list()
    .done( (res) => refresh(res) );


    //Can also be written as below, including the jqXHR
    //let jqXHR = UserService.list()
    //jqXHR.done( (res) => refresh(res) );
};

const refresh = (vendors) => {
    var tbodyCtrl= document.getElementById("tbody");
    tbodyCtrl.innerHTML = "";
    for(var vendor of vendors) {
        var tr = "<tr>";
        tr += `<td>${vendor.id}</td>`
        tr += `<td>${vendor.code}</td>`
        tr += `<td>${vendor.name}</td>`
        tr += `<td>${vendor.address}</td>`
        tr += `<td>${vendor.city}</td>`
        tr += `<td>${vendor.state}</td>`
        tr += `<td>${vendor.zip}</td>`
        tr += `<td>${vendor.phone}</td>`
        tr += `<td>${vendor.email}</td>`
        tr += "</tr>";
        tbodyCtrl.innerHTML += tr;
    }
}