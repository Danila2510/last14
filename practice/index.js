const serverAPI = "http://localhost:3000/products"

class DbService {
    Get(name){
        if(name != null){
            fetch(`${serverAPI}?product_name=${name}`).then(data => data.json()).then(res => console.table(res)).catch();
        }
           
        else {
            fetch(serverAPI).then(data => data.json()).then(res => console.table(res)).catch();
        }
    }
    Post(){
        fetch(serverAPI, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                name: "Laptop Pro 15",
                price: 1299.99,
                description: "15-inch laptop with Intel Core i7, 16GB RAM, 512GB SSD, and a dedicated graphics card."
            })
        })
        .then(data => data.json()).then(res => console.table(res)).catch();
    }
    Put(id){
        fetch(`${serverAPI}/${id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                name: "Laptop Pro 15",
                price: 1500.99,
                description: "15-inch laptop with Intel Core i7, 16GB RAM, 512GB SSD, and a dedicated graphics card."
            })
        })
        .then(data => data.json()).then(res => console.table(res)).catch();
    }
    Delete(id){
        fetch(`${serverAPI}/${id}`, {
            method: 'DELETE',
        })
        .then(data => {
            if(data.ok) 
            {
                console.log("Product successfully deleted")
            }

            else {
                console.log("Delete failed")
            }
        })
        .then(res => console.table(res)).catch();
    }

}
const services = new DbService();
services.Get();