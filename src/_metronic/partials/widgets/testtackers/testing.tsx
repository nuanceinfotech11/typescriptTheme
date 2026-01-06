import React, { useEffect, useState } from 'react';
import * as vision from '@mediapipe/tasks-vision';

const FaceDetectionComponent: React.FC = () => {
  const [faceDetector, setFaceDetector] = useState<any>(null);

  useEffect(() => {
    const initializeFaceDetector = async () => {
      try {
        const wasmRoot = 'https://cdn.jsdelivr.net/npm/@mediapipe/tasks-vision@latest/wasm';
        const visionModule = await vision.FilesetResolver.forVisionTasks(wasmRoot);

        const modelOptions = {
          baseOptions: {
            modelAssetPath: 'path/to/model' ,
          },
        //   runningMode: vision.RunningMode.LIGHT, // Replace with your actual running mode
        };

        const detector = await vision.FaceDetector.createFromOptions(visionModule, modelOptions);
        console.log(detector,"jhkujukj")
        setFaceDetector(detector);
      } catch (error) {
        console.error('Error initializing face detector:', error);
      }
    };

    initializeFaceDetector();
  }, []); // Run once on component mount

  const handleImageLoad = () => {
    const imageElement = document.getElementById('image') as HTMLImageElement;

    if (faceDetector && imageElement) {
      const faceDetectorResult = faceDetector.detect(imageElement);
      console.log('FaceDetectionResult:', faceDetectorResult);
    }
  };

  return (
    <div>
      <img
        id="image"
        src="path/to/your/image.jpg" // Replace with the path to your image
        alt="Face Detection"
        onLoad={handleImageLoad}
      />
    </div>
  );
};

export default FaceDetectionComponent;
