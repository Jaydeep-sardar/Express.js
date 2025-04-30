const homeController =(req,res)=>{
    const data ={
        name :"EJS",
        userId:20,
    };
    res.render("index",data);
};

export {homeController};