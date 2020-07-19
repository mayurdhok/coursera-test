(function() {
    var names = ["Mayur", "Jitendra", "Janak", "Jakaan", "Pankaj", "Farhan", "Lucky", "Paro", "Laxman", "Jatin"];
    for (var i = 0; i < names.length; i++) {
        var firstLetter = names[i].charAt(0).toLowerCase();
        if (firstLetter === 'j') {
            byeSpeaker.speak(names[i]);
        } else {
            helloSpeaker.speak(names[i]);
        }
    }
})();

/*
Expected output:
Hello Mayur
Good Bye Jitendra
Good Bye Janak
Good Bye Jakaan
Hello Pankoaj
Hello Farhan
Hello Lucky
Hello Paro
Hello Laxman
Good Bye Jatin
*/