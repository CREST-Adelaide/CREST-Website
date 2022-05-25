import React, { useState } from 'react';
import axios from 'axios'
import { useForm } from 'react-hook-form'
import useFormUrl from '../useFormUrl'
import Form, { FormGroup, Input, Select, Error } from '../../ui/form'
import Button from '../../ui/button'

const AppointmentForm = (props) => {
    const formUrl = useFormUrl();
    const { register, handleSubmit, errors, reset } = useForm({
        mode: "onBlur"
    })
    const [serverState, setServerState] = useState({
        submitting: false,
        status: null
    });
    const handleServerResponse = (ok, msg, form) => {
        setServerState({
            submitting: false,
            status: { ok, msg }
        });
        if (ok) {
            form.reset();
        }
    };
    const onSubmit = (data, e) => {
        const form = e.target;
        setServerState({ submitting: true });
        axios({
            method: "post",
            url: formUrl,
            data: data
        })
            .then(r => {
                handleServerResponse(true, "Thanks for registering the guest talk! " + props.info, form);
            })
            .catch(r => {
                handleServerResponse(false, r.response.data.error, form);
            });
    }

    return (
        <Form onSubmit={handleSubmit(onSubmit)}>
            <FormGroup mb="20px">
                <Input
                    name="first_name"
                    id="first_name"
                    type="text"
                    placeholder="First Name *"
                    hover="2"
                    ref={register({ required: 'First name is required' })}
                />
                <Error>{errors.first_name && errors.first_name.message}</Error>
            </FormGroup>
            <FormGroup mb="20px">
                <Input
                    name="last_name"
                    id="last_name"
                    type="text"
                    placeholder="Last Name *"
                    hover="2"
                    ref={register({ required: 'Last name is required' })}
                />
                <Error>{errors.last_name && errors.last_name.message}</Error>
            </FormGroup>
            <FormGroup mb="20px">
                <Input
                    name="appointment_email"
                    id="appointment_email"
                    type="email"
                    placeholder="Email *"
                    hover="2"
                    ref={register({
                        required: 'Email is required',
                        pattern: {
                            value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
                            message: "invalid email address"
                        }
                    })}
                />
                <Error>{errors.appointment_email && errors.appointment_email.message}</Error>
            </FormGroup>
            {/* <FormGroup mb="20px">
                <Select
                    name="appointment_inquiry"
                    id="appointment_inquiry"
                    hover="2"
                    ref={register({ required: "Please select a inquiry" })}
                >
                    <option value="">Your inquiry about</option>
                    <option value="General Information Request">General Information Request</option>
                    <option value="Partner Relations">Partner Relations</option>
                    <option value="Careers">Careers</option>
                    <option value="Software Licencing">Software Licencing</option>
                </Select>
                <Error>{errors.appointment_inquiry && errors.appointment_inquiry.message}</Error>
            </FormGroup> */}
            <FormGroup textalign="center">
                <Button
                    type="submit"
                    pl="54px"
                    pr="54px"
                    disabled={serverState.submitting}
                    hover="2">Submit</Button>
                {serverState.status && (
                    <p className={`form-output ${!serverState.status.ok ? "errorMsg" : "success"}`}>
                        {serverState.status.msg}
                    </p>
                )}
            </FormGroup>
        </Form>
    )
}


export default AppointmentForm;