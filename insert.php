<?php
 
        // servername => localhost
        // username => root
        // password => empty
        // database name => staff
        $conn = mysqli_connect("localhost", "root", "", "tracking");
         
        // Check connection
        if($conn === false){
            die("ERROR: Could not connect. "
                . mysqli_connect_error());
        }
         
        // Taking all 5 values from the form data(input)
        $full_name =  $_REQUEST['full_name'];
       
       
        $tracking = $_REQUEST['tracking'];
         
        // Performing insert query execution
        // here our table name is college
        $sql = "INSERT INTO tracking_record  VALUES ('$full_name',
           '$tracking')";
         
        if(mysqli_query($conn, $sql)){
            echo "<h3>data stored in a database successfully."
                . " Please browse your localhost php my admin"
                . " to view the updated data</h3>";
 
            // echo nl2br("\n$first_name\n $last_name\n "
            //     . "$gender\n $address\n $email");
        } else{
            echo "ERROR: Hush! Sorry $sql. "
                . mysqli_error($conn);
        }
         
        // Close connection
        mysqli_close($conn);
        ?>