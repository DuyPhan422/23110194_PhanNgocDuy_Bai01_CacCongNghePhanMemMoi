import db from '../models/index'; // import database
import CRUDService from '../services/CRUDService'; // import service

// Hàm hiển thị trang chủ
let getHomePage = async (req, res) => {
    try {
        let data = await db.User.findAll(); // lấy dữ liệu từ models/index
        return res.render('homepage.ejs', {
            data: JSON.stringify(data) // trả dữ liệu data về view
        });
    } catch (e) {
        console.log(e);
    }
}

// Hàm hiển thị trang About
let getAboutPage = (req, res) => {
    return res.render('test/about.ejs');
}

// Hàm hiển thị form thêm mới User (CRUD)
let getCRUD = (req, res) => {
    return res.render('crud.ejs');
}

// Hàm xử lý khi submit form thêm mới (POST CRUD)
let postCRUD = async (req, res) => {
    // dùng async để xử lý bất đồng bộ
    let message = await CRUDService.createNewUser(req.body); // gọi service
    console.log(message);
    return res.send('Post crud to server');
}

// Hàm lấy danh sách tất cả User (FindAll CRUD)
let getFindAllCrud = async (req, res) => {
    let data = await CRUDService.getAllUser();
    return res.render('users/findAllUser.ejs', {
        datalist: data
    }); // gọi view và truyền dữ liệu ra view
}

// Hàm lấy dữ liệu của 1 User để chuẩn bị Edit
let getEditCRUD = async (req, res) => {
    let userId = req.query.id;
    if (userId) { // check Id
        let userData = await CRUDService.getUserInfoById(userId);
        return res.render('users/editUser.ejs', {
            data: userData
        });
    } else {
        return res.send('Không lấy được id');
    }
}

// Hàm xử lý việc cập nhật thông tin (PUT CRUD)
let putCRUD = async (req, res) => {
    let data = req.body;
    // update rồi hiển thị lại danh sách user
    let data1 = await CRUDService.updateUser(data); 
    return res.render('users/findAllUser.ejs', {
        datalist: data1
    });
}

// Hàm xử lý việc xóa User (DELETE CRUD)
let deleteCRUD = async (req, res) => {
    let id = req.query.id; // vì trên view ?id=1
    if (id) {
        await CRUDService.deleteUserById(id);
        return res.send('Deleted!!!!!!!!!!!!!');
    } else {
        return res.send('Not find user');
    }
}

// export ra object để các file khác gọi được
module.exports = {
    getHomePage: getHomePage,
    getAboutPage: getAboutPage,
    getCRUD: getCRUD,
    postCRUD: postCRUD,
    getFindAllCrud: getFindAllCrud,
    getEditCRUD: getEditCRUD,
    putCRUD: putCRUD,
    deleteCRUD: deleteCRUD
}