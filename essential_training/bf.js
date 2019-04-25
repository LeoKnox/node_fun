var Person = require('./lib/Person');

var ben = new Person("Ben F");
var geor = new Person("geo w");

geor.on('speak', function(said) {
    console.log (`${this.name} -> ${said}`);
})

ben.on('speak', function(said) {
    console.log(`${this.name} said ${said}!`);
});

ben.emit('speak', "you may delay, but time will not.");
geor.emit('speak', "better alone then bad co");