<script type="text/javascript" src="sketch.js"></script>
<?php
	function display_code($number){
		//p5jscourse-master/ex1/index.html
		//p5jscourse-master/ex1/sketch.js
		echo "HTML <br>";
		echo "<pre><code>";
		$file_html = file("../ex$number/index.html");
		foreach ($file_html as $row) {
			print_r(htmlspecialchars($row) . "<br>") ;
		}

		echo "</code></pre>";
		echo "<hr><br>";
		echo "JAVASCRIPT / P5 <br>";
		echo "<pre><code>";
		$file_javascript = file("../ex$number/sketch.js");
		foreach ($file_javascript as $row) {
			print_r(htmlspecialchars($row) . "<br>") ;
		}
		echo "</code></pre>";
	}
?>