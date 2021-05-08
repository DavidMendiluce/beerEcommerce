<?php


$mysqli = new PDO("mysql:host=localhost; dbname=beer_cave", "root", "");


$query = "SELECT * FROM beers";

$statement = $mysqli->prepare($query);

$statement->execute();

while($row = $statement->fetch(PDO::FETCH_ASSOC))
{
  $data[] = $row;
}

//Need to add JSON_NUMERIC_CHECK to avoid number being treated as strings
echo json_encode($data,JSON_NUMERIC_CHECK);

 ?>
