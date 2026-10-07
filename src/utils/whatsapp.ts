export function sendToWhatsApp(data: { name: string, phone: string, email?: string, property?: string, source?: string, date?: string, time?: string }) {
  const adminPhone = "916360270209"; // Removed '+' and '-' from +91-6360270209
  
  let message = `*New Enquiry from Website*\n\n`;
  message += `*Name:* ${data.name}\n`;
  message += `*Phone:* ${data.phone}\n`;
  if (data.email) message += `*Email:* ${data.email}\n`;
  if (data.property) message += `*Property:* ${data.property}\n`;
  if (data.source) message += `*Source:* ${data.source}\n`;
  if (data.date) message += `*Preferred Date:* ${data.date}\n`;
  if (data.time) message += `*Preferred Time:* ${data.time}\n`;
  
  const encodedMessage = encodeURIComponent(message);
  const whatsappUrl = `https://wa.me/${adminPhone}?text=${encodedMessage}`;
  
  window.open(whatsappUrl, '_blank');
}
