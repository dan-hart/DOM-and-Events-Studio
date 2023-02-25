document.addEventListener('DOMContentLoaded', function() {
    // 1/2:
    // get take off button by id
    var takeOffButton = document.getElementById('takeoff');
    // When the "Take off" button is clicked, the following should happen:
    // A window confirm should let the user know "Confirm that the shuttle is ready for takeoff." If the shuttle is ready for liftoff
    takeOffButton.addEventListener('click', function() {
        var readyForTakeOff = window.confirm('Confirm that the shuttle is ready for takeoff.');
        // If the shuttle is ready for liftoff, then add parts b-d.
        if (readyForTakeOff) {
            // The flight status should change to "Shuttle in flight."
            document.getElementById('flightStatus').innerHTML = 'Shuttle in flight.';
            // The background color of the shuttle flight screen (id = "shuttleBackground") should change from green to blue.
            document.getElementById('shuttleBackground').style.backgroundColor = 'blue';
            // The shuttle height should increase by 10,000 miles.
            var shuttleHeight = document.getElementById('spaceShuttleHeight');
            shuttleHeight.innerHTML = parseInt(shuttleHeight.innerHTML) + 10000;
        }
    })

    // 3: When the "Land" button is clicked, the following should happen:
    var landButton = document.getElementById('landing');
    // A window alert should let the user know "The shuttle is landing. Landing gear engaged."
    landButton.addEventListener('click', function() {
        window.alert('The shuttle is landing. Landing gear engaged.');
        // The flight status should change to "The shuttle has landed."
        document.getElementById('flightStatus').innerHTML = 'The shuttle has landed.';
        // The background color of the shuttle flight screen should change from blue to green.
        document.getElementById('shuttleBackground').style.backgroundColor = 'green';
        // The shuttle height should go down to 0.
        document.getElementById('spaceShuttleHeight').innerHTML = 0;
    })

    // 4: When the "Abort Mission" button is clicked, the following should happen:
    var abortButton = document.getElementById('missionAbort');
    // A window confirm should let the user know "Confirm that you want to abort the mission." If the user wants to abort the mission, then add parts b-d.
    abortButton.addEventListener('click', function() {
        var abortMission = window.confirm('Confirm that you want to abort the mission.');
        if (abortMission) {
            // The flight status should change to "Mission aborted."
            document.getElementById('flightStatus').innerHTML = 'Mission aborted.';
            // The background color of the shuttle flight screen should change from blue to green.
            document.getElementById('shuttleBackground').style.backgroundColor = 'green';
            // The shuttle height should go to 0.
            document.getElementById('spaceShuttleHeight').innerHTML = 0;
        }
    })

    // 5: When the "Up", "Down", "Right", and "Left" buttons are clicked, the following should happen:
    var upButton = document.getElementById('up');
    var downButton = document.getElementById('down');
    var rightButton = document.getElementById('right');
    var leftButton = document.getElementById('left');
    // The rocket image should move 10 px in the direction of the button that was clicked.
    // If the "Up" or "Down" buttons were clicked, then the shuttle height should increase or decrease by 10,000 miles.
    let rocket = document.getElementById('rocket');
    rocket.style.position= 'absolute';
    rocket.style.left = '0px';
    rocket.style.bottom = '0px';

    upButton.addEventListener('click', function() {
        rocket.style.bottom = parseInt(rocket.style.bottom) + 10 + 'px';
        document.getElementById('spaceShuttleHeight').innerHTML = parseInt(document.getElementById('spaceShuttleHeight').innerHTML) + 10000;
    })
    downButton.addEventListener('click', function() {
        rocket.style.bottom = parseInt(rocket.style.bottom) - 10 + 'px';
        document.getElementById('spaceShuttleHeight').innerHTML = parseInt(document.getElementById('spaceShuttleHeight').innerHTML) - 10000;
    })
    rightButton.addEventListener('click', function() {
        rocket.style.left = parseInt(rocket.style.left) + 10 + 'px';
    })
    leftButton.addEventListener('click', function() {
        rocket.style.left = parseInt(rocket.style.left) - 10 + 'px';
    })
})
