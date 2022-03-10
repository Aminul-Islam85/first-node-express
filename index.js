const express = require('express');
const cors = require('cors');
const res = require('express/lib/response');
const app = express();

app.use(cors());
app.use(express.json());

const port = 7000;

app.get('/', (req, res) => {
    res.send('Hello, from Finland')
});

const users = [
    { "id": 0, name: 'Shabana', email: 'Shabana@gmail.com', phone: '01888888' },
    { "id": 1, name: 'Bobita', email: 'bobita@gmail.com', phone: '01888878' },
    { "id": 2, name: 'Shabnoor', email: 'Shabnoor@gmail.com', phone: '01888822' },
    { "id": 3, name: 'Popy', email: 'popy@gmail.com', phone: '01888823' },
    { "id": 4, name: 'Champa', email: 'champa@gmail.com', phone: '01888856' },
    { "id": 5, name: 'Rojina', email: 'rojina@gmail.com', phone: '01888879' }
]


/* How to use query parameter */
app.get('/users', (req, res) => {
    const search = req.query.search;
    if (search) {
        const searchResult = users.filter(user => user.name.toLocaleLowerCase().includes(search));
        res.send(searchResult);
    }
    else {
        res.send(users)
    }

});

/* app method */
app.post('/users', (req, res) => {
    const newUser = req.body;
    newUser.id = users.length;
    users.push(newUser);
    console.log('hitting the post', req.body)
    //res.send(JSON.stringify(newUser))
    res.json(newUser)

})


/* To get single output */
/* This is our API */
app.get('/users/:id', (req, res) => {
    const id = req.params.id;
    const user = users[id]
    res.send(user);
})

app.listen(port, () => {
    console.log('listening to port', port)
});