import type { Metadata } from "next";
import { CONTACTO } from "@/lib/data";

export const metadata: Metadata = {
  title: "Política de privacidad",
  description: "Cómo cuidamos los datos que nos dejás en el sitio de Melano.",
};

const ACTUALIZADA = "6 de octubre de 2026";

export default function PrivacidadPage() {
  const mail = <a href={`mailto:${CONTACTO.email}`} className="text-cafe underline underline-offset-4 hover:text-naranja">{CONTACTO.email}</a>;
  return (
    <section className="mx-auto flex max-w-[760px] flex-col gap-10 px-6 py-[clamp(56px,7vw,96px)]">
      <div className="flex flex-col gap-5">
        <span className="eyebrow text-oliva">Legales</span>
        <h1 className="m-0 font-serif text-[clamp(44px,5.5vw,76px)] leading-[.98] font-normal tracking-[-.02em] text-balance">Política de privacidad</h1>
        <p className="m-0 text-[14px] leading-[1.5] font-light text-cafe-suave">Última actualización: {ACTUALIZADA}</p>
      </div>

      <div className="flex flex-col gap-9 text-[16px] leading-[1.65] font-light [&_h2]:m-0 [&_h2]:mb-3 [&_h2]:font-serif [&_h2]:text-[28px] [&_h2]:leading-[1.15] [&_h2]:font-normal [&_li]:mb-1 [&_p]:m-0 [&_p+p]:mt-3 [&_ul]:m-0 [&_ul]:mt-3 [&_ul]:pl-5 [&_ul]:list-disc">
        <div>
          <h2>Quiénes somos</h2>
          <p>
            Este sitio es de Melano Helados y Cafetería, con domicilio en Carlos Pellegrini 345, Las Varillas, Córdoba, Argentina.
            Somos responsables de los datos personales que nos dejás acá, y los tratamos según la Ley N.º 25.326 de Protección de los Datos Personales.
          </p>
        </div>

        <div>
          <h2>Qué datos juntamos</h2>
          <p>Solo los que vos nos das cuando completás un formulario:</p>
          <ul>
            <li><strong className="font-medium">Contacto:</strong> nombre, email, el motivo y tu mensaje.</li>
            <li><strong className="font-medium">Franquicias:</strong> nombre, email, teléfono, ciudad, si tenés local, el capital estimado y tu mensaje.</li>
          </ul>
          <p>Completar los formularios es voluntario. Sin los datos obligatorios no podemos responderte. Al marcar la casilla de aceptación antes de enviar, nos das tu consentimiento para usar tus datos como se explica en esta página.</p>
        </div>

        <div>
          <h2>Para qué los usamos</h2>
          <p>
            Para responder tu consulta y, en el caso de franquicias, para evaluar tu propuesta y seguir la conversación con vos.
            No los usamos para otra cosa, no te mandamos publicidad y no los vendemos ni los cedemos a nadie.
          </p>
        </div>

        <div>
          <h2>Dónde se guardan</h2>
          <p>
            Los formularios se envían a través de Web3Forms, un servicio que nos los reenvía por email a {mail}.
            Web3Forms guarda una copia de cada envío durante un año y después la borra automáticamente.
            Tanto Web3Forms como el alojamiento del sitio pueden tener sus servidores fuera de Argentina, y solo usan tus datos para hacernos llegar tu mensaje.
          </p>
          <p>
            En nuestra casilla de correo guardamos tus datos mientras sigamos en contacto y después los borramos.
          </p>
        </div>

        <div>
          <h2>Cookies</h2>
          <p>
            No usamos cookies propias ni herramientas de seguimiento o publicidad. El mapa de sucursales es de Google Maps
            y, como cualquier contenido de Google, puede usar sus propias cookies cuando lo cargás; eso se rige por la política de privacidad de Google.
          </p>
        </div>

        <div>
          <h2>Tus derechos</h2>
          <p>
            Podés pedirnos ver qué datos tuyos tenemos, corregirlos, actualizarlos o borrarlos, escribiéndonos a {mail}.
            Respondemos los pedidos de acceso dentro de los 10 días corridos y los de corrección o borrado dentro de los 5 días hábiles.
          </p>
          <p>
            El titular de los datos personales tiene la facultad de ejercer el derecho de acceso a los mismos en forma gratuita a intervalos no inferiores a seis meses,
            salvo que se acredite un interés legítimo al efecto conforme lo establecido en el artículo 14, inciso 3 de la Ley N.º 25.326.
          </p>
          <p>
            La Agencia de Acceso a la Información Pública, en su carácter de Órgano de Control de la Ley N.º 25.326, tiene la atribución de atender
            las denuncias y reclamos que interpongan quienes resulten afectados en sus derechos por incumplimiento de las normas vigentes en materia de protección de datos personales.
          </p>
        </div>

        <div>
          <h2>Cambios</h2>
          <p>Si cambiamos esta política, vas a ver la nueva versión en esta misma página con la fecha actualizada.</p>
        </div>
      </div>
    </section>
  );
}
