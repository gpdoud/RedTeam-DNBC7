$().ready( () => {    

    $("#btnGet").click( () => {
        let id = $("#xid").val();
        get(id);
    });

    $("#btnSave").click( () => {
        let vendor = {
            id : $("#pid").val(),
            code : $("#pcode").val(),
            name : $("#pname").val(),
            address : $("#paddress").val(),
            city : $("#pcity").val(),
            state : $("#pstate").val(),
            zip : $("#pzip").val(),
            phone : $("#pphone").val(),
            email : $("#pemail").val(),
        }
        console.log("Vendor:", vendor);
        VendorService.edit(vendor)
            .done((res) => {
                console.log("Edit rc:", res);
            });
    });
});
const get = (id) => {
    VendorService.get(id)
        .done( (vendor) => {
            $("#pid").val(vendor.id);
            $("#pcode").val(vendor.code);
            $("#pname").val(vendor.name);
            $("#paddress").val(vendor.address);
            $("#pcity").val(vendor.city);
            $("#pstate").val(vendor.state);
            $("#pzip").val(vendor.zip);
            $("#pphone").val(vendor.phone);
            $("#pemail").val(vendor.email);
        });
}