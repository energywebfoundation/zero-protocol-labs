import dayjs from 'dayjs';
import { formatPower, Unit } from '../../utils';

interface UseOfferSummaryBlockProps {
  price: number;
  quantity: string;
  reservedUntil: string;
}

export const useOfferSummaryBlockEffects = ({
  price,
  quantity,
  reservedUntil,
}: UseOfferSummaryBlockProps) => {
  const volume = formatPower(quantity, { unit: Unit.MWh });
  const priceToPay = price * Math.round(parseInt(volume));
  const displayVolume = `${volume} ${Unit.MWh}`;
  const formattedReservedUntilDate = dayjs(reservedUntil).format('YYYY-MM-DD');

  return {
    displayVolume,
    priceToPay,
    formattedReservedUntilDate,
  };
};
