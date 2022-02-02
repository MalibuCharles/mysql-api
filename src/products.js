const res = require ('express/lib/response');
const mysql = require('mysql2');

const connection = mysql.createConnection({
        host: '34.67.146.233',
        user: 'root',
        password: 'BuildingSoFlo',
        database: 'Commerce'
});

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

const createProduct = async(product)
    // close the database connection
    getAllProducts()
    connection.end();









