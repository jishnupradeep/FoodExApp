function countdown(){

    // Set the date we're counting down to
    var countDownDate = new Date("May 16, 2018 23:45:00").getTime();
    var distance = 1200000;

    // Update the count down every 1 second
    var x = setInterval(function() {

        // Get todays date and time
        var now = new Date().getTime();
        
        // Find the distance between now an the count down date
        //var distance = countDownDate - now;
<<<<<<< HEAD

=======
>>>>>>> origin/master
        
        // Time calculations for hours, minutes and seconds
        //var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        var seconds = Math.floor((distance % (1000 * 60)) / 1000);
        
        // Output the result in an element with id="demo"
<<<<<<< HEAD
        //document.getElementById("demo").innerHTML = hours + "h : " + minutes + "m : " + seconds + "s ";
        document.getElementById("demo").innerHTML = minutes + "m : " + seconds + "s ";
        distance = distance - 1000;

=======
       // document.getElementById("demo").innerHTML = hours + "h : " + minutes + "m : " + seconds + "s ";
        document.getElementById("demo").innerHTML = minutes + "m : " + seconds + "s ";

        distance = distance - 1000;
>>>>>>> origin/master
        
        // If the count down is over, write some text 
        //if (distance < 0) {
        //    clearInterval(x);
        //    document.getElementById("demo").innerHTML = "EXPIRED";
        //}
    }, 1000);
}