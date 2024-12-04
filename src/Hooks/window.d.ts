// src/types/window.d.ts
interface Window {
    SpeechRecognition: SpeechRecognitionConstructor | undefined;
    webkitSpeechRecognition: SpeechRecognitionConstructor | undefined;
  }
  
  interface SpeechRecognitionConstructor {
    new (): SpeechRecognition;
  }
  
  declare var SpeechRecognition: SpeechRecognitionConstructor | undefined;
  declare var webkitSpeechRecognition: SpeechRecognitionConstructor | undefined;
  