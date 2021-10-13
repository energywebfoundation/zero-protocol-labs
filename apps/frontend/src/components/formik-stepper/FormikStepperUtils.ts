import { countries } from '../../pages/wizard-page/components/form-wizard-item-user-type/components/form-user-type';

export const dataConversion = (values: any) => {
  let currentData: any = { items: [] };
  const valuesKeys = Object.keys(values);
  let paymentPreferences: any = [];
  valuesKeys.forEach((el: any) => {
    if (el.includes('country') || el.includes('minerId')) {
      if (!currentData.items[el.slice(-1)]) {
        currentData.items.push({
          country: values[`country_${el.slice(-1)}`]
            ? countries.find(
                (elem) => elem.value === values[`country_${el.slice(-1)}`]
              )?.shortName
            : '',
          minerId: values[`minerId_${el.slice(-1)}`]
            ? values[`minerId_${el.slice(-1)}`]
            : '',
        });
      }
    } else if (
      el.includes('start') ||
      el.includes('end') ||
      el.includes('energy')
    ) {
      if (!currentData.items[el.split('_')[1]].timeFrames) {
        currentData.items[el.split('_')[1]].timeFrames = [
          {
            start: values[`start_${el.slice(-3)}`]
              ? getFirstMilisecond(values[`start_${el.slice(-3)}`].getTime())
              : '',
            end: values[`end_${el.slice(-3)}`]
              ? getLastMiliseconds(values[`end_${el.slice(-3)}`].getTime())
              : '',
            energy: +values[`energy_${el.slice(-3)}`]
              ? values[`energy_${el.slice(-3)}`]
              : 1,
          },
        ];
      } else if (
        !currentData.items[el.split('_')[1]].timeFrames[el.slice(-1)]
      ) {
        currentData.items[el.split('_')[1]].timeFrames.push({
          start: values[`start_${el.slice(-3)}`]
            ? getFirstMilisecond(values[`start_${el.slice(-3)}`].getTime())
            : '',
          end: values[`end_${el.slice(-3)}`]
            ? getLastMiliseconds(values[`end_${el.slice(-3)}`].getTime())
            : '',
          energy: values[`energy_${el.slice(-3)}`]
            ? +values[`energy_${el.slice(-3)}`]
            : 1,
        });
      }
    } else if (el === 'crypto' || el === 'wire') {
      if (paymentPreferences.length === 0) {
        if (values.crypto) {
          paymentPreferences.push('CRYPTO');
        }
        if (values.wire) {
          paymentPreferences.push('WIRE_TRANSFER');
        }
        currentData.paymentPreferences = paymentPreferences;
      }
    } else {
      currentData[el] = values[el];
    }
  });
  return currentData;
};

const getFirstMilisecond = (miliseconds: number) => {
  const ms = miliseconds;
  const msPerDay = 86400 * 1000;
  let beginning = ms - (ms % msPerDay);
  beginning += new Date().getTimezoneOffset() * 60 * 1000;
  return new Date(beginning).toISOString();
};

const getLastMiliseconds = (currentDate: number) => {
  const interval = 1000 * 60 * 60 * 24;
  let startOfDay = Math.floor(currentDate / interval) * interval;
  let endOfDay = startOfDay + interval - 1;
  return new Date(endOfDay).toISOString();
};
