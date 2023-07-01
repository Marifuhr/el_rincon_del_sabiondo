import LocalizedFormat from 'dayjs/plugin/localizedFormat';
import 'dayjs/locale/es';

import dayjs from "dayjs";
dayjs.extend(LocalizedFormat);
dayjs.locale('es-mx');

function formatDate(date) {
    const [day, month, year] = new Date(date).toLocaleDateString().split('/');
    const formatData = `${year}-${month}-${day}`;
    const dateString = dayjs(formatData).format('MMMM DD, YYYY');
    return `${dateString.charAt(0).toUpperCase()}${dateString.slice(1)}`;
}

export default formatDate;