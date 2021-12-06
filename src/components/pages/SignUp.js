import React from 'react';
import image from '../../images/signup.svg';
import classes from '../../styles/Signup.module.css';
import Button from '../Button';
import Checkbox from '../Checkbox';
import Form from '../Form';
import Illustration from '../Illustration';
import TextInput from '../TextInput';

export default function SignUp() {
    return (
        <>
            <h1>Create an account</h1>
            <div className="column">
                <Illustration image={image} alt="Signup" />
                <Form className={classes.signup}>
                    <TextInput type="text" placeholder="Enter name" icon="person" />

                    <TextInput type="text" placeholder="Enter email" icon="alternate_email" />

                    <TextInput type="password" placeholder="Enter password" icon="lock" />

                    <TextInput type="password" placeholder="Confirm password" icon="lock_clock" />

                    <Checkbox id="checkboxsign">I agree to the Terms & Conditions</Checkbox>

                    <Button>
                        <span>Submit Now</span>
                    </Button>

                    <div className="info">
                        Already have an account? <a href="login.html">Login</a> instead.
                    </div>
                </Form>
            </div>
        </>
    );
}