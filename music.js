class Music {

    constructor(title , singer , img , file){
        this.title = title;
        this.singer = singer;
        this.img = img;
        this.file = file;
    }
    getName(){

        return this.title + " - " + this.singer;

    }

}


const musicList = [

    new Music("Zor","Uzi","1.png","1.mp3"),
    new Music("Superman","Eminem","2.png","2.mp3")

];