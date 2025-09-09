import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { useDispatch } from 'react-redux';
import { logIn } from '../../redux/auth/operations';
import styles from './LoginForm.module.css';

const LoginForm = () => {
    const dispatch = useDispatch();

    const handleSubmit = (values, actions) => {
        dispatch(logIn(values));
        actions.resetForm();
    };

    const validationSchema = Yup.object({
        email: Yup.string().email('Invalid email').required('Required'),
        password: Yup.string().min(6).required('Required'),
    });

    return (
        <Formik
            initialValues={{ email: '', password: '' }}
            validationSchema={validationSchema}
            onSubmit={handleSubmit}
        >
            <Form className={styles.form}>
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

                <button type="submit" className={styles.button}>Log In</button>
            </Form>
        </Formik>
    );
};

export default LoginForm;