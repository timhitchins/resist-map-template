import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useTranslation } from 'react-i18next';

export default (props) => {
    const dispatch = useDispatch();
    const { t, i18n } = useTranslation();

    return(
        <div id="modal-container">
            <div className="modal">
            <div>
                <h4 data-i18n="modal.title" dangerouslySetInnerHTML={{__html: t("modal.title")}}></h4>
                <a onClick={e => dispatch({ type: "ui:modal:hide" })}
                   href="#close" className="modal-close">×</a>
            </div>
            <aside>
                <p>
                    <span data-i18n="modal.warning" dangerouslySetInnerHTML={{__html: t("modal.warning")}}></span>
                </p>
                <p data-i18n="modal.content.paragraph-1" dangerouslySetInnerHTML={{__html: t("modal.content.paragraph-1")}}></p>
                <p data-i18n="modal.content.paragraph-2" dangerouslySetInnerHTML={{__html: t("modal.content.paragraph-2")}}></p>
                {/* {<!-- This next paragraph can be added once the data is ready.
                This is a placeholder for now -->
                <!-- <p data-i18n="modal.content.paragraph-3"></p> -->} */}
                <p data-i18n="modal.content.paragraph-4" dangerouslySetInnerHTML={{__html: t("modal.content.paragraph-4")}}></p>
                <p data-i18n="modal.content.paragraph-5" dangerouslySetInnerHTML={{__html: t("modal.content.paragraph-5")}}></p>
                <p data-i18n="modal.content.paragraph-6" dangerouslySetInnerHTML={{__html: t("modal.content.paragraph-6")}}></p>
            </aside>
            </div>
        </div>
    )
}