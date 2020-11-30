<html>
<body>

<form action="" method="post">
	<select name="file_name">
		<option value="auth">authentication</option>
		<option value="syslog">system</option>
  	</select>
<input type="submit" value="select">
</form>


<?php

$file_name = $_POST["file_name"];

if (!empty($file_name)) {

	echo "<b>log file</b>: ".$file_name."</br></br>";
	system("cat log/$file_name"); 

}

?>


</body>
</html>
