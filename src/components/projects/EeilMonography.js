import { useState } from "react";
import { copyText, outFunc, authorsDisplay, authorsFormatter, editionFormatter } from "./../../utils/eeilUtils";
import { StyledEeilSrc, StyledEeil1Grid20, StyledEeil1Grid5, StyledEeil2Grid5, StyledEeil2Grid20, StyledEeil3Grid5, StyledEeilGenerate } from "./../../styles/EeilCitation.styled"

export default function EeilMonography() {
    const [title, setTitle] = useState();
    const [lname, setLname] = useState();
    const [fname, setFname] = useState();
    const [lname2, setLname2] = useState();
    const [fname2, setFname2] = useState();
    const [authors3, setAuthors3] = useState(false);
    const [edition, setEdition] = useState();
    const [editor, setEditor] = useState();
    const [city, setCity] = useState();
    const [collection, setCollection] = useState();
    const [year, setYear] = useState();
    const [pages, setPages] = useState();
    const [url, setUrl] = useState();

    const handleChange = () => {
        setAuthors3(!authors3);
        authorsDisplay("mono-author2", "mono-3authors");
    }

    const monoGenerate = () => {
        // var title = document.querySelector('[name="mono-title"]').value.trim();

        // var lname = document.querySelector('[name="mono-lname"]').value.trim();
        // var fname = document.querySelector('[name="mono-fname"]').value.trim();
        // var lname2 = document.querySelector('[name="mono-lname2"]').value.trim();
        // var fname2 = document.querySelector('[name="mono-fname2"]').value.trim();
        // var authors3 = document.querySelector('[name="mono-3authors"]').checked;

        // var edition = document.querySelector('[name="mono-edition"]').value.trim();
        // var editor = document.querySelector('[name="mono-editor"]').value.trim();
        // var city = document.querySelector('[name="mono-city"]').value.trim();
        // var collection = document.querySelector('[name="mono-collection"]').value.trim();
        // var year = document.querySelector('[name="mono-year"]').value.trim();
        // var pages = document.querySelector('[name="mono-pages"]').value.trim();
        // var url = document.querySelector('[name="mono-url"]').value.trim();

        const fr = document.getElementById("mono-source-fr");
        const en = document.getElementById("mono-source-en");
        const sourcesDiv = document.getElementById("mono-sources");
        const alert = document.getElementById("mono-alert");

        var authors = authorsFormatter(lname, fname, lname2, fname2, authors3, alert);
        if (!title || !editor || authors === undefined) {
            alert.classList.remove("invisible");
            sourcesDiv.classList.add("invisible");
            return;
        }
        var authorSrcFr = authors[0];
        var authorSrcEn = authors[1];
        var editions = edition ? editionFormatter(edition) : null;

        alert.classList.add("invisible");
        sourcesDiv.classList.remove("invisible");

        var editionFr = "", editionEn = "";
        if (editions != null) {
            editionFr = `${editions[0]} éd.,`;
            editionEn = `${editions[1]} ed.,`;
        }

        var tmpcity = city ? `${city}` : "s.l.";
        setCity(tmpcity);
        var tmpyear = year ? `${year}` : "s.d.";
        setYear(tmpyear)
        var tmppages = pages ? `, ${pages} p.` : "";
        setPages(tmppages)
        var tmpcollection = collection ? `, (coll. ${collection}).` : "";
        setCollection(tmpcollection);

        var ending = "";
        if (!pages && !collection) {
            if (year === "s.d.") {
                ending = `${year}`;
            } else {
                ending = `${year}.`
            }
        } else {
            ending = `${year}${pages}${collection}`
        }

        if (!url) {
            fr.innerHTML = `${authorSrcFr} <i>${title}</i>, ${editionFr} ${city}, ${editor}, ${ending}`;
            en.innerHTML = `${authorSrcEn} <i>${title}</i>, ${editionEn} ${city}, ${editor}, ${ending}`;
        } else {
            fr.innerHTML = `${authorSrcFr} <i>${title}</i>, ${editionFr} S.D., ${editor}, ${year}, [Disponible en ligne à l'addresse : ${url}]`;
            en.innerHTML = `${authorSrcEn} <i>${title}</i>, ${editionEn} S.D., ${editor}, ${year}, [Available online at the address: ${url}]`;
        }
    }
    return (
        <StyledEeilSrc>
            <div className="src-bg" id="monography">
                <div className="h2 mt-0 mb-4 d-flex flex-column justify-content-center align-items-center">Monographie</div>
                <form id="monography-info">
                    <p>Titre de la monographie</p>
                    <StyledEeil1Grid20 >
                        <input type="text" name="mono-title" value={title} onChange={(e) => { setTitle(e.target.value) }} />
                    </StyledEeil1Grid20>
                    <p>Information sur les auteurs</p>
                    <div className="mb-1">
                        <StyledEeil2Grid5 >
                            <label>Prénom</label><label>Nom de famille</label>
                            <input type="text" name="mono-fname" value={fname} onChange={(e) => { setFname(e.target.value) }} />
                            <input type="text" name="mono-lname" value={lname} onChange={(e) => { setLname(e.target.value) }} />
                        </StyledEeil2Grid5>
                        <div id="mono-author2" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '2%' }}>
                            <label>Prénom</label><label>Nom de famille</label>
                            <input type="text" name="mono-fname2" value={fname2} onChange={(e) => { setFname2(e.target.value) }} />
                            <input type="text" name="mono-lname2" value={lname2} onChange={(e) => { setLname2(e.target.value) }} />
                        </div>
                        <div style={{ paddingTop: '10px' }}>
                            <input type="checkbox" name="mono-3authors" value={authors3} onChange={handleChange} /><label>Trois auteurs ouplus</label>
                        </div>
                    </div>
                    <p>Information sur la monographie</p>
                    <StyledEeil3Grid5>
                        <label>Numéro d'édition</label><label>Éditeur</label><label>Ville</label>
                        <input type="number" name="mono-edition" min="1" value={edition} onChange={(e) => { setEdition(e.target.value) }} />
                        <input type="text" name="mono-editor" value={editor} onChange={(e) => { setEditor(e.target.value) }} />
                        <input type="text" name="mono-city" value={city} onChange={(e) => { setCity(e.target.value) }} />
                    </StyledEeil3Grid5>
                    <StyledEeil1Grid5>
                        <label>Collection</label>
                        <input type="text" name="mono-collection" value={collection} onChange={(e) => { setCollection(e.target.value) }} />
                    </StyledEeil1Grid5>
                    <StyledEeil2Grid20>
                        <label>Année de publication</label><label>Nombre de pages</label>
                        <input type="number" name="mono-year" min="1" value={year} onChange={(e) => { setYear(e.target.value) }} />
                        <input type="number" name="mono-pages" min="1" value={pages} onChange={(e) => { setPages(e.target.value) }} />
                    </StyledEeil2Grid20>
                    <p>URL du la monographie si trouvé en ligne</p>
                    <StyledEeil1Grid20>
                        <input type="text" name="mono-url" value={url} onChange={(e) => { setUrl(e.target.value) }} />
                    </StyledEeil1Grid20>
                    <StyledEeilGenerate>
                        <button type="button" class="generate-button" onClick={monoGenerate}>Générer ma source</button>
                    </StyledEeilGenerate>
                    <div id="mono-alert" className="alert-box invisible">
                        <span class="alert-text">Veuillez remplir tous les champs nécessaires</span>
                    </div>
                    <div id="mono-sources" className="invisible">
                        <div className="h4" id="mono-source-fr" ></div>
                        <div className="h4" id="mono-source-en" ></div>
                        <button
                            type="button"
                            id="mono-copy-fr"
                            onClick={() => copyText("mono-source-fr", "mono-copy-tooltip-fr")}
                            onMouseOut={() => outFunc("mono-copy-tooltip-fr")}
                        >
                            <span id="mono-copy-tooltip-fr">Copier en FR</span>
                        </button>

                        <button
                            type="button"
                            id="mono-copy-en"
                            onClick={() => copyText("mono-source-en", "mono-copy-tooltip-en")}
                            onMouseOut={() => outFunc("mono-copy-tooltip-en")}
                        >
                            <span id="mono-copy-tooltip-en">Copy in EN</span>
                        </button>
                    </div>
                </form>
            </div>
        </StyledEeilSrc >
    )
}