import React from 'react';
import classes from '../styles/Answers.module.css';
import Checkbox from './Checkbox';

export default function Answers() {
    return (
        <div className={classes.answers}>
            <Checkbox className="classes.answer" id="option-1">
                Option 1
            </Checkbox>
        </div>
    );
}
