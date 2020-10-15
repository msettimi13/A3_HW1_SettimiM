(() => {

    // make an AJAX request using the fetch API
    // fetch is an AJAX request 
    fetch('./data/classData.json')
        .then(res => res.json())
        .then(data => {

            debugger;
            console.log(data);

        // handleData
        // heres where you would call the function that puts the pieces on the page
    })

    // if it breaks tell me what happened to it
    .catch((err) => {
        console.log(err);
    })

})();