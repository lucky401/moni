import {
  Alert,
  AlertDescription,
  AlertIcon,
  Box,
  Button,
  Flex,
  Text,
} from '@chakra-ui/react';

import {Formik, Form, Field} from 'formik';

import {TextField} from 'lib/components/text-field';

import {useLogin} from 'lib/auth-provider/context/hooks';
import {INITIAL_VALUES, LoginSchema} from 'lib/auth-provider/constants';

function Login(): JSX.Element {
  const [login, status, errorMessage, fieldErrors] = useLogin();

  return (
    <Flex minHeight="100vh">
      <Box w="100%" minHeight="100%">
        <Flex direction="column" justify="center" minHeight="100%">
          <Box width={420} mx="auto">
            <Box mb={14} mt={10}>
              <Text mb={3} fontSize="3xl" lineHeight={9} fontWeight="bold">
                Login
              </Text>
              <Text fontSize="xl" lineHeight={7} fontWeight="medium">
                to access the dashboard
              </Text>
            </Box>
            <Formik
              initialValues={INITIAL_VALUES}
              validationSchema={LoginSchema}
              onSubmit={values => {
                login(values);
              }}
            >
              {() => (
                <Form>
                  <Field name="email">
                    {({
                      field,
                      form,
                    }: {
                      // eslint-disable-next-line react/no-unused-prop-types
                      field: any;
                      // eslint-disable-next-line react/no-unused-prop-types
                      form: any;
                    }) => (
                      <TextField
                        id="email"
                        label="Email"
                        placeholder="Email"
                        type="email"
                        errorMessage={
                          form.touched.email &&
                          (form.errors.email || fieldErrors?.email)
                        }
                        inputProps={{...field}}
                        disabled={status === 'fetching'}
                        my={4}
                      />
                    )}
                  </Field>
                  <Field name="password">
                    {({
                      field,
                      form,
                    }: {
                      // eslint-disable-next-line react/no-unused-prop-types
                      field: any;
                      // eslint-disable-next-line react/no-unused-prop-types
                      form: any;
                    }) => (
                      <TextField
                        id="password"
                        label="Password"
                        placeholder="Password"
                        type="password"
                        errorMessage={
                          form.touched.password &&
                          (form.errors.password || fieldErrors?.password)
                        }
                        inputProps={{...field}}
                        disabled={status === 'fetching'}
                        my={4}
                      />
                    )}
                  </Field>
                  {errorMessage && status === 'rejected' && (
                    <Alert status="error" my={2}>
                      <AlertIcon />
                      <AlertDescription>{errorMessage}</AlertDescription>
                    </Alert>
                  )}
                  <Button
                    size="md"
                    variant="solid"
                    colorScheme="blue"
                    color="white"
                    width="100%"
                    type="submit"
                    shadow="lg"
                    isLoading={status === 'fetching'}
                  >
                    Login
                  </Button>
                </Form>
              )}
            </Formik>
          </Box>
        </Flex>
      </Box>
    </Flex>
  );
}

export default Login;
