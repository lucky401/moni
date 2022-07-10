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

import {TextField, TextAreaField, SwitchField, Select} from 'lib/components';

import {
  INITIAL_VALUES_CREATE_UNIT,
  CreateUnitSchema,
} from '../constants';

function DialogForm({
  isOpen,
  onClose,
  selectedUnit,
}: {
  isOpen: boolean;
  onClose: () => void;
  selectedUnit: any;
}): JSX.Element {
  return (
    <Modal isOpen={isOpen} onClose={onClose} isCentered>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>
          {selectedUnit ? 'Perbarui' : 'Tambah'} Unit
        </ModalHeader>
        <ModalCloseButton />
        <ModalBody px={6} py={7}>
          <Formik
            initialValues={selectedUnit || INITIAL_VALUES_CREATE_UNIT}
            validationSchema={CreateUnitSchema}
            onSubmit={values => {
              if (selectedUnit) {
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
                  <Field name="village">
                    {({
                      field,
                      form,
                    }: {
                      // eslint-disable-next-line react/no-unused-prop-types
                      field: any;
                      // eslint-disable-next-line react/no-unused-prop-types
                      form: any;
                    }) => (
                      <Select
                        id="name"
                        label="Kelurahan"
                        placeholder="Kraton"
                        errorMessage={
                          form.touched.village &&
                          form.errors.village
                        }
                        inputProps={{ ...field }}
                        itemText="name"
                        itemValue="id"
                        options={[
                          { id: 1, name: 'Kraton' },
                          { id: 2, name: 'Patehan' },
                          { id: 3, name: 'Panembahan' },
                        ]}
                      />
                    )}
                  </Field>
                  <Field name="subdistrict">
                    {({
                      field,
                      form,
                    }: {
                      // eslint-disable-next-line react/no-unused-prop-types
                      field: any;
                      // eslint-disable-next-line react/no-unused-prop-types
                      form: any;
                    }) => (
                      <Select
                        id="name"
                        label="Kecamatan"
                        placeholder="Gajahmungkur"
                        errorMessage={
                          form.touched.subdistrict &&
                          form.errors.subdistrict
                        }
                        inputProps={{ ...field }}
                        itemText="name"
                        itemValue="id"
                        options={[
                          { id: 1, name: 'Gajahmungkur' },
                          { id: 2, name: 'Semarang Selatan' },
                          { id: 3, name: 'Banyumanik' },
                        ]}
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
                    {selectedUnit ? 'Simpan' : 'Tambah Unit'}
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
