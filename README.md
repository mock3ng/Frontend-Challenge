## MUSİC PLAYER APP WİTH ES6 JAVASCRİPT , BOOTSTRAP , HTML


![musicPlayer](https://github.com/mock3ng/Frontend-Challenge/blob/Music-Player/music-player.png)



It defines several variables that refer to various HTML elements of the music player interface.
It creates a new instance of the MusicPlayer class and initializes it with a list of music files.
When the window loads, it calls the displayMusic() function to display the first music file and the displayMusicList() function to display the list of available music files.
When the user clicks the play button, it checks if the music is currently playing or paused, and calls the appropriate function (playMusic() or pauseMusic()).
When the user clicks the next or previous button, it calls the corresponding functions of the MusicPlayer class to switch to the next or previous music file, and then calls the displayMusic() function to update the interface.
When the audio element's time updates, it updates the progress bar and the current time display, and checks if the music has ended. If it has, it automatically switches to the next music file and starts playing it.
When the user interacts with the progress bar or the volume bar, it updates the corresponding elements of the audio element.
When the user selects a music file from the list, it updates the MusicPlayer instance and the interface to show the selected music file, and starts playing it.
The isPlayingNow() function highlights the currently playing music file in the list by adding a "playing" class to it.
