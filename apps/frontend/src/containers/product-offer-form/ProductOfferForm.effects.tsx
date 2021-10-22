import { useFormik } from 'formik';

export const useProductOfferFormEffects = () => {
  const formik = useFormik({
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
    formik,
  };
};
