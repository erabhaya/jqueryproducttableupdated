var product = [];

$(".green").hide();
$(".red").hide();
$("#update").hide();

//function for adding product or SKU
$("#add").click(()=>{
    var sku = $("#sku").val();
    var name = $("#name").val();
    var price = $("#price").val();
    var quantity =$("#quantity").val();

//validation for empty SKU
    if(sku == "" ){
        $("#sku").css({"border": "1px solid red"});
        $(".red").append("<br>SKU Field is empty!").show(); 

        //validation for empty name  
    }else if(name == ""){
        $("#sku").css({"border": "1px solid black"});
        $("#name").css({"border": "1px solid red"});
        $(".red").append("<br>Name Field is empty!").show(); 

        //validation for empty price
    } else if(price == ""){
        $("#sku").css({"border": "1px solid black"});
        $("#name").css({"border": "1px solid black"});
        $("#price").css({"border": "1px solid red"});
        $(".red").append("<br>Price Field is empty!").show();

        //validation for empty quantity
    } else if (quantity == ""){
        $("#sku").css({"border": "1px solid black"});
        $("#price").css({"border": "1px solid black"});
        $("#name").css({"border": "1px solid black"});
        $("#quantity").css({"border": "1px solid red"});
        $(".red").append("<br>Quantity Field is empty!").show();
    } 
    //for normal form show
    else{
        $("#quantity").css({"border": "1px solid black"});
        var data = {
        "sn":sku,
        "name":name,
        "price":price,
        "quantity":quantity,
        }


        product.push(data);
        console.log(product)
        $(".green").append("product added successfuly").show();
        setTimeout(()=>{$(".green").hide();},6000)
        $("#sku").val("");
        $("#name").val("");
        $("#price").val("");
        $("#quantity").val("");
        display();
    }

});

//dyanmic table head printing
var table =`<table>
<tr>
    <th>SKU</th>
    <th>Name</th>
    <th>Price</th>
    <th>Quantity</th>
    <th>Edit And Delete</th>
</tr>`

//display function for products data using template string
function display(){
    var tableData = ""
    product.forEach((e,i) => {
        tableData += `<tr>
        <td>${e.sn}</td>
        <td>${e.name}</td>
        <td>${e.price}</td>
        <td>${e.quantity}</td>
        <td><a href="#" id="${i}" class="edit">Edit</a>" "<a href="#"  class="delete">Delete</a></td>
        </tr>`
    });
    $("#list").empty();
    $("#list").append(table+tableData+"</table>");
}

//delete functionality
$(document).on('click','.delete',function(){
    $(this).parent('td').parent("tr").remove();
})

//edit product details
$(document).on("click", '.edit', function(){
    // console.log(this.id)
    var i = this.id;
    $(this).parent('td').parent("tr").css({"color": "red"});
    var info = product[i];
    console.log(info.sn);
    $("#id").val(`${i}`);
    $("#sku").val(`${info.sn}`);
    $("#name").val(`${info.name}`);
    $("#price").val(`${info.price}`);
    $("#quantity").val(`${info.quantity}`);
    $("#update").show();
    $("#add").hide();
});

//update button functionality
$("#update").click(()=>{
    var id = $("#id").val();
    console.log(id);
    var product_info = product[id];
    product_info.sn = $("#sku").val();
    product_info.name = $("#name").val();
    product_info.price = $("#price").val();
    product_info.quantity = $("#quantity").val();

    //display
    display()
    $("#sku").val("");
    $("#name").val("");
    $("#price").val("");
    $("#quantity").val("");
    $("#update").hide();
    $("#add").show();
});


