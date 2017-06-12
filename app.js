// engine of the app

$("document").ready(function(){



$("form").on("submit", (event) => {
    event.preventDefault();
    let $search = $("input[type=text]").val();
    if ($search === "") {
        $("#error_message").show().addClass("animated fadeInRightBig");
    }
    else
        getSearchResults($search);
});



 // get search results from wikimedia API
 function getSearchResults(search_term){
    $.ajax("https://cors-anywhere.herokuapp.com/https://en.wikipedia.org/w/api.php?action=opensearch&search=" +
    search_term +
    "&format=json",
    
    {
        "method" : "GET",
        "data"   : "json",
        "data-type": "jsonp",
        "headers": {
            "Api-User-Agent": "Wikipedia-Viewer/0.1 (kenmarch@zoho.com)"
        },
        "success": (data) => {
                let cleanedArray = [];
                let tempArray = [];
                console.log(data);
            for (y = 0; y < data[1].length; y++){
                for (x = 1; x < data.length; x++ ){
                    tempArray.push(data[x][y]);
                }
                cleanedArray.push(tempArray);
                tempArray = [];
            }
            $(".results").show().addClass("animated bounceInUp ");
            for(x = 0; x < cleanedArray.length; x++){
                $("#search_results").append(
                 "<a href='" + cleanedArray[x][2] + "' target='_blank'>" +
                 "<li><h3>" + cleanedArray[x][0] + "</h2>" +
                 "<p>" + cleanedArray[x][1] + "</p></li></a>"
                );
                
            }
        }
    }
    );
 }
















});