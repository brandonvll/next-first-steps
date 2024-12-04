import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Tienda de productos",
  description: "Esta es la pagina de la tienda web del fondo de empleados",
};

export default function StorePage() {
  return (
    <>
      <span className="text-7xl "> Store Page </span>
    </>
  );
}
