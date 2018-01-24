let favorites = [];
module.exports = {
    create: (req,res)=>{
        let newFavorite ={
            id: req.params.id
        };
        favorites.push(newFavorite);
        res.status(200).send('Sent!')
    },
    read: (req,res)=>{
        res.status(200).send(favorites);
    },
    delete: (req,res)=>{
        favorites= favorites.filter(favorite=>{
            return favorite !== parseInt(req.params.id);
        })
        res.status(200).send('Deleted!')
    }
}