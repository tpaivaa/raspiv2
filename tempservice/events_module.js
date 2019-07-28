const onewire = require();
const sensors = require('./sensors');

function messages(data) {
	if (data.message === "This") {
		console.log(data.message);
	}
	else {
	  console.log(data);	
	}

}


module.exports =  { messages };