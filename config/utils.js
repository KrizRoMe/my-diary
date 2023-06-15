import { format } from "date-fns";
import truncate from "lodash/truncate";

export const getFormattedDate = (date) => {
    const formattedDate = format(new Date(date), "dd/MM/yyyy");
    const formattedTime = format(new Date(date), "HH:mm");
    return { date: formattedDate, time: formattedTime };
};

export const getTruncateText = (content, maxLength) => {
    return truncate(content, {
        length: maxLength,
        separator: " ",
        omission: "...",
    });
};
