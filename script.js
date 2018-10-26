function search (){
    var artist = document.getElementById("artists").value;
    var limit = document.getElementById("limit").value;
    $.post('https://itunes.apple.com/search?limit=' + limit +'&term='+ artist, page);
}

function page(result){
    console.log(JSON.parse(result));

    var json = JSON.parse(result);
    var songs = json.results;

    $("#tableOne").find("td").remove();

    for(var i = 0; i<songs.length;i++){
        $("#tableOne").append("<tr id = 'row'>" +
            "<td>" + songs[i].artistName + "</td>" +
            "<td>" + songs[i].trackName + "</td>" +
            "<td> <img src = " +songs[i].artworkUrl30+ "> </td>"+
            "<td>" + songs[i].collectionName + "</td>" +
            "<td><audio controls><source src='" + songs[i].previewUrl + "' type='audio/mpeg'></audio></td></tr>")

    }
    $("#tableOne").css("display","inline-block");

}
