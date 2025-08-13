function register(user){ if(!user.email) throw new Error("email required"); return true } module.exports={register}
