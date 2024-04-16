import React from 'react';

export const handleTabKeyDown = (
  // This function is called when the tab key is pressed down
  // It adds indentation to the refferenced text area
  event: React.KeyboardEvent<HTMLTextAreaElement>,
  textareaRef: React.RefObject<HTMLTextAreaElement>
) => {
  event.preventDefault();
  const { selectionStart, selectionEnd, value } = textareaRef.current ?? {
    selectionStart: 0,
    selectionEnd: 0,
    value: '',
  };
  const newValue =
    value.substring(0, selectionStart) + '\t' + value.substring(selectionEnd);
  if (textareaRef.current) {
    textareaRef.current.value = newValue;
    textareaRef.current.selectionStart = textareaRef.current.selectionEnd =
      selectionStart + 1;
  }
};

export const handleNavigationKeyDown = (
  event: React.KeyboardEvent<HTMLTextAreaElement>
) => {
  event.preventDefault();
  return;
};

const handleKeyDown = (
  event: React.KeyboardEvent<HTMLTextAreaElement>,
  textareaRef: React.RefObject<HTMLTextAreaElement>
): void => {
  switch (event.key) {
    case 'Tab':
      // Use tab as indentation
      handleTabKeyDown(event, textareaRef);
      break;

    case 'Backspace':
    case 'ArrowLeft':
    case 'ArrowRight':
    case 'ArrowUp':
    case 'ArrowDown':
      // Prevent the specified keys from their default behavior
      event.preventDefault();
      break;
    default:
      // Handle other key presses if needed
      break;
  }
};

export default handleKeyDown;
