const { compounds }=require('../../database/models')


const addCompound= async(req,res)=>{
    const {name, image, desc} = req.body
    try{
        const Compound = await compounds.create({name, image, desc})

        return res.json(Compound)
    }catch(err){    
        console.log(err);
        return res.status(500).json(err);
    }
};
const getAllCompounds= async(req,res)=>{
    try{
        const page = req.query.pg ? parseInt(req.query.pg) : 1;
        const limit = 3;
        const offset = (page - 1) * limit;
        const Compounds = await compounds.findAndCountAll({offset,limit,order:[['id','ASC']],});
        return res.status(200).json(Compounds)
    }catch(err){
        console.log(err);
        res.status(500).json(err);
    }
};



const getCompound= async(req,res)=>{
    const id=req.params.id
    try{
        const Compound = await compounds.findOne({
            where:{id}
        });
        return res.json(Compound)
    }catch(err){
        console.log(err);
        res.status(500).json(err);
    }
};
const deleteCompound= async(req,res)=>{
    const id=req.params.id
    try{
        const Compound = await compounds.findOne({
            where:{id}
        });
        await Compound.destroy()
        return res.json({message: 'Compound Deleted'})

    }catch(err){
        console.log(err);
        res.status(500).json(err);
    }
};
const updateCompound= async(req,res)=>{
    const id=req.params.id
    const {name, image, desc} = req.body
    try{
        const Compound = await compounds.findOne({
            where:{id}
        })
        Compound.name = name
        Compound.image = image
        Compound.desc = desc 
        await Compound.save()   
        console.log(Compound);
        return res.json(Compound)

    }catch(err){
        console.log(err);
        res.status(500).json(err);
    }
};

module.exports = {
    getAllCompounds,
    addCompound,
    getCompound,
    updateCompound,
    deleteCompound,
  };