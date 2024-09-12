/**
* jspsych-flashborder-image
* Wilbert van Ham
*
* plugin for displaying a image getting a keyboard response with a border appearing shortly after the keypress
*
**/


jsPsych.plugins["flashborder-image"] = (function() {

	var plugin = {}

	jsPsych.pluginAPI.registerPreload('flashborder-image', 'stimulus', 'image')
	jsPsych.pluginAPI.registerPreload('flashborder-image', 'stimulus_highlight', 'image')

	plugin.trial = function(display_element, trial) {

		// if any trial variables are functions
		// flashborderthis evaluates the function and replaces
		// it with the output of the function
		trial = jsPsych.pluginAPI.evaluateFunctionParameters(trial)

		// set default values for the parameters
		trial.choices = trial.choices || []
		trial.response_ends_trial = (typeof trial.response_ends_trial == 'undefined') ? true : trial.response_ends_trial
		trial.timing_stim = trial.timing_stim || -1
		trial.timing_border = trial.timing_border || -1 // how long does border appear
		trial.timing_response = trial.timing_response || -1
		trial.prompt = trial.prompt || ""
		trial.stimulus_highlight = trial.stimulus_highlight || ""

		// this array holds handlers from setTimeout calls
		// that need to be cleared if the trial ends early
		var timeoutHandlers = []

		// display stimulus
		display_element.append($('<img>', {
			src: trial.stimulus,
			id: 'jspsych-flashborder-image-stimulus',
			style: 'border-width:30px; border-style: solid; border-color: transparent; display:block; margin: 50px auto' 
		}))

		//show prompt if there is one
		if (trial.prompt !== "") {
			display_element.append('<p>'+trial.prompt+'</p>')
		}

		// store response
		var response = {
			rt: -1,
			key: -1
		}

		// function to end trial when it is time
		var end_trial = function() {

			// kill any remaining setTimeout handlers
			for (var i = 0; i < timeoutHandlers.length; i++) {
				clearTimeout(timeoutHandlers[i])
			}

			// kill keyboard listeners
			if (typeof keyboardListener !== 'undefined') {
				jsPsych.pluginAPI.cancelKeyboardResponse(keyboardListener)
			}

			// gather the data to store for the trial
			var trial_data = {
				"rt": response.rt,
				"stimulus": trial.stimulus,
				"color": trial.color,
				"key_press": response.key
			}

			//jsPsych.data.write(trial_data)

			// clear the display
			display_element.html('')

			// move on to the next trial
			jsPsych.finishTrial(trial_data)
		}

		// function to handle responses by the subject
		var after_response = function(info) {

			// after a valid response, the stimulus will have the CSS class 'responded'
			// which can be used to provide visual feedback that a response was recorded
			$("#jspsych-flashborder-image-stimulus").addClass('responded')

			// only record the first response
			if (response.key == -1) {
				response = info
			}

			/*
			// show border and hide after timing-border
			if (trial.timing_border > 0) {
				$('#jspsych-flashborder-image-stimulus').css('border-color', trial.color)
				var t2 = setTimeout(function() {
					$('#jspsych-flashborder-image-stimulus').css('border-color', 'transparent')
				}, trial.timing_border)
				timeoutHandlers.push(t2)
			}
			*/

			// show highlight image and hide after timing-border
			if (trial.timing_border > 0) {
				$('#jspsych-flashborder-image-stimulus').attr('src', trial.stimulus_highlight)
				var t2 = setTimeout(function() {
					$('#jspsych-flashborder-image-stimulus').attr('src', trial.stimulus)
				}, trial.timing_border)
				timeoutHandlers.push(t2)
			}


			if (trial.response_ends_trial) {
				end_trial()
			}
		}

		// start the response listener
		if (JSON.stringify(trial.choices) != JSON.stringify(["none"])) {
			var keyboardListener = jsPsych.pluginAPI.getKeyboardResponse({
				callback_function: after_response,
				valid_responses: trial.choices,
				rt_method: 'date',
				persist: false,
				allow_held_key: false
			})
		}

		// hide image if timing is set
		if (trial.timing_stim > 0) {
			var t1 = setTimeout(function() {
				$('#jspsych-flashborder-image-stimulus').css('visibility', 'hidden')
			}, trial.timing_stim)
			timeoutHandlers.push(t1)
		}

		// end trial if time limit is set
		if (trial.timing_response > 0) {
			var t3 = setTimeout(function() {
				end_trial()
			}, trial.timing_response)
			timeoutHandlers.push(t3)
		}

	}

	return plugin
})()
