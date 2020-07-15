// 3. Write a javascript function that takes in records(an array of all the database records),
// an ​action​, and a and time window and returns all user ids that performed
// that within that time window.
// E.g. ​getUsers(records, “start”, 700, 900)​ will return the result ​[3]

// 4. Write a javascript function that takes in a ​user_id​ and an array of all the database
// records, and reports a user’s total “unique” playback time in seconds.
// E.g. ​getPlaybackTime(1, records)​ will return ​310​ based on the above example

// 5. Write inline comments for your functions where apropriate.

// 6. Identify any possible shortcomings or limitations of both your functions if any.
// Answer: The limitations to my getUsers() function is that it requires the developer to create an array of objects.
// This means that if you have your database in mySQL you need to first convert your table into JSON format and 
// then store it as an array of objects as seen here in my records variable.
// For both of my functions, currently, it is unnecessary to include records as a parameter in my function
// as my array of objects is called records.


// I declared a records variable that will store an array of objects.
var records = [
  {
  user_id: 1,
  device: "Windows 10",
  action: "start", // can be "start" or "stop"
  date_actioned: 100
},
{
  user_id: 2,
  device: "OSX 15.4",
  action: "start", 
  date_actioned: 200
},
{
  user_id: 1,
  device: "iPhone 8s",
  action: "start", 
  date_actioned: 250
},
{
  user_id: 1,
  device: "Windows 10",
  action: "stop", 
  date_actioned: 370
},
{
  user_id: 1,
  device: "iPhone 8s",
  action: "stop", 
  date_actioned: 410
},
{
  user_id: 2,
  device: "OSX 15.4",
  action: "stop", 
  date_actioned: 490
},
{
  user_id: 3,
  device: "Android 9.1",
  action: "start", 
  date_actioned: 700
}
];
// var entries = Object.entries(records); // Object.entries() method takes an object as argument and returns an array with arrays of key-value pairs.

// console.log(entries); // Used to view all entries in records array 

function getUsers(records, action, start_time, end_time) {
  var length = records.length; // Declared and initialised a variable length to store how many elements are in records. 
  
  // I created a for loop to go through each of the records objects
  for (var i = 0, length; i < length; i++) {
    var object = records[i]; // Store the current record as a variable called object.

    // I added a condition to check if the records action is equal to the parameter action and 
    // if the records' date_actioned is between the start_time and end_time parameters 
    // then return all the user_ids matching the condition.
    if(object.action == action && object.date_actioned >= start_time && object.date_actioned <= end_time) {
      console.log(records[i].user_id);
    }
  }
}

function getPlaybackTime(user, records) {
  var length = records.length;
  var startTime = 0; // Used to store first occurence of 'start'
  var endTime = 0; // Used to store last occurence of 'stop'
  var playbackTime = 0; // Used to store the difference of endTime and starTime
  var countStart = 0; // Created a variable to keep track of occurences of 'start'
  // var countEnd = 0; // Created a variable to keep track of occurences of 'stop'

  for (var i = 0, length; i < length; i++) {
    var object = records[i];

    if(object.user_id == user && object.action == 'start') {
      countStart ++;
      if(countStart == 1) { // Added a condition to stop storing further date_actioned values inside the startTime variable
        startTime = object.date_actioned;
        continue; // Used to continue to next condition/iteration of the loop
      }
      // console.log(countStart); // Used to test occurences of start
    }

    if(object.user_id == user && object.action == 'stop'){
      // countEnd ++; 
      // console.log(countEnd); Used to test output for countEnd.
      endTime = object.date_actioned;
      }

  }

  playbackTime = endTime - startTime;

  // console.log(endTime); // Used to test output of endTime
  // console.log(startTime); // Used to test output of startTime
  console.log(playbackTime);
}

getUsers(records, 'start', 700, 900); // Calling getUsers() function with the given parameters

getPlaybackTime(1, records); // Calling getPlaybackTime() function with the given parameters



