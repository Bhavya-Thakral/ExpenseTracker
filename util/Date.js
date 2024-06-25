export const formattedDate = (date)=> {
    const day = date.getDate();
    const year = date.getFullYear();
    const month =date.getMonth();
    return `${day}/${month}/${year}`
}

export function getDateMinusDays(date,days){
    return new Date(date.getFullYear(),date.getMonth(),date.getDate()-days)
}