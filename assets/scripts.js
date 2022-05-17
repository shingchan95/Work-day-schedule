   //localstorage
   var butLen = $("button").length
    for (i=0; i<butLen; i++){
           var keyID = (localStorage.key(i))
           $("#"+keyID).val(JSON.parse(localStorage.getItem(keyID)))
        }
        $("button").on("click", function(event){
            var prevID = $(this).parent().children("textarea").attr("id");  
            event.preventDefault() 
            var txtArea= $(this).parent().children("textarea").val()           
            localStorage.setItem(prevID,JSON.stringify(txtArea))       
            console.log(txtArea)
    });
    //header current date
    var today= moment()
    $("#currentDay").text(today.format("MMMM Do, YYYY"));
    var currentTime = moment().format("H:00")
    tE = currentTime.split(":");
    CurtimeMin= tE[0]*60
    //current time comparison 
    thLen= $("th").length
    var i=0
    while(i<thLen){
        var hourss = $("th").eq(i).text()
        hrS= hourss.split(":")
        hourSlot =hrS[0]*60
        if(hourSlot< CurtimeMin){
            $("textarea").eq(i).css("background-color", "grey")
            i++
        }
        if(hourSlot> CurtimeMin){
            $("textarea").eq(i).css("background-color", "green")
            i++
        }
        if(hourSlot=== CurtimeMin){
            $("textarea").eq(i).css("background-color", "red")
            i++
        }

    }   