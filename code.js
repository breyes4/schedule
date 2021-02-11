$(document).ready(function () {

    $(":radio").change(scheduledays)

    function scheduledays()
    {
        $("p").show();
        selectedDay = this.id;
        $("#date").text(selectedDay);

        switch (selectedDay) {
            case "Monday":
                $("#activity").text("Exercise");
                $("#time").text("5:00 - 6:00 PM");
                break;
            case "Tuesday":
                $("#activity").text("Work");
                $("#time").text("7:30 AM - 4:30 PM");
                break;
            case "Wednesday":
                $("#activity").text("Work");
                $("#time").text("7:30 AM - 4:30 PM");
                break;
            case "Thursday":
                $("#activity").text("Work");
                $("#time").text("7:30 AM - 4:30 PM");
                break;
            case "Friday":
                $("#activity").text("Work");
                $("#time").text("7:30 AM - 4:30 PM");
                break;
            case "Saturday":
                $("#activity").text("Exercise");
                $("#time").text("5:00 - 6:00 PM");
                break;
            case "Sunday":
                $("#activity").text("Exercise");
                $("#time").text("5:00 - 6:00 PM");
                break;

        }
    };





});
