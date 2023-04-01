let data1 =[];
let update="<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"16\" height=\"16\" fill=\"currentColor\" class=\"bi bi-arrow-left-right\" viewBox=\"0 0 16 16\">"
update+="<path fill-rule=\"evenodd\" d=\"M1 11.5a.5.5 0 0 0 .5.5h11.793l-3.147 3.146a.5.5 0 0 0 .708.708l4-4a.5.5 0 0 0 0-.708l-4-4a.5.5 0 0 0-.708.708L13.293 11H1.5a.5.5 0 0 0-.5.5zm14-7a.5.5 0 0 1-.5.5H2.707l3.147 3.146a.5.5 0 1 1-.708.708l-4-4a.5.5 0 0 1 0-.708l4-4a.5.5 0 1 1 .708.708L2.707 4H14.5a.5.5 0 0 1 .5.5z\"/>"
update+="</svg>"
let del="<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"16\" height=\"16\" fill=\"currentColor\" class=\"bi bi-trash\" viewBox=\"0 0 16 16\"><path d=\"M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z\"/><path fill-rule=\"evenodd\" d=\"M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z\"/></svg>"
document.addEventListener('DOMContentLoaded', function() {
    fetch('https://fakestoreapi.com/products',{
        headers:{
            'Content-Type': 'application/json',
        },
    }).then(response => response.json())
    .then(data => {
        console.log(data);
        displayProducts(data);
        data1 = data;
        // document.getElementById("btn").addEventListener("click", ()=>{
        //     calculateScore(data);
        // })
        $("#addProductBtn").click(function(){
            let name = document.getElementById("nameInput2").value;
            let price = document.getElementById("priceInput2").value;
            let description = document.getElementById("descriptionInput2").value;
            
            let image = document.getElementById("imageInput2").value;
            let id=data.length
            let product = {
                "id": id,
                "title": name,
                "price": price,
                "category": description,
                "image": image
            }
            data.push(product);
            addproduct(data);
            console.log(data);
        })
        
        
    })
    .catch(error => console.log(error));

    $("#updateProductBtn").click(function(){
        updateProducts();
    })
    let headers = document.querySelectorAll("#myTable th");
    headers.forEach(function(header, index) {
    header.addEventListener("click", function() {
        if(index==0||index==2){
            sortTable2(index);
        }
        else{
            sortTable(index);
        }
      
    });
     });

     const tableContainer = document.getElementById('tableContainer');
      const tableToggle = document.getElementById('tableToggle');

      tableToggle.addEventListener('change', () => {
        if (tableToggle.checked) {
          tableContainer.style.display = 'block';
        } else {
          tableContainer.style.display = 'none';
        }
      });

});


function sortTable(n) {
    let table, rows, switching, i, x, y, shouldSwitch, dir, switchcount = 0;
    table = document.getElementById("myTable");
    switching = true;
    dir = "asc";
    while (switching) {
      switching = false;
      rows = table.rows;
      console.log(rows);
      for (i = 1; i < (rows.length - 1); i++) {
        shouldSwitch = false;
        x = rows[i].cells[n].textContent;
        console.log(x);
        y = rows[i + 1].cells[n].textContent;
        if (dir == "asc") {
          if (x.toLowerCase() > y.toLowerCase()) {
            shouldSwitch = true;
            break;
          }
        } else if (dir == "desc") {
          if (x.toLowerCase() < y.toLowerCase()) {
            shouldSwitch = true;
            break;
          }
        }
      }
      if (shouldSwitch) {
        rows[i].parentNode.insertBefore(rows[i + 1], rows[i]);
        switching = true;
        switchcount ++;
      } else {
        if (switchcount == 0 && dir == "asc") {
          dir = "desc";
          switching = true;
        }
      }
    }
  }

  function sortTable2(n) {
    let table, rows, switching, i, x, y, shouldSwitch, dir, switchcount = 0;
    table = document.getElementById("myTable");
    switching = true;
    dir = "asc";
    while (switching) {
        switching = false;
        rows = table.rows;
        console.log(rows);
        for (i = 1; i < (rows.length - 1); i++) {
            shouldSwitch = false;
            x = parseFloat(rows[i].cells[n].textContent.trim());
            y = parseFloat(rows[i + 1].cells[n].textContent.trim());
            if (dir == "asc") {
                if (x > y) {
                    shouldSwitch = true;
                    break;
                }
            } else if (dir == "desc") {
                if (x < y) {
                    shouldSwitch = true;
                    break;
                }
            }
        }
        if (shouldSwitch) {
            rows[i].parentNode.insertBefore(rows[i + 1], rows[i]);
            switching = true;
            switchcount++;
        } else {
           
            if (switchcount == 0 && dir == "asc") {
                dir = "desc";
                switching = true;
            }
        }
    }
}


  


