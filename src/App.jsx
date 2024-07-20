import Title from "../components/Title";
// import Header from "../components/header";

function App() {
  return (
    <>
      <div className="mt-10 mb-10">
        <header className="">
          <div>
            {/* <Header /> */}
            <div className="container mx-auto">
              <h1 className="text-center font-semibold font-title text-3xl leading-9">
                Jorge Oré
              </h1>
              <div className="flex justify-center gap-2">
                <address className="font-body leading-tight">
                  jore24@autonoma.edu.pe
                </address>
                <span className="font-body leading-tight">•</span>
                <span className="font-body leading-tight">(+51) 917251229</span>
              </div>
            </div>
          </div>
        </header>

        <main className="container mx-auto p-5">
          <section className="pb-5">
            <h3 className="font-semibold mt-2 text-xl font-body">Perfil</h3>
            <p className="font-body mb-2">
              Soy un estudiante de Ingeniería de Sistemas, con conocimientos en
              el desarrollo de software, con experiencia en el desarrollo de
              aplicaciones web y móviles, con capacidad de trabajo en equipo y
              bajo presión, con facilidad de aprendizaje y adaptación a nuevos
              entornos.
            </p>
          </section>
          <section className="pb-5">
            <Title level={2} title="Educación" />
            {/* <h1 className="text-center text-3xl font-bold pb-3 border-b-4 border-black font-title ">
              {" "}
              {"Educación"}
            </h1> */}
            <h3 className="font-semibold mt-2 text-xl font-body">
              Universidad, Autónoma del Perú
            </h3>
            <div className="flex justify-between font-body text-base">
              <p>
                Ingeniería de Sistemas, Desarrollador de Software
                <br />
                Tercio Superior, Octavo Ciclo (Culminado)
              </p>
              <p className="font-body font-semibold">Abril 2020 - Actualidad</p>
            </div>
            <p className="leading-7 font-body">Inglés Básico II</p>

            {/* <ul className="list-disc pl-6">
              <li className="leading-7 font-body">Class Marshall Award</li>
              <li className="leading-7 font-body">Class Marshall Award</li>
              <li className="leading-7 font-body">Class Marshall Award</li>
              <li className="leading-7 font-body">Class Marshall Award</li>
            </ul> */}
          </section>

          <section className="pb-8 -mt-2">
            <Title level={2} title="Experiencia en Proyectos" />
            <div className="flex justify-between">
              <h3 className="font-semibold mt-2 text-xl font-body ">
                Excel Digital - Empresa de Marketing Internacional
              </h3>
              <h3 className="font-semibold mt-2 text-lg font-body ">
                Agosto - 2023
              </h3>
            </div>

            {/* Desarrollo Frontend */}
            <div className="font-body leading-7">
              <p className="text-xl italic text-gray-500">
                Desarrollo Frontend y Backend
              </p>
              <ul className="list-disc pl-6">
                <li className="leading-7 font-body">
                  Desarrollé e implementé una arquitectura de sockets para la
                  comunicación en tiempo real vía chat en el frontend y backend,
                  mejorando la interactividad y la experiencia del usuario.
                </li>
                <li className="leading-7 font-body">
                  Automatizé la traducción en tiempo real utilizando un servicio
                  de traducción de AWS.
                </li>
                <li className="leading-7 font-body">
                  Utilicé PostgreSQL para la gestión de datos y MUI para la
                  interfaz de usuario.
                </li>
                <li className="leading-7 font-body">
                  Dirigí un equipo de 5 personas, aplicando metodologías SCRUM y
                  PMBOK para la gestión eficiente del proyecto.
                </li>
                <li className="leading-7 font-body">
                  Implementé medidas de seguridad robustas, incluyendo la
                  encriptación de mensajes, autenticación con JWT, hash de
                  contraseñas, protección contra ataques DDoS y gestión de
                  sesiones.
                </li>
              </ul>
            </div>

            <br />

            <div className="flex justify-between">
              <h3 className="font-semibold mt-2 text-xl font-body ">
                Consultorio Hernández
              </h3>
              <h3 className="font-semibold mt-2 text-lg font-body ">
                Agosto - 2022
              </h3>
            </div>

            <div className="font-body leading-7">
              <p className="text-xl italic text-gray-500">
                Desarrollo Frontend y Backend
              </p>
              <ul className="list-disc pl-6">
                <li className="leading-7 font-body">
                  Configuré un servidor de envío de correos en el backend para
                  notificar a los pacientes con resultados registrados,
                  incluyendo todos los metadatos específicos.
                </li>
                <li className="leading-7 font-body">
                  Implementé JWT y middleware, utilizando hashing, para asegurar
                  la autenticación y autorización en el sistema.
                </li>
                <li className="leading-7 font-body">
                  Desarrollé un sistema de chat en tiempo real para mejorar la
                  comunicación entre pacientes y el personal del consultorio.
                </li>
                <li className="leading-7 font-body">
                  Creé el API CRUD completo en el backend para gestionar datos
                  de pacientes y resultados, utilizando MongoDB como base de
                  datos.
                </li>
                <li className="leading-7 font-body">
                  Utilizamos Axios en el frontend para realizar el consumo
                  eficiente del backend.
                </li>
              </ul>
            </div>

            <br />
            <br />

            <div className="flex justify-between">
              <h3 className="font-semibold mt-2 text-xl font-body ">
                App Móvil para la gestión de asistencia de usuarios con código
                QR
              </h3>
              <h3 className="font-semibold mt-2 text-lg font-body ">
                Abril - 2023
              </h3>
            </div>

            <div className="font-body leading-7">
              <p className="text-xl italic text-gray-500">Desarrollo Móvil</p>
              <ul className="list-disc pl-6">
                <li className="leading-7 font-body">
                  Diseñé las interfaces utilizando lenguaje XML.
                </li>
                <li className="leading-7 font-body">
                  Diseñé la base de datos relacional SQLite utilizando Figma.
                </li>
                <li className="leading-7 font-body">
                  Implementé un modelo en Kotlin utilizando Android Studio
                  basado en la estructura de la base de datos.
                </li>
                <li className="leading-7 font-body">
                  Desarrollé la funcionalidad de escaneo de QR y registro de
                  asistencia en la base de datos, capturando metadatos
                  específicos.
                </li>
                <li className="leading-7 font-body">
                  Implementé un CRUD completo, permitiendo ver asistencias,
                  boletas de pago, insertar y eliminar usuarios.
                </li>
              </ul>
            </div>
          </section>

          {/* <section className="pb-8">
            <Title level={2} title="Habilidades técnicas" />
            <div className="mt-4 grid grid-cols-3 gap-8">
              <div>
                <h4 className="font-semibold text-md font-body">
                  Base de datos
                </h4>
                <ul className="list-disc pl-6">
                  <li className="leading-7 font-body">MySQL</li>
                  <li className="leading-7 font-body">MongoDB</li>
                  <li className="leading-7 font-body">GraphQL</li>
                  <li className="leading-7 font-body">SQL-Server</li>
                  <li className="leading-7 font-body">PostgreSQL</li>
                  <li className="leading-7 font-body">SQLite</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-md font-body">
                  Lenguajes de Programación
                </h4>
                <ul className="list-disc pl-6">
                  <li className="leading-7 font-body">
                    JavaScript (React, Node.js)
                  </li>
                  <li className="leading-7 font-body">Python (Flask)</li>
                  <li className="leading-7 font-body">Java / Kotlin</li>
                  <li className="leading-7 font-body">C++</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-md font-body">
                  Herramientas
                </h4>
                <ul className="list-disc pl-6">
                  <li className="leading-7 font-body">Visual Code</li>
                  <li className="leading-7 font-body">Postman</li>
                  <li className="leading-7 font-body">Figma</li>
                  <li className="leading-7 font-body">Bizagi</li>
                  <li className="leading-7 font-body">Trello</li>
                  <li className="leading-7 font-body">Jira</li>
                  <li className="leading-7 font-body">Github</li>
                  <li className="leading-7 font-body">Power BI</li>
             
                </ul>
              </div>
            </div>
          </section> */}

          <section className="pb-8">
            <Title level={2} title="Habilidades técnicas" />
            <div className="mt-4 flex flex-cols justify-evenly gap-8">
              <div>
                <h4 className="font-semibold text-md font-body">
                  Base de datos
                </h4>
                <ul className="list-disc pl-6">
                  <li className="leading-7 font-body">MySQL</li>
                  <li className="leading-7 font-body">MongoDB</li>
                  <li className="leading-7 font-body">GraphQL</li>
                  <li className="leading-7 font-body">SQL-Server</li>
                  <li className="leading-7 font-body">PostgreSQL</li>
                  <li className="leading-7 font-body">SQLite</li>

                  {/* Agrega más programas de software según sea necesario */}
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-md font-body">
                  Lenguajes de Programación
                </h4>
                <ul className="list-disc pl-6">
                  <li className="leading-7 font-body">
                    JavaScript (React, Node.js)
                  </li>
                  <li className="leading-7 font-body">Python (Flask)</li>
                  <li className="leading-7 font-body">Java / Kotlin</li>
                  <li className="leading-7 font-body">C++</li>
                  {/* Agrega más lenguajes de programación según sea necesario */}
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-md font-body">
                  Herramientas
                </h4>
                <ul className="list-disc pl-6">
                  <li className="leading-7 font-body">Visual Code</li>
                  <li className="leading-7 font-body">Postman</li>
                  <li className="leading-7 font-body">Figma</li>
                  <li className="leading-7 font-body">Bizagi</li>
                  <li className="leading-7 font-body">Trello</li>
                  <li className="leading-7 font-body">Jira</li>
                  <li className="leading-7 font-body">Github</li>
                  <li className="leading-7 font-body">Power BI</li>
                  {/* Agrega más herramientas según sea necesario */}
                </ul>
              </div>
            </div>
          </section>

          <section className="pb-8 -mt-2">
            <Title level={2} title="Certificaciones y Logros" />

            {/* Logros */}
            <div className="mt-4">
              <div className="font-body leading-7">
                <p className="text-xl italic text-gray-500">Logros</p>
              </div>
              <ul className="list-disc pl-6">
                <li className="leading-7 font-body">
                  Participación en el Congreso Internacional de Ingeniería y
                  Arquitectura (01, 02, 03, 05, 06, 08 de junio de 2023).
                </li>
                <li className="leading-7 font-body">
                  Obtención de la Certificación de Habilidades Digitales (3 de
                  julio de 2023).
                </li>
              </ul>
            </div>

            {/* Certificaciones */}
            <div className="mt-6">
              <div className="font-body leading-7">
                <p className="text-xl italic text-gray-500">Certificaciones</p>
              </div>
              <ul className="list-disc pl-6">
                <li className="leading-7 font-body">
                  Certificación Progresiva: Java Programming (16 de agosto de
                  2023).
                </li>
                <li className="leading-7 font-body">
                  Certificación Progresiva: Database Design and Programming with
                  SQL (17 de agosto de 2023).
                </li>
                <li className="leading-7 font-body">
                  Certificación Microsoft® Excel Profesional (25 de noviembre de
                  2023).
                </li>
                {/* Agrega más certificaciones según sea necesario */}
              </ul>
            </div>
          </section>
        </main>
      </div>
    </>
  );
}

export default App;
