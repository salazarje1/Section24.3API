 let cupcakeList = $('.cupcake-list')

 function createLI(cupcakes){
    return cupcakes.map((cupcake) => {
        const li = document.createElement('li');
        li.textContent = `${cupcake.flavor}`;
        return li;
    })
 }
 
 async function getCupcakes() {
    res = await axios.get('/api/cupcakes')
    cupcakes = res.data.cupcakes;

    let lis = createLI(cupcakes)

    cupcakeList.append(...lis)
}

getCupcakes();


$('form').on('submit', async function(e) {
    e.preventDefault();
    let data = {};
    $('#form').serializeArray().forEach((input) => {
        data[input.name] = input.value;
    })
    console.log(data)
    let res = await axios.post('/api/cupcakes', data)
    console.log(res);

    cupcakeList.empty();
    getCupcakes();
})