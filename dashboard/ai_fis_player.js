
document.addEventListener('DOMContentLoaded', function() {
    let currentMood = "neutral";

    const playButton = document.getElementById('playNoteButton');
    const positiveButton = document.getElementById('positiveFlowButton');
    const negativeButton = document.getElementById('negativeFlowButton');
    const anomalyButton = document.getElementById('anomalyButton');
    const eventLog = document.getElementById('eventLog');

    const polySynth = new Tone.PolySynth().toDestination();
    let previousRates = {
      EUR: null,
      GBP: null,
      KES: null,
      JPY: null
    };

    function logEvent(message) {
        const p = document.createElement('p');
        p.textContent = message;
        eventLog.prepend(p);
    }

    function flashBackground(color) {
        document.body.style.backgroundColor = color;
        setTimeout(() => {
          document.body.style.backgroundColor = "white";
        }, 500);
    }

    playButton.addEventListener('click', async () => {
        await Tone.start();
        console.log('Audio Context started');
        polySynth.triggerAttackRelease(["C4", "E4", "G4"], "0.5");
        startMultistreamLiveData();
    });

    positiveButton.addEventListener('click', async () => {
        await Tone.start();
        polySynth.triggerAttackRelease(["C4", "E4", "G4"], "0.5");
        flashBackground("lightgreen");
        logEvent("🎶 [Manual] Positive financial event (C Major) triggered!");
    });

    negativeButton.addEventListener('click', async () => {
        await Tone.start();
        polySynth.triggerAttackRelease(["A3", "C4", "E4"], "0.5");
        flashBackground("lightcoral");
        logEvent("🎶 [Manual] Negative financial event (A Minor) triggered!");
    });

    anomalyButton.addEventListener('click', async () => {
        await Tone.start();
        polySynth.triggerAttackRelease(["G#3", "B3", "D4"], "0.5");
        flashBackground("gold");
        logEvent("🎶 [Manual] Anomaly detected (Diminished)!");
    });

    function startMultistreamLiveData() {
        setInterval(async () => {
            try {
                const response = await fetch('https://v6.exchangerate-api.com/v6/73a8fc3eccca7b519fa9fdd5/latest/USD');
                const data = await response.json();
                const newRates = {
                    EUR: data.conversion_rates.EUR,
                    GBP: data.conversion_rates.GBP,
                    KES: data.conversion_rates.KES,
                    JPY: data.conversion_rates.JPY
                };
                detectHarmony(newRates);
                for (const currency in newRates) {
                    previousRates[currency] = newRates[currency];
                }
            } catch (error) {
                console.error('Error fetching rates:', error);
            }
        }, 60000);
    }

    function classifyMarketMood(trendMap) {
        const values = Object.values(trendMap);
        const up = values.filter(v => v === "up").length;
        const down = values.filter(v => v === "down").length;
        const unchanged = values.filter(v => v === "unchanged").length;

        if (up === 4) return "optimistic";
        if (down === 4) return "downturn";
        if (up > 0 && down > 0) return "volatile";
        if (unchanged === 4) return "neutral";
        return "mixed";
    }

    function generateSoundtrack(mood) {
        const synth = new Tone.PolySynth().toDestination();
        const now = Tone.now();
        switch(mood) {
            case "optimistic":
                synth.triggerAttackRelease(["C4", "E4", "G4", "B4"], "4n", now);
                synth.triggerAttackRelease(["E4", "G4", "C5"], "2n", now + 1);
                break;
            case "downturn":
                synth.triggerAttackRelease(["A3", "C4", "E4", "G4"], "4n", now);
                synth.triggerAttackRelease(["C4", "D#4", "F4"], "2n", now + 1);
                break;
            case "volatile":
                synth.triggerAttackRelease(["F#4", "A4", "C5", "E5"], "8n", now);
                synth.triggerAttackRelease(["D4", "G4", "B4"], "2n", now + 1);
                break;
            case "neutral":
                synth.triggerAttackRelease(["E4", "G4", "B4", "D5"], "4n", now);
                break;
            default:
                synth.triggerAttackRelease(["G3", "B3", "D4"], "4n", now);
        }
    }

    function detectHarmony(newRates) {
        const trend = {};
        let up = 0, down = 0, unchanged = 0;
        for (const currency in newRates) {
            if (previousRates[currency] == null) {
                trend[currency] = "neutral";
            } else if (newRates[currency] > previousRates[currency]) {
                trend[currency] = "up"; up++;
            } else if (newRates[currency] < previousRates[currency]) {
                trend[currency] = "down"; down++;
            } else {
                trend[currency] = "unchanged"; unchanged++;
            }
        }
        currentMood = classifyMarketMood(trend);
        generateSoundtrack(currentMood);
        logEvent(`🎼 Market mood: ${currentMood} → Soundtrack played`);
    }

    function loopPlayback() {
        const synth = new Tone.PolySynth().toDestination();
        let theme = [];
        switch (currentMood) {
            case "optimistic":
                theme = ["C4", "E4", "G4", "B4"]; break;
            case "downturn":
                theme = ["A3", "C4", "E4", "G4"]; break;
            case "volatile":
                theme = ["D4", "G4", "A4", "C5"]; break;
            case "neutral":
                theme = ["E4", "G4", "B4", "D5"]; break;
            default:
                theme = ["G3", "B3", "D4"];
        }
        setInterval(() => {
            synth.triggerAttackRelease(theme, "2n", Tone.now());
        }, 30000);
    }
});
