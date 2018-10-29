$(document).on('keyup', '.keys', function(e) {
    console.log(this);
    switch ($(this).prop("id")) {
        case "key1":
            alert("KEY1");
            break;

        default:
            break;
    }
});