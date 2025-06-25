apps/
  web/            # واجهة المستخدم (Next.js/Electron)
    pages/
      auth/         # تسجيل الدخول
      ide/          # الواجهة الرئيسية - المشاريع - التبويبات
      projects/     # تفاصيل المشاريع (كود/تصميم/Preview)
      components/   # مكونات الواجهة
      prompts/      # مربعات البرومبت المختلفة
      settings/
      ...
  ai/             # خدمات الذكاء الاصطناعي (backend/service)
  core/           # مكتبات منطق العمل المشترك (core logic, utils)
  desktop/        # تطبيق سطح المكتب (Electron)
  ...
packages/
  shared-ui/      # مكونات واجهة مشتركة
  codegen/        # توليد الكود
  3d-engine/      # إدارة وتوليد الأصول ثلاثية الأبعاد
  ...
docs/
  VISION.md
  STRUCTURE.md
  MODULES.md      # وصف كل وحدة (أهدافها، وظائفها، API، ...)