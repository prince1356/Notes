
const yargs = require ('yargs')
const notes = require('./notes.js')

// create add command
yargs.command({
    command : 'add', 
    describe: 'Add a new note',
    builder :{ 
        title : { 
            describe : 'Note title',
            demandOption : true,
            type: 'string'
        },
        body : {
            describe : 'Note body',
            demandOption : true,
            type: 'string'
        }
    },
    handler (argv){
        notes.addNote(argv.title, argv.body);
    }
})

// create remove command
yargs.command ({
    command : 'remove',
    describe : 'Remove a note',

    builder : {
        title : {
            describe : 'Note title',
            demandOption: true,
            type : 'string'
        }
    },

    handler(argv) {
        notes.removeNote(argv.title);
    }
})

// create list command
yargs.command ({
    command : 'list',
    describe : 'List a notes',
    handler() {
       notes.listNotes();
    }
})

// creats read command
yargs.command ({
    command : 'read',
    describe : 'Read a note',
    builder : {
        title : { 
            describe : 'Note title',
            demandOption : true,
            type : 'string'
        }
    },
    handler(argv) {
        notes.readNote(argv.title);
    }
})

// add, remove, read, list
console.log(yargs.argv);






 /*
const chalk = require('chalk');
console.log(chalk.green.inverse.bold('Hello World!'));


const getNotes = require('./Notes');
const myNotes = getNotes("Apne Notes");
console.log(myNotes);


const command = process.argv[2];
if(command === 'add') {
    console.log('Adding note!');
}
else if(command == 'remove'){
    console.log('removing note!');
}


const validator  = require('validator')
console.log(validator.isEmail('princ@gmail.com'));
console.log(validator.isURL('princ@gmail.com'));



const addition = require('./utils.js');
const sum = addition(10,23);
console.log(sum);


const name = require('./utils.js');
console.log(name);


 const fs = require('fs');
 fs.writeFileSync('notes.txt', 'My name')
fs.appendFileSync( 'notes.txt' , ' is Prince.')


*/