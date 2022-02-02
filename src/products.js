const res = require ('express/lib/response');
const mysql = require('mysql2');
        

// const query = 'SELECT * FROM Products';


// // query the database and get all the products
// const query = "SELECT * FROM Products";

// // connect to the database
// connection.query(query, (err, results, fields) => {
//     if (err) {
//         console.log(err);
//     } else {
//         console.log(results);
//     }
//     });

    const getAllProducts = async () => {
        const query = "SELECT * FROM Products";
        const [results, fields]= await connection.promise().query(query)

        console.log(results);
        return(results)
    }

const createProduct = async(product) => {
    const insertQuery = `INSERT INTO Products (Description, SKU, UserId)
    VALUES ('${product.description}', '${product.sku}', '${product.UserId}')`

    const [results, fields] = await connection.promise().query(insertQuery);

    console.log(results);

    return results;
}
    // close the database connection

    // createProduct({
    //     description: 'Malibu new Product',
    //     sku: 'malibu1234',
    //     UserId: 1
    // });
   
   getAllProducts()
    connection.end();









