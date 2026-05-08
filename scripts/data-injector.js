/**
 * Data Injector Logic
 * Populates Exhibit Detail page based on URL parameters.
 */

const exhibitData = {
    telegraph: {
        title: "The Telegraph",
        year: "1837",
        accent: "#ff5f1f",
        tagline: "The Victorian Internet",
        description: "The first time information traveled faster than a horse. A pulse of electricity changed the world.",
        specs: ["Baud Rate: 0.05", "Mode: Morse Code", "Medium: Copper Wire"]
    },
    radio: {
        title: "Wireless Radio",
        year: "1895",
        accent: "#00d4ff",
        tagline: "Voices in the Air",
        description: "Guglielmo Marconi proved that the air itself could carry thoughts across oceans without a single wire.",
        specs: ["Freq: 144MHz", "Mode: AM/FM", "Medium: Ether Waves"]
    },
    macintosh: {
        title: "The Macintosh",
        year: "1984",
        accent: "#39ff14",
        tagline: "Computing for the Rest of Us",
        description: "The shift from code-entry to visual interaction. The birth of the modern digital interface.",
        specs: ["RAM: 128KB", "OS: System 1", "Input: Mouse/GUI"]
    }
};

function injectContent() {
    const params = new URLSearchParams(window.location.search);
    const id = params.get('item');
    const data = exhibitData[id];

    if (!data) return;

    // Update Text
    document.title = `${data.title} | Museum of Echoes`;
    document.getElementById('exhibit-title').textContent = data.title;
    document.getElementById('exhibit-desc').textContent = data.description;
    
    // Update Colors
    document.documentElement.style.setProperty('--accent', data.accent);
    
    // Build Specs List
    const specContainer = document.getElementById('spec-list');
    if (specContainer) {
        specContainer.innerHTML = data.specs.map(s => `<li>${s}</li>`).join('');
    }
}

// Run on load
window.onload = injectContent;
