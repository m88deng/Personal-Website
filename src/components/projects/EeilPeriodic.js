import { useState } from "react";
import { copyText, outFunc, authorsDisplay, authorsFormatter, dateFormatter } from "./../../utils/eeilUtils";
import { StyledEeil1Grid20, StyledEeil2Grid20, StyledEeil2Grid5, StyledEeilGenerate, StyledEeilSrc } from "./../../styles/EeilCitation.styled";

export default function EeilPeriodic() {
    const [title, setTitle] = useState();
    const [lname, setLname] = useState();
    const [fname, setFname] = useState();
    const [lname2, setLname2] = useState();
    const [fname2, setFname2] = useState();
    const [authors3, setAuthors3] = useState(false);
    const [name, setName] = useState();
    const [vol, setVol] = useState();
    const [num, setNum] = useState();
    const [pubdate, setPubdate] = useState();
    const [fromPage, setFromPage] = useState();
    const [toPage, setToPage] = useState();
    const [url, setUrl] = useState();

    const handleChange = () => {
        setAuthors3(!authors3);
        authorsDisplay("periodic-author2", "periodic-3authors");
    }

    const handleFromPageChange = (e) => {
        const fromPageValue = parseInt(e.target.value, 10) || 1;
        setFromPage(e.target.value);

        // Adjust the minimum value for "toPage" if needed
        if (toPage < fromPageValue) {
            setToPage(fromPage);
        }
    };

    const handleToPageChange = (e) => {
        const toPageValue = parseInt(e.target.value, 10) || fromPage;
        setToPage(toPageValue);
    };

    function periodicGenerate() {
        const fr = document.getElementById("periodic-source-fr");
        const en = document.getElementById("periodic-source-en");
        const sourcesDiv = document.getElementById("periodic-sources");
        const alert = document.getElementById("periodic-alert");

        var authors = authorsFormatter(lname, fname, lname2, fname2, authors3, alert);
        if (!title || !name || authors === undefined || !pubdate) {
            alert.classList.remove("invisible");
            sourcesDiv.classList.add("invisible");
            return;
        }

        var dates = dateFormatter(pubdate, alert);

        var dateFr = dates[0];
        var dateEn = dates[1];
        var year = dateFr.split(' ').pop();

        var authorSrcFr = authors[0];
        var authorSrcEn = authors[1];

        alert.classList.add("invisible");
        sourcesDiv.classList.remove("invisible");

        var tmpvol = vol ? `vol. ${vol},` : "S.V.,";
        setVol(tmpvol);
        var tmpnum = num ? `n&deg; ${num}` : "S.N.";
        setNum(tmpnum);

        var ending = "";

        if (fromPage === toPage) {
            ending += `p.${fromPage}.`;
        } else {
            ending += `p.${fromPage}-${toPage}.`;
        }

        if (!url) {
            fr.innerHTML = `${authorSrcFr} « ${title} », <i>${name}</i>, ${vol} ${num} ${dateFr}, ${ending}`;
            en.innerHTML = `${authorSrcEn} « ${title} », <i>${name}</i>, ${vol} ${num} ${dateEn}, ${ending}`;
        } else {
            fr.innerHTML = `${authorSrcFr} « ${title} », <i>${name}</i>, S.V., S.D., S.E., ${year}, [Disponible en ligne à l'addresse : ${url}]`;
            en.innerHTML = `${authorSrcEn} « ${title} », <i>${name}</i>, S.V., s.D., S.E., ${year}, [Available online at the address: ${url}]`;
        }

    }

    return (
        <StyledEeilSrc>
            <div className="src-bg" id="periodic">
                <div className="h2 mt-0 mb-4 d-flex flex-column justify-content-center align-items-center">Périodique</div>
                <form id="periodic-info">
                    <p>Titre de l'article dans le périodique</p>
                    <StyledEeil1Grid20>
                        <input type="text" name="periodic-title" value={title} onChange={(e) => { setTitle(e.target.value.trim()) }} />
                    </StyledEeil1Grid20>
                    <p>Information sur les auteurs</p>
                    <div className="mb-1">
                        <StyledEeil2Grid5>
                            <label>Prénom</label><label>Nom de famille</label>
                            <input type="text" name="periodic-fname" value={fname} onChange={(e) => { setFname(e.target.value.trim()) }} />
                            <input type="text" name="periodic-lname" value={lname} onChange={(e) => { setLname(e.target.value.trim()) }} />
                        </StyledEeil2Grid5>
                        <div id="periodic-author2" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '2%' }}>
                            <label>Prénom</label><label>Nom de famille</label>
                            <input type="text" name="periodic-fname2" value={fname2} onChange={(e) => { setFname2(e.target.value.trim()) }} />
                            <input type="text" name="periodic-lname2" value={lname2} onChange={(e) => { setLname2(e.target.value.trim()) }} />
                        </div>
                        <div style={{ paddingTop: '10px' }}>
                            <input type="checkbox" name="periodic-3authors" value={authors3} onChange={handleChange} />
                            <label>Trois auteurs ou plus</label>
                        </div>
                    </div>
                    <p>Information sur le périodique</p>
                    <StyledEeil1Grid20>
                        <label>Nom du périodique</label>
                        <input type="text" name="periodic-name" value={name} onChange={(e) => { setName(e.target.value.trim()) }} />
                    </StyledEeil1Grid20>
                    <StyledEeil2Grid20>
                        <label>Volume</label>
                        <label>Numéro</label>
                        <input type="number" name="periodic-vol" min="1" value={vol} onChange={(e) => { setVol(e.target.value.trim()) }} />
                        <input type="number" name="periodic-num" min="1" value={num} onChange={(e) => { setNum(e.target.value.trim()) }} />
                    </StyledEeil2Grid20>
                    <StyledEeil1Grid20>
                        <label>Date de parution</label>
                        <input type="month" name="periodic-pubdate" value={pubdate} onChange={(e) => { setPubdate(e.target.value.trim()) }} />
                    </StyledEeil1Grid20>
                    <StyledEeil2Grid20>
                        <label>Plage de référence</label>
                        <label></label>
                        <input id="frompage" type="number" name="periodic-frompage" min={1} value={fromPage} onChange={handleFromPageChange} />
                        <input id="topage" type="number" name="periodic-topage" min={fromPage} value={toPage} onChange={handleToPageChange} />
                    </StyledEeil2Grid20>
                    <p>URL du la périodique si trouvé en ligne</p>
                    <StyledEeil1Grid20>
                        <input type="text" name="periodic-url" value={url} onChange={(e) => { setUrl(e.target.value.trim()) }} />
                    </StyledEeil1Grid20>
                    <StyledEeilGenerate>
                        <button type="button" className="generate-button" onClick={periodicGenerate}>Générer ma source</button>
                    </StyledEeilGenerate>
                    <div id="periodic-alert" className="alert-box invisible">
                        <span className="alert-text">Veuillez remplir tous les champs nécessaires</span>
                    </div>
                    <div id="periodic-sources" className="invisible">
                        <div className="h4" id="periodic-source-fr"></div>
                        <div className="h4" id="periodic-source-en"></div>
                        <button
                            type="button"
                            id="periodic-copy-fr"
                            onClick={() => copyText("periodic-source-fr", "periodic-copy-tooltip-fr")}
                            onMouseOut={() => outFunc("periodic-copy-tooltip-fr")}
                        >  <span id="periodic-copy-tooltip-fr">Copier en FR</span>
                        </button>

                        <button
                            type="button"
                            id="periodic-copy-en"
                            onClick={() => copyText("periodic-source-en", "periodic-copy-tooltip-en")}
                            onMouseOut={() => outFunc("periodic-copy-tooltip-en")}
                        >
                            <span id="periodic-copy-tooltip-en">Copy in EN</span>
                        </button>
                    </div>
                </form>
            </div>
        </StyledEeilSrc>
    )
}