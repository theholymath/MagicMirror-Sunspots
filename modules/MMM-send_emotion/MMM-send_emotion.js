/* global Module */

/* Magic Mirror
 * Module: send_emotion_to_mirror
 *
 * By 
 * MIT Licensed.
 */

Module.register("MMM-send_emotion", {
	defaults: {
		updateInterval: 3000,
		retryDelay: 5000,
		switchInterval: 3000,
		initialLoadDelay: 0
	},

	requiresVersion: "2.1.0", // Required version of MagicMirror
	//var emotional_array = ['happy','sad','smiling','fear','disappointed','mellow','cheerful','anxious'];
	
	start: function() {
                var self = this;
		Log.info('Starting module: ' + this.name);
		this.scheduleUpdate(this.config.initialLoadDelay);

		//Flag for check if module is loaded
		this.loaded = false;
		},
	

		
	scheduleUpdate: function(delay) {
		var self = this;
		var nextLoad = this.config.updateInterval;
		if (typeof delay !== "undefined" && delay >= 0) {
			nextLoad = delay;
		}

		setInterval(function() {
			var emotional_array = ['happy','sad','hello','fear','disappointed','mellow','listening','thumbs_up'];
			//self.sendNotification("New_Emotion", emotional_array[0]);
			self.change_emotion();
			}, nextLoad);
		},
	change_emotion: function(){
		var self = this;
		var emotional_array = ['happy','sad','hello','fear','disappointed','mellow','listening','thumbs_up'];
		var emote_index = Math.floor(Math.random()*emotional_array.length);
		var emote = emotional_array[emote_index];
		//Log.log(emote);
		self.sendNotification("change_emotion", emote);
		}	
});
