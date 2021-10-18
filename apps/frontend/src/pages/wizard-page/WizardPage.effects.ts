import { CreateOrderDto, PaymentPreferencesEnumType, useOrdersControllerCreate } from "@energyweb/zero-protocol-labs-api-client"
import { useState } from "react";
import { BigNumber } from '@ethersproject/bignumber';
import { Dayjs } from "dayjs";
import { useNavigate } from "react-router";
import { Countries } from "@energyweb/utils-general";
import { useAddressMappingState, useSelectedProtocolStore } from "../../context";
import { ProtocolsEnum } from "../../utils";

export interface WizardFormValues {
  userType: string;
  wirePayment: boolean;
  cryptoPayment: boolean;
  emailAddress: string;
  [key: string]: any;
}

export const initialValues: WizardFormValues = {
  userType: '',
  wirePayment: false,
  cryptoPayment: false,
  emailAddress: ''
}

export const useWizardPageEffects = () => {
  const navigate = useNavigate();
  const selectedProtocol = useSelectedProtocolStore();
  // bad needs to be replaced by more generic solution
  const isFilecoin = selectedProtocol === ProtocolsEnum.Filecoin;
  const isBitcoin = selectedProtocol === ProtocolsEnum.Bitcoin;
  const stepLabels = ['Protocol', 'Consumption', 'Preferences', 'Confirmation'];

  const [step, setStep] = useState(0);
  const isLastStep = step === stepLabels.length - 1;

  const { mutate, isLoading } = useOrdersControllerCreate({ mutation: {
    onSuccess: () => {
      navigate('/wizard/thank-you')
    }
  }});

  const handleBackStep = () => setStep((s) => s - 1);

  const addressMapping = useAddressMappingState();

  const handleSubmit = async (values: WizardFormValues, mapping: Map<number, number[]>) => {
    if (isLastStep) {
      const mappingArrIterator = Array.from(Array(addressMapping?.size).keys());
      const preparedValues: CreateOrderDto = {
        // way too hacky, should be simplified
        paymentPreferences:
        values.wirePayment && values.cryptoPayment
          ? [PaymentPreferencesEnumType.WIRE_TRANSFER, PaymentPreferencesEnumType.CRYPTO]
          : values.wirePayment
            ? [PaymentPreferencesEnumType.WIRE_TRANSFER]
            : values.cryptoPayment
              ? [PaymentPreferencesEnumType.CRYPTO]
              : [],
        emailAddress: values.emailAddress,
        items: mappingArrIterator.map(key => {
          return {
          country: Countries.find(country => country.name === values[`country_${key}`])?.code || '',
          minerId: values[`minerId_${key}`] || '',
          // @ts-ignore
          timeFrames: mapping.get(key) ? mapping.get(key).map(nestedId => ({
            start: (values[`startDate_${key}_${nestedId}`] as Dayjs).startOf('day').toISOString(),
            end: (values[`endDate_${key}_${nestedId}`] as Dayjs).endOf('day').toISOString(),
            energy: BigNumber.from(values[`energy_${key}_${nestedId}`]).mul(BigNumber.from(10).pow(6)).toNumber()
          })) : []}
        })
      }
      mutate({ data: preparedValues })
    } else {
      setStep((s) => s + 1);
    }
  };

  return {
    addressMapping,
    handleSubmit,
    handleBackStep,
    isFilecoin,
    isBitcoin,
    isLoading,
    step,
    stepLabels,
    isLastStep,
    selectedProtocol
  }
}
