// const CompanyLogin = require('../models/companyLoginModel');
// const asyncHandler = require('express-async-handler')

//get all employees
// const getCompanyDetails = asyncHandler(async(req, res) => {
//     try {
//         const company = await CompanyLogin.find()
//         res.status(200).json(company);
        
//     } catch (error) {
//         res.status(500);
//         throw new Error(error.message);
//     }
// })

// to get one emp details
// router.get('/:id',async(req,res)=>{
//     try{
//         const {id} = req.params
//     const emp =await Employee.findById(id)
//     res.status(200).json(emp)
//     }
//     catch(error){
// console.log(error.message)
// res.status(500).json({message:error.message})
//     }

// })


//to post data 
// const registerCompany = asyncHandler(async(req, res) => {
//     try {
//         const company = await CompanyLogin.create(req.body)
//         res.status(200).json(company);
        
//     } catch (error) {
//         res.status(500);
//         throw new Error(error.message);
//     }
// })

// update a company data
// const updateCompanyDetails = asyncHandler(async(req, res) => {
//     try {
//         const {id} = req.params;
//         const company = await CompanyLogin.findByIdAndUpdate(id, req.body);
//         // we cannot find any company profile in database
//         if(!company){
//             res.status(404);
//             throw new Error(`cannot find any company with ID ${id}`);
//         }
//         const updatedCompany = await CompanyLogin.findById(id);
//         res.status(200).json(updatedCompany);
        
//     } catch (error) {
//         res.status(500);
//         throw new Error(error.message);
//     }
// })

// })

// to delete 
// const deleteCompanyProfile = asyncHandler(async(req, res) =>{
//     try {
//         const {id} = req.params;
//         const company = await CompanyLogin.findByIdAndDelete(id);
//         if(!company){
//             res.status(404);
//             throw new Error(`cannot find any Company with ID ${id}`);
//         }
//         res.status(200).json(company);
        
//     } catch (error) {
//         res.status(500);
//         throw new Error(error.message);
//     }
// })


// module.exports = {
//     registerCompany,getCompanyDetails,updateCompanyDetails,deleteCompanyProfile
// }