//https://www.eclipse.org/paho/clients/js/

function sensores() {
	//alert("led on");
	console.log("H1");
	//document.getElementById("sensor").innerHTML="led on";
	message = new Paho.MQTT.Message("sensor1");
    	message.destinationName = "jabravo.fie@unach.edu.ec/test";
    	client.send(message);
  
}
function hist(){	
	//alert("led off");
	console.log("H2");
	message = new Paho.MQTT.Message("sensor2");
    	message.destinationName = "jabravo.fie@unach.edu.ec/test";
    	client.send(message);
	//document.getElementById("sensor").innerHTML="led off";
}






// Create a client instance
  //client = new Paho.MQTT.Client("postman.cloudmqtt.com", 14970);
  
  client = new Paho.MQTT.Client("maqiatto.com", 8883, "web_" + parseInt(Math.random() * 100, 10));

  // set callback handlers
  client.onConnectionLost = onConnectionLost;
  client.onMessageArrived = onMessageArrived;
  var options = {
   useSSL: false,
    userName: "jabravo.fie@unach.edu.ec",
    password: "SantoDomingo1998",
    onSuccess:onConnect,
    onFailure:doFail
  }

  // connect the client
  client.connect(options);
   
  // called when the client connects
  function onConnect() {
    // Once a connection has been made, make a subscription and send a message.
    console.log("Conectado...");
	
    client.subscribe("jabravo.fie@unach.edu.ec/test");
    message = new Paho.MQTT.Message("hola desde la web");
    message.destinationName = "jabravo.fie@unach.edu.ec/test";
    client.send(message);
	
  }

  function doFail(e){
    console.log(e);
	
  }

  // called when the client loses its connection
  function onConnectionLost(responseObject) {
    if (responseObject.errorCode !== 0) {
      console.log("onConnectionLost:"+responseObject.errorMessage);
    }
  }

  // called when a message arrives
  function onMessageArrived(message) {
    console.log("onMessageArrived:"+message.payloadString);
	  
	  
	   if(message.payloadString[0]=="P"){
	   document.getElementById("sensor1").innerHTML=message.payloadString;
	 
	  }
	  
	  if(message.payloadString[0]=="T"){
	   document.getElementById("sensor2").innerHTML=message.payloadString;
           
	  }
	   if(message.payloadString[0]=="S"){
           document.getElementById("historial").innerHTML=message.payloadString;
	  }
	  /*
	  if (message.payloadString=="S1Activado"){
	  document.getElementById("sensor1").innerHTML=message.payloadString;
	  }
	  if (message.payloadString=="S1Apagado"){
	  document.getElementById("sensor1").innerHTML=message.payloadString;
	  }
	  
	  if (message.payloadString=="S2Activado"){
	  document.getElementById("sensor1").innerHTML=message.payloadString;
	  }
	  
	  if (message.payloadString=="S2Activado"){
	  document.getElementById("sensor1").innerHTML=message.payloadString;
	  }
	  
	  if (message.payloadString=="S1_ENCENDIDO"){
	  document.getElementById("historial").innerHTML=message.payloadString;
	  }
	  if (message.payloadString=="S1_APAGADO"){
	  document.getElementById("historial").innerHTML=message.payloadString;
	  }
	  
	  if (message.payloadString=="S2_ENCENDIDO"){
	  document.getElementById("historial").innerHTML=message.payloadString;
	  }
	  
	  if (message.payloadString=="S2_APAGADO"){
	  document.getElementById("historial").innerHTML=message.payloadString;
	  }*/
	
  }
  
