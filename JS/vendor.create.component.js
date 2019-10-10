$().ready( () => {    

    $("#btnSave").click( () => {
        let vendor = {
            id : 0,
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
        UserService.create(vendor)
            .done((res) => {
                console.log("create rc:", res);
            });
    });
});
