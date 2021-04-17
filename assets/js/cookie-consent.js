function setDoNotTrack() {
    window.doNotTrack = "1"
}

window.cookieconsent.initialise({
    "palette": {
        "popup": {
            "background": "#424242"
        },
        "button": {
            "background": "#366cb4"
        }
    },
    "theme": "edgeless",
    "position": "bottom",
    "type": "opt-in",
    "content": {
        "message": "Helfen Sie bei der Optimierung dieser Seite, indem Sie der Verwendung von Cookies zustimmen.",
        "dismiss": "Ablehnen",
        "deny": "Ablehnen",
        "allow": "Cookies erlauben",
        "link": "Mehr erfahren"
    },
    onInitialise: function (status) {
        var type = this.options.type;
        var didConsent = this.hasConsented();
        if (type == 'opt-in' && didConsent) {
            // enable cookies
            setDoNotTrack();
        }
        if (type == 'opt-out' && !didConsent) {
            // disable cookies
        }
    },
    onStatusChange: function (status, chosenBefore) {
        var type = this.options.type;
        var didConsent = this.hasConsented();
        if (type == 'opt-in' && didConsent) {
            // enable cookies
            setDoNotTrack();
        }
        if (type == 'opt-out' && !didConsent) {
            // disable cookies
        }
    },
    onRevokeChoice: function () {
        var type = this.options.type;
        if (type == 'opt-in') {
            // disable cookies
        }
        if (type == 'opt-out') {
            // enable cookies
            setDoNotTrack();
        }
    }
});