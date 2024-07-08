
export default class UsersDatoMemory {

  constructor() {
    
  }

  getAllUsers = (request, response) => {
    response.send(mock)
}

createUser = (request, response) => {
    console.log(request.body)
    const { id, name, cart } = request.body;

    if (!id || !name || !cart) {
        return res.status(400).send('Missing required fields: id, name, cart');
    }

    if (!Array.isArray(cart)) {
        return res.status(400).send('Invalid cart data: must be an array of strings');
    }

    console.log(`Created user: ${id}, ${name}, cart: ${cart}`);
    response.status(201).send({ message: 'User created successfully' });

    this.users.push(request.body)
    
}

updateUser = (req, res) => {
    const { id } = req.params;
    const { name, cart} = req.body; 

    if (!id) {
        return res.status(400).send('Missing required field: id');
    }
    
    let user = this.users.find(user => user.id.toString() === id);
    
    if (user === undefined) {
        return res.status(404).send('User not found');
    }
    
    const userIndex = user.id
    
    const updatedUser = this.users[userIndex] 
    if (name) updatedUser.name = name;
    if (cart) updatedUser.cart = cart;
    
    this.users[userIndex] = updatedUser; 

    res.status(200).send({ message: 'User updated successfully' });

}

deleteUser = (req, res) => {
    const { id } = req.params;
    if (!id) {
        return res.status(400).send('Missing required field: id');
    }
    let user = this.users.find(user => user.id.toString() === id);
    
    if (user === undefined) {
        return res.status(404).send('User not found');
    }
    const userIndex = user.id

    this.users.splice(userIndex - 1, 1);
    res.status(200).send({ message: 'User deleted successfully' });

}
}