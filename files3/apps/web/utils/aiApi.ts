export async function sendPromptToAI(prompt: string): Promise<string> {
  await new Promise(res => setTimeout(res, 900));
  // محاكاة: إذا كان البرومبت متعلق بكود أو تصميم
  if (/دالة|function|كود|code|مصفوفة|sum|جمع|console/.test(prompt)) {
    return `// تم توليد كود تلقائياً:\nfunction sum(arr) {\n  return arr.reduce((a,b)=>a+b,0);\n}\nconsole.log(sum([1,2,3]));`;
  }
  if (/تصميم|زر|لون|صفحة|landing|dark|داكن|واجهة/.test(prompt)) {
    return `// تم توليد وصف تصميم تلقائياً:\nصفحة هبوط بلون أزرق داكن مع زر تسجيل دخول أبيض كبير في المنتصف.`;
  }
  return `رد افتراضي من الذكاء الاصطناعي بناءً على: "${prompt}"`;
}