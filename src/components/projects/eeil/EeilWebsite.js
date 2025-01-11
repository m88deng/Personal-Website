import { useState } from "react";
import { copyText, outFunc, authorsDisplay, authorsFormatter, dateFormatter } from "../../../utils/eeilUtils";
import { StyledEeil1Grid20, StyledEeil2Grid5, StyledEeilSrc, StyledEeilGenerate } from "../../../styles/EeilCitation.styled";

export default function EeilWebsite() {
    const [lname, setLname] = useState();
    const [fname, setFname] = useState();
    const [lname2, setLname2] = useState();
    const [fname2, setFname2] = useState();
    const [title, setTitle] = useState();
    const [url, setUrl] = useState();
    const [oname, setOname] = useState();
    const [refdate, setRefdate] = useState();
    const [authors3, setAuthors3] = useState(false);

    const handleChange = () => {
        setAuthors3(!authors3);
        authorsDisplay("web-author2", "web-3authors");
    }
    const websiteGenerate = () => {
        // var lname = document.querySelector('[name="web-lname"]').value.trim();
        // var fname = document.querySelector('[name="web-fname"]').value.trim();
        // var lname2 = document.querySelector('[name="web-lname2"]').value.trim();
        // var fname2 = document.querySelector('[name="web-fname2"]').value.trim();
        // var title = document.querySelector('[name="web-title"]').value.trim();
        // var url = document.querySelector('[name="web-url"]').value.trim();
        // var oname = document.querySelector('[name="web-oname"]').value.trim();
        // var refdate = document.querySelector('[name="web-refdate"]').value;
        // var authors3 = document.querySelector('[name="web-3authors"]').checked;

        const fr = document.getElementById("web-source-fr");
        const en = document.getElementById("web-source-en");
        const sourcesDiv = document.getElementById("web-sources");
        const alert = document.getElementById("web-alert");

        if (!title || !url || !refdate) {
            alert.classList.remove("invisible");
            sourcesDiv.classList.add("invisible");
            return;
        }

        var authors = authorsFormatter(lname, fname, lname2, fname2, authors3, alert);
        var dates = dateFormatter(refdate, alert);

        if (authors === undefined || dates === undefined) {
            alert.classList.remove("invisible");
            sourcesDiv.classList.add("invisible");
            return;
        }

        var authorSrcFr = authors[0];
        var authorSrcEn = authors[1];
        var dateFr = dates[0];
        var dateEn = dates[1];

        alert.classList.add("invisible");
        sourcesDiv.classList.remove("invisible");

        var tmponame = oname ? `${oname},` : "";
        setOname(tmponame);

        fr.innerHTML = `${authorSrcFr} ${oname} (réf. du ${dateFr}), <i>${title} [en ligne]</i>, adresse URL: ${url}`;
        en.innerHTML = `${authorSrcEn} ${oname} (ref. of ${dateEn}), <i>${title} [online]</i>, URL address: ${url}`;
    }
    return (
        <StyledEeilSrc>
            <div class="src-bg" id="website">
                <div className="h2 mt-0 mb-4 d-flex flex-column justify-content-center align-items-center">Site Internet</div>
                <form id="web-info">
                    <p>Titre du site</p>
                    <StyledEeil1Grid20>
                        <input type="text" name="web-title" value={title} onChange={(e) => { setTitle(e.target.value) }} />
                    </StyledEeil1Grid20>
                    <p>URL du site internet</p>
                    <StyledEeil1Grid20>
                        <input type="text" name="web-url" value={url} onChange={(e) => { setUrl(e.target.value) }} />
                    </StyledEeil1Grid20>
                    <p>Information sur l'auteur</p>
                    <div className="mb-1">
                        <StyledEeil2Grid5>
                            <label>Prénom</label><label>Nom de famille</label>
                            <input type="text" name="web-fname" value={fname} onChange={(e) => { setFname(e.target.value) }} />
                            <input type="text" name="web-lname" value={lname} onChange={(e) => { setLname(e.target.value) }} />
                        </StyledEeil2Grid5>
                        <div id="web-author2" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '2%' }}>
                            <label>Prénom</label><label>Nom de famille</label>
                            <input type="text" name="web-fname2" value={fname2} onChange={(e) => { setFname2(e.target.value) }} />
                            <input type="text" name="web-lname2" value={lname2} onChange={(e) => { setLname2(e.target.value) }} />
                        </div>
                        <div style={{ paddingTop: '10px' }}>
                            <input type="checkbox" name="web-3authors" value={authors3} onChange={handleChange} /><label>Trois auteurs ou
                                plus</label>
                        </div>
                    </div>
                    <p>Nom de l'organisme</p>
                    <StyledEeil1Grid20>
                        <input type="text" name="web-oname" value={oname} onChange={(e) => { setOname(e.target.value) }} />
                    </StyledEeil1Grid20>
                    <p>Date de consultation</p>
                    <input type="date" id="web-date" name="web-refdate" value={refdate} onChange={(e) => { setRefdate(e.target.value) }} />
                    <StyledEeilGenerate>
                        <button type="button" class="generate-button" onClick={websiteGenerate}>Générer ma
                            source</button>
                    </StyledEeilGenerate>
                    <div id="web-alert" class="alert-box invisible">
                        <span class="alert-text">Veuillez remplir tous les champs nécessaires</span>
                    </div>
                    <div id="web-sources" class="invisible">
                        <div className="h4" id="web-source-fr"></div>
                        <div className="h4" id="web-source-en"></div>
                        <button
                            type="button"
                            id="web-copy-fr"
                            onClick={() => copyText("web-source-fr", "web-copy-tooltip-fr")}
                            onMouseOut={() => outFunc("web-copy-tooltip-fr")}
                        >
                            <span id="web-copy-tooltip-fr">Copier en FR</span>
                        </button>

                        <button
                            type="button"
                            id="web-copy-en"
                            onClick={() => copyText("web-source-en", "web-copy-tooltip-en")}
                            onMouseOut={() => outFunc("web-copy-tooltip-en")}
                        >
                            <span id="web-copy-tooltip-en">Copy in EN</span>
                        </button>
                    </div>
                </form>
            </div>
        </StyledEeilSrc>
    )
}