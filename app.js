// engine of the app

$("document").ready(function(){

 const $randomBtn = $("random");
 const $search = "python";
 let cleanedArray = [];
 let tempArray = [];

getSearchResults();

 // get search results from wikimedia API
 function getSearchResults(){
    $.ajax("https://en.wikipedia.org/w/api.php?action=opensearch&search=" +
    $search +
    "&format=json",
    
    {
        "method" : "GET",
        "data"   : "json",
        "data-type": "jsonp",
        "headers": {
            "Api-User-Agent": "Wikipedia-Viewer/0.1 (kenmarch@zoho.com)"
        },
        "success": (data) => {
            for (y = 0; y < data[1].length; y++){
                for (x = 1; x < data.length; x++ ){
                    tempArray.push(data[x][y]);
                }
                cleanedArray.push(tempArray);
                tempArray = [];
            }
            console.log(cleanedArray);
        }
    }
    );
 }
















});