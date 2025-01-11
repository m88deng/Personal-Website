export const alertMessageMissingFirstAuthorInfo = "Error: Missing information for the author.";
export const alertMessageMissingSecondAuthorInfo = "Error: Missing information for the second author.";
export const alertMessageInvalidDate = "Error: Invalid date.";

export const copyText = (strId, tooltipId) => {
    const srcStr = document.getElementById(strId).innerHTML;

    const listener = (e) => {
        e.clipboardData.setData("text/html", srcStr); // Preserve formatting
        e.clipboardData.setData("text/plain", srcStr); // Fallback for plain text
        e.preventDefault();
    };

    document.addEventListener("copy", listener);
    document.execCommand("copy");
    document.removeEventListener("copy", listener);

    console.log("Copied:", srcStr);

    // Update tooltip
    const tooltip = document.getElementById(tooltipId);
    if (tooltip) {
        tooltip.innerHTML = tooltipId.includes("fr") ? "Copié" : "Copied";
    }
};

export const outFunc = (tooltipId) => {
    const tooltip = document.getElementById(tooltipId);
    if (tooltip) {
        tooltip.innerHTML = tooltipId.includes("fr") ? "Copier en FR" : "Copy in EN";
    }
};

export const authorsDisplay = (author2, authors3) => {
    if (document.querySelector(`[name='${authors3}']`).checked) {
        document.getElementById(author2).style.display = "none";
    } else {
        document.getElementById(author2).style.display = "grid";
    }
}

export const authorsFormatter = (lname, fname, lname2, fname2, authors3, alert) => {
    if (!lname && !fname && !lname2 && !fname2 && !authors3) { // no author
        return ["S.A.,", "S.A.,"];
    }
    if (lname && fname && !lname2 && !fname2 && !authors3) { // one author
        const author = `${lname.toUpperCase()}, ${fname}.`;
        return [author, author];
    } else if ((lname && !fname) || (!lname && fname)) {
        console.error(alertMessageMissingFirstAuthorInfo);
        alert.innerHTML = alertMessageMissingFirstAuthorInfo;
        return;
    }
    if (lname && fname && lname2 && fname2 && !authors3) { // two authors
        const [primary, secondary] = lname.localeCompare(lname2) <= 0
            ? [`${lname.toUpperCase()}, ${fname}`, `${fname2} ${lname2.toUpperCase()}`]
            : [`${lname2.toUpperCase()}, ${fname2}`, `${fname} ${lname.toUpperCase()}`];
        return [`${primary} et ${secondary}.`, `${primary} and ${secondary}.`];
    } else if (lname && fname && (!lname2 || !fname2) && !authors3) {
        console.error(alertMessageMissingSecondAuthorInfo)
        alert.innerHTML = alertMessageMissingSecondAuthorInfo;
        return;
    }
    if (lname && fname && authors3) { //three authors
        const primaryAuthor = `${lname.toUpperCase()}, ${fname}`;
        return [`${primaryAuthor} <i>et al.</i>`, `${primaryAuthor} <i>et al.</i>`];
    }
}

export const editionFormatter = (inputEdition) => {
    var editionFr = `${inputEdition}<sup>e</sup>`;
    var editionEn = `${inputEdition}<sup>th</sup>`;
    const lastDigit = inputEdition % 10;
    const lastTwoDigits = inputEdition % 100;

    if (lastTwoDigits >= 11 && lastTwoDigits <= 13) {
        return [editionFr, editionEn];
    }
    switch (lastDigit) {
        case 1:
            editionFr = `${inputEdition}<sup>re</sup>`;
            editionEn = `${inputEdition}<sup>st</sup>`;
            break;
        case 2:
            editionEn = `${inputEdition}<sup>nd</sup>`;
            break;
        case 3:
            editionEn = `${inputEdition}<sup>rd</sup>`;
            break;
        default:
    }
    return [editionFr, editionEn];
}

export const dateFormatter = (inputDateString, alert) => {
    if (inputDateString.length > 10) {
        const [year, month, day] = inputDateString.split('-').map(Number);
        const inputDate = new Date(year, month - 1, day);

        const currentDate = new Date();
        if (inputDate > currentDate) {
            console.error(alertMessageInvalidDate);
            alert.innerHTML = alertMessageInvalidDate;
            return;
        }
        const options = { year: 'numeric', month: 'long', day: 'numeric' };
        const formattedDateFr = new Intl.DateTimeFormat('fr-FR', options).format(inputDate);
        const formattedDateEn = new Intl.DateTimeFormat('en-US', options).format(inputDate);
        return [formattedDateFr, formattedDateEn];
    } else {
        const [year, month] = inputDateString.split('-').map(Number);
        const inputDate = new Date(year, month - 1);

        const currentDate = new Date();
        if (inputDate > currentDate) {
            console.error(alertMessageInvalidDate);
            alert.innerHTML = alertMessageInvalidDate;
            return;
        }
        const options = { year: 'numeric', month: 'long' };
        const formattedDateFr = new Intl.DateTimeFormat('fr-FR', options).format(inputDate);
        const formattedDateEn = new Intl.DateTimeFormat('en-US', options).format(inputDate);
        return [formattedDateFr, formattedDateEn];
    }
}