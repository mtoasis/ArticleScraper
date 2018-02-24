$(document).ready(function(){


    $(`#scrapeBtn`).on(`click`,function(){
        $.ajax({
            url: "/scrape",
            type: 'GET'
        }).then(function (data) {
            console.log(data)            
            loadAll()            
        })
    })

    function loadAll(){
        
        $.ajax({
            url: "/articles",
            type: 'GET'
        }).then(function (data) {
            console.log(data)

            for (var i=0, n=data.length; i<n; i++){

                var text = `
                <div class="article">
                <p class="titleTxt" id="title${data[i]._id}">Title: ${data[i].title}</p>
                <p id="summary${data[i]._id}">Summary: ${data[i].summary}</p>
                <p><a href="${data[i].link}"><button class="linkBtn">Link</button></a>
                <button data-id="${data[i]._id}" class="saveBtn">Save Article</button></p>
                </div>
                `
            $(`#appendDiv`).append(text)
            }
    })
}

$(document).on("click",".saveBtn",function(){
    $.ajax({
        url: "/save",
        type: 'POST'
    }).then(function (data) {
        console.log(data)      
})
  
      


})

