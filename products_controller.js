// module.exports = {
//     create: async (req,res, next) =>{
//         const db = req.app.get('db')
//         const {name,description,price,image_url} = req.body
//         const create = await db.create_product([name,description,price,image_url])
//         res.status(200).send(create).catch(err => {
//             console.log(err)
//             res.status(500).send('SOMETHING WENT WRONG')
//         })
     
//     },

//     getOne: async (req,res, next) =>{
//             const db = req.app.get('db')
//             const {id} = req.params
//             const getOne = await db.read_product(id)
//             res.status(200).send(getOne).catch(err => {
//                 res.status(500).send('SOMETHING WENT WRONG')
//             })
//     },

//     getAll: async (req,res, next) => {
//         const db = req.app.get('db')
//         const getAll = await db.read_products()
//         res.status(200).send(getAll).catch(err => {
//                console.log(err)
//                 res.status(500).send('SOMEHTHING WENT WRONG') 
//             })
//     },

//     update: async (req,res, next) => {
//         const db = req.app.get('db')
//         const {id} = req.params
//         const {description} = req.query
//         const update = await db.update_product([id,description])
//         res.status(200).send(update).catch(err => {
//                console.log(err)
//                 res.status(500).send('DID NOT UPDATE') 
//             })
//     },

//     delete: async  (req,res, next) =>{
//         const db = req.app.get('db')
//         const {id} = req.params
//         const deletes =  await db.delete_product(id)
//         res.status(200).send (deletes).catch(err => {
//             console.log(err)
//             res.status(500).send('FAILED TO DELETE')
//         })
//     } 
// }

module.exports = {
    create: (req, res, next) => {
      const dbInstance = req.app.get('db');
      const { name, description, price, image_url } = req.body;
  
      dbInstance.create_product([name, description, price, image_url])
        .then(() => res.sendStatus(200))
        .catch(err => {
          res.status(500).send({ errorMessage: "Oops! Something went wrong. Our engineers have been informed!" });
          console.log(err)
        });
    },
  
    getOne: (req, res, next) => {
      const dbInstance = req.app.get('db');
      const { id } = req.params;
  
      dbInstance.read_product(id)
        .then(product => res.status(200).send(product))
        .catch(err => {
          res.status(500).send({ errorMessage: "Oops! Something went wrong. Our engineers have been informed!" });
          console.log(err)
        });
    },
  
    getAll: (req, res, next) => {
      const dbInstance = req.app.get('db');
  
      dbInstance.read_products()
        .then(products => res.status(200).send(products))
        .catch(err => {
          res.status(500).send({ errorMessage: "Oops! Something went wrong. Our engineers have been informed!" });
          console.log(err)
        });
    },
  
    update: (req, res, next) => {
      const dbInstance = req.app.get('db');
      const { params, query } = req;
  
      dbInstance.update_product([params.id, query.desc])
        .then(() => res.sendStatus(200))
        .catch(err => {
          res.status(500).send({ errorMessage: "Oops! Something went wrong. Our engineers have been informed!" });
          console.log(err)
        });
    },
  
    delete: (req, res, next) => {
      const dbInstance = req.app.get('db');
      const { id } = req.params;
  
      dbInstance.delete_product(id)
        .then(() => res.sendStatus(200))
        .catch(err => {
          res.status(500).send({ errorMessage: "Oops! Something went wrong. Our engineers have been informed!" });
          console.log(err)
        });
    }
  };