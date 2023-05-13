const Email = "aguirre.juanmanuel029@gmail.com"
const Password = "Manuman01."


function login (req,res) {
const {Password,Email} = req.query;

if (!Password || !Email) {
    return res.status(500).json({mesagge: "Password or Email"})
}
if (email === Email && password === Password) {
 res.status (200).json({acess: true})
} else {
    res.status (400).json({acess: false})  
}
}


module.exports = {login};