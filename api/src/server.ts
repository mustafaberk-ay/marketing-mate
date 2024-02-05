import express from 'express';
import app from './app';
import mongoose from 'mongoose';

const port = 3000;

mongoose.connect(process.env.MONGODB_URL as string)
    .then(() => {
        app.listen(port, () => {
            console.log(`server is running on port ${port}`)
        })
    })
    .catch((err: Error) => {
        console.log(
            'MongoDB connection error. Please make sure the database is running!'
        )
        process.exit(1)
    })