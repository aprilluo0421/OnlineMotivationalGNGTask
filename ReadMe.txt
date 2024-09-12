#####################################################################################################
#####################################################################################################
#####################################################################################################
# Read.me doc for the online version of the motivational go nogo task 
# Task can be run as an online experiment hosted on a server
#####################################################################################################
#####################################################################################################
#####################################################################################################

Contribution & Setting Up Online Experiment

# We thank Wilbert van Ham from the technical support group at the Donders Center for 
# Cognitionfor extensive support in setting up this online experiment. 

#####################################################################################################
# Task description
#####################################################################################################
Motivational Go NoGo task 

- This version of the task was used for a lab experiment as described in Nuuland et al.
  (2020) published in Brain 
- The jspsych code of this task version, as uploaded here, was employed for a large-scale 
  online study by Scholz et al. (in preparation)
- a demo version of this task can be found here: https://www.denoudenlab.org/tasks 

#####################################################################################################
Description Task Version:  
This simple task version of the motivational go nogo task uses different cues belonging to four different 
cue categories Go2Win, Go2Avoid, NoGo2Win and NoGo2Avoid to investigate motivational/ Pavlovian biases in 
decision-making. This task relies on subjects learning by trial and error to make a go response (button press) 
or not show any response, i.e. a NoGo response (here no button press). 

Unlike the task version used in Swart et al. 2017, published in eLife, this version of the task does not 
distinguish between different types of go responses but only relied on one type of Go. During the task, 
2 different cue sets are presented in 2 consecutive blocks with 400 trials in total (200 trials per block).

#####################################################################################################
Task integration with recruitment platforms
#####################################################################################################

Prolific:
We recruited participants from Prolific and automatic recording of the Prolific ID has been set up 
within the code so that once you have added the required parameters to your Study URL in order to 
pass the Prolific ID through the query string, your filename will contain the participant's Prolific ID. 
See https://prolific.co/ for a detailed description of how to do this.

#####################################################################################################
# SET- UP of Folder & Code Structure 
#####################################################################################################
Of Note: The task folder of your task needs to include a version of jspsych.

This task version was successfully tested and run with jspsych version 5.0.3

Code compatibility with newer version has not been extensively tested and it is very likely that you 
would have to make modifications to the code in case you would want to run this code using a newer 
jspsych version than the one we used. 

Additional set up of folders in which to set up the task on your server:
A) 1 folder with jspsych 
B) 1 folder named data (here individual json task files get saved)
c) 1 folder that contains the images employed in the task 
D) 1 folder called mystyle.css --> contains css code for giving the task its current    
   appearance (fond type, size etc.)

Some description of individual files that come with the task code

1) pavlovian.html: 
Main task code including the task structure and in which order task gets served to participant. 
Also includes the order of introduction slides to be presented to the participants and the practice trials 
with the performance criterion of having to perform 4/5 trials correct per cue before being allowed to start 
with the task.For this version the task was split up in 2 task blocks with 200 trials each. The trial number 
as well as whether 1 or multiple blocks should be run can be determined and adapted in this code.

2) consent 0 and 1: 
Those are the 2 texts that get served up for participants to give their consent 
(description of study, risks and implications of study)

3) instructions.js: text for each instruction page that gets served up 

4) shuffle.js : code for shuffling cues/ objects with constraints, i.e. the respective cue category does not 
always get assigned to the same image and the when it gets repeated and in which order is constrained.

--> constraint is the number of consecutive equal objects, where the definition of equality can be given, 
for instance: any of the images in the stimulus is equal
--> pick from list with repeats, with constraints. 
constraint is the minimum distance between two equal objects

Example:
  --> e.g. Go2Win is a blue gem for one person while another one gets a red triangle here. 
  --> shuffling follows certain predefined rules, for this task, no cue was supposed to be  
      repeated more than 2x in a row.

5) jspsych-fashborder-image.js: 
jspsych trial plugin that allows the image edge (usually red or green) to quickly flash in a white color once participants have pressed a button (made a go response). 
Given the online setting this is supposed to make choices more salient. 

6) jspsych-image-confirm.js: jspsych trial plugin for displaying an image getting a keyboard response, showing the response and then waiting for confirmation 
 
7) mystyle.css: all styling specific to this experiment, such as centering elements in middle of screen

8) misc.js: helper functions --> counting rules for checking whether practice trial criterion was fullfilled or not

9) save_data_file.php: data saving in json formatted doc
