const {User} = require('./../models');

class UserController{
    createUser = async (req, res, next) => {
        try{
            const createdUser = await User.create(req.body);
            res.send(createdUser);

        } catch(e){
            return res.status(418).send("I'm teapout");
        }
    };
    deleteUser = async (req, res, next) => {
        try{
            const deletedUser = await User.destroy(
                {
                    where: {id: req.params.id}
                }
            );
            if(deletedUser) {return  res.send('User was deleted');}
            return res.status(404).send('Error: user not found');
        } catch(e){
            return res.status(418).send("I'm teapout");
        }
    };
    updateUser = async (req, res, next) => {
        try{
            const [updRowsCount, updRows] = await User.update(res.body, {
            {
                where: {
                    id: req.params.id
                }
            },
            returning: true,
        });
            if(updRowsCount) {return  res.send(updRows[0].get());}
            return res.status(404).send('Error: user not found');

        } catch(e){
            return res.status(418).send("I'm teapout");
        }
    };
    getUser = async (req, res, next) => {
        try{
            const getUser = await User.findByPk(id: req.params.id);
            if(getUse) {return  res.send(getUse);}
            return res.status(404).send('Error: user not found');

        } catch(e){
            return res.status(418).send("I'm teapout");
        }
    };

}
module.exports = new UserController();