# PAF-Doctor
HelthCare is a hospital management system where the registered users can make appointments with the registered doctors who visit the registered hospitals. After the appointment success, user(patient) can make the payment online. 
<p></p>
<h4> -- project Architecture -- </h4>
<ul>
    <li>docmed(Client):- </li>
	<br>
	<small>
        <ol>
			<li>css folder :- includes all stylesheets (<i>bootstrap.min.css, style.css, jquery.toast.min.css</i>) </li>
			<li>fonts :- fonts package</li>
			<li>img :- include the background image</li>
			<li>js :- includes all js files (<i>main.js, service.js, jquery.toast.min.js</i>) </li>
            <li>doctor.html :- form & grid view</li>
		</ol>
	</small>
	<br>
    <li>Doctor :- </li>
	<br>
	<small>
        <ol>
			<li>include all server side implementation (<i>POST, GET, PUT, DELETE</i>) </li>
		</ol>
	</small>
    <br>
	<li>Utility :-</li>
	<br>
	<small>
        <ol>
			<li>apache8.5 (<i>CORS, Doctor.war, web.xml</i>)</li>
			<li>database backup(s)</li>
			<li>IT18116748.zip with <b>Connection.xml</b></li>
		</ol>
	</small>
</ul>


<h4> -- Project Configuration -- </h4>
<ol type="1">
	<li> Create a database with proper-name. </li>
	<li> Import .sql backup to created database.<b>(important)</b> </li>
	<li> Extract IT18116748.zip into the C: drive.<b>(important)</b> </li>
	<li> Open and edit Connection.xml file according to your database name.<b>(important)</b> </li>
	<li> Run doctor.war file using apache server. </li>
</ol>

<p>If gets Croos-Origin error, plase be kind enough to open chrome browser using <b>RUN with this command ('chrome.exe --disable-site-isolation-trials --disable-web-security --user-data-dir="D:\temp"')</b></p>
<h4>All the Funtionalities work properlly.</h4>