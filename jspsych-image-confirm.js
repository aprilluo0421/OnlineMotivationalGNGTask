/**
* jspsych-image-confirm
* Wilbert van Ham
*
* plugin for displaying a image getting a keyboard response and showing the response and then waiting for confirmation
*
**/


jsPsych.plugins["image-confirm"] = (function() {

	var plugin = {}

	jsPsych.pluginAPI.registerPreload('image-confirm', 'stimulus', 'image')

	plugin.trial = function(display_element, trial) {

		// if any trial variables are functions
		// flashborderthis evaluates the function and replaces
		// it with the output of the function
		trial = jsPsych.pluginAPI.evaluateFunctionParameters(trial)

		// set default values for the parameters
		trial.timing_stim = trial.timing_stim || -1
		trial.timing_response = trial.timing_response || -1
		trial.prompt = trial.prompt || ""
		trial.stimulus_highlight = trial.stimulus_highlight || ""

		// this array holds handlers from setTimeout calls
		// that need to be cleared if the trial ends early
		var timeoutHandlers = []

		// display stimulus
		/*display_element.append($('<img>', {
			src: trial.stimulus,
			id: 'jspsych-image-confirm-stimulus',
			style: 'display:block; border: 10px solid black; margin: 50px auto;'
		}))*/
		display_element.append("<div id=trp><img src='"+trial.stimulus+"'><div id=tr0></div><div id=tr1></div></div>")
		//display_element.append("<p><center id='jspsych-image-confirm-confirmation' style='font-size: 1000%'></center></p>")
		
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
			$("#jspsych-image-confirm").addClass('responded')

			// only record the last response
			if (info.key==37 || info.key==39) {
				//$('#jspsych-image-confirm-confirmation').text(info.key==37?"←":"→") // feedback
				if(info.key==37){
					$('#tr0').css({opacity: 0.0}).animate({opacity: 1.0}, 200);
					if(response.rt!=-1) // not for first response
						$('#tr1').css({opacity: 1.0}).animate({opacity: 0.0}, 200);
				} else {
					$('#tr1').css({opacity: 0.0}).animate({opacity: 1.0}, 200);
					if(response.rt!=-1) // not for first response
						$('#tr0').css({opacity: 1.0}).animate({opacity: 0.0}, 200);
				}
				response = info // remember last response
			}

			// end on enter if arrow was pressed first
			if (response.key != -1 && info.key == jsPsych.pluginAPI.convertKeyCharacterToKeyCode('enter')) {
				end_trial()
			}
		}

		// start the response listener
		var keyboardListener = jsPsych.pluginAPI.getKeyboardResponse({
			callback_function: after_response,
			valid_responses: [jsPsych.pluginAPI.convertKeyCharacterToKeyCode('leftarrow'), jsPsych.pluginAPI.convertKeyCharacterToKeyCode('rightarrow'), jsPsych.pluginAPI.convertKeyCharacterToKeyCode('enter')],
			rt_method: 'date',
			persist: true,
			allow_held_key: false,
		})

		// hide image if timing is set
		if (trial.timing_stim > 0) {
			var t1 = setTimeout(function() {
				$('#jspsych-image-confirm-stimulus').css('visibility', 'hidden')
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
