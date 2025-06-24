-- تفعيل RLS على جدول الملفات
ALTER TABLE files ENABLE ROW LEVEL SECURITY;

-- سياسة: فقط صاحب الملف (أو الأدمن) يمكنه القراءة/التعديل/الحذف
CREATE POLICY "Users can manage own files"
ON files
FOR ALL
USING (
  auth.uid() = user_id
  OR EXISTS (
    SELECT 1 FROM profiles WHERE profiles.id = auth.uid() AND profiles.role = 'admin'
  )
);