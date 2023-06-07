const { Sequelize, DataTypes } = require("sequelize");

const sequelize = new Sequelize("student_management", "root", "1111", {
    host: "localhost",
    dialect: "mysql",
});

// create model
const Task = sequelize.define(
    "Tasks",
    {
        name: {
            type: DataTypes.STRING,  // Varchar(255)
            allowNull: false, //NOT NULL
        },
        status: {
            type: "DataTypes.STRING", 
        }
    }
);


// Tạo task mới
const createTask = async (name, status) => {
    // cách 1
    // const newTask = Task.build({
    //     name,
    //     status,
    // });
    // await newTask.save();

    // cách 2
    // const newTask = await Task.create(
    //     {
    //         name,
    //         status
    //     }
    // )
};
createTask("so 2", "done");


// Lấy danh sách task
// const getAllTask = async() => {
//     const taskList = await Task.findAll();
//     console.log("taskList", JSON.stringify(taskList, null, 2));
// }
// getAllTask();


// Lấy danh sách task theo id
// const getTaskById = async(id) => {
//     const task = await Task.findOne({
//         where: {
//             id,
//         }
//     });
//     console.log("task:", JSON.stringify(task, null, 2));
// };
// getTaskById(20);



// Cập nhật task theo Id
// const updateTaskById = async( data, id) => {
//     Task.update(data, {
//             where: {
//                 id
//             }
//         });
// };
// updateTaskById({
//     name: "1"
//     , status: "khong"
// }, 7);



// // Xoá task theo Id
// const deleteTaskById = async (id) => {
//     await Task.destroy({
//         where:{
//             id,
//         }
//     });
// }
// deleteTaskById(4);





// // đồng bộ Model và Dtb
// const syncModel = async() => {
//     // await Tasks.sync({force:true}); //xoá bảng cũ và tạo bảng mới
//     await Task.sync({alter: true}); // sửa bảng cũ thành bảng mới
// }
// syncModel();


const checkConnect = async() => {
    try {
        await sequelize.authenticate();
        console.log("Ket noi thanh cong!");
    } catch (error) {
        console.log("Ket noi khong thanh cong!");
        console.log(error);
    }
}
checkConnect();