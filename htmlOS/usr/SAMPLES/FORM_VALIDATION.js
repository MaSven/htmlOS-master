function validateURL(url) {
    var reurl = /^(http[s]?:\/\/){0,1}(www\.){0,1}[a-zA-Z0-9\.\-]+\.[a-zA-Z]{2,5}[\.]{0,1}/;
    return reurl.test(url);
}

function validateForm()
{
    // Validate URL
    var url = $("#frurl").val();
    if (validateURL(url)) { } else {
        alert("Please enter a valid URL, remember including http://");
    }

    // Validate Title
    var title = $("#frtitle").val();
    if (title=="" || title==null) { } else {
        alert("Please enter only alphanumeric values for your advertisement title");
    }

    // Validate Email
    var email = $("#fremail").val();
    if ((/(.+)@(.+){2,}\.(.+){2,}/.test(email)) || email=="" || email==null) { } else {
        alert("Please enter a valid email");
    }
  return false;
}  