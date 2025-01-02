# Carbon Footprint Tracker 🌍

The **Carbon Footprint Tracker** is a web-based application that uses machine learning to detect objects through a webcam and provides information about their carbon footprint, water usage, and alternative eco-friendly suggestions. This project leverages the COCO-SSD model for real-time object detection, focusing on raising sustainability awareness.

---

## Features ✨

- **Real-Time Object Detection**: Uses the [COCO-SSD](https://github.com/tensorflow/tfjs-models/tree/master/coco-ssd) machine learning model to detect objects via the rear camera.
- **Environmental Insights**:
  - Carbon footprint (in kg CO₂).
  - Water usage (in liters).
  - Alternative suggestions for eco-friendliness.
- **Dynamic Data Display**: Provides object-specific sustainability data from a predefined dataset.
- **Fallback for Unsupported Objects**: Alerts users when sustainability data for a detected object is unavailable.

---

## How It Works 🔍

1. **Webcam Initialization**: 
   - Automatically uses the rear camera of your device for object detection.
   - Alerts the user if the camera cannot be accessed.
2. **Object Detection**: 
   - Detects objects in real-time using the COCO-SSD model.
   - Filters results to ensure only high-confidence predictions are displayed.
3. **Data Matching**: 
   - Matches detected objects with predefined carbon footprint data.
   - Displays relevant sustainability information dynamically.

---

## Technologies Used 🛠️

- **HTML**: For structuring the interface.
- **CSS**: (Optional) To style the interface.
- **JavaScript**: 
  - **TensorFlow.js**: For loading the COCO-SSD object detection model.
  - **MediaDevices API**: For accessing the webcam.
  - Dynamic DOM manipulation to display data.

---

## Installation and Setup 🚀

1. **Clone the repository**:
   ```bash
   git clone https://github.com/VashuJain2024/carbon_footprint_tracker.git
   cd carbon_footprint_tracker

---

## Screenshots
![Screenshot 2025-01-02 205350](https://github.com/user-attachments/assets/f3a8d7e3-f4d4-4f72-b182-6162307590a5)

