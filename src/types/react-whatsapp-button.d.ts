declare module 'react-whatsapp-button' {
  interface WhatsAppButtonProps {
    phoneNumber: string;
    text?: string;
    label?: string;
    backgroundColor?: string;
  }
  
  const WhatsAppButton: React.FC<WhatsAppButtonProps>;
  export default WhatsAppButton;
}
