/** "+6287747685056" -> "+62 877-4768-5056" (falls back to the raw value for other formats) */
export const formatPhone = (phone: string) => {
  const match = phone.match(/^\+62(\d{3})(\d{4})(\d+)$/);
  return match ? `+62 ${match[1]}-${match[2]}-${match[3]}` : phone;
};
