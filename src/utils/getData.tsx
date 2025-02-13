export const getStringToDate = (str: string) => {
    const [year, month, day] = str.split('-');
    const formattedDate = `${year}.${month}.${day}`;
    return formattedDate
}

export const getIsAdult = (el: boolean) => {
    if (el) { return "NC" }
    else {
        return "PG"
    }
}

export const getMovieDuration = (minutes: number) => {
    const hour = Math.floor(minutes / 60);
    const minute = minutes % 60;
    return `${hour}h ${minute}m`
}

export const getSectionTitle = (str: string) => {
    return str.split("_").map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()).join(" ");
}

export const getMovieYear = (str: string) => {
    const [year, month, day ] = str.split("-");
    return year
}