import { Result, DateElement, DateType } from './comicDataTypes';
import { comicImageVariant } from '@infrastructure/api/constants';
import { Comic } from '@domain';

export const mapComicData = (data: Result[]): Comic[] => {
	const getOnSaleYear = (dates: DateElement[]) => {
		const onSaleDate = dates.find(
			(date) => date.type === DateType.OnsaleDate,
		)?.date;
		return new Date(onSaleDate).getFullYear().toString();
	};

	return data.map((comic) => ({
		id: comic.id.toString(),
		title: comic.title,
		year: getOnSaleYear(comic.dates),
		thumbnail: `${comic.thumbnail.path.replace('http://', 'https://')}/${comicImageVariant}.${comic.thumbnail.extension}`,
	}));
};
