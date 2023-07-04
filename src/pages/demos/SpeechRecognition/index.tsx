import { ActionIcon } from '@lobehub/ui';
import { Mic } from 'lucide-react';
import { useCallback, useEffect, useState } from 'react';

const ChatBot = () => {
  const [message, setMessage] = useState<string>('123');
  const [isRecording, setIsRecording] = useState<boolean>(false);

  // eslint-disable-next-line no-undef
  const [speechRecognition, setSpeechRecognition] = useState<SpeechRecognition>();

  // eslint-disable-next-line no-undef
  const handleRecognitionResult = useCallback((event: SpeechRecognitionEvent) => {
    const text = event.results[0][0].transcript;
    setMessage(text);

    if (event.results[0].isFinal) {
      setMessage(text);
      // onChatProcessStart(text);
    }
  }, []);

  const handleRecognitionEnd = useCallback(() => {
    setIsRecording(false);
  }, []);

  useEffect(() => {
    const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
    if (!SpeechRecognition) return;

    const recognition = new SpeechRecognition();
    recognition.lang = 'zh-CN';
    recognition.interimResults = true;
    recognition.continuous = false;

    recognition.addEventListener('result', handleRecognitionResult);
    recognition.addEventListener('end', handleRecognitionEnd);

    setSpeechRecognition(recognition);
  }, [handleRecognitionResult, handleRecognitionEnd]);

  const handleRecord = () => {
    if (isRecording) {
      speechRecognition?.abort();
      setIsRecording(false);

      return;
    }

    speechRecognition?.start();
    setIsRecording(true);
  };
  return (
    <div>
      <div>{message}</div>
      <ActionIcon icon={Mic} loading={isRecording} onClick={handleRecord} />
    </div>
  );
};

export default ChatBot;
