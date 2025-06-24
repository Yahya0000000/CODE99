export default function Alert({ message, type }: { message: string, type: "success" | "error" }) {
  return (
    <div className={`p-3 rounded mb-4 ${type === "success" ? "bg-green-100 text-green-700" : "bg-red-100 text-red-700"}`}>
      {message}
    </div>
  );
}