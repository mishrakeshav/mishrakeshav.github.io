<?php

$fname = $_POST['fname'];
$lname = $_POST['lname'];
$email = $_POST['email'];
$descrip = $_POST['descrip'];


// mysqli connect takes aleast 3 parameters
// 1. host name (Here local host)
// 2. username (here root)
// 3. PASSWORD
// 4. database name(optional)
$con = mysqli_connect('localhost', 'id11837293_root', 'qwerty#123','id11837293_mishra');
if(!$con){
    die('Could not connect' . mysqli_error());

}
else{
   
    $sql = "INSERT INTO feedback(fname, lname, email, descrip) VALUES('$fname', '$lname', '$email', '$descrip')";
    mysqli_query($con, $sql);
    header("Location:success.html");

    

}

?>  