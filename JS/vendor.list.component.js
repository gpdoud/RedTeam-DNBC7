const getVendors = () => {
    VendorService.list()
    .done( (res) => refresh(res) );


    //Can also be written as below, including the jqXHR
    //let jqXHR = VendorService.list()
    //jqXHR.done( (res) => refresh(res) );
};

const refresh = (vendors) => {
    var tbodyCtrl= document.getElementById("tbody");
    tbodyCtrl.innerHTML = "";
    var url = 
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
        tr += `<td><a href="${url}?id=${vendor.id}">Details </a><span>|</span><a href="https://www.amazon.com/"> Edit</a></td>`
        tr += "</tr>";
        tbodyCtrl.innerHTML += tr;
    }
}