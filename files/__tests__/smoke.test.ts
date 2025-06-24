import { render } from "@testing-library/react";
import Home from "../app/page";

test("صفحة الرئيسية تعرض العنوان الأساسي", () => {
  const { getByText } = render(<Home />);
  expect(getByText("منصتك الذكية للملفات والمشاريع")).toBeInTheDocument();
});