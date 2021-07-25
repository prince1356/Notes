const fs = require('fs');
const chalk = require('chalk');

// adding a new note
const addNote = (title, body) => {
    const notes = loadNotes();
    const duplicateNote = notes.find((note) => note.title === title) 

    debugger

    if (!duplicateNote) {
        notes.push({
            title: title,
            body: body
        })

        saveNotes(notes);
        console.log("New note added");
    } else {
        console.log("Note title taken");
    }
}


//removing note
const removeNote = (title) => {
    const notes = loadNotes();
    const notesTokeep = notes.filter((note) => note.title !== title);

    if (notes.length > notesTokeep.length) {
        console.log(chalk.green.inverse("Note removed"));
        saveNotes(notesTokeep);
    } else {
        console.log(chalk.red.inverse("no Note found"));
    }
}


// listNotes
const listNotes = () => {
    const notes = loadNotes();
    console.log(chalk.red.inverse('Your Notes : '))
    notes.forEach(note => console.log(chalk.blue(note.title)))
}


// ReadNotes
const readNote = (title) => {
    const notes = loadNotes();
    const note = notes.find((note) => note.title === title);

    if(note){
        console.log(chalk.inverse(note.title));
        console.log(note.body);
    }else {
        console.log(chalk.red.inverse('Note not found'));
    }
}


const saveNotes = (notes) => {
    const dataJSON = JSON.stringify(notes);
    fs.writeFileSync('Notes.json', dataJSON);
}


const loadNotes = () => {
    try {
        const dataBuffer = fs.readFileSync('Notes.json');
        const dataJSON = dataBuffer.toString();
        return JSON.parse(dataJSON);
    } catch (e) {
        return [];
    }
} 


module.exports = {
    addNote: addNote,
    removeNote: removeNote,
    listNotes : listNotes,
    readNote : readNote
}