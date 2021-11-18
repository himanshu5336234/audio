

$(document).ready(function () {
 
    var audioData = [
        {
            "id": "1",
            "track": "Without You",
            "artist": "Avicii",
            "albumCover": "https://m.media-amazon.com/images/I/81mNRm3F6KL._SS500_.jpg",
            "audioFile": "https://edyoda.s3.ap-south-1.amazonaws.com/public/musicfiles/without-you.mp3"
        },
        {
            "id": "3",
            "track": "Youngblood",
            "artist": "5 Seconds of Summer",
            "albumCover": "https://pm1.narvii.com/6806/3e2b13347653f657cefb76e8da003cf49e17adeav2_hq.jpg",
            "audioFile": "https://edyoda.s3.ap-south-1.amazonaws.com/public/musicfiles/5+Seconds+Of+Summer+-+Youngblood+(+).mp3"
        },
        {
            "id": "4",
            "track": "I'm a Mess",
            "artist": "Bebe Rexha",
            "albumCover": "https://images.genius.com/bdb01bd972ae95534994ea013e7a3e2e.1000x1000x1.jpg",
            "audioFile": "https://edyoda.s3.ap-south-1.amazonaws.com/public/musicfiles/Bebe+Rexha+-+I+m+A+Mess.mp3"
        },
        {
            "id": "5",
            "track": "Where we started",
            "artist": "Lost Sky",
            "albumCover": "https://i.kfs.io/album/global/36258062,0v1/fit/500x500.jpg",
            "audioFile": "https://edyoda.s3.ap-south-1.amazonaws.com/public/musicfiles/Lost+Sky+-+Where+We+Started+feat.+Jex.mp3"
        },
        {
            "id": "6",
            "track": "Ignite",
            "artist": "Alan Walker & K-391",
            "albumCover": "https://cdns-images.dzcdn.net/images/cover/326d976522e03136299c17cbd06bcfd4/264x264.jpg",
            "audioFile": "https://edyoda.s3.ap-south-1.amazonaws.com/public/musicfiles/Alan+Walker+%26+K-391+-+Ignite+ft.+Julie+Bergan+%26+Seungri.mp3"
        },
        {
            "id": "7",
            "track": "Everybody Wants to Rule the World",
            "artist": "Lorde",
            "albumCover": "https://i1.sndcdn.com/artworks-000112266462-33e808-t500x500.jpg",
            "audioFile": "https://edyoda.s3.ap-south-1.amazonaws.com/public/musicfiles/Lorde+-+Everybody+Wants+To+Rule+The+World.mp3"
        },
        {
            "id": "8",
            "track": "Superhero",
            "artist": "Unknown Brain",
            "albumCover": "https://is4-ssl.mzstatic.com/image/thumb/Music71/v4/59/09/96/59099665-fd91-ac78-04c1-a6675907926d/source/1200x1200bb.jpg",
            "audioFile": "https://edyoda.s3.ap-south-1.amazonaws.com/public/musicfiles/Unknown+Brain+-+Superhero+(feat.+Chris+Linton)+%5BNCS+Release%5D.mp3"
        }
    ];
    var index = 0;
    var currenttime = 0;
    var audio = document.getElementById("audio")


    $("#play").click(function () {

        audio.currentTime = currenttime
        audio.play()
        document.getElementById("play").style.display = "none"
        document.getElementById("pause").style.display = "block"

    })
    $("#pause").click(function () {
        audio.pause()
        currenttime = audio.currentTime
        document.getElementById("pause").style.display = "none"
        document.getElementById("play").style.display = "block"
    })





    audio.addEventListener("timeupdate", function () {
        $("#crnt-time").text(parseFloat(audio.currentTime).toFixed(2))
        $("#totl-time").text(parseFloat(audio.duration / 60).toFixed(2))



        document.getElementById("seek").style.width = (audio.currentTime / audio.duration) * 100 + "%"
    })



    $("#forward").click(function () {


        if (index < audioData.length) {
            index += 1;
            var source = $("<source>").attr("src", audioData[index].audioFile)
            var banner = $("<img>").attr("src", audioData[index].albumCover)
            $("#artist-name").text(audioData[index].artist)
            $("#song-name").text(audioData[index].track)
        }
        else {
            index = index - audioData.length;
        }
        $("#audio").empty()
        $("#banner").empty()
        $("#banner").append(banner)
        $("#audio").append(source)
        audio.load()
        audio.play()
        document.getElementById("play").style.display = "none"
        document.getElementById("pause").style.display = "block"


    })



    $("#backward").click(function () {
        if (index != 0) {
            index -= 1;
            var source = $("<source>").attr("src", audioData[index].audioFile)
            var banner = $("<img>").attr("src", audioData[index].albumCover)
            $("#artist-name").text(audioData[index].artist)
            $("#song-name").text(audioData[index].track)
            $("#audio").empty()
            $("#banner").empty()
            $("#banner").append(banner)
            $("#audio").append(source)
            audio.load()
            audio.play()
        }

    })

 














})