const url = "http://localhost:50288/api/vendors";

let VendorService = {}

VendorService.list = () => {
    return $.getJSON(url);
}
VendorService.get = (id) => {
    return $.getJSON(`${url}/${id}`);
}
VendorService.create = (vendor) => {
    return $.ajax( {
        method:"POST",
        url: url,
        data:JSON.stringify(vendor),
        dataType:"json",
        crossOrigin: true,
        contentType:"application/json"
    });
}
VendorService.edit = (vendor) => {
    return $.ajax( {
        method:"PUT",
        url: `${url}/${vendor.id}`,
        data:JSON.stringify(vendor),
        dataType:"json",
        crossOrigin: true,
        contentType:"application/json"
    });
}
VendorService.remove = (id) => {
    return $.ajax( {
        method:"DELETE",
        url:`${url}/${vendor.id}`,
        data:JSON.stringify(vendor),
        dataType:"json",
        crossOrigin: true,
        contentType:"application/json"
    });
}