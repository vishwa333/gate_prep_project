const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const mongoose = require('mongoose');

const questionSchema = new mongoose.Schema({
    questionId: mongoose.Schema.Types.ObjectId,
    subject: String,
    topic: String,
    difficultyLevel: { type: String, enum: ['Easy', 'Medium', 'Hard'] },
    questionText: String,
    questionImages: [String], // URLs to images if any
    explanationText: String,
    explanationImages: [String],
    dateCreated: { type: Date, default: Date.now },
    dateModified: { type: Date, default: Date.now }
});

// For MCQ's
const mcqSchema = new mongoose.Schema({
    options: [{
        optionText: String,
        isCorrect: Boolean
    }],
    multipleCorrect: { type: Boolean, default: false } // true if there can be more than one correct answer
});

const MCQ = mongoose.model('MCQ', mcqSchema);

// For numerical answers
const numericalAnswerSchema = new mongoose.Schema({
    correctAnswer: Number,
    acceptableRange: {  // Optional, used if the answer can vary within a range
        min: Number,
        max: Number
    }
});

const NumericalAnswer = mongoose.model('NumericalAnswer', numericalAnswerSchema);

// For true/false questions
const trueFalseSchema = new mongoose.Schema({
    correctAnswer: Boolean
});

const TrueFalse = mongoose.model('TrueFalse', trueFalseSchema);
