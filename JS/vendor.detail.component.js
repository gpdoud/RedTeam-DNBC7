$().ready(() => {
    $("button").click(() => {
        getVendor();
    });
});

const refresh = (vendor) => {
    $("#pid").text(vendor.id);
    $("#pcode").text(vendor.code);
    $("#pname").text(vendor.name);
    $("#paddress").text(vendor.address);
    $("#pcity").text(vendor.city);
    $("#pstate").text(vendor.state);
    $("#pzip").text(vendor.zip);
    $("#pphone").text(vendor.phone);
    $("#pemail").text(vendor.email);
};

const getVendor = () => {
    let id = $("#xid").val();
    VendorService.get(id)
    .done( (res) => {
        console.log("Vendor:", res);
        refresh(res);
    });
};