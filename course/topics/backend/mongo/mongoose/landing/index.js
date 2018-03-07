const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/test');

const Cat = mongoose.model('Cat', { name: String });

// const zildjian = new Cat({ name: 'Zildjian' });
// zildjian.save().then(() => console.log('meow'));

// const fry = new Cat({ name: 'Fry' });
// fry.save().then(() => console.log('meow meooooow'));

Cat.findOneAndUpdate({name: 'Zildjian'}, {name: 'Satanás'})
    .then(console.log)
    .catch(console.error)

