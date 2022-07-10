import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalBody,
  ModalCloseButton,
  Button,
  Flex,
  Spacer,
  ModalHeader,
} from '@chakra-ui/react';

import {Formik, Form, Field} from 'formik';

import {TextField, TextAreaField, SwitchField} from 'lib/components';

import {
  INITIAL_VALUES_CREATE_MEMBER,
  CreateMemberSchema,
} from '../constants';

function DialogForm({
  isOpen,
  onClose,
  selectedMember,
}: {
  isOpen: boolean;
  onClose: () => void;
  selectedMember: any;
}): JSX.Element {
  return (
    <Modal isOpen={isOpen} onClose={onClose} isCentered>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>
          {selectedMember ? 'Update' : 'Add'} Anggota
        </ModalHeader>
        <ModalCloseButton />
        <ModalBody px={6} py={7}>
          <Formik
            initialValues={selectedMember || INITIAL_VALUES_CREATE_MEMBER}
            validationSchema={CreateMemberSchema}
            onSubmit={values => {
              if (selectedMember) {
                onClose()
              } else {
                onClose()
              }
            }}
          >
            {() => (
              <Form>
                <Flex flexDir='column'  gap={5}>
                  <Field name="name">
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
                        id="name"
                        label="Nama Lengkap"
                        placeholder="Melanie"
                        type="text"
                        errorMessage={
                          form.touched.name &&
                          form.errors.name
                        }
                        inputProps={{...field}}
                      />
                    )}
                  </Field>
                  <Field name="phone">
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
                        id="phone"
                        label="Nomor Telepon"
                        placeholder="085677122121"
                        type="number"
                        errorMessage={
                          form.touched.phone &&
                          form.errors.phone
                        }
                        inputProps={{...field}}
                      />
                    )}
                  </Field>
                  <Field name="address">
                    {({
                      field,
                      form,
                    }: {
                      // eslint-disable-next-line react/no-unused-prop-types
                      field: any;
                      // eslint-disable-next-line react/no-unused-prop-types
                      form: any;
                    }) => (
                      <TextAreaField
                        id="address"
                        label="Alamat"
                        placeholder="JL. Rajawali No. 1"
                        type="address"
                        errorMessage={
                          form.touched.address &&
                          form.errors.address
                        }
                        inputProps={{...field}}
                      />
                    )}
                  </Field>
                  <Field name="isActive">
                    {({
                      field,
                      form,
                    }: {
                      // eslint-disable-next-line react/no-unused-prop-types
                      field: any;
                      // eslint-disable-next-line react/no-unused-prop-types
                      form: any;
                    }) => (
                      <SwitchField
                        id="status"
                        label="Status"
                        errorMessage={
                          form.touched.isActive &&
                          form.errors.isActive
                        }
                        inputProps={{...field}}
                      />
                    )}
                  </Field>
                </Flex>
                <Spacer mt={4} />
                <Flex
                  align="end"
                  justify="end"
                  gap={3}
                >
                <Button
                    size="md"
                    colorScheme="blue"
                    type="submit"
                    width="110px"
                  >
                    {selectedMember ? 'Update' : 'Add anggota'}
                  </Button>
                </Flex>
              </Form>
            )}
          </Formik>
        </ModalBody>
      </ModalContent>
    </Modal>
  );
}

export default DialogForm;
