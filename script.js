// Carbon Footprint Data (You can also fetch this from an API or JSON file)
const carbonFootprintData = {
    "apple": { "carbon": "0.5 kg CO₂", "water": "70 liters", "alternative": "Buy local" },
    "banana": { "carbon": "0.9 kg CO₂", "water": "100 liters", "alternative": "Buy organic" },
    "bottle": { "carbon": "1.2 kg CO₂", "water": "2 liters", "alternative": "Use reusable bottles" },
};

// Get DOM elements
const webcamElement = document.getElementById("webcam");
const detectedObjectElement = document.getElementById("detectedObject");
const carbonDataElement = document.getElementById("carbonData");
const waterDataElement = document.getElementById("waterData");
const alternativeDataElement = document.getElementById("alternativeData");

// Initialize Webcam
// Initialize Webcam with Rear Camera
async function setupWebcam() {
    return new Promise((resolve, reject) => {
        navigator.mediaDevices
            .getUserMedia({
                video: { facingMode: { exact: "environment" } }, // Use rear camera
                audio: false,
            })
            .then((stream) => {
                webcamElement.srcObject = stream;
                webcamElement.onloadedmetadata = () => resolve(webcamElement);
            })
            .catch((err) => {
                console.error("Error accessing the rear camera:", err);
                alert(
                    "Unable to access the rear camera. Please ensure your device and browser support this feature."
                );
                reject(err);
            });
    });
}


// Load ML Model and Start Detection
async function loadModelAndDetect() {
    const model = await cocoSsd.load();
    console.log("COCO SSD Model Loaded!");

    const webcam = await setupWebcam();
    webcam.play();

    // Start object detection
    detectFrame(webcam, model);
}

// Detect Frame
async function detectFrame(video, model) {
    model.detect(video).then((predictions) => {
        if (predictions.length > 0) {
            // Get the first prediction with a high confidence score
            const bestPrediction = predictions.find((p) => p.score > 0.6);
            if (bestPrediction) {
                const detectedObject = bestPrediction.class.toLowerCase();
                displayCarbonFootprint(detectedObject);
            }
        }
        requestAnimationFrame(() => detectFrame(video, model));
    });
}

// Display Carbon Footprint Data
function displayCarbonFootprint(object) {
    if (carbonFootprintData[object]) {
        detectedObjectElement.textContent = object;
        carbonDataElement.textContent = carbonFootprintData[object].carbon;
        waterDataElement.textContent = carbonFootprintData[object].water;
        alternativeDataElement.textContent = carbonFootprintData[object].alternative;
    } else {
        detectedObjectElement.textContent = object;
        carbonDataElement.textContent = "Data not available";
        waterDataElement.textContent = "Data not available";
        alternativeDataElement.textContent = "Data not available";
    }
}

// Start the application
loadModelAndDetect();
