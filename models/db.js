import { pool } from '../config/config.js'


async function getProducts() {
    const [Product] = await pool.query(`
    SELECT * FROM 
    products 
    `)
    return Product
}
async function getProduct(id) {
    const [Product] = await pool.query(`
    SELECT * FROM products WHERE id = ?
    `, [id])
    return Product
}

async function deleteProduct(id){
    const [Product] = await pool.query(`
    DELETE FROM products WHERE id = ?
    `, [id])
}

const editProduct=async(prod_name,quantity,price,description,prod_url,id)=>{
    await pool.query(`
    UPDATE products SET prod_name=?, quantity=?, price=?, description=?, prod_url=? 
    WHERE id=? `,
     [prod_name,quantity,price, description,prod_url,id])
     return getProducts()
}


const addProduct=async(prod_name,quantity,price,description,prod_url)=>{
    await pool.query(`
    INSERT INTO products (prod_name,quantity,price,description,prod_url) values(?,?,?,?,?) `,
    [prod_name,quantity,price,description,prod_url])
} 

/////////////////////////////////--------------------------------------------------------------

async function getUsers() {
    const [User] = await pool.query(`SELECT * FROM Users`)
    return User
}
async function getUser(UserId) {
    const [User] = await pool.query(`
    SELECT * FROM Users WHERE UserId = ?
    `, [UserId])
    return User
}

async function deleteUser(UserId){
    const [user] = await pool.query(`
    DELETE FROM Users WHERE UserId = ?
    `, [UserId])
}

const editUser =async(First_name,Last_name,User_age,Gender,User_role,Email_add,User_pass, User_Profile, UserId)=>{
    await pool.query(` 
    UPDATE Users SET First_name=?, Last_name=?, User_age=?, Gender=?, User_role=?, Email_add=?, User_pass = ?, User_profile = ?
    WHERE UserId=? `,
     [First_name,Last_name,User_age,Gender,User_role,Email_add,  User_pass, User_Profile, UserId])
    //  return getProducts()
}


const addUser=async(UserId,First_name,Last_name,User_age,Gender,User_role,Email_add,User_pass,User_Profile)=>{
    await pool.query(`
    INSERT INTO Users (UserId,First_name,Last_name,User_age,Gender,User_role,Email_add,User_pass,User_profile) values(?,?,?,?,?,?,?,?,?) `,
    [UserId,First_name,Last_name,User_age,Gender,User_role,Email_add,User_pass,User_Profile])
}
// console.log(await getProducts())

// const addProduct = async(prod_name, quantity, price, description, prod_url)=>{
//     await pool.query(`
//     INSERT INTO products (prod_name,quantity,price,description,prod_url) values(?,?,?,?,?) `,
//     [prod_name,quantity,price,description,prod_url])
// }





export  {getProducts, getProduct, deleteProduct, editProduct, addProduct, getUsers, getUser, deleteUser, editUser, addUser}