function addproduct(data){
    let table = document.getElementById("myTable");
    let row = document.createElement("tr");
    let col1 = document.createElement("th");
    let col2 = document.createElement("th");
    let col3 = document.createElement("th");
    let col4 = document.createElement("th");
    let col5 = document.createElement("th");
    let col6 = document.createElement("th");

    col1.innerHTML = data[data.length-1].id+1;
    col2.innerHTML = data[data.length-1].title;
    col3.innerHTML = data[data.length-1].price;
    col4.innerHTML = data[data.length-1].category;
    col5.innerHTML = "<img style=\"width:100px\" src="+data[data.length-1].image+">";
    col6.innerHTML = "<button  style=\"width:50px\" class=\"btn btn-primary\"  \">"+del+"</button>";

    col6.addEventListener("click", ()=>{
        document.getElementById("nameInput2").value = data[data.length-1].title;
        document.getElementById("priceInput2").value = data[data.length-1].price;
        document.getElementById("descriptionInput2").value = data[data.length-1].category;
        document.getElementById("idInput2").value = data[data.length-1].id;
        document.getElementById("imageInput2").value = data[data.length-1].image;

        let id = data[data.length-1].id;
        console.log(id);
        let row = document.getElementById(id);
        row.remove();
        
    })

    row.appendChild(col1);
    row.appendChild(col2);
    row.appendChild(col3);
    row.appendChild(col4);
    row.appendChild(col5);
    row.appendChild(col6);

    table.appendChild(row);

    fetch('https://fakestoreapi.com/products',{
            method:"POST",
            body:JSON.stringify(
                {
                    title: data[data.length-1].title,
                    price: data[data.length-1].price,
                    description: 'lorem ipsum set',
                    image: data[data.length-1].image,
                    category: data[data.length-1].category
                }
            )
        })
            .then(res=>res.json())
            .then(json=>console.log(json))


}

function updateProducts(){
    let name = document.getElementById("nameInput").value;
    let price = document.getElementById("priceInput").value;
    let description = document.getElementById("descriptionInput").value;
    let id = document.getElementById("idInput").value;
    let image = document.getElementById("imageInput").value;
    row = document.getElementById(id).children;
    row[1].innerHTML = name;
    row[2].innerHTML = price;
    row[3].innerHTML = description;
    row[4].innerHTML = "<img style=\"width:100px\" src="+image+">";
    
    console.log(row);
    fetch('https://fakestoreapi.com/products/'+id,{
            method:"PUT",
            body:JSON.stringify(
                {
                    title: name,
                    price: price,
                    description: 'lorem ipsum set',
                    image: image,
                    category: description
                }
            )
        })
            .then(res=>res.json())
            .then(json=>console.log(json))

}

function displayProducts(data){
    let table = document.getElementById("myTable");
    
    
    for(let i=0; i<data.length; i++){
        let row = document.createElement("tr");
        let col1 = document.createElement("th");
        let col2 = document.createElement("th");
        let col3 = document.createElement("th");
        let col4 = document.createElement("th");
        let col5 = document.createElement("th");
        let col6 = document.createElement("th");
        let col7 = document.createElement("th");
        row.setAttribute("id", data[i].id);

        col1.innerHTML = data[i].id;
        col2.innerHTML = data[i].title;
        col3.innerHTML = data[i].price;
        col4.innerHTML = data[i].category;
        

        col5.innerHTML = "<img style=\"width:100px\" src="+data[i].image+">";
        col6.innerHTML = "<button  style=\"width:50px\" class=\"btn btn-primary\"  \">"+del+"</button>";
        col7.innerHTML = "<button  style=\"width:50px\" class=\"btn btn-primary\" data-toggle=\"modal\" data-target=\"#exampleModal\" \">"+update+"</button>";
        col7.addEventListener("click", ()=>{
            document.getElementById("nameInput").value = data[i].title;
            document.getElementById("priceInput").value = data[i].price;
            document.getElementById("descriptionInput").value = data[i].category;
            document.getElementById("idInput").value = data[i].id;
            document.getElementById("imageInput").value = data[i].image;
        
        })
        col6.addEventListener("click", ()=>{

            let id = data[i].id;
            
            let row = document.getElementById(id);
            row.remove();
            fetch('https://fakestoreapi.com/products/'+id,{
                method:"DELETE",
                body:JSON.stringify(
                    {
                    })
                })
                    .then(res=>res.json())
                    .then(json=>console.log(json))



            

            
        })



        



        row.appendChild(col1);
        row.appendChild(col2);
        row.appendChild(col3);
        row.appendChild(col4);
        row.appendChild(col5);
        row.appendChild(col6);
        row.appendChild(col7);
        
        
        table.appendChild(row);

    }

   

}




