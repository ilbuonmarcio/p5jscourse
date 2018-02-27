<http>
	<head>
		<link rel="stylesheet" type="text/css" href="style.css">

		<meta name="viewport" width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0>
	    <style> body {padding: 0; margin: 0;} </style>
	    <script src="../p5.min.js"></script>
	    <script src="../addons/p5.dom.min.js"></script>
	    <script src="../addons/p5.sound.min.js"></script>
	    <script src="sketch.js"></script>

	</head>
	<body>
		<div id = "title">
			<h1> P5.js Workshop </h1>
		</div>
		<div id = "menu">
			<form action='' method="POST">
				<table>
					<tr>
						<td><button type="submit" class = "esercizi" id = "esercizio_1" name = "esercizio_1"> VIEW CODE OF EXERCISE 1 </button></td>
						<td><button type="submit" class = "esercizi" id = "esercizio_2" name = "esercizio_2"> VIEW CODE OF EXERCISE 2 </button></td>
						<td><button type="submit" class = "esercizi" id = "esercizio_3" name = "esercizio_3"> VIEW CODE OF EXERCISE 3 </button></td>	
						<td><button type="submit" class = "esercizi" id = "esercizio_4" name = "esercizio_4"> VIEW CODE OF EXERCISE 4 </button></td>
						<td><button type="submit" class = "esercizi" id = "esercizio_5" name = "esercizio_5"> VIEW CODE OF EXERCISE 5 </button></td>
					</tr>
					<tr>
						<td><button type="submit" class = "esercizi" id = "view_esercizio_1" name = "view_esercizio_1"> VIEW EXERCISE 1 </button></td>
						<td><button type="submit" class = "esercizi" id = "view_esercizio_2" name = "view_esercizio_2"> VIEW EXERCISE 2 </button></td>
						<td><button type="submit" class = "esercizi" id = "view_esercizio_3" name = "view_esercizio_3"> VIEW EXERCISE 3 </button></td>
						<td><button type="submit" class = "esercizi" id = "view_esercizio_4" name = "view_esercizio_4"> VIEW EXERCISE 4 </button></td>		
						<td><button type="submit" class = "esercizi" id = "view_esercizio_5" name = "view_esercizio_5"> VIEW EXERCISE 5 </button></td>	
					</tr>
				</table>
			</form>
		</div>
		<div id = "content">
			<table>
				<tr>
					<td id="code_field">
						<?php 
							include "functions.php";
							if (isset($_POST["esercizio_1"])) {
								echo "<p> VIEW CODE OF EXERCISE 1 </p>";
								display_code("1");
							}
							if (isset($_POST["esercizio_2"])) {
								echo "<p> VIEW CODE OF EXERCISE 2 </p>";
								display_code("2");
							}
							if (isset($_POST["esercizio_3"])) {
								echo "<p> VIEW CODE OF EXERCISE 3 </p>";
								display_code("3");
							}
							if (isset($_POST["esercizio_4"])) {
								echo "<p> VIEW CODE OF EXERCISE 4 </p>";
								display_code("4");
							}
							if (isset($_POST["esercizio_5"])) {
								echo "<p> VIEW CODE OF EXERCISE 5 </p>";
								display_code("5");
							}
							if (isset($_POST["view_esercizio_1"])) {
								header('Location: ../ex1/');
							}
							if (isset($_POST["view_esercizio_2"])) {
								header('Location: ../ex2/');
							}
							if (isset($_POST["view_esercizio_3"])) {
								header('Location: ../ex3/');
							}
							if (isset($_POST["view_esercizio_4"])) {
								header('Location: ../ex4/');
							}
							if (isset($_POST["view_esercizio_5"])) {
								header('Location: ../ex5/');
							}
						?>
					</td>
				</tr>
			</table>
		</div>
	</body>
</http>