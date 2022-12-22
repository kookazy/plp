const URL = "https://api.npoint.io/15d6c6233b0df5b3af84";

class GoodsItem {
    constructor(price,id_product,product_name){
        this.price = price,
        this.id_product = id_product,
        this.product_name = product_name
}

render() {
    return `<div class="goods-item" id=${this.id}><h3>${this.price}</h3><p>${this.product_name}</p></div>`
}
}

class GoodsList{
    constructor(){
    this.goods= [];
}

async fetchGoods(){
    const response = await fetch(`${URL}`);
    if(response.ok){
        const catalog = await response.json();
        this.goods = catalog
    }
        else{alert("Ошибка на сервере при запросе данных")}
    }
    

    render(){
    let listHtml = "";
    this.goods.forEach((item)=>{
    const goodItem= new GoodsItem(item.price,item.id_product,item.product_name);
    listHtml += goodItem.render();
})

    document.querySelector(".goods-list").innerHTML = listHtml;
 }
}
    const init = async () => {
    const list =  new GoodsList();
    await list.render();
    list.display()
    
    const checklist = list;
const basket = [];

document.querySelector('.goods-item').forEach(elem => {
    elem.addEventListener('click', function(){
        let id_product = this.id;
        let korzinka = checklist.goods.find(item => item.id_prod == id_product);
        basket.push(korzinka)
        console.log(basket)
    })
})
}

window.onload = init

