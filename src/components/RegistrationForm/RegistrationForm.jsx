import { useState } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { useDispatch } from 'react-redux';
import { register } from '../../redux/auth/operations';
import styles from './RegistrationForm.module.css';

const RegistrationForm = () => {
    const dispatch = useDispatch();
    const [success, setSuccess] = useState(false);

    const handleSubmit = async (values, actions) => {
        console.log('Register form submitted with:', values);

        try {
            const resultAction = await dispatch(register(values));
            console.log('Register result:', resultAction);

            if (register.fulfilled.match(resultAction)) {
                setSuccess(true);
                actions.resetForm();
                console.log('Registration successful!');
            } else {
                console.log('Registration failed:', resultAction.payload);
            }
        } catch (error) {
            console.log('Registration error:', error);
        }
    };

    const validationSchema = Yup.object({
        name: Yup.string().min(2).required('Required'),
        email: Yup.string().email().required('Required'),
        password: Yup.string().min(6).required('Required'),
    });

    return (
        <div>
            {success && (
                <div className={styles.success}>Kayıt başarılı!</div>
            )}
            <Formik
                initialValues={{ name: '', email: '', password: '' }}
                validationSchema={validationSchema}
                onSubmit={handleSubmit}
            >
                <Form className={styles.form}>
                    <label className={styles.label}>
                        Name
                        <Field type="text" name="name" className={styles.input} />
                        <ErrorMessage name="name" component="div" className={styles.error} />
                    </label>

                    <label className={styles.label}>
                        Email
                        <Field type="email" name="email" className={styles.input} />
                        <ErrorMessage name="email" component="div" className={styles.error} />
                    </label>

                    <label className={styles.label}>
                        Password
                        <Field type="password" name="password" className={styles.input} />
                        <ErrorMessage name="password" component="div" className={styles.error} />
                    </label>

                    <button type="submit" className={styles.button}>Register</button>
                </Form>
            </Formik>
        </div>
    );
};

export default RegistrationForm;