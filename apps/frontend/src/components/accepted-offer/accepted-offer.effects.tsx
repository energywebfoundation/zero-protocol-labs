import { useFormik } from 'formik';

export const useAcceptedOfferEffects = () => {
  const form = useFormik({
    initialValues: {
      recAddress: '',
      email: '',
      name: '',
      vat: '',
      address: '',
      crypto: '',
    },
    onSubmit: (values) => {
      console.log(values);
    },
  });

  return {
    form,
  };
};